import { Diagnostics, DiagnosticsReporter } from "./diagnostics.js";
import { Documentation } from "./documentation.js";
import { DocumentationBuilder } from "./documentationBuilder.js";
import { Engine } from "./engine.js";
import { Node } from "./node.js";
import { applyTemplate } from "./templates.js";
import { makeYamlEntry, missingEntry, trimLines } from "./utils.js";

export class Language extends Node {
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
    /** @type {string | readonly import("../yamlTypes.js").YamlLink[] | undefined} */
    #see_also;
    /** @type {string | undefined} */
    #content;
    /** @type {import("../types.js").YamlSource<import("../yamlTypes.js").YamlLanguage>[]} */
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
     * @param {import("../yamlTypes.js").YamlLanguage} yaml
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
     * @template {keyof import("../yamlTypes.js").YamlLanguage} K
     * @param {K} key
     * @returns {import("../types.js").YamlEntry<import("../yamlTypes.js").YamlLanguage[K]> | undefined}
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

            data.nameSources = nameSources;
            data.prioritySources = prioritySources;
            data.referenceSources = referenceSources;
            data.descriptionSources = descriptionSources;
            data.see_alsoSources = see_alsoSources;
            data.contentSources = contentSources;
        }
        return data;
    }

    /**
     * @param {Map<string, string>} outputs
     * @param {import("../templateTypes.js").LanguageTemplateData} data
     */
    build(outputs, data) {
        if (!data.built || !data.outFile) return;
        data.content ??= trimLines(applyTemplate("Language", data));
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
