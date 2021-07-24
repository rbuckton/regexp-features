import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const argv = await yargs(hideBin(process.argv))
    .option("watch", { type: "boolean", describe: "Whether to monitor the source directory for changes." })
    .option("verbose", { type: "boolean", alias: "v", describe: "Determines verbosity of output messages." })
    .command("* [srcDir] [outDir]", 'Builds the documentation', argv => argv
        .positional("srcDir", { type: "string", describe: "The source directory for build inputs." })
        .positional("outDir", { type: "string", describe: "The destination directory for build outputs." }))
    .version(false)
    .argv;
