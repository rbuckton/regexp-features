import * as fs from "fs/promises";
import handlebars from "handlebars";
import * as path from "path";
import { engineFeatureTemplateFileUrl, engineIndexTemplateFileUrl, engineTemplateFileUrl, featureIndexTemplateFileUrl, featureTemplateFileUrl, indexTemplateFileUrl, languageIndexTemplateFileUrl, languageTemplateFileUrl, partialsDirUrl, sourcesPartialFileUrl } from "./paths.js";
import { trimLeadingLines, trimLines, trimTrailingLines } from "./utils.js";

/** @type {import("handlebars").RuntimeOptions} */
export const handlebarsOptions = {
    helpers: {
        eq(a, b) {
            return a === b;
        },
        neq(a, b) {
            return a === b;
        },
        hlink(value) {
            return `${String(value).toLowerCase().replace(/\W+/g, "-")}`;
        },
        single(value) {
            return Array.isArray(value) ? value.length === 1 : !!value
        },
        multiple(value) {
            return Array.isArray(value) && value.length > 1;
        },
        add(a, b) {
            return a + b;
        },
        union(a, b) {
            const set = new Set();
            if (Array.isArray(a)) {
                for (const _ of a) set.add(_);
            }
            else if (a) {
                set.add(a);
            }
            if (Array.isArray(b)) {
                for (const _ of b) set.add(_);
            }
            else if (b) {
                set.add(b);
            }
            return set.size ? [...set] : undefined
        },
        makeRelative(to, from) {
            if (!from.endsWith("/")) from = path.dirname(from);
            const relative = path.relative(from, to);
            const result = path.isAbsolute(relative) ? relative : relative.replaceAll("\\", "/");
            return result || ".";
        },
        trimLeadingLines,
        trimTrailingLines,
        trimLines,
        isArray: Array.isArray
    }
};

/**
 * @typedef TemplateMap
 * @property {HandlebarsTemplateDelegate<import("../templateTypes.js").LanguageTemplateData>} Language
 * @property {HandlebarsTemplateDelegate<import("../templateTypes.js").FeatureTemplateData>} Feature
 * @property {HandlebarsTemplateDelegate<import("../templateTypes.js").EngineTemplateData>} Engine
 * @property {HandlebarsTemplateDelegate<import("../templateTypes.js").EngineFeatureTemplateData>} EngineFeature
 * @property {HandlebarsTemplateDelegate<import("../templateTypes.js").OtherFileTemplateData>} LanguageIndex
 * @property {HandlebarsTemplateDelegate<import("../templateTypes.js").OtherFileTemplateData>} FeatureIndex
 * @property {HandlebarsTemplateDelegate<import("../templateTypes.js").OtherFileTemplateData>} EngineIndex
 * @property {HandlebarsTemplateDelegate<import("../templateTypes.js").OtherFileTemplateData>} Index
 */

/** @type {Partial<TemplateMap>} */
const templates = {
    Language: undefined,
    Feature: undefined,
    Engine: undefined,
    EngineFeature: undefined,
    LanguageIndex: undefined,
    FeatureIndex: undefined,
    EngineIndex: undefined,
    Index: undefined,
};

export async function reloadTemplates() {
    handlebarsOptions.partials = {};
    for (const entry of await fs.readdir(partialsDirUrl, { withFileTypes: true })) {
        if (!entry.isFile()) continue;
        const parts = path.parse(entry.name);
        if (parts.ext !== ".hbs") continue;
        handlebarsOptions.partials[parts.name] = handlebars.compile(await fs.readFile(new URL(entry.name, partialsDirUrl), "utf8"));
    }
    templates.Language = handlebars.compile(await fs.readFile(languageTemplateFileUrl, "utf8"));
    templates.Feature = handlebars.compile(await fs.readFile(featureTemplateFileUrl, "utf8"));
    templates.Engine = handlebars.compile(await fs.readFile(engineTemplateFileUrl, "utf8"));
    templates.EngineFeature = handlebars.compile(await fs.readFile(engineFeatureTemplateFileUrl, "utf8"));
    templates.LanguageIndex = handlebars.compile(await fs.readFile(languageIndexTemplateFileUrl, "utf8"));
    templates.FeatureIndex = handlebars.compile(await fs.readFile(featureIndexTemplateFileUrl, "utf8"));
    templates.EngineIndex = handlebars.compile(await fs.readFile(engineIndexTemplateFileUrl, "utf8"));
    templates.Index = handlebars.compile(await fs.readFile(indexTemplateFileUrl, "utf8"));
}

/**
 * @template {keyof TemplateMap} K
 * @param {K} templateName
 * @param {Parameters<TemplateMap[K]>[0]} data
 */
export function applyTemplate(templateName, data) {
    const template = /** @type {TemplateMap[K] | undefined} */(templates[templateName]);
    if (!template) throw new Error(`Template '${templateName}' not yet loaded, call 'reloadTemplates()' before calling this function.`);
    return invokeTemplate(template, data);
}

/**
 * @template {HandlebarsTemplateDelegate} T
 * @param {T} template 
 * @param {Parameters<T>[0]} data 
 */
function invokeTemplate(template, data) {
    return template(data, handlebarsOptions);
}