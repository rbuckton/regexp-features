export {};

/**
 * @typedef DocumentationTemplateData
 * @property {string} outDir
 * @property {readonly LanguageTemplateData[]} languages
 * @property {readonly FeatureTemplateData[]} features
 * @property {readonly EngineTemplateData[]} engines
 * @property {readonly FeatureMatrix[]} featureMatrixes
 */

/**
 * @typedef FeatureMatrix
 * @property {readonly FeatureTemplateData[]} columns
 * @property {readonly FeatureMatrixRow[]} rows
 */

/**
 * @typedef FeatureMatrixRow
 * @property {EngineTemplateData} engine
 * @property {readonly (EngineFeatureTemplateData | undefined)[]} cells
 */

/**
 * @typedef LanguageTemplateData
 * @property {DocumentationTemplateData} docs
 * @property {string} id
 * @property {string} language
 * @property {string} name
 * @property {number} [priority]
 * @property {import("./types.js").URIString} [reference]
 * @property {import("./types.js").MarkdownString} [description]
 * @property {readonly EngineTemplateData[]} [engines]
 * @property {import("./types.js").MarkdownString | readonly import("./yamlTypes.js").YamlLinkDefinition[]} [see_also]
 * @property {import("./types.js").MarkdownString} [content]
 * @property {readonly string[]} [nameSources]
 * @property {readonly string[]} [prioritySources]
 * @property {readonly string[]} [descriptionSources]
 * @property {readonly string[]} [referenceSources]
 * @property {readonly string[]} [see_alsoSources]
 * @property {readonly string[]} [contentSources]
 * @property {string} [outFile]
 * @property {boolean} [built]
 */

/**
 * @typedef FeatureTemplateData
 * @property {DocumentationTemplateData} docs
 * @property {string} id
 * @property {string} feature
 * @property {string} name
 * @property {number} [priority]
 * @property {readonly string[]} [aliases]
 * @property {import("./types.js").MarkdownString} [description]
 * @property {import("./types.js").MarkdownString} [syntax]
 * @property {import("./types.js").MarkdownString} [example]
 * @property {import("./types.js").MarkdownString | readonly import("./yamlTypes.js").YamlLinkDefinition[]} [see_also]
 * @property {readonly import("./yamlTypes.js").YamlHrefLinkDefinition[]} [links]
 * @property {readonly FeatureEngineSupportTemplateData[]} [engines]
 * @property {import("./types.js").MarkdownString} [content]
 * @property {readonly string[]} [nameSources]
 * @property {readonly string[]} [prioritySources]
 * @property {readonly string[]} [aliasesSources]
 * @property {readonly string[]} [descriptionSources]
 * @property {readonly string[]} [syntaxSources]
 * @property {readonly string[]} [exampleSources]
 * @property {readonly string[]} [see_alsoSources]
 * @property {readonly string[]} [contentSources]
 * @property {readonly string[]} [linksSources]
 * @property {string} [outFile]
 * @property {boolean} [built]
 */

/**
 * @typedef FeatureEngineSupportTemplateData
 * @property {EngineTemplateData} engine
 * @property {bool} supported
 */

/**
 * @typedef EngineTemplateData
 * @property {DocumentationTemplateData} docs
 * @property {string} id
 * @property {string} engine
 * @property {string} name
 * @property {number} [priority]
 * @property {import("./types.js").URIString} [reference]
 * @property {import("./types.js").MarkdownString} [description]
 * @property {import("./types.js").MarkdownString | readonly import("./yamlTypes.js").YamlLinkDefinition[]} [see_also]
 * @property {readonly EngineFeatureTemplateData[]} [features]
 * @property {readonly { language: string, name: string }[]} [languages]
 * @property {readonly import("./yamlTypes.js").YamlHrefLinkDefinition[]} [links]
 * @property {import("./types.js").MarkdownString} [content]
 * @property {readonly string[]} [nameSources]
 * @property {readonly string[]} [prioritySources]
 * @property {readonly string[]} [referenceSources]
 * @property {readonly string[]} [descriptionSources]
 * @property {readonly string[]} [see_alsoSources]
 * @property {readonly string[]} [languagesSources]
 * @property {readonly string[]} [linksSources]
 * @property {readonly string[]} [contentSources]
 * @property {string} [outFile]
 * @property {boolean} [built]
 */

/**
 * @typedef EngineFeatureTemplateData
 * @property {DocumentationTemplateData} docs
 * @property {EngineTemplateData} engine
 * @property {FeatureTemplateData} feature
 * @property {string} name
 * @property {readonly string[]} [aliases]
 * @property {boolean} supported
 * @property {import("./types.js").URIString} [reference]
 * @property {import("./types.js").MarkdownString} [description]
 * @property {import("./types.js").MarkdownString} [syntax]
 * @property {import("./types.js").MarkdownString} [example]
 * @property {import("./types.js").MarkdownString | readonly import("./yamlTypes.js").YamlLinkDefinition[]} [see_also]
 * @property {readonly import("./yamlTypes.js").YamlHrefLinkDefinition[]} [links]
 * @property {import("./types.js").MarkdownString} [content]
 * @property {readonly string[]} [nameSources]
 * @property {readonly string[]} [aliasesSources]
 * @property {readonly string[]} [referenceSources]
 * @property {readonly string[]} [supportedSources]
 * @property {readonly string[]} [descriptionSources]
 * @property {readonly string[]} [syntaxSources]
 * @property {readonly string[]} [exampleSources]
 * @property {readonly string[]} [see_alsoSources]
 * @property {readonly string[]} [linksSources]
 * @property {readonly string[]} [contentSources]
 * @property {string} [outFile]
 * @property {boolean} [built]
 */
