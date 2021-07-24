export {};

/**
 * Indicates a string containing markdown.
 * @typedef {string} MarkdownString
 */

/**
 * Indicates a string containing a URI.
 * @typedef {string} URIString
 */

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
 * @typedef {[value: T, source?: readonly string[]]} YamlEntry
 */

/**
 * @template T
 * @typedef YamlSource
 * @property {T} yaml
 * @property {string} filename
 */