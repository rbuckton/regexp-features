export {};

/**
 * Defines a link to a {@link YamlFeature}.
 * @typedef YamlFeatureLinkDefinition
 * @property {string} feature
 * @property {string} [name]
 */

/**
 * Defines a link to a {@link YamlEngine}.
 * @typedef YamlEngineLinkDefinition
 * @property {string} engine
 * @property {string} [name]
 */

/**
 * Defines a link to a {@link YamlLanguage}.
 * @typedef YamlLanguageLinkDefinition
 * @property {string} language
 * @property {string} [name]
 */

/**
 * Defines a link to a URL.
 * @typedef YamlHrefLinkDefinition
 * @property {import("./types.js").URIString} href
 * @property {string} [name]
 */

/**
 * Defines a link
 * @typedef {YamlFeatureLinkDefinition | YamlEngineLinkDefinition | YamlLanguageLinkDefinition | YamlHrefLinkDefinition} YamlLinkDefinition
 */

/**
 * Defines a link
 * @typedef {string | YamlLinkDefinition} YamlLink
 */

/**
 * Defines a programming language.
 * @typedef YamlLanguage
 * @property {string} language A unique identifier for a language.
 * @property {string} [name] The name of the language.
 * @property {number} [priority] A numeric priority for the language. NOTE: This is often specified via a `toc.yml` file.
 * @property {import("./types.js").URIString} [reference] A reference to more information about the language.
 * @property {import("./types.js").MarkdownString} [description] A description for the language.
 * @property {import("./types.js").MarkdownString | readonly YamlLink[]} [see_also] A string containing markdown content or an array of {@link YamlLink} entries.
 * @property {readonly YamlHrefLinkDefinition[]} [links] Link references to add to the bottom of the document.
 * @property {import("./types.js").MarkdownString} [content] Overrides the content for the language.
 */

/**
 * Defines a regular expression engine feature.
 * @typedef YamlFeature
 * @property {string} feature A unique identifier for the feature.
 * @property {string} [name] A name for the feature.
 * @property {number} [priority] A numeric priority for the feature. NOTE: This is often specified via a `toc.yml` file.
 * @property {readonly string[]} [aliases] Aliases for the feature that can be used in markdown links within the document.
 * @property {import("./types.js").MarkdownString} [description] A description for the feature.
 * @property {import("./types.js").MarkdownString} [syntax] A general syntax overview for the feature.
 * @property {import("./types.js").MarkdownString} [example] A general example for the feature.
 * @property {import("./types.js").MarkdownString | readonly YamlLink[]} [see_also] A string containing markdown content or an array of {@link YamlLink} entries.
 * @property {readonly YamlHrefLinkDefinition[]} [links] Link references to add to the bottom of the document.
 * @property {import("./types.js").MarkdownString} [content] Overrides the content for the feature.
 */

/**
 * Defines a regular expression engine.
 * @typedef YamlEngine
 * @property {string} engine A unique identifier for the engine.
 * NOTE: The value `default` is reserved for an engine record that supplies only fallback information.
 * NOTE: The value `#todo` is reserved for an engine record that has not yet been implemented.
 * @property {string} [name] The name of the engine.
 * @property {number} [priority] A numeric priority for the engine. NOTE: This is often specified via a `toc.yml` file.
 * @property {import("./types.js").URIString} [reference] A reference to more information about the engine.
 * @property {import("./types.js").MarkdownString} [description] A description for the engine.
 * @property {import("./types.js").MarkdownString | readonly YamlLink[]} [see_also] A string containing markdown content or an array of {@link YamlLink} entries.
 * @property {readonly (string | YamlLanguageLinkDefinition)[]} [languages] An array of languages supported by the engine.
 * @property {readonly YamlHrefLinkDefinition[]} [links] Link references to add to the bottom of the document.
 * @property {import("./types.js").MarkdownString} [content] Overrides the content for the engine.
 */

/**
 * Defines how an engine implements a feature.
 * @typedef YamlEngineFeature
 * @property {string} engine A unique identifier for the engine.
 * @property {string} feature A unique identifier for the feature.
 * @property {import("./types.js").URIString} [reference] A reference to more information about the engine's implementation of the feature.
 * @property {boolean} [supported] A value indicating whether the engine supports the feature.
 * @property {import("./types.js").MarkdownString} [description] A description for the feature.
 * @property {import("./types.js").MarkdownString} [syntax] A syntax overview for the feature.
 * @property {import("./types.js").MarkdownString} [example] An example for the feature.
 * @property {import("./types.js").MarkdownString | readonly YamlLink[]} [see_also] A string containing markdown content or an array of {@link YamlLink} entries.
 * @property {readonly YamlHrefLinkDefinition[]} [links] Link references to add to the bottom of the document.
 * @property {import("./types.js").MarkdownString} [content] Overrides the content for the feature.
 */
