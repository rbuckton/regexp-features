import { Diagnostics, DiagnosticsReporter } from "./diagnostics.js";
import { Documentation } from "./documentation.js";
import { DocumentationBuilder } from "./documentationBuilder.js";
import { EngineFeature } from "./engineFeature.js";
import { Feature } from "./feature.js";
import { Language } from "./language.js";
import { Node } from "./node.js";
import { applyTemplate } from "./templates.js";
import { isDefined, makeYamlEntry, missingEntry, trimLines } from "./utils.js";

export class Engine extends Node {
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
    /** @type {string | readonly import("../yamlTypes.js").YamlLink[] | undefined} */
    #see_also;
    /** @type {string | undefined} */
    #content;
    /** @type {import("../types.js").YamlSource<import("../yamlTypes.js").YamlEngine>[]} */
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
     * @param {import("../yamlTypes.js").YamlEngine} yaml
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
     * @template {keyof import("../yamlTypes.js").YamlEngine} K
     * @param {K} key
     * @returns {import("../types.js").YamlEntry<import("../types.js").ElementType<Required<import("../yamlTypes.js").YamlEngine>[K]>[]> | undefined}
     */
    getMergedEntry(key) {
        /** @type {Set<import("../yamlTypes.js").YamlEngine[K] extends readonly any[] ? NonNullable<import("../yamlTypes.js").YamlEngine[K]>[number] : NonNullable<import("../yamlTypes.js").YamlEngine[K]>> | undefined} */
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
     * @template {keyof import("../yamlTypes.js").YamlEngine} K
     * @param {K} key
     * @returns {import("../types.js").YamlEntry<import("../yamlTypes.js").YamlEngine[K]> | undefined}
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
            data.supported_features = features.filter(feature => !!feature.supported);
            data.unsupported_features = features.filter(feature => !feature.supported);
            data.features = features;
            data.languages = this.orderedLanguages.map(language => language.buildGraph(builder));
            data.links = links;
            data.content = trimLines(content);

            data.nameSources = nameSources;
            data.prioritySources = prioritySources;
            data.referenceSources = referenceSources;
            data.descriptionSources = descriptionSources;
            data.see_alsoSources = see_alsoSources;
            data.languagesSources = languagesSources;
            data.linksSources = linksSources;
            data.contentSources = contentSources;
        }
        return data;
    }

    /**
     * @param {Map<string, string>} outputs
     * @param {import("../templateTypes.js").EngineTemplateData} data
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
        data.content ??= trimLines(applyTemplate("Engine", data) ?? "");
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
