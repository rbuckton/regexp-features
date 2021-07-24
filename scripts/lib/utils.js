/**
 * @param {string} a
 * @param {string} b
 */
export function compareStrings(a, b) {
    return a < b ? -1 : a > b ? +1 : 0;
}

/**
 * @param {string | undefined} a
 * @param {string | undefined} b
 */
export function compareOptionalStrings(a, b) {
    return a === undefined ? b === undefined ? 0 : -1 :
        b === undefined ? +1 :
        compareStrings(a, b);
}

/**
 * @template T
 * @param {T} value
 * @returns {value is NonNullable<T>}
 */
export function isDefined(value) {
    return value !== null && value !== undefined;
}

/**
 * @param {string} text
 * @param {boolean} skipSectionBreak
 */
export function getYamlMime(text, skipSectionBreak = false) {
    const regexp = skipSectionBreak ? /^(?:---\n)?### YamlMime:([A-Z]\w+)/ : /^### YamlMime:([A-Z]\w+)/;
    return text ? regexp.exec(text.trim())?.[1] : undefined;
}

/**
 * @template {string | undefined} S
 * @param {S} text
 * @returns {undefined extends S ? string | undefined : string}
 */
export function trimLeadingLines(text) {
    return /** @type {*} */(text?.replace(/^(\s*\r?\n)+/, ""));
}

/**
 * @template {string | undefined} S
 * @param {S} text
 * @returns {undefined extends S ? string | undefined : string}
 */
export function trimTrailingLines(text) {
    return /** @type {*} */(text?.replace(/(\r?\n\s*)+$/, ""));
}

/**
 * @template {string | undefined} S
 * @param {S} text
 * @returns {undefined extends S ? string | undefined : string}
 */
export function trimLines(text) {
    return trimLeadingLines(trimTrailingLines(text));
}

/**
 * @template T
 * @param {T} value
 * @param {string | readonly string[] | undefined} [source]
 * @returns {import("../types.js").YamlEntry<T>}
 */
export function makeYamlEntry(value, source) {
    if (/** @type {(ar: any) => ar is readonly any[]} */(Array.isArray)(source)) {
        if (!source.length) source = undefined;
    }
    else if (source !== undefined){
        source = [source];
    }
    return source ? [value, source] : [value];
}

/** @type {import("../types.js").YamlEntry<undefined> } */
export const missingEntry = makeYamlEntry(undefined);
