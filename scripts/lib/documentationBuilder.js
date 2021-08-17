import { ensureTrailingSlash } from "./utils.js";

const MATRIX_COLUMN_COUNT = 7;

export class DocumentationBuilder {
    /** @type {string} */
    outDir;

    /** @type {import("../templateTypes.js").LanguageTemplateData[]} */
    #languages = [];
    /** @type {Map<string, import("../templateTypes.js").LanguageTemplateData>} */
    #languagesMap = new Map();

    /** @type {import("../templateTypes.js").FeatureTemplateData[]} */
    #features = [];
    /** @type {Map<string, import("../templateTypes.js").FeatureTemplateData>} */
    #featuresMap = new Map();

    /** @type {import("../templateTypes.js").EngineTemplateData[]} */
    #engines = [];
    /** @type {Map<string, import("../templateTypes.js").EngineTemplateData>} */
    #enginesMap = new Map();

    /** @type {Map<`(engine:${string})(feature:${string})`, import("../templateTypes.js").EngineFeatureTemplateData>} */
    #engineFeatureMap = new Map();

    #data = {
        srcDir: "",
        outDir: "",
        branch: "",
        languages: this.#languages,
        features: this.#features,
        engines: this.#engines,
        featureMatrixes: /** @type {import("../templateTypes.js").FeatureMatrix[]} */([])
    };

    /**
     * @param {string} srcDir
     * @param {string} outDir
     * @param {string} branch
     */
    constructor(srcDir, outDir, branch) {
        this.srcDir = ensureTrailingSlash(srcDir);
        this.outDir = ensureTrailingSlash(outDir);
        this.#data.srcDir = this.srcDir;
        this.#data.outDir = this.outDir;
        this.#data.branch = branch;
    }

    /**
     * @param {string} id
     */
    getOrAddLanguage(id) {
        let language = this.#languagesMap.get(id);
        if (!language) {
            this.#languagesMap.set(id, language = {
                docs: this.#data,
                type: "Language",
                id,
                language: id,
                name: id
            });
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
            this.#featuresMap.set(id, feature = {
                docs: this.#data,
                type: "Feature",
                id,
                feature: id,
                name: id
            });
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
            this.#enginesMap.set(id, engine = {
                docs: this.#data,
                type: "Engine",
                id,
                engine: id,
                name: id
            });
            this.#engines.push(engine);
        }
        return engine;
    }

    /**
     * @param {import("../templateTypes.js").EngineTemplateData} engine
     * @param {import("../templateTypes.js").FeatureTemplateData} feature
     */
    getOrAddEngineFeature(engine, feature) {
        let engineFeature = this.#engineFeatureMap.get(`(engine:${engine.id})(feature:${feature.id})`);
        if (!engineFeature) this.#engineFeatureMap.set(`(engine:${engine.id})(feature:${feature.id})`, engineFeature = {
            docs: this.#data,
            type: "EngineFeature",
            engine,
            feature,
            name: feature.id,
            supported: false
        });
        return engineFeature;
    }

    /**
     * @returns {import("../templateTypes.js").DocumentationTemplateData}
     */
    getDocs() {
        /**
         * @param {import("../templateTypes.js").LanguageTemplateData | import("../templateTypes.js").FeatureTemplateData | import("../templateTypes.js").EngineTemplateData} a
         * @param {import("../templateTypes.js").LanguageTemplateData | import("../templateTypes.js").FeatureTemplateData | import("../templateTypes.js").EngineTemplateData} b
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

        data.featureMatrixes.length = 0;
        const matrixCount = Math.ceil(data.engines.length / MATRIX_COLUMN_COUNT);
        for (let matrixIndex = 0; matrixIndex < matrixCount; matrixIndex++) {
            /** @type {import("../templateTypes.js").FeatureMatrixRow[]} */
            const rows = [];
            /** @type {import("../templateTypes.js").EngineTemplateData[]} */
            const columns = [];
            /** @type {import("../templateTypes.js").FeatureMatrix} */
            const matrix = { columns, rows };
            const start = matrixIndex * MATRIX_COLUMN_COUNT;
            const end = Math.min(start + MATRIX_COLUMN_COUNT, data.engines.length);
            for (let i = start; i < end; i++) {
                columns.push(data.engines[i]);
            }
            for (const feature of data.features) {
                /** @type {(import("../templateTypes.js").EngineFeatureTemplateData | undefined)[]} */
                const cells = [];
                for (let i = start; i < end; i++) {
                    const engine = data.engines[i];
                    const engineFeature = engine.features?.find(engineFeature => engineFeature.feature === feature);
                    cells.push(engineFeature);
                }

                /** @type {import("../templateTypes.js").FeatureMatrixRow} */
                const row = { feature, cells };
                rows.push(row);
            }
            data.featureMatrixes.push(matrix);
        }

        return data;
    }
}
