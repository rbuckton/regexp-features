import * as fs from "fs/promises";
import handlebars from "handlebars";
import * as path from "path";
import * as util from "util";
import { engineFeatureTemplateFileUrl, engineIndexTemplateFileUrl, engineTemplateFileUrl, featureIndexTemplateFileUrl, featureTemplateFileUrl, indexTemplateFileUrl, languageIndexTemplateFileUrl, languageTemplateFileUrl, partialsDirUrl } from "./paths.js";
import { ensureTrailingSlash, normalizePathSeparators, trimLeadingLines, trimLines, trimTrailingLines } from "./utils.js";

/** @type {import("handlebars").RuntimeOptions} */
export const handlebarsOptions = {
    helpers: {
        // comparisons
        /**
         * @param {any} a
         * @param {any} b
         */
        eq(a, b /*, options*/) {
            if (arguments.length !== 3) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return a === b;
        },
        /**
         * @param {any} a
         * @param {any} b
         */
        ne(a, b /*, options*/) {
            if (arguments.length !== 3) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return a === b;
        },
        /**
         * @param {any} a
         * @param {any} b
         */
        ieq(a, b /*, options*/) {
            if (arguments.length !== 3) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            if (typeof a === "string") a = a.toLowerCase().toUpperCase();
            if (typeof b === "string") b = b.toLowerCase().toUpperCase();
            return a === b;
        },
        /**
         * @param {any} a
         * @param {any} b
         */
        ine(a, b /*, options*/) {
            if (arguments.length !== 3) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            if (typeof a === "string") a = a.toLowerCase().toUpperCase();
            if (typeof b === "string") b = b.toLowerCase().toUpperCase();
            return a === b;
        },
        /**
         * @param {any} a
         * @param {any} b
         */
        lt(a, b /*, options*/) {
            if (arguments.length !== 3) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return a < b;
        },
        /**
         * @param {any} a
         * @param {any} b
         */
        le(a, b /*, options*/) {
            if (arguments.length !== 3) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return a <= b;
        },
        /**
         * @param {any} a
         * @param {any} b
         */
        gt(a, b /*, options*/) {
            if (arguments.length !== 3) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return a < b;
        },
        /**
         * @param {any} a
         * @param {any} b
         */
        ge(a, b /*, options*/) {
            if (arguments.length !== 3) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return a >= b;
        },

        // operations
        /**
         * @param {any} a
         * @param {any} b
         */
        add(a, b /*, options*/) {
            if (arguments.length !== 3) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return a + b;
        },

        // set/array operations
        /**
         * @param {any[]} args
         */
        distinct(...args /*, options*/) {
            args.pop(); // drop options

            /** @type {Set} */
            const set = new Set();
            for (const arg of args) {
                if (arg) set.add(arg);
            }
            return set.size ? [...set] : undefined
        },
        flat(...args /*, options*/) {
            args.pop(); // drop options
            return args.flat();
        },
        /**
         * @param {any[]} args
         */
        union(...args /*, options*/) {
            if (args.length < 3) throw new TypeError("Expected at least 2 arguments");
            args.pop(); // drop options

            /** @type {Set} */
            const union = new Set();
            for (const arg of args) {
                if (arg) {
                    for (const element of Array.isArray(arg) ? arg : [arg]) {
                        union.add(element);
                    }
                }
            }
            return union.size ? [...union] : undefined
        },
        /**
         * @param {any[]} args
         */
        intersection(...args /*, options*/) {
            if (args.length < 3) throw new TypeError("Expected at least 2 arguments");
            args.pop(); // drop options

            /** @type {Set | undefined} */
            let intersection;
            /** @type {Set | undefined} */
            let workArea;
            for (const arg of args) {
                if (arg) {
                    intersection = new Set();
                    for (const element of Array.isArray(arg) ? arg : [arg]) {
                        if (!workArea || workArea.delete(element)) {
                            intersection.add(element);
                        }
                    }
                    workArea = intersection;
                }
            }
            return intersection?.size ? [...intersection] : undefined
        },
        /**
         * @param {any} value
         */
        isArray(value /*, options*/) {
            return Array.isArray(value);
        },
        /**
         * @param {any} value
         */
        single(value /*, options*/) {
            if (arguments.length !== 2) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return Array.isArray(value) ? value.length === 1 : !!value
        },
        /**
         * @param {any} value
         */
        multiple(value /*, options*/) {
            if (arguments.length !== 2) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return Array.isArray(value) && value.length > 1;
        },
        ar(...args /*, options*/) {
            args.pop();
            return args;
        },

        // markdown helpers
        /**
         * @param {any} value
         */
        hlink(value /*, options*/) {
            if (arguments.length !== 2) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return `${String(value).toLowerCase().replace(/\W+/g, "-")}`;
        },

        // path helpers
        resolve(...args /*, options*/) {
            if (args.length < 2) throw new TypeError("Expected at least one arguments");
            const options = args.pop();
            const outDir = options?.data?.root?.docs?.outDir;
            if (outDir) args.unshift(outDir);
            return resolve(...args);
        },

        /**
         * @param {string} from
         * @param {string} to
         */
        relative(from, to, /** @type {import("handlebars").HelperOptions} */ options) {
            if (arguments.length !== 3) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            const outDir = options.data?.root?.docs?.outDir;
            return outDir ? relative(resolve(outDir, from), resolve(outDir, to)) : relative(from, to);
        },

        // string helpers
        trimLeadingLines,
        trimTrailingLines,
        trimLines,
        concat(...args /*, options*/) {
            args.pop();
            return "".concat(...args);
        },


        /**
         *
         * @param {string} s
         * @param {string} [ch]
         */
        split(s, ch /*, options*/) {
            if (arguments.length !== 2 && arguments.length !== 3) throw new TypeError(`Expected 2-3 arguments, got ${arguments.length} instead.`);
            if (typeof ch !== "string") ch = ",";
            return s.split(ch).map(s => s.trim());
        },

        // other
        isObject(value /*, options*/) {
            if (arguments.length !== 2) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return typeof value === "object" && value !== null;
        },
        inspect(value /*, options*/) {
            if (arguments.length !== 2) throw new TypeError(`Expected 2 arguments, got ${arguments.length} instead.`);
            return `<!--\n${util.inspect(value)}\n-->`;
        },
        lookupSources(...names /*, options*/) {
            const options = names.pop();
            names = names.flat();
            const sources = new Map();
            for (const arg of names) {
                const dataSources = options.data.root?.[arg + "Sources"];
                if (Array.isArray(dataSources)) {
                    for (const source of dataSources) {
                        let origins = sources.get(source);
                        if (!origins) sources.set(source, origins = new Set());
                        origins.add(arg);
                    }
                }
            }
            return [...sources.entries()].map(([href, origins]) => ({ href, names: [...origins] }));
        }
    }
};

/**
 * @param {string[]} args
 */
function resolve(...args) {
    args = args.map(normalizePathSeparators);
    const isDir = args[args.length - 1].endsWith("/");
    const resolved = normalizePathSeparators(path.resolve(...args));
    return isDir ? ensureTrailingSlash(resolved) : resolved;
}

/**
 * @param {string} from
 * @param {string} to
 */
function relative(from, to) {
    from = normalizePathSeparators(from);
    to = normalizePathSeparators(to);
    if (!path.isAbsolute(from)) throw new TypeError("Argument must be absolute: from");
    if (!path.isAbsolute(to)) throw new TypeError("Argument must be absolute: to");
    if (!from.endsWith("/")) {
        from = ensureTrailingSlash(path.dirname(from));
    }
    const result = normalizePathSeparators(path.relative(from, to)) || ".";
    return to.endsWith("/") ? ensureTrailingSlash(result) : result;
}

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