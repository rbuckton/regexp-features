import { Diagnostics, DiagnosticsReporter } from "./diagnostics.js";
import { DocumentationBuilder } from "./documentationBuilder.js";
import { Engine } from "./engine.js";
import { Feature } from "./feature.js";
import { Node } from "./node.js";
import { applyTemplate } from "./templates.js";
import { isDefined, makeYamlEntry, missingEntry, trimLines } from "./utils.js";

export class EngineFeature extends Node {
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
    /** @type {string | readonly import("../yamlTypes.js").YamlLink[] | undefined} */
    #see_also;
    /** @type {string | undefined} */
    #content;
    /** @type {readonly import("../yamlTypes.js").YamlHrefLinkDefinition[] | undefined} */
    #links;
    /** @type {import("../types.js").YamlSource<import("../yamlTypes.js").YamlEngineFeature>[]} */
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
    /** @returns { readonly import("../yamlTypes.js").YamlHrefLinkDefinition[] | undefined} */
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
     * @param {import("../yamlTypes.js").YamlEngineFeature} yaml
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
     * @template {keyof import("../yamlTypes.js").YamlEngineFeature} K
     * @param {K} key
     * @returns {import("../types.js").YamlEntry<import("../yamlTypes.js").YamlEngineFeature[K]> | undefined}
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
     * @template {keyof import("../yamlTypes.js").YamlEngineFeature} K
     * @param {K} key
     * @returns {import("../types.js").YamlEntry<import("../yamlTypes.js").YamlEngineFeature[K]> | undefined}
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
     * @template {keyof import("../yamlTypes.js").YamlFeature} K
     * @param {K} key
     * @returns {import("../types.js").YamlEntry<import("../yamlTypes.js").YamlFeature[K]> | undefined}
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

            data.nameSources = nameSources;
            data.aliasesSources = aliasesSources;
            data.supportedSources = supportedSources;
            data.syntaxSources = syntaxSources;
            data.exampleSources = exampleSources;
            data.referenceSources = referenceSources;
            data.descriptionSources = descriptionSources;
            data.see_alsoSources = see_alsoSources;
            data.linksSources = linksSources;
            data.contentSources = contentSources;
        }
        return data;
    }

    /**
     * @param {import("../templateTypes.js").EngineFeatureTemplateData} data
     */
    buildFragment(data) {
        if (data.built) {
            data.content ??= trimLines(applyTemplate("EngineFeature", data));
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
