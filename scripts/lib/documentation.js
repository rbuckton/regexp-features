import chalk from "chalk";
import * as fs from "fs/promises";
import * as yaml from "js-yaml";
import * as path from "path";
import { Diagnostics } from "./diagnostics.js";
import { DocumentationBuilder } from "./documentationBuilder.js";
import { Engine } from "./engine.js";
import { EngineFeature } from "./engineFeature.js";
import { Feature } from "./feature.js";
import { Language } from "./language.js";
import { parseMarkdownOverrideFile } from "./markdown.js";
import { getSchema, getSchemaErrors } from "./schema.js";
import { applyTemplate } from "./templates.js";
import { getYamlMime } from "./utils.js";

export class Documentation {
    /** @type {Map<string, Language>} */
    #languages = new Map();
    /** @type {Map<string, Feature>} */
    #features = new Map();
    /** @type {Map<string, Engine>} */
    #engines = new Map();

    /** @type {boolean | undefined} */
    #isValid;
    /** @type {Diagnostics} */
    #diagnostics = new Diagnostics();

    /** @type {Map<string, string>} */
    #outputs = new Map();

    /** @type {readonly Language[] | undefined} */
    #orderedLanguages;
    /** @type {readonly Feature[] | undefined} */
    #orderedFeatures;
    /** @type {readonly Engine[] | undefined} */
    #orderedEngines;

    /** @returns {ReadonlyMap<string, Language>} */
    get languages() { return this.#languages; }

    /** @returns {ReadonlyMap<string, Feature>} */
    get features() { return this.#features; }

    /** @returns {ReadonlyMap<string, Engine>} */
    get engines() { return this.#engines; }

    get isValid() { return this.#isValid; }
    get diagnostics() { return this.#diagnostics.values(); }

    get orderedLanguages() {
        return this.#orderedLanguages ??= [...this.#languages.values()]
            .filter(node => node.isValid)
            .sort((a, b) => a.compareTo(b));
    }

    get orderedFeatures() {
        return this.#orderedFeatures ??= [...this.#features.values()]
            .filter(node => node.isValid)
            .sort((a, b) => a.compareTo(b));
    }

    get orderedEngines() {
        return this.#orderedEngines ??= [...this.#engines.values()]
            .filter(node => node.isValid && node.id !== "default")
            .sort((a, b) => a.compareTo(b));
    }

    /** @returns {ReadonlyMap<string, string>} */
    get outputs() { return this.#outputs; }

    // #region Source collection

    /**
     * @param {string} id
     */
     #getOrCreateLanguage(id) {
        let language = this.#languages.get(id);
        if (!language) {
            this.#languages.set(id, language = new Language(this, id));
            this.#orderedLanguages = undefined;
        }
        return language;
    }

    /**
     * @param {string} id
     */
    #getOrCreateFeature(id) {
        let feature = this.#features.get(id);
        if (!feature) {
            this.#features.set(id, feature = new Feature(this, id));
            this.#orderedFeatures = undefined;
        }
        return feature;
    }

    /**
     * @param {string} id
     */
    #getOrCreateEngine(id) {
        let engine = this.#engines.get(id);
        if (!engine) {
            this.#engines.set(id, engine = new Engine(this, id));
            this.#orderedEngines = undefined;
        }
        return engine;
    }

    /**
     * @param {string} filename
     * @param {import("../yamlTypes.js").YamlLanguage} data
     */
    #collectLanguage(filename, data) {
        this.#getOrCreateLanguage(data.language)
            .addReference(filename)
            .mergeFrom(data, filename);
    }

    /**
     * @param {string} filename
     * @param {import("../yamlTypes.js").YamlFeature} data
     */
    #collectFeature(filename, data) {
        this.#getOrCreateFeature(data.feature)
            .addReference(filename)
            .mergeFrom(data, filename);
    }

    /**
     * @param {string} filename
     * @param {import("../yamlTypes.js").YamlEngine} data
     */
    #collectEngine(filename, data) {
        /** @type {(languageId: string) => Language} */
        let callback = language => this.#getOrCreateLanguage(language);
        this.#getOrCreateEngine(data.engine)
            .addReference(filename)
            .mergeFrom(data, filename, language => callback(language));
        callback = () => { throw new Error("Invalid operation"); };
    }

    /**
     * @param {string} filename
     * @param {import("../yamlTypes.js").YamlEngineFeature} data
     */
    #collectEngineFeature(filename, data) {
        const engine = this.#getOrCreateEngine(data.engine).addReference(filename);
        const feature = this.#getOrCreateFeature(data.feature).addReference(filename);
        engine.getOrCreateEngineFeature(feature)
            .addReference(filename)
            .mergeFrom(data, filename);
    }

    /**
     * @param {string} filename
     * @param {string[]} data
     */
    #collectFeatureToc(filename, data) {
        for (let i = 0; i < data.length; i++) {
            const feature = data[i];
            this.#getOrCreateFeature(feature).addReference(filename).mergeFrom({
                feature,
                priority: i
            }, filename);
        }
    }

    /**
     * @param {string} filename
     * @param {string[]} data
     */
    #collectEngineToc(filename, data) {
        for (let i = 0; i < data.length; i++) {
            const engine = data[i];
            this.#getOrCreateEngine(engine).addReference(filename).mergeFrom({
                engine,
                priority: i
            }, filename);
        }
    }

    /**
     * @param {string} filename
     * @param {string[]} data
     */
    #collectLanguageToc(filename, data) {
        for (let i = 0; i < data.length; i++) {
            const language = data[i];
            this.#getOrCreateLanguage(language).addReference(filename).mergeFrom({
                language,
                priority: i
            }, filename);
        }
    }

    /**
     * @param {string} filename
     * @param {string} mimeType
     * @param {Record<string, any>} data
     */
    #collectData(filename, mimeType, data) {
        const schema = getSchema(`https://rbuckton.github.io/regexp-features/yaml.json#${mimeType}`);
        if (!schema) {
            process.stdout.write(chalk`{gray build} {yellow warning} {cyan ${filename}}: YamlMime '${mimeType}' is not recognized.\n`);
            return;
        }
        if (!schema(data)) {
            process.stdout.write(chalk`{gray build} {yellow warning} {cyan ${filename}}: Invalid yaml file: ${getSchemaErrors(schema, { separator: "\n" })}\n`);
            return;
        }
        switch (mimeType) {
            case "Language":
                this.#collectLanguage(filename, /** @type {import("../yamlTypes.js").YamlLanguage} */(data));
                break;
            case "LanguageToc":
                this.#collectLanguageToc(filename, /** @type {string[]} */(data));
                break;
            case "Feature":
                this.#collectFeature(filename, /** @type {import("../yamlTypes.js").YamlFeature} */(data));
                break;
            case "FeatureToc":
                this.#collectFeatureToc(filename, /** @type {string[]} */(data));
                break;
            case "Engine":
                this.#collectEngine(filename, /** @type {import("../yamlTypes.js").YamlEngine} */(data));
                break;
            case "EngineToc":
                this.#collectEngineToc(filename, /** @type {string[]} */(data));
                break;
            case "EngineFeature":
                this.#collectEngineFeature(filename, /** @type {import("../yamlTypes.js").YamlEngineFeature} */(data));
                break;
        }
    }

    /**
     * @param {string} filename
     */
    async #collectYaml(filename) {
        const text = await fs.readFile(filename, { encoding: "utf8" });
        const mimeType = getYamlMime(text, /*skipSectionBreak*/ true);
        if (!mimeType) {
            process.stdout.write(chalk`{gray build} {yellow warning} {cyan ${filename}}: YamlMime not found.\n`);
            return;
        }

        const data = yaml.load(text);
        if (typeof data === "object" && data !== null) {
            this.#collectData(filename, mimeType, data);
        }
    }

    /**
     * @param {string} filename
     */
    async #collectMarkdown(filename) {
        const text = await fs.readFile(filename, { encoding: "utf8" });
        const file = parseMarkdownOverrideFile(text);
        if (!file) {
            process.stdout.write(chalk`{gray build} {yellow warning} {cyan ${filename}}: File missing YAML front matter.\n`);
            return;
        }

        const mimeType = getYamlMime(file.matter);
        if (!mimeType) {
            process.stdout.write(chalk`{gray build} {yellow warning} {cyan ${filename}}: YamlMime not found.\n`);
            return;
        }

        this.#collectData(filename, mimeType, file.data);
    }

    /**
     * @param {string} dirname
     */
    async #collectSources(dirname) {
        for (const entry of await fs.readdir(dirname, { withFileTypes: true })) {
            if (entry.name.startsWith(".")) continue;
            if (entry.isDirectory()) {
                await this.#collectSources(path.join(dirname, entry.name));
            }
            else if (entry.isFile()) {
                const extname = path.extname(entry.name);
                switch (extname) {
                    case ".yml":
                    case ".yaml":
                        await this.#collectYaml(path.join(dirname, entry.name));
                        break;
                    case ".md":
                        await this.#collectMarkdown(path.join(dirname, entry.name));
                        break;
                }
            }
        }
    }

    // #endregion Source collection

    /**
     * @param {string} srcDir
     */
    static async create(srcDir) {
        const docs = new Documentation();
        await docs.#collectSources(srcDir);
        return docs;
    }

    #invalidating = false;
    invalidate() {
        if (this.#invalidating) return;
        this.#invalidating = true;
        this.#isValid = undefined;
        this.#diagnostics.clear();
        this.#orderedLanguages = undefined;
        this.#orderedFeatures = undefined;
        this.#orderedEngines = undefined;
        this.#invalidating = false;
    }

    check() {
        if (this.#isValid !== undefined) {
            return this.#isValid;
        }

        this.#isValid = false;
        this.#diagnostics.clear();
        let valid = true;
        for (const language of this.languages.values()) {
            valid = language.check(this.#diagnostics) && valid;
        }
        for (const feature of this.features.values()) {
            valid = feature.check(this.#diagnostics) && valid;
        }
        const defaultEngine = this.engines.get("default");
        if (defaultEngine) {
            valid = defaultEngine.check(this.#diagnostics) && valid;
        }
        for (const engine of this.engines.values()) {
            if (engine.id === "default") continue;
            valid = engine.check(this.#diagnostics) && valid;
        }
        return this.#isValid = valid;
    }

    /**
     * @param {string} featureId
     * @returns {EngineFeature | undefined}
     */
    getDefaultFeature(featureId) {
        const defaultEngine = this.#engines.get("default");
        return defaultEngine?.features.get(featureId);
    }

    /**
     * @param {import("../templateTypes.js").DocumentationTemplateData} docs
     */
    #buildIndex(docs) {
        /** @type {import("../templateTypes.js").OtherFileTemplateData} */
        const data = { docs };
        data.built = true;
        data.outFile = "index.md";
        const content = applyTemplate("Index", data);
        this.#outputs.set(data.outFile, content);
    }

    /**
     * @param {import("../templateTypes.js").DocumentationTemplateData} docs
     */
    #buildLanguagesIndex(docs) {
        /** @type {import("../templateTypes.js").OtherFileTemplateData} */
        const data = { docs };
        data.built = true;
        data.outFile = "languages/index.md";
        const content = applyTemplate("LanguageIndex", data);
        this.#outputs.set(data.outFile, content);
    }

    /**
     * @param {import("../templateTypes.js").DocumentationTemplateData} docs
     */
    #buildFeaturesIndex(docs) {
        /** @type {import("../templateTypes.js").OtherFileTemplateData} */
        const data = { docs };
        data.built = true;
        data.outFile = "features/index.md";
        const content = applyTemplate("FeatureIndex", data);
        this.#outputs.set(data.outFile, content);
    }

    /**
     * @param {import("../templateTypes.js").DocumentationTemplateData} docs
     */
    #buildEnginesIndex(docs) {
        /** @type {import("../templateTypes.js").OtherFileTemplateData} */
        const data = { docs };
        data.built = true;
        data.outFile = "engines/index.md";
        const content = applyTemplate("EngineIndex", data);
        this.#outputs.set(data.outFile, content);
    }

    /**
     * @param {DocumentationBuilder} builder
     */
    buildGraph(builder) {
        for (const language of this.languages.values()) {
            language.buildGraph(builder);
        }
        for (const feature of this.features.values()) {
            feature.buildGraph(builder);
        }
        for (const engine of this.engines.values()) {
            engine.buildGraph(builder);
        }

        return builder.getDocs();
    }

    /**
     * @param {string} srcDir
     * @param {string} outDir
     * @param {string} branch
     */
    build(srcDir, outDir, branch) {
        this.#outputs.clear();
        const builder = new DocumentationBuilder(srcDir, outDir, branch);
        const docs = this.buildGraph(builder);
        for (const language of this.languages.values()) {
            language.build(this.#outputs, builder.getOrAddLanguage(language.id));
        }
        for (const feature of this.features.values()) {
            feature.build(this.#outputs, builder.getOrAddFeature(feature.id));
        }
        for (const engine of this.engines.values()) {
            engine.build(this.#outputs, builder.getOrAddEngine(engine.id));
        }

        this.#buildIndex(docs);
        this.#buildLanguagesIndex(docs);
        this.#buildFeaturesIndex(docs);
        this.#buildEnginesIndex(docs);
    }

    /**
     * @param {string} srcDir
     * @param {string} outDir
     * @param {string} branch
     */
    async emit(srcDir, outDir, branch) {
        if (this.#outputs.size === 0) {
            this.build(srcDir, outDir, branch);
        }

        try {
            await fs.rm(outDir, { recursive: true, force: true });
        }
        catch (e) {
            if (/** @type {NodeJS.ErrnoException}*/(e).code !== "E_NOENT") {
                throw e;
            }
        }

        try {
            await fs.mkdir(outDir, { recursive: true });
        }
        catch (e) {
            if (/** @type {NodeJS.ErrnoException}*/(e).code !== "E_EXIST") {
                throw e;
            }
        }

        for (const [name, content] of this.#outputs) {
            const file = path.join(outDir, name);
            const dirname = path.dirname(file);
            try {
                await fs.mkdir(dirname, { recursive: true });
            }
            catch (e) {
                if (/** @type {NodeJS.ErrnoException}*/(e).code !== "E_EXIST") {
                    throw e;
                }
            }
            await fs.writeFile(file, content, { encoding: "utf8" });
        }
    }
}
