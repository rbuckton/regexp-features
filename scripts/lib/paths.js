import { URL } from "url";

// templates
export const templatesDirUrl = new URL("../templates/", import.meta.url);
export const engineFeatureTemplateFileUrl = new URL("./engine-feature.hbs", templatesDirUrl);
export const engineIndexTemplateFileUrl = new URL("./engine-index.hbs", templatesDirUrl);
export const engineTemplateFileUrl = new URL("./engine.hbs", templatesDirUrl);
export const featureTemplateFileUrl = new URL("./feature.hbs", templatesDirUrl);
export const featureIndexTemplateFileUrl = new URL("./feature-index.hbs", templatesDirUrl);
export const languageTemplateFileUrl = new URL("./language.hbs", templatesDirUrl);
export const languageIndexTemplateFileUrl = new URL("./language-index.hbs", templatesDirUrl);
export const indexTemplateFileUrl = new URL("./index.hbs", templatesDirUrl);

// partials
export const partialsDirUrl = new URL("./partials/", templatesDirUrl);
export const sourcesPartialFileUrl = new URL("./sources.hbs", partialsDirUrl);

// schemas
export const schemasDirUrl = new URL("../schemas/", import.meta.url);
export const yamlSchemaFileUrl = new URL("./yaml.json", schemasDirUrl);
