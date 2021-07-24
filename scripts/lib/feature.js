import { Diagnostics, DiagnosticsReporter } from "./diagnostics.js";
import { Documentation } from "./documentation.js";
import { DocumentationBuilder } from "./documentationBuilder.js";
import { Engine } from "./engine.js";
import { Node } from "./node.js";
import { applyTemplate } from "./templates.js";
import { isDefined, makeYamlEntry, missingEntry, trimLines } from "./utils.js";

export class Feature extends Node {
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
    /** @type {string | readonly import("../yamlTypes.js").YamlLink[] | undefined} */
    #see_also;
    /** @type {string | undefined} */
    #content;
    /** @type {readonly import("../yamlTypes.js").YamlLinkDefinition[] | undefined} */
    #links;
    /** @type {import("../types.js").YamlSource<import("../yamlTypes.js").YamlFeature>[]} */
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
    /** @returns {readonly import("../yamlTypes.js").YamlLinkDefinition[] | undefined} */
    get links() { return this.#links; }

    get orderedEngines() {
        return this.#orderedEngines ??= [...this.docs.engines.values()]
            .filter(engine => engine.id !== "default" && engine.isValid && (engine.features.get(this.id)?.isValid ?? false))
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
     * @param {import("../yamlTypes.js").YamlFeature} yaml
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
     * @template {keyof import("../yamlTypes.js").YamlFeature} K
     * @param {K} key
     * @returns {import("../types.js").YamlEntry<import("../types.js").ElementType<Required<import("../yamlTypes.js").YamlFeature>[K]>[]> | undefined}
     */
    getMergedEntry(key) {
        /** @type {Set<import("../yamlTypes.js").YamlFeature[K] extends readonly any[] ? NonNullable<import("../yamlTypes.js").YamlFeature[K]>[number] : NonNullable<import("../yamlTypes.js").YamlFeature[K]>> | undefined} */
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
     * @template {keyof import("../yamlTypes.js").YamlFeature} K
     * @param {K} key
     * @returns {import("../types.js").YamlEntry<import("../yamlTypes.js").YamlFeature[K]> | undefined}
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

            const [name = this.id, nameSources] = this.getEntry("name") ?? missingEntry;
            const [priority, prioritySources] = this.getEntry("priority") ?? missingEntry;
            const [aliases, aliasesSources] = this.getEntry("aliases") ?? missingEntry;
            const [description, descriptionSources] = this.getEntry("description") ?? missingEntry;
            const [syntax, syntaxSources] = this.getEntry("syntax") ?? missingEntry;
            const [example, exampleSources] = this.getEntry("example") ?? missingEntry;
            const [see_also, see_alsoSources] = this.getEntry("see_also") ?? missingEntry;
            const [links, linksSources] = this.getEntry("links") ?? missingEntry;
            const [content, contentSources] = this.getEntry("content") ?? missingEntry;
            const engineFeatures = this.orderedEngines
                .map(engine => {
                    const engineFeatureData = engine.features.get(this.id)?.buildGraph(builder);
                    if (engineFeatureData?.built) {
                        return engineFeatureData;
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
            data.engineFeatures = engineFeatures;
            data.content = trimLines(content);

            data.nameSources = nameSources;
            data.prioritySources = prioritySources;
            data.aliasesSources = aliasesSources;
            data.syntaxSources = syntaxSources;
            data.exampleSources = exampleSources;
            data.descriptionSources = descriptionSources;
            data.see_alsoSources = see_alsoSources;
            data.linksSources = linksSources;
            data.contentSources = contentSources;
        }
        return data;
    }

    /**
     * @param {Map<string, string>} outputs
     * @param {import("../templateTypes.js").FeatureTemplateData} data
     */
    build(outputs, data) {
        if (!data.built || !data.outFile) return;
        data.content ??= trimLines(applyTemplate("Feature", data));
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
