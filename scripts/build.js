import chalk from "chalk";
import { watch } from "chokidar";
import * as path from "path";
import { clearScreenDown, cursorTo } from "readline";
import { fileURLToPath, URL } from "url";
import { Documentation } from "./lib/documentation.js";
import { argv } from "./lib/options.js";
import { schemasDirUrl, templatesDirUrl } from "./lib/paths.js";
import { reloadSchemas } from "./lib/schema.js";
import { reloadTemplates } from "./lib/templates.js";

/** @type {import("chokidar").FSWatcher | undefined} */
let watcher;
/** @type {NodeJS.Timeout | undefined} */
let buildDebounceTimer;
let building = false;
let buildRequested = false;

/**
 * @param {string} srcDir
 * @param {string} outDir
 */
function requestBuild(srcDir, outDir) {
    if (building) {
        buildRequested = true;
        return;
    }

    if (buildDebounceTimer) {
        clearTimeout(buildDebounceTimer);
        buildDebounceTimer = undefined;
    }
    else {
        cursorTo(process.stderr, 0, 0);
        clearScreenDown(process.stderr);
        process.stdout.write(chalk`{gray build} {magenta verbose} File change detected, starting build...\n`);
    }

    buildDebounceTimer = setTimeout(doBuild, 1000, srcDir, outDir);
}

/**
 * @param {string} srcDir
 * @param {string} outDir
 */
async function doBuild(srcDir, outDir) {
    if (building) {
        return;
    }

    buildRequested = false;
    building = true;
    if (buildDebounceTimer) {
        clearTimeout(buildDebounceTimer);
        buildDebounceTimer = undefined;
    }

    try {
        await reloadSchemas();
        await reloadTemplates();

        const docs = await Documentation.create(srcDir);
        const result = docs.check();
        let errorCount = 0;
        for (const { error, filename, message } of docs.diagnostics) {
            if (error) {
                errorCount++;
                process.stdout.write(chalk`{gray build} {red error} {cyan ${filename}}: ${message}\n`);
            }
            else {
                process.stdout.write(chalk`{gray build} {yellow warning} {cyan ${filename}}: ${message}\n`);
            }
        }

        if (!result && errorCount === 0) {
            errorCount++;
            process.stdout.write(chalk`{gray build} {red error} Build failed due to unknown error\n`);
        }

        if (errorCount === 0) {
            docs.build(srcDir, outDir);
            await docs.emit(srcDir, outDir);
        }

        if (errorCount !== 0) {
            process.stdout.write(chalk`{gray build} {red error} Build failed with ${errorCount} ${errorCount === 1 ? "error" : "errors"}.\n`);
            if (!argv.watch) process.exit(errorCount);
        }
        else {
            if (argv.watch) {
                process.stdout.write(chalk`{gray build} {magenta watch} Build completed successfully.\n`);
            }
            else {
                process.exit(0);
            }
        }
    }
    catch (e) {
        console.error(e);
        process.stdout.write(chalk`{gray build} {red error} Build failed.\n`);
        if (!argv.watch) process.exit(1);
    }
    finally {
        building = false;
        if (buildRequested) {
            buildRequested = false;
            requestBuild(srcDir, outDir);
        }
    }
}

/**
 * @param {string} srcDir
 * @param {string} outDir
 */
async function watchModeBuilder(srcDir, outDir) {
    process.stdout.write(chalk`{gray build} {magenta watch} Performing initial build...\n`);
    await doBuild(srcDir, outDir);
    process.stdout.write(chalk`{gray build} {magenta watch} Watch mode starting...\n`);

    watcher = watch([
        path.join(srcDir, "**/*.{md,yaml,yml}"),
        path.join(fileURLToPath(templatesDirUrl), "**/*.hbs"),
        path.join(fileURLToPath(schemasDirUrl), "**/*.json")
    ], { persistent: true, ignoreInitial: true });
    watcher.on("all", () => requestBuild(srcDir, outDir));
}

/**
 * @param {string} srcDir
 * @param {string} outDir
 */
async function normalBuilder(srcDir, outDir) {
    await doBuild(srcDir, outDir);
}

async function main() {
    let { srcDir, outDir } = argv;
    if (!srcDir) {
        srcDir = fileURLToPath(new URL("../src", import.meta.url));
        if (argv.verbose) {
            process.stdout.write(chalk`{gray build} {magenta verbose} 'srcDir' not provided, using '${srcDir}'.\n`);
        }
    }
    else {
        srcDir = path.resolve(srcDir);
    }

    if (!outDir) {
        outDir = fileURLToPath(new URL("../docs", import.meta.url));
        if (argv.verbose) {
            process.stdout.write(chalk`{gray build} {magenta verbose} 'outDir' not provided, using '${outDir}'.\n`);
        }
    }
    else {
        outDir = path.resolve(outDir);
    }

    const builder = argv.watch ? watchModeBuilder : normalBuilder;
    await builder(srcDir, outDir);
}

await main();