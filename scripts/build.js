// @ts-check
import Ajv from "ajv";
import * as fs from "fs/promises";
import { watch } from "chokidar";
import matter from "gray-matter";
import handlebars from "handlebars";
import * as yaml from "js-yaml";
import * as path from "path";
import { fileURLToPath, URL } from "url";
import yargs from "yargs";
import chalk from "chalk";
import { hideBin } from 'yargs/helpers';
import { clearScreenDown, cursorTo } from "readline";

/**
 * @template T
 * @template TMatch
 * @typedef {Extract<{ [P in keyof T]: T[P] extends TMatch ? P : never }[keyof T], keyof T>} MatchingKeys
 */

/**
 * @template T
 * @typedef {T extends readonly (infer U)[] ? U : T} ElementType
 */

/**
 * @template T
 * @typedef {[value: T, source?: readonly string[]] & { value: T, sources?: readonly string[] }} YamlEntry
 */

/**
 * @template T
 * @typedef {{ yaml: T, filename: string }} YamlSource
 */

const MATRIX_COLUMN_COUNT = 7;

const argv = await yargs(hideBin(process.argv))
    .option("watch", { type: "boolean", describe: "Whether to monitor the source directory for changes." })
    .command("* [srcDir] [outDir]", 'Builds the documentation', argv => argv
        .positional("srcDir", { type: "string", describe: "The source directory for build inputs." })
        .positional("outDir", { type: "string", describe: "The destination directory for build outputs." }))
    .version(false)
    .argv;

const contentSymbol = Symbol("*content");
const contentDescriptionSymbol = Symbol("*content.description");
const contentSyntaxSymbol = Symbol("*content.syntax");
const contentExampleSymbol = Symbol("*content.example");

/** @type {YamlEntry<undefined> } */
const missingEntry = makeYamlEntry(undefined);
const schemasDir = fileURLToPath(new URL("./schemas/", import.meta.url));
const languageSchemaFile = path.join(schemasDir, "language.json");
const languageLinkDefinitionSchemaFile = path.join(schemasDir, "language-link-definition.json");
const featureSchemaFile = path.join(schemasDir, "feature.json");
const featureLinkDefinitionSchemaFile = path.join(schemasDir, "feature-link-definition.json");
const engineSchemaFile = path.join(schemasDir, "engine.json");
const engineLinkDefinitionSchemaFile = path.join(schemasDir, "engine-link-definition.json");
const engineFeatureSchemaFile = path.join(schemasDir, "engine-feature.json");
const hrefLinkDefinitionSchemaFile = path.join(schemasDir, "href-link-definition.json");
const linkSchemaFile = path.join(schemasDir, "link.json");
const tocSchemaFile = path.join(schemasDir, "toc.json");

async function reloadSchemas() {
    ajv = await getSchemas();
}

async function readJsonSchema(file) {
    const text = await fs.readFile(file, { encoding: "utf8" });
    /** @type {import("ajv").SchemaObject & import("ajv/dist/types/json-schema").SomeJSONSchema} */
    return JSON.parse(text);
}

async function getSchemas() {
    const ajv = new Ajv({
        allErrors: true,
        schemas: {
            Language: await readJsonSchema(languageSchemaFile),
            LanguageLinkDefinition: await readJsonSchema(languageLinkDefinitionSchemaFile),
            Feature: await readJsonSchema(featureSchemaFile),
            FeatureLinkDefinition: await readJsonSchema(featureLinkDefinitionSchemaFile),
            Engine: await readJsonSchema(engineSchemaFile),
            EngineLinkDefinition: await readJsonSchema(engineLinkDefinitionSchemaFile),
            EngineFeature: await readJsonSchema(engineFeatureSchemaFile),
            HrefLinkDefinition: await readJsonSchema(hrefLinkDefinitionSchemaFile),
            Link: await readJsonSchema(linkSchemaFile),
            Toc: await readJsonSchema(tocSchemaFile),
        }
    });
    return ajv;
}

let ajv = await getSchemas();

const templatesDir = fileURLToPath(new URL("./templates/", import.meta.url));
const sourcesPartialFile = fileURLToPath(new URL("./templates/partials/sources.hbs", import.meta.url));
const engineFeatureTemplateFile = fileURLToPath(new URL("./templates/engine-feature.hbs", import.meta.url));
const engineIndexTemplateFile = fileURLToPath(new URL("./templates/engine-index.hbs", import.meta.url));
const engineTemplateFile = fileURLToPath(new URL("./templates/engine.hbs", import.meta.url));
const featureTemplateFile = fileURLToPath(new URL("./templates/feature.hbs", import.meta.url));
const featureIndexTemplateFile = fileURLToPath(new URL("./templates/feature-index.hbs", import.meta.url));
const languageTemplateFile = fileURLToPath(new URL("./templates/language.hbs", import.meta.url));
const languageIndexTemplateFile = fileURLToPath(new URL("./templates/language-index.hbs", import.meta.url));
const indexTemplateFile = fileURLToPath(new URL("./templates/index.hbs", import.meta.url));

const helpers = {
    hlink(value) {
        return `${String(value).toLowerCase().replace(/\W+/g, "-")}`;
    },
    trimLeadingLines,
    trimTrailingLines,
    trimLines,
    isArray: Array.isArray
};

const partials = {
    sources: handlebars.compile(await fs.readFile(sourcesPartialFile, "utf8"))
};

/** @type {import("handlebars").RuntimeOptions} */
const handlebarsOptions = {
    helpers,
    partials
};

let engineFeatureTemplate = handlebars.compile(await fs.readFile(engineFeatureTemplateFile, "utf8"));
let engineTemplate = handlebars.compile(await fs.readFile(engineTemplateFile, "utf8"));
let engineIndexTemplate = handlebars.compile(await fs.readFile(engineIndexTemplateFile, "utf8"));
let featureTemplate = handlebars.compile(await fs.readFile(featureTemplateFile, "utf8"));
let featureIndexTemplate = handlebars.compile(await fs.readFile(featureIndexTemplateFile, "utf8"));
let languageIndexTemplate = handlebars.compile(await fs.readFile(languageIndexTemplateFile, "utf8"));
let languageTemplate = handlebars.compile(await fs.readFile(languageTemplateFile, "utf8"));
let indexTemplate = handlebars.compile(await fs.readFile(indexTemplateFile, "utf8"));

async function reloadTemplates() {
    partials.sources = handlebars.compile(await fs.readFile(sourcesPartialFile, "utf8"));
    engineFeatureTemplate = handlebars.compile(await fs.readFile(engineFeatureTemplateFile, "utf8"));
    engineTemplate = handlebars.compile(await fs.readFile(engineTemplateFile, "utf8"));
    engineIndexTemplate = handlebars.compile(await fs.readFile(engineIndexTemplateFile, "utf8"));
    featureTemplate = handlebars.compile(await fs.readFile(featureTemplateFile, "utf8"));
    featureIndexTemplate = handlebars.compile(await fs.readFile(featureIndexTemplateFile, "utf8"));
    languageIndexTemplate = handlebars.compile(await fs.readFile(languageIndexTemplateFile, "utf8"));
    languageTemplate = handlebars.compile(await fs.readFile(languageTemplateFile, "utf8"));
    indexTemplate = handlebars.compile(await fs.readFile(indexTemplateFile, "utf8"));
}

class Diagnostics {
    /** @type {Map<string, Set<string>>} */
    #errors = new Map();

    /** @type {Map<string, Set<string>>} */
    #warnings = new Map();

    get errorsSize() {
        return this.#errors.size;
    }

    get warningsSize() {
        return this.#warnings.size;
    }

    /**
     * @param {string} message
     * @param {string} filename
     */
    addError(message, filename) {
        let errors = this.#errors.get(filename);
        if (!errors) this.#errors.set(filename, errors = new Set());
        errors.add(message);
    }

    /**
     * @param {string} message
     * @param {string} filename
     */
    addWarning(message, filename) {
        let warnings = this.#warnings.get(filename);
        if (!warnings) this.#warnings.set(filename, warnings = new Set());
        warnings.add(message);
    }

    /**
     * @param {Diagnostics} other
     */
    copyFrom(other) {
        for (const [filename, messages] of other.#warnings) {
            for (const message of messages) {
                this.addWarning(message, filename);
            }
        }
        for (const [filename, messages] of other.#errors) {
            for (const message of messages) {
                this.addError(message, filename);
            }
        }
    }

    clear() {
        this.#warnings.clear();
        this.#errors.clear();
    }

    * values() {
        for (const [filename, messages] of [...this.#warnings].sort(([a], [b]) => a < b ? -1 : a > b ? +1 : 0)) {
            for (const message of messages) {
                yield { error: false, filename, message };
            }
        }
        for (const [filename, messages] of [...this.#errors].sort(([a], [b]) => a < b ? -1 : a > b ? +1 : 0)) {
            for (const message of messages) {
                yield { error: true, filename, message };
            }
        }
    }
}

class DiagnosticsReporter {
    /** @type {Diagnostics} */
    #diagnostics;
    /** @type {readonly YamlSource<*>[]} */
    #sources;
    /** @type {readonly string[]} */
    #references;

    /**
     * @param {Diagnostics} diagnostics
     * @param {readonly YamlSource<*>[]} sources
     * @param {readonly string[]} references
     */
    constructor(diagnostics, sources, references) {
        this.#diagnostics = diagnostics;
        this.#sources = sources;
        this.#references = references;
    }

    /**
     * @param {string} message
     * @param {string} filename
     */
    reportError(message, filename) {
        this.#diagnostics.addError(message, filename);
    }

    /**
     * @param {string} sourceMessage
     * @param {string} referenceMessage
     */
    reportSourceOrReferenceError(sourceMessage, referenceMessage, first = false) {
        this.reportSourceError(sourceMessage, first) || this.reportReferenceError(referenceMessage);
    }

    /**
     * @param {string} message
     */
    reportSourceError(message, first = false) {
        for (const source of this.#sources) {
            this.reportError(message, source.filename);
            if (first) break;
        }
        return this.#sources.length > 0;
    }

    /**
     * @param {string} message
     */
    reportReferenceError(message) {
        for (const reference of this.#references) {
            this.reportError(message, reference);
        }
    }

    /**
     * @param {string} message
     * @param {string} filename
     */
    reportWarning(message, filename) {
        this.#diagnostics.addWarning(message, filename);
    }

    /**
     * @param {string} sourceMessage
     * @param {string} referenceMessage
     */
    reportSourceOrReferenceWarning(sourceMessage, referenceMessage, first = false) {
        this.reportSourceWarning(sourceMessage, first) || this.reportReferenceWarning(referenceMessage);
    }

    /**
     * @param {string} message
     */
    reportSourceWarning(message, first = false) {
        for (const source of this.#sources) {
            this.reportWarning(message, source.filename);
            if (first) break;
        }
        return this.#sources.length > 0;
    }

    /**
     * @param {string} message
     */
    reportReferenceWarning(message) {
        for (const reference of this.#references) {
            this.reportWarning(message, reference);
        }
    }
}

class DocumentationBuilder {
    /** @type {string} */
    outDir;

    /** @type {import("./templateTypes.js").LanguageTemplateData[]} */
    #languages = [];
    /** @type {Map<string, import("./templateTypes.js").LanguageTemplateData>} */
    #languagesMap = new Map();

    /** @type {import("./templateTypes.js").FeatureTemplateData[]} */
    #features = [];
    /** @type {Map<string, import("./templateTypes.js").FeatureTemplateData>} */
    #featuresMap = new Map();

    /** @type {import("./templateTypes.js").EngineTemplateData[]} */
    #engines = [];
    /** @type {Map<string, import("./templateTypes.js").EngineTemplateData>} */
    #enginesMap = new Map();

    /** @type {Map<`(engine:${string})(feature:${string})`, import("./templateTypes.js").EngineFeatureTemplateData>} */
    #engineFeatureMap = new Map();

    #data = {
        outDir: "",
        languages: this.#languages,
        features: this.#features,
        engines: this.#engines,
        featureMatrixes: /** @type {import("./templateTypes.js").FeatureMatrix[]} */([])
    };

    /**
     * @param {string} outDir
     */
    constructor(outDir) {
        this.outDir = outDir;
        this.#data.outDir = outDir;
    }

    /**
     * @param {string} id
     */
    getOrAddLanguage(id) {
        let language = this.#languagesMap.get(id);
        if (!language) {
            this.#languagesMap.set(id, language = { docs: this.#data, id, language: id, name: id });
            this.#languages.push(language);
        }
        return language;
    }

    /**
     * @param {string} id
     */
    getOrAddFeature(id) {
        let feature = this.#featuresMap.get(id);
        if (!feature) {
            this.#featuresMap.set(id, feature = { docs: this.#data, id, feature: id, name: id });
            this.#features.push(feature);
        }
        return feature;
    }

    /**
     * @param {string} id
     */
    getOrAddEngine(id) {
        let engine = this.#enginesMap.get(id);
        if (!engine) {
            this.#enginesMap.set(id, engine = { docs: this.#data, id, engine: id, name: id });
            this.#engines.push(engine);
        }
        return engine;
    }

    /**
     * @param {import("./templateTypes.js").EngineTemplateData} engine
     * @param {import("./templateTypes.js").FeatureTemplateData} feature
     */
    getOrAddEngineFeature(engine, feature) {
        let engineFeature = this.#engineFeatureMap.get(`(engine:${engine.id})(feature:${feature.id})`);
        if (!engineFeature) this.#engineFeatureMap.set(`(engine:${engine.id})(feature:${feature.id})`, engineFeature = { docs: this.#data, engine, feature, name: feature.id, supported: false });
        return engineFeature;
    }

    /**
     * @returns {import("./templateTypes.js").DocumentationTemplateData}
     */
    getDocs() {
        /**
         * @param {import("./templateTypes.js").LanguageTemplateData | import("./templateTypes.js").FeatureTemplateData | import("./templateTypes.js").EngineTemplateData} a
         * @param {import("./templateTypes.js").LanguageTemplateData | import("./templateTypes.js").FeatureTemplateData | import("./templateTypes.js").EngineTemplateData} b
         */
        const compare = (a, b) => {
            const aPriority = a.priority || Infinity;
            const aName = a.name || a.id;
            const bPriority = b.priority || Infinity;
            const bName = b.name || b.id;
            return aPriority - bPriority
                || (aName < bName ? -1 : aName > bName ? +1 : 0);
        };
        const data = this.#data;
        data.languages = data.languages.filter(language => !!language.built).sort(compare);
        data.features = data.features.filter(feature => !!feature.built).sort(compare);
        data.engines = data.engines.filter(engine => !!engine.built).sort(compare);

        // TODO: create feature matrixes
        // - split features by chunks of 5-6
        // - for each chunk:
        //   - create a row for each engine
        //     - create a cell for each feature in the matrix and the engine

        data.featureMatrixes.length = 0;
        const matrixCount = Math.ceil(data.features.length / MATRIX_COLUMN_COUNT);
        for (let matrixIndex = 0; matrixIndex < matrixCount; matrixIndex++) {
            /** @type {import("./templateTypes.js").FeatureMatrixRow[]} */
            const rows = [];
            /** @type {import("./templateTypes.js").FeatureTemplateData[]} */
            const columns = [];
            /** @type {import("./templateTypes.js").FeatureMatrix} */
            const matrix = { columns, rows };
            const start = matrixIndex * MATRIX_COLUMN_COUNT;
            const end = Math.min(start + MATRIX_COLUMN_COUNT, data.features.length);
            for (let i = start; i < end; i++) {
                columns.push(data.features[i]);
            }
            for (const engine of data.engines) {
                /** @type {(import("./templateTypes.js").EngineFeatureTemplateData | undefined)[]} */
                const cells = [];
                for (let i = start; i < end; i++) {
                    const feature = data.features[i];
                    const engineFeature = engine.features?.find(engineFeature => engineFeature.feature === feature);
                    cells.push(engineFeature);
                }
    
                /** @type {import("./templateTypes.js").FeatureMatrixRow} */
                const row = { engine, cells };
                rows.push(row);
            }
            data.featureMatrixes.push(matrix);
        }

        
        return data;
    }
}

class Documentation {
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
            .filter(node => node.isValid)
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
     * @param {import("./yamlTypes.js").YamlLanguage} data
     */
    #collectLanguage(filename, data) {
        this.#getOrCreateLanguage(data.language)
            .addReference(filename)
            .mergeFrom(data, filename);
    }

    /**
     * @param {string} filename
     * @param {import("./yamlTypes.js").YamlFeature} data
     */
    #collectFeature(filename, data) {
        this.#getOrCreateFeature(data.feature)
            .addReference(filename)
            .mergeFrom(data, filename);
    }

    /**
     * @param {string} filename
     * @param {import("./yamlTypes.js").YamlEngine} data
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
     * @param {import("./yamlTypes.js").YamlEngineFeature} data
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
        const schemaId = mimeType === "EngineToc" || mimeType === "LanguageToc" || mimeType === "FeatureToc" ? "Toc" : mimeType;
        const schema = ajv.getSchema(schemaId);
        if (!schema) {
            console.warn(`YamlMime '${mimeType}' is not recognized: ${filename}`);
            return;
        }
        if (!schema(data)) {
            console.warn(`Invalid yaml file '${filename}':`, ajv.errorsText(schema.errors, { separator: "\n" }));
            return;
        }
        switch (mimeType) {
            case "Language":
                this.#collectLanguage(filename, /** @type {import("./yamlTypes.js").YamlLanguage} */(data));
                break;
            case "LanguageToc":
                this.#collectLanguageToc(filename, /** @type {string[]} */(data));
                break;
            case "Feature":
                this.#collectFeature(filename, /** @type {import("./yamlTypes.js").YamlFeature} */(data));
                break;
            case "FeatureToc":
                this.#collectFeatureToc(filename, /** @type {string[]} */(data));
                break;
            case "Engine":
                this.#collectEngine(filename, /** @type {import("./yamlTypes.js").YamlEngine} */(data));
                break;
            case "EngineToc":
                this.#collectEngineToc(filename, /** @type {string[]} */(data));
                break;
            case "EngineFeature":
                this.#collectEngineFeature(filename, /** @type {import("./yamlTypes.js").YamlEngineFeature} */(data));
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
            console.warn(`YamlMime not supplied: '${filename}'`);
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
        const file = matter(text, {
            language: "yaml",
            listener: (event, state) => {
                if (event === "open") {
                    state.anchorMap["content"] = contentSymbol;
                    state.anchorMap["content.description"] = contentDescriptionSymbol;
                    state.anchorMap["content.syntax"] = contentSyntaxSymbol;
                    state.anchorMap["content.example"] = contentExampleSymbol;
                }
            }
        });
        if (/** @type {*} */(file).isEmpty) {
            console.warn("File missing front matter: ", filename);
            return;
        }

        const used = { value: false };
        const data = replaceContent(file.data, file.content, used);
        if (!used.value && file.content.trim()) {
            data.content = file.content;
        }

        const mimeType = getYamlMime(file.matter);
        if (!mimeType) {
            console.warn(`YamlMime not supplied: '${filename}'`);
            return;
        }

        this.#collectData(filename, mimeType, data);
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
     * @param {import("./templateTypes.js").DocumentationTemplateData} docs
     */
    #buildIndex(docs) {
        const content = indexTemplate(docs, handlebarsOptions);
        this.#outputs.set("index.md", content);
    }

    /**
     * @param {import("./templateTypes.js").DocumentationTemplateData} docs
     */
    #buildLanguagesIndex(docs) {
        const content = languageIndexTemplate(docs, handlebarsOptions);
        this.#outputs.set("languages.md", content);
    }

    /**
     * @param {import("./templateTypes.js").DocumentationTemplateData} docs
     */
    #buildFeaturesIndex(docs) {
        const content = featureIndexTemplate(docs, handlebarsOptions);
        this.#outputs.set("features.md", content);
    }

    /**
     * @param {import("./templateTypes.js").DocumentationTemplateData} docs
     */
    #buildEnginesIndex(docs) {
        const content = engineIndexTemplate(docs, handlebarsOptions);
        this.#outputs.set("engines.md", content);
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
     * @param {string} outDir
     */
    build(outDir) {
        this.#outputs.clear();
        const builder = new DocumentationBuilder(outDir);
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
     * @param {string} outDir
     */
    async emit(outDir) {
        if (this.#outputs.size === 0) {
            this.build(outDir);
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

/** @abstract */
class Node {
    /** @type {Documentation} @readonly */
    docs;
    /** @type {string[]} */
    #references = [];

    /**
     * @param {Documentation} docs
     */
    constructor(docs) {
        this.docs = docs;
    }

    /** @returns {readonly string[]} */
    get references() { return this.#references; }

    /**
     * @param {string} filename
     */
    addReference(filename) {
        this.#references.push(filename);
        return this;
    }
}

class Language extends Node {
    /** @type {string} @readonly */
    id;
    /** @type {boolean | undefined} */
    #isValid;
    /** @type {Diagnostics} */
    #diagnostics = new Diagnostics();
    /** @type {string | undefined} */
    #name;
    /** @type {number | undefined} */
    #priority;
    /** @type {string | undefined} */
    #description;
    /** @type {string | undefined} */
    #reference;
    /** @type {string | readonly import("./yamlTypes.js").YamlLink[] | undefined} */
    #see_also;
    /** @type {string | undefined} */
    #content;
    /** @type {YamlSource<import("./yamlTypes.js").YamlLanguage>[]} */
    #sources = [];
    /** @type {readonly Engine[] | undefined} */
    #orderedEngines;

    #reporter = new DiagnosticsReporter(this.#diagnostics, this.#sources, this.references);

    /**
     * @param {Documentation} docs
     * @param {string} id
     */
    constructor(docs, id) {
        super(docs);
        this.id = id;
    }

    get name() { return this.#name ?? this.id; }
    get isValid() { return this.#isValid ?? false; }
    get priority() { return this.#priority ?? 1000; }
    get description() { return this.#description; }
    get reference() { return this.#reference; }
    get see_also() { return this.#see_also; }
    get content() { return this.#content; }

    get orderedEngines() {
        return this.#orderedEngines ??= [...this.docs.engines.values()]
            .filter(engine => engine.isValid && engine.languages.has(this))
            .sort((a, b) => a.compareTo(b));
    }

    #invalidating = false;
    invalidate() {
        if (this.#invalidating) return;
        this.#invalidating = true;
        this.#isValid = undefined;
        this.#diagnostics.clear();
        this.#orderedEngines = undefined;
        this.#invalidating = false;
    }

    /**
     * @param {import("./yamlTypes.js").YamlLanguage} yaml
     * @param {string} filename
     */
    mergeFrom(yaml, filename) {
        this.invalidate();
        this.#sources.push({ yaml, filename });
        if (yaml.name !== undefined) this.#name = yaml.name;
        if (yaml.priority !== undefined) this.#priority = yaml.priority;
        if (yaml.description !== undefined) this.#description = yaml.description;
        if (yaml.reference !== undefined) this.#reference = yaml.reference;
        if (yaml.see_also !== undefined) this.#see_also = yaml.see_also;
        if (yaml.content !== undefined) this.#content = yaml.content;
    }

    /**
     * @param {Diagnostics} diagnostics
     */
    check(diagnostics) {
        if (this.#isValid !== undefined) {
            if (this.#diagnostics) {
                diagnostics.copyFrom(this.#diagnostics);
            }
            return this.#isValid;
        }

        this.#isValid = false;
        this.#diagnostics.clear();

        diagnostics.copyFrom(this.#diagnostics);
        return this.#isValid = this.#diagnostics.errorsSize === 0;
    }

    /**
     * @template {keyof import("./yamlTypes.js").YamlLanguage} K
     * @param {K} key
     * @returns {YamlEntry<import("./yamlTypes.js").YamlLanguage[K]> | undefined}
     */
    getEntry(key) {
        for (let i = this.#sources.length - 1; i >= 0; i--) {
            const source = this.#sources[i];
            const value = source.yaml[key];
            if (value !== undefined && value !== null) {
                return makeYamlEntry(value, source.filename);
            }
        }
    }

    /**
     * @param {DocumentationBuilder} builder
     */
    buildGraph(builder) {
        const data = builder.getOrAddLanguage(this.id);
        if (!data.built && this.isValid) {
            data.built = true;
            data.outFile = `languages/${this.id}.md`;
            const absoluteOutFile = path.resolve(builder.outDir, data.outFile);
            const [name = this.id, nameSources] = this.getEntry("name") ?? missingEntry;
            const [priority, prioritySources] = this.getEntry("priority") ?? missingEntry;
            const [reference, referenceSources] = this.getEntry("reference") ?? missingEntry;
            const [description, descriptionSources] = this.getEntry("description") ?? missingEntry;
            const [see_also, see_alsoSources] = this.getEntry("see_also") ?? missingEntry;
            const [content, contentSources] = this.getEntry("content") ?? missingEntry;
            const engines = this.orderedEngines
                .map(engine => engine.buildGraph(builder))
                .filter(engine => !!engine.built);

            data.name = name;
            data.priority = priority;
            data.reference = reference;
            data.description = trimLines(description);
            data.engines = engines;
            data.see_also = typeof see_also === "string" ? see_also : see_also?.map(link => typeof link === "string" ? { language: link, name: this.docs.languages.get(link)?.name } : link);
            data.content = trimLines(content);

            data.nameSources = relativeSources(nameSources, absoluteOutFile);
            data.prioritySources = relativeSources(prioritySources, absoluteOutFile);
            data.referenceSources = relativeSources(referenceSources, absoluteOutFile);
            data.descriptionSources = relativeSources(descriptionSources, absoluteOutFile);
            data.see_alsoSources = relativeSources(see_alsoSources, absoluteOutFile);
            data.contentSources = relativeSources(contentSources, absoluteOutFile);
        }
        return data;
    }

    /**
     * @param {Map<string, string>} outputs
     * @param {import("./templateTypes.js").LanguageTemplateData} data
     */
    build(outputs, data) {
        if (!data.built || !data.outFile) return;
        data.content ??= trimLines(languageTemplate(data, handlebarsOptions));
        outputs.set(data.outFile, data.content ?? "");
    }

    /**
     * @param {Language} other
     */
    compareTo(other) {
        return this.priority - other.priority
            || (this.name < other.name ? -1 : this.name > other.name ? +1 : 0);
    }
}

class Feature extends Node {
    /** @type {string} @readonly */
    id;
    /** @type {boolean | undefined} */
    #isValid;
    /** @type {Diagnostics} */
    #diagnostics = new Diagnostics();
    /** @type {string | undefined} */
    #name;
    /** @type {Set<string>} */
    #aliases = new Set();
    /** @type {number | undefined} */
    #priority;
    /** @type {string | undefined} */
    #description;
    /** @type {string | undefined} */
    #syntax;
    /** @type {string | undefined} */
    #example;
    /** @type {string | readonly import("./yamlTypes.js").YamlLink[] | undefined} */
    #see_also;
    /** @type {string | undefined} */
    #content;
    /** @type {readonly import("./yamlTypes.js").YamlLinkDefinition[] | undefined} */
    #links;
    /** @type {YamlSource<import("./yamlTypes.js").YamlFeature>[]} */
    #sources = [];
    /** @type {readonly Engine[] | undefined} */
    #orderedEngines;

    #reporter = new DiagnosticsReporter(this.#diagnostics, this.#sources, this.references);

    /**
     * @param {Documentation} docs
     * @param {string} id
     */
    constructor(docs, id) {
        super(docs);
        this.id = id;
    }

    get name() { return this.#name ?? this.id; }
    /** @returns {ReadonlySet<string>} */
    get aliases() { return this.#aliases; }
    get isValid() { return this.#isValid ?? false; }
    get priority() { return this.#priority ?? 1000; }
    get description() { return this.#description; }
    get see_also() { return this.#see_also; }
    get content() { return this.#content; }
    get syntax() { return this.#syntax; }
    get example() { return this.#example; }
    /** @returns {readonly import("./yamlTypes.js").YamlLinkDefinition[] | undefined} */
    get links() { return this.#links; }

    get orderedEngines() {
        return this.#orderedEngines ??= [...this.docs.engines.values()]
            .filter(engine => engine.isValid && (engine.features.get(this.id)?.isValid ?? false))
            .sort((a, b) => a.compareTo(b));
    }

    #invalidating = false;
    invalidate() {
        if (this.#invalidating) return;
        this.#invalidating = true;
        this.#isValid = undefined;
        this.#diagnostics.clear();
        this.#orderedEngines = undefined;
        this.docs.invalidate();
        this.#invalidating = false;
    }

    /**
     * @param {import("./yamlTypes.js").YamlFeature} yaml
     * @param {string} filename
     */
    mergeFrom(yaml, filename) {
        this.#sources.push({ yaml, filename });
        if (yaml.name !== undefined) this.#name = yaml.name;
        if (yaml.aliases !== undefined) {
            for (const alias of yaml.aliases) {
                this.#aliases.add(alias);
            }
        }
        if (yaml.priority !== undefined) this.#priority = yaml.priority;
        if (yaml.description !== undefined) this.#description = yaml.description;
        if (yaml.see_also !== undefined) this.#see_also = yaml.see_also;
        if (yaml.syntax !== undefined) this.#syntax = yaml.syntax;
        if (yaml.example !== undefined) this.#example = yaml.example;
        if (yaml.content !== undefined) this.#content = yaml.content;
        if (yaml.links !== undefined) this.#links = yaml.links;
        this.invalidate();
    }

    /**
     * @param {Diagnostics} diagnostics
     */
    check(diagnostics) {
        if (this.#isValid !== undefined) {
            if (this.#diagnostics) {
                diagnostics.copyFrom(this.#diagnostics);
            }
            return this.#isValid;
        }

        this.#diagnostics.clear();
        this.#isValid = false;

        if (!this.#name) {
            this.#reporter.reportSourceOrReferenceError(
                `A valid 'name' property was not defined for feature '${this.id}'`,
                `Feature '${this.id}' was not defined.`);
        }

        if (!this.#content) {
            if (!this.#description) {
                this.#reporter.reportSourceError(`Feature '${this.id}' is missing a description.`);
            }
        }

        diagnostics.copyFrom(this.#diagnostics);
        return this.#isValid = this.#diagnostics.errorsSize === 0;
    }

    /**
     * @template {keyof import("./yamlTypes.js").YamlFeature} K
     * @param {K} key
     * @returns {YamlEntry<ElementType<Required<import("./yamlTypes.js").YamlFeature>[K]>[]> | undefined}
     */
    getMergedEntry(key) {
        /** @type {Set<import("./yamlTypes.js").YamlFeature[K] extends readonly any[] ? NonNullable<import("./yamlTypes.js").YamlFeature[K]>[number] : NonNullable<import("./yamlTypes.js").YamlFeature[K]>> | undefined} */
        let values;
        /** @type {string[] | undefined} */
        let sources;
        for (const source of this.#sources) {
            const value = source.yaml[key];
            if (isDefined(value)) {
                values ??= new Set();
                sources ??= [];
                if (/** @type {(ar: any) => ar is readonly any[]} */(Array.isArray)(value)) {
                    for (const v of value) {
                        values.add(v);
                    }
                    sources.push(source.filename);
                }
                else {
                    values.add(value);
                    sources.push(source.filename);
                }
            }
        }
        return values && makeYamlEntry(/** @type {*} */([...values]), sources);
    }

    /**
     * @template {keyof import("./yamlTypes.js").YamlFeature} K
     * @param {K} key
     * @returns {YamlEntry<import("./yamlTypes.js").YamlFeature[K]> | undefined}
     */
    getEntry(key) {
        for (let i = this.#sources.length - 1; i >= 0; i--) {
            const source = this.#sources[i];
            const value = source.yaml[key];
            if (isDefined(value)) {
                return makeYamlEntry(value, source.filename);
            }
        }
    }

    /**
     * @param {DocumentationBuilder} builder
     */
    buildGraph(builder) {
        const data = builder.getOrAddFeature(this.id);
        if (!data.built && this.isValid) {
            data.built = true;
            data.outFile = `features/${this.id}.md`;

            const absoluteOutFile = path.resolve(builder.outDir, data.outFile);
            const [name = this.id, nameSources] = this.getEntry("name") ?? missingEntry;
            const [priority, prioritySources] = this.getEntry("priority") ?? missingEntry;
            const [aliases, aliasesSources] = this.getEntry("aliases") ?? missingEntry;
            const [description, descriptionSources] = this.getEntry("description") ?? missingEntry;
            const [syntax, syntaxSources] = this.getEntry("syntax") ?? missingEntry;
            const [example, exampleSources] = this.getEntry("example") ?? missingEntry;
            const [see_also, see_alsoSources] = this.getEntry("see_also") ?? missingEntry;
            const [links, linksSources] = this.getEntry("links") ?? missingEntry;
            const [content, contentSources] = this.getEntry("content") ?? missingEntry;
            const engines = this.orderedEngines
                .map(engine => {
                    const engineFeature = engine.features.get(this.id);
                    const engineData = engine.buildGraph(builder);
                    if (engineData.built) {
                        const [supported = false] = engineFeature?.getEntry("supported") ??
                            engineFeature?.getDefaultEntry("supported") ??
                            missingEntry;
                        return { engine: engineData, supported };
                    }
                })
                .filter(isDefined);

            data.name = name;
            data.priority = priority;
            data.aliases = aliases;
            data.description = trimLines(description);
            data.syntax = trimLines(syntax);
            data.example = trimLines(example);
            data.see_also = typeof see_also === "string" ? see_also : see_also?.map(link => typeof link === "string" ? { feature: link, name: this.docs.features.get(link)?.name } : link);
            data.links = links;
            data.engines = engines;
            data.content = trimLines(content);

            data.nameSources = relativeSources(nameSources, absoluteOutFile);
            data.prioritySources = relativeSources(prioritySources, absoluteOutFile);
            data.aliasesSources = relativeSources(aliasesSources, absoluteOutFile);
            data.syntaxSources = relativeSources(syntaxSources, absoluteOutFile);
            data.exampleSources = relativeSources(exampleSources, absoluteOutFile);
            data.descriptionSources = relativeSources(descriptionSources, absoluteOutFile);
            data.see_alsoSources = relativeSources(see_alsoSources, absoluteOutFile);
            data.linksSources = relativeSources(linksSources, absoluteOutFile);
            data.contentSources = relativeSources(contentSources, absoluteOutFile);
        }
        return data;
    }

    /**
     * @param {Map<string, string>} outputs
     * @param {import("./templateTypes.js").FeatureTemplateData} data
     */
    build(outputs, data) {
        if (!data.built || !data.outFile) return;
        data.content ??= trimLines(featureTemplate(data, handlebarsOptions));
        outputs.set(data.outFile, data.content ?? "");
    }

    /**
     * @param {Feature} other
     */
    compareTo(other) {
        return this.priority - other.priority
            || (this.name < other.name ? -1 : this.name > other.name ? +1 : 0);
    }
}

class Engine extends Node {
    /** @type {string} @readonly */
    id;
    /** @type {boolean | undefined} */
    #isValid;
    /** @type {Diagnostics} */
    #diagnostics = new Diagnostics();
    /** @type {string | undefined} */
    #name;
    /** @type {number | undefined} */
    #priority;
    /** @type {string | undefined} */
    #reference;
    /** @type {string | undefined} */
    #description;
    /** @type {string | readonly import("./yamlTypes.js").YamlLink[] | undefined} */
    #see_also;
    /** @type {string | undefined} */
    #content;
    /** @type {YamlSource<import("./yamlTypes.js").YamlEngine>[]} */
    #sources = [];
    /** @type {Set<Language>} @readonly */
    #languages = new Set();
    /** @type {Map<string, EngineFeature>} @readonly */
    #features = new Map();
    /** @type {readonly Language[] | undefined} */
    #orderedLanguages;
    /** @type {readonly EngineFeature[] | undefined} */
    #orderedFeatures;

    #reporter = new DiagnosticsReporter(this.#diagnostics, this.#sources, this.references);

    /**
     * @param {Documentation} docs
     * @param {string} id
     */
    constructor(docs, id) {
        super(docs);
        this.id = id;
    }

    get name() { return this.#name ?? this.id; }
    get isValid() { return this.#isValid ?? false; }
    get priority() { return this.#priority ?? 1000; }
    get render() { return this.id !== "default"; }
    get reference() { return this.#reference; }
    get description() { return this.#description; }
    get see_also() { return this.#see_also; }
    get content() { return this.#content; }
    /** @returns {ReadonlySet<Language>} */
    get languages() { return this.#languages; }
    /** @returns {ReadonlyMap<string, EngineFeature>} */
    get features() { return this.#features; }

    get orderedLanguages() {
        return this.#orderedLanguages ??= [...this.languages]
            .filter(language => language.isValid)
            .sort((a, b) => a.compareTo(b));
    }

    get orderedFeatures() {
        return this.#orderedFeatures ??= [...this.docs.features.values()]
            .filter(feature => feature.isValid)
            .map(feature => this.#features.get(feature.id) ?? this.docs.getDefaultFeature(feature.id))
            .filter(isDefined)
            .sort((a, b) => a.compareTo(b));
    }

    #invalidating = false;
    invalidate() {
        if (this.#invalidating) return;
        this.#invalidating = true;
        this.#isValid = undefined;
        this.#diagnostics.clear();
        this.#orderedFeatures = undefined;
        this.#orderedLanguages = undefined;
        this.docs.invalidate();
        for (const language of this.#languages) {
            language.invalidate();
        }
        this.#invalidating = false;
    }

    /**
     * @param {import("./yamlTypes.js").YamlEngine} yaml
     * @param {string} filename
     * @param {(languageId: string) => Language} getLanguage
     */
    mergeFrom(yaml, filename, getLanguage = languageId => {
        const language = this.docs.languages.get(languageId);
        if (!language) throw new Error("Language not defined");
        return language;
    }) {
        this.#sources.push({ yaml, filename });
        if (yaml.name !== undefined) this.#name = yaml.name;
        if (yaml.priority !== undefined) this.#priority = yaml.priority;
        if (yaml.reference !== undefined) this.#reference = yaml.reference;
        if (yaml.description !== undefined) this.#description = yaml.description;
        if (yaml.see_also !== undefined) this.#see_also = yaml.see_also;
        if (yaml.content !== undefined) this.#content = yaml.content;
        if (yaml.languages) {
            for (const languageId of yaml.languages) {
                const language = getLanguage(typeof languageId === "string" ? languageId : languageId.language).addReference(filename);
                if (!this.#languages.has(language)) {
                    this.#languages.add(language);
                    language.invalidate();
                }
            }
        }
        this.invalidate();
    }

    /**
     * @param {Feature} feature
     */
    getOrCreateEngineFeature(feature) {
        let engineFeature = this.#features.get(feature.id);
        if (!engineFeature) {
            this.#features.set(feature.id, engineFeature = new EngineFeature(this, feature));
            this.invalidate();
            feature.invalidate();
        }
        return engineFeature;
    }

    /**
     * @param {Diagnostics} diagnostics
     */
    check(diagnostics) {
        if (this.#isValid !== undefined) {
            if (this.#diagnostics) {
                diagnostics.copyFrom(this.#diagnostics);
            }
            return this.#isValid;
        }

        this.#isValid = false;
        this.#diagnostics.clear();

        let valid = true;

        if (!this.#name) {
            this.#reporter.reportSourceOrReferenceError(
                `A valid 'name' property was not defined for engine '${this.id}'`,
                `Engine '${this.id}' was not defined.`);
        }


        if (this.id === "#todo") {
            this.#reporter.reportSourceError(`An engine named '#todo' is not valid`);
            this.#reporter.reportReferenceError(`An engine named '#todo' is not valid`);
        }
        else {
            if (!this.#reference && this.id !== "default") {
                this.#reporter.reportSourceError(`A valid 'reference' property was not defined for engine '${this.id}'`);
            }

            for (const feature of this.docs.features.values()) {
                if (feature.isValid && !this.#features.has(feature.id)) {
                    const defaultFeature = this.docs.getDefaultFeature(feature.id);
                    if (defaultFeature?.isValid) {
                        if (defaultFeature.supported) {
                            this.#reporter.reportSourceError(`Engine '${this.id}' does not contain a definition for supported default feature '${feature.id}'.`, true);
                        }
                        else {
                            this.#reporter.reportSourceWarning(`Engine '${this.id}' does not contain a definition for unsupported default feature '${feature.id}'.`, true);
                        }
                    }
                    else {
                        this.#reporter.reportSourceError(`Engine '${this.id}' does not contain a definition for feature '${feature.id}'.`, true);
                    }
                }
            }

            for (const engineFeature of this.#features.values()) {
                valid = engineFeature.check(this.#diagnostics) && valid;
            }
        }

        diagnostics.copyFrom(this.#diagnostics);
        return this.#isValid = valid && this.#diagnostics.errorsSize === 0;
    }

    /**
     * @template {keyof import("./yamlTypes.js").YamlEngine} K
     * @param {K} key
     * @returns {YamlEntry<ElementType<Required<import("./yamlTypes.js").YamlEngine>[K]>[]> | undefined}
     */
    getMergedEntry(key) {
        /** @type {Set<import("./yamlTypes.js").YamlEngine[K] extends readonly any[] ? NonNullable<import("./yamlTypes.js").YamlEngine[K]>[number] : NonNullable<import("./yamlTypes.js").YamlEngine[K]>> | undefined} */
        let values;
        /** @type {string[] | undefined} */
        let sources;
        for (const source of this.#sources) {
            const value = source.yaml[key];
            if (isDefined(value)) {
                values ??= new Set();
                sources ??= [];
                if (/** @type {(ar: any) => ar is readonly any[]} */(Array.isArray)(value)) {
                    for (const v of value) {
                        values.add(v);
                    }
                    sources.push(source.filename);
                }
                else {
                    values.add(value);
                    sources.push(source.filename);
                }
            }
        }
        return values && makeYamlEntry(/** @type {*} */([...values]), sources);
    }

    /**
     * @template {keyof import("./yamlTypes.js").YamlEngine} K
     * @param {K} key
     * @returns {YamlEntry<import("./yamlTypes.js").YamlEngine[K]> | undefined}
     */
    getEntry(key) {
        for (let i = this.#sources.length - 1; i >= 0; i--) {
            const source = this.#sources[i];
            const value = source.yaml[key];
            if (value !== undefined && value !== null) {
                return makeYamlEntry(value, source.filename);
            }
        }
    }

    /**
     * @param {DocumentationBuilder} builder
     */
    buildGraph(builder) {
        const data = builder.getOrAddEngine(this.id);
        if (!data.built && this.isValid && this.render) {
            data.built = true;
            data.outFile = `engines/${this.id}.md`;

            const absoluteOutFile = path.resolve(builder.outDir, data.outFile);
            const [name = this.id, nameSources] = this.getEntry("name") ?? missingEntry;
            const [priority, prioritySources] = this.getEntry("priority") ?? missingEntry;
            const [reference, referenceSources] = this.getEntry("reference") ?? missingEntry;
            const [description, descriptionSources] = this.getEntry("description") ?? missingEntry;
            const [see_also, see_alsoSources] = this.getEntry("see_also") ?? missingEntry;
            const [links, linksSources] = this.getEntry("links") ?? missingEntry;
            const [content, contentSources] = this.getEntry("content") ?? missingEntry;
            const [, languagesSources] = this.getMergedEntry("languages") ?? missingEntry;
            const features = this.orderedFeatures
                .map(feature => feature.buildGraph(builder))
                .filter(feature => !!feature.built);

            data.name = name;
            data.priority = priority;
            data.reference = reference;
            data.description = trimLines(description);
            data.see_also = typeof see_also === "string" ? see_also : see_also?.map(link => typeof link === "string" ? { engine: link, name: this.docs.engines.get(link)?.name } : link);
            data.features = features;
            data.languages = this.orderedLanguages.map(language => language.buildGraph(builder));
            data.links = links;
            data.content = trimLines(content);

            data.nameSources = relativeSources(nameSources, absoluteOutFile);
            data.prioritySources = relativeSources(prioritySources, absoluteOutFile);
            data.referenceSources = relativeSources(referenceSources, absoluteOutFile);
            data.descriptionSources = relativeSources(descriptionSources, absoluteOutFile);
            data.see_alsoSources = relativeSources(see_alsoSources, absoluteOutFile);
            data.languagesSources = relativeSources(languagesSources, absoluteOutFile);
            data.linksSources = relativeSources(linksSources, absoluteOutFile);
            data.contentSources = relativeSources(contentSources, absoluteOutFile);
        }
        return data;
    }

    /**
     * @param {Map<string, string>} outputs
     * @param {import("./templateTypes.js").EngineTemplateData} data
     */
    build(outputs, data) {
        if (!this.render) return;
        if (!data.built || !data.outFile) return;
        data.features = data.features
            ?.map(featureData => {
                if (featureData.built) {
                    const feature = this.features.get(featureData.feature.id);
                    if (feature) {
                        return feature.buildFragment(featureData);
                    }
                }
            })
            .filter(isDefined);
        data.content ??= trimLines(engineTemplate(data, handlebarsOptions) ?? "");
        data.content = trimLines(data.content);
        outputs.set(data.outFile, data.content ?? "");
    }

    /**
     * @param {Engine} other
     */
    compareTo(other) {
        return this.priority - other.priority
            || (this.name < other.name ? -1 : this.name > other.name ? +1 : 0);
    }
}

class EngineFeature extends Node {
    /** @type {Engine} @readonly */
    engine;
    /** @type {Feature} @readonly */
    feature;
    /** @type {boolean | undefined} */
    #isValid;
    /** @type {Diagnostics} */
    #diagnostics = new Diagnostics();
    /** @type {string | undefined} */
    #reference;
    /** @type {boolean | undefined} */
    #supported;
    /** @type {string | undefined} */
    #description;
    /** @type {string | undefined} */
    #syntax;
    /** @type {string | undefined} */
    #example;
    /** @type {string | readonly import("./yamlTypes.js").YamlLink[] | undefined} */
    #see_also;
    /** @type {string | undefined} */
    #content;
    /** @type {readonly import("./yamlTypes.js").YamlHrefLinkDefinition[] | undefined} */
    #links;
    /** @type {YamlSource<import("./yamlTypes.js").YamlEngineFeature>[]} */
    #sources = [];

    #reporter = new DiagnosticsReporter(this.#diagnostics, this.#sources, this.references);

    /**
     * @param {Engine} engine
     * @param {Feature} feature
     */
    constructor(engine, feature) {
        super(engine.docs);
        this.engine = engine;
        this.feature = feature;
    }

    get reference() { return this.#reference; }
    get isValid() { return this.#isValid ?? false; }
    get supported() { return this.#supported; }
    get description() { return this.#description; }
    get syntax() { return this.#syntax; }
    get example() { return this.#example; }
    get see_also() { return this.#see_also; }
    get content() { return this.#content; }
    /** @returns { readonly import("./yamlTypes.js").YamlHrefLinkDefinition[] | undefined} */
    get links() { return this.#links; }

    #invalidating = false;
    invalidate() {
        if (this.#invalidating) return;
        this.#invalidating = true;
        this.#isValid = undefined;
        this.#diagnostics.clear();
        this.engine.invalidate();
        this.feature.invalidate();
        this.#invalidating = false;
    }

    /**
     * @param {import("./yamlTypes.js").YamlEngineFeature} yaml
     * @param {string} filename
     */
    mergeFrom(yaml, filename) {
        this.#sources.push({ yaml, filename });
        if (yaml.reference !== undefined) this.#reference = yaml.reference;
        if (yaml.supported !== undefined) this.#supported = yaml.supported;
        if (yaml.description !== undefined) this.#description = yaml.description;
        if (yaml.syntax !== undefined) this.#syntax = yaml.syntax;
        if (yaml.example !== undefined) this.#example = yaml.example;
        if (yaml.see_also !== undefined) this.#see_also = yaml.see_also;
        if (yaml.content !== undefined) this.#content = yaml.content;
        if (yaml.links !== undefined) this.#links = yaml.links;
        this.invalidate();
    }

    /**
     * @param {Diagnostics} diagnostics
     */
    check(diagnostics) {
        if (this.#isValid !== undefined) {
            if (this.#diagnostics) {
                diagnostics.copyFrom(this.#diagnostics);
            }
            return this.#isValid;
        }

        this.#isValid = false;
        this.#diagnostics.clear();

        if (this.#supported && (!this.#reference || this.#reference === "#not-supported-features") && this.engine.id !== "default") {
            this.#reporter.reportSourceError(`Feature '${this.feature.id}' for engine '${this.engine.id}' is marked as supported but does not have a valid 'reference' property.`);
        }

        diagnostics.copyFrom(this.#diagnostics);
        return this.#isValid = this.#diagnostics.errorsSize === 0;
    }

    /**
     * @template {keyof import("./yamlTypes.js").YamlEngineFeature} K
     * @param {K} key
     * @returns {YamlEntry<import("./yamlTypes.js").YamlEngineFeature[K]> | undefined}
     */
    getEntry(key) {
        for (let i = this.#sources.length - 1; i >= 0; i--) {
            const source = this.#sources[i];
            const value = source.yaml[key];
            if (value !== undefined && value !== null) {
                return makeYamlEntry(value, source.filename);
            }
        }
    }

    /**
     * @template {keyof import("./yamlTypes.js").YamlEngineFeature} K
     * @param {K} key
     * @returns {YamlEntry<import("./yamlTypes.js").YamlEngineFeature[K]> | undefined}
     */
    getDefaultEntry(key) {
        if (this.engine.id !== "default") {
            const defaultFeature = this.docs.getDefaultFeature(this.feature.id);
            if (defaultFeature) {
                for (let i = defaultFeature.#sources.length - 1; i >= 0; i--) {
                    const source = defaultFeature.#sources[i];
                    const value = source.yaml[key];
                    if (isDefined(value)) {
                        return makeYamlEntry(value, source.filename);
                    }
                }
            }
        }
    }

    /**
     * @template {keyof import("./yamlTypes.js").YamlFeature} K
     * @param {K} key
     * @returns {YamlEntry<import("./yamlTypes.js").YamlFeature[K]> | undefined}
     */
    getFallbackEntry(key) {
        return this.feature.getEntry(key);
    }

    /**
     * @param {DocumentationBuilder} builder
     */
    buildGraph(builder) {
        const engine = this.engine.buildGraph(builder);
        const feature = this.feature.buildGraph(builder);
        const data = builder.getOrAddEngineFeature(engine, feature);
        if (!data.built && this.isValid) {
            data.built = true;
            data.outFile = `engines/${engine.id}.md`;

            const absoluteOutFile = path.resolve(builder.outDir, data.outFile);
            const [name = feature.name, nameSources] = this.feature.getEntry("name") ?? missingEntry;
            const [aliases, aliasesSources] = this.feature.getMergedEntry("aliases") ?? missingEntry;
            const [reference, referenceSources] = this.getEntry("reference") ?? missingEntry;
            const [supported = false, supportedSources] = this.getEntry("supported") ?? this.getDefaultEntry("supported") ?? missingEntry;
            const [description, descriptionSources] = this.getEntry("description") ?? this.getDefaultEntry("description") ?? this.getFallbackEntry("description") ?? missingEntry;
            const [syntax, syntaxSources] = this.getEntry("syntax") ?? this.getDefaultEntry("syntax") ?? this.getFallbackEntry("syntax") ?? missingEntry;
            const [example, exampleSources] = this.getEntry("example") ?? this.getDefaultEntry("example") ?? this.getFallbackEntry("example") ?? missingEntry;
            const [see_also, see_alsoSources] = this.getEntry("see_also") ?? this.getDefaultEntry("see_also") ?? this.getFallbackEntry("see_also") ?? missingEntry;
            const [content, contentSources] = this.getEntry("content") ?? (this.#description || this.#syntax || this.#example || this.#see_also ? undefined : this.getDefaultEntry("content")) ?? missingEntry;
            const [links, linksSources] = this.getEntry("links") ?? this.getDefaultEntry("links") ?? this.getFallbackEntry("links") ?? missingEntry;

            data.name = name;
            data.aliases = aliases;
            data.supported = supported;
            data.reference = reference;
            data.description = trimLines(description);
            data.syntax = trimLines(syntax);
            data.example = trimLines(example);
            data.see_also = typeof see_also === "string" ? see_also : see_also?.map(link => typeof link === "string" ? { feature: link, name: this.docs.features.get(link)?.name } : link);
            data.links = links;
            data.content = trimLines(content);

            data.nameSources = relativeSources(nameSources, absoluteOutFile);
            data.aliasesSources = relativeSources(aliasesSources, absoluteOutFile);
            data.supportedSources = relativeSources(supportedSources, absoluteOutFile);
            data.syntaxSources = relativeSources(syntaxSources, absoluteOutFile);
            data.exampleSources = relativeSources(exampleSources, absoluteOutFile);
            data.referenceSources = relativeSources(referenceSources, absoluteOutFile);
            data.descriptionSources = relativeSources(descriptionSources, absoluteOutFile);
            data.see_alsoSources = relativeSources(see_alsoSources, absoluteOutFile);
            data.linksSources = relativeSources(linksSources, absoluteOutFile);
            data.contentSources = relativeSources(contentSources, absoluteOutFile);
        }
        return data;
    }

    /**
     * @param {import("./templateTypes.js").EngineFeatureTemplateData} data
     */
    buildFragment(data) {
        if (data.built) {
            data.content ??= trimLines(engineFeatureTemplate(data, handlebarsOptions));
        }
        return data;
    }

    /**
     * @param {EngineFeature} other
     */
    compareTo(other) {
        return this.feature.compareTo(other.feature)
            || this.engine.compareTo(other.engine);
    }
}

// /**
//  * @param {string} file
//  * @returns {Promise<{validate: import("ajv").ValidateFunction, schema: import("ajv").SchemaObject & import("ajv/dist/types/json-schema").SomeJSONSchema }>}
//  */
// async function getSchema(file) {
//     const text = await fs.readFile(file, { encoding: "utf8" });
//     /** @type {import("ajv").SchemaObject & import("ajv/dist/types/json-schema").SomeJSONSchema} */
//     const schema = JSON.parse(text);
//     const validate = (schema.$id && ajv.getSchema(schema.$id)) || ajv.compile(schema);
//     return { validate, schema };
// }

/**
 * @param {string} text
 */
function getYamlMime(text, skipSectionBreak = false) {
    const regexp = skipSectionBreak ? /^(?:---\n)?### YamlMime:([A-Z]\w+)/ : /^### YamlMime:([A-Z]\w+)/;
    return text ? regexp.exec(text.trim())?.[1] : undefined;
}

/**
 * @param {string} content
 * @param {string} section
 */
function extractSection(content, section) {
    const sectionRegExp = /^(#{1,6})\s+(\w+)\s*$/gm;

    let startMatch;
    while (startMatch = sectionRegExp.exec(content)) {
        if (startMatch[2].toLowerCase() === section.toLowerCase()) {
            break;
        }
    }
    if (!startMatch) return undefined;

    let endMatch;
    while (endMatch = sectionRegExp.exec(content)) {
        if (endMatch[1].length <= startMatch[1].length) {
            break;
        }
    }

    const start = startMatch.index + startMatch[0].length;
    const end = endMatch ? endMatch.index : content.length;
    const fragment = trimLines(content.slice(start, end));
    return fragment.trim() ? fragment : undefined;
}

/**
 * @param {any} data
 * @param {string} content
 * @param {{ value: boolean }} ref_used
 */
function replaceContent(data, content, ref_used) {
    switch (data) {
        case contentSymbol:
            ref_used.value = true;
            return content.trim() ? trimLines(content) : undefined;
        case contentDescriptionSymbol:
            ref_used.value = true;
            return extractSection(content, "description");
        case contentSyntaxSymbol:
            ref_used.value = true;
            return extractSection(content, "syntax");
        case contentExampleSymbol:
            ref_used.value = true;
            return extractSection(content, "example");
    }
    if (data === null || typeof data !== "object") {
        return data;
    }
    if (Array.isArray(data)) {
        let result;
        for (let i = 0; i < data.length; i++) {
            const value = data[i];
            const replaced = replaceContent(value, content, ref_used);
            if (result || value !== replaced) {
                if (!result) result = data.slice(0, i);
                result[i] = replaced;
            }
        }
        return result ?? data;
    }
    const keys = Object.getOwnPropertyNames(data);
    const result = {};
    let hasResult = false;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = data[key];
        const replaced = replaceContent(value, content, ref_used);
        result[key] = replaced;
        if (!hasResult && value !== replaced) {
            hasResult = true;
        }
    }
    return hasResult ? result : data;
}

/**
 * @template {string | undefined} S
 * @param {S} text
 * @returns {undefined extends S ? string | undefined : string}
 */
function trimLeadingLines(text) {
    return /** @type {*} */(text?.replace(/^(\s*\r?\n)+/, ""));
}

/**
 * @template {string | undefined} S
 * @param {S} text
 * @returns {undefined extends S ? string | undefined : string}
 */
function trimTrailingLines(text) {
    return /** @type {*} */(text?.replace(/(\r?\n\s*)+$/, ""));
}

/**
 * @template {string | undefined} S
 * @param {S} text
 * @returns {undefined extends S ? string | undefined : string}
 */
function trimLines(text) {
    return trimLeadingLines(trimTrailingLines(text));
}

/**
 * @template T
 * @param {T} value
 * @param {string | readonly string[] | undefined} [source]
 * @returns {YamlEntry<T>}
 */
function makeYamlEntry(value, source) {
    if (/** @type {(ar: any) => ar is readonly any[]} */(Array.isArray)(source)) {
        if (!source.length) source = undefined;
    }
    else if (source !== undefined){
        source = [source];
    }
    const entry = /** @type {YamlEntry<T>} */(source ? [value, source] : [value]);
    entry.value = value;
    if (source) entry.sources = source;
    return entry;
}

/**
 * @template T
 * @param {T} value
 * @returns {value is NonNullable<T>}
 */
function isDefined(value) {
    return value !== null && value !== undefined;
}

/**
 * @param {readonly string[] | undefined} sources
 * @param {string} outFile
 */
function relativeSources(sources, outFile) {
    return sources?.map(source => {
        const relative = path.relative(path.dirname(outFile), source);
        const result = path.isAbsolute(relative) ? relative : relative.replaceAll("\\", "/");
        return result;
    });
}

/**
 * @param {string} srcDir
 * @param {string} outDir
 */
async function build(srcDir, outDir) {
    const docs = await Documentation.create(srcDir);
    const result = docs.check();
    let errorCount = 0;
    for (const { error, filename, message } of docs.diagnostics) {
        if (error) {
            errorCount++;
            process.stderr.write(chalk`{red ERR!} {cyan ${filename}}: ${message}\n`);
        }
        else {
            process.stderr.write(chalk`{yellow WRN!} {cyan ${filename}}: ${message}\n`);
        }
    }

    if (!result && errorCount === 0) {
        errorCount++;
        process.stderr.write(chalk`{red ERR!} unknown error\n`);
    }

    if (errorCount === 0) {
        docs.build(outDir);
        await docs.emit(outDir);
    }

    return errorCount;
}

/**
 * @param {string} srcDir
 * @param {string} outDir
 */
async function normalBuild(srcDir, outDir) {
    const errorCount = await build(srcDir, outDir);
    if (errorCount !== 0) {
        process.exit(-1);
    }
    else {
        process.exit(0);
    }
}

let watcher;

/**
 * @param {string} srcDir
 * @param {string} outDir
 */
async function watchBuild(srcDir, outDir) {
    let debounceTimer;
    let building = false;
    let buildRequested = false;

    process.stderr.write("Watch mode starting...\n\n");

    await doBuild();

    watcher = watch("**/*.{md,yaml,yml}", { cwd: srcDir, persistent: true, ignoreInitial: true });
    watcher.add(path.join(templatesDir, "**/*.hbs"));
    watcher.add(path.join(schemasDir, "**/*.json"));
    watcher.on("all", requestBuild);

    function requestBuild() {
        if (building) {
            buildRequested = true;
            return;
        }

        if (debounceTimer) {
            clearTimeout(debounceTimer);
            debounceTimer = undefined;
        }
        else {
            cursorTo(process.stderr, 0, 0);
            clearScreenDown(process.stderr);
            process.stderr.write("\n\nFile change detected, starting build...\n\n");
        }

        debounceTimer = setTimeout(doBuild, 1000);
    }

    async function doBuild() {
        if (building) {
            return;
        }

        buildRequested = false;
        building = true;
        if (debounceTimer) {
            clearTimeout(debounceTimer);
            debounceTimer = undefined;
        }

        try {
            await reloadSchemas();
            await reloadTemplates();
            const errorCount = await build(srcDir, outDir);
            if (errorCount !== 0) {
                process.stderr.write(`\n\nBuild completed with ${errorCount} ${errorCount === 1 ? "error" : "errors"}.\n\n`);
            }
            else {
                process.stderr.write("\n\nBuild completed.\n\n");
            }
        }
        finally {
            building = false;
            if (buildRequested) {
                buildRequested = false;
                requestBuild();
            }
        }
    }
}

async function main() {
    let { srcDir, outDir } = argv;
    if (!srcDir) {
        srcDir = fileURLToPath(new URL("../src", import.meta.url));
        console.log(`'srcDir' not provided, using '${srcDir}'`);
    }
    if (!outDir) {
        outDir = fileURLToPath(new URL("../docs", import.meta.url));
        console.log(`'outDir' not provided, using '${outDir}'`);
    }
    const build = argv.watch ? watchBuild : normalBuild;
    await build(srcDir, outDir);
}

await main();