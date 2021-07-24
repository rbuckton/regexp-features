import Ajv from "ajv";
import addFormats from "ajv-formats";
import * as fs from "fs/promises";
import { yamlSchemaFileUrl } from "./paths.js";

/** @type {Ajv | undefined} */
let ajv;

/**
 * @param {URL} file
 */
 async function readJsonSchema(file) {
    const text = await fs.readFile(file, { encoding: "utf8" });

    /** @type {import("ajv").SchemaObject & import("ajv/dist/types/json-schema").SomeJSONSchema} */
    return JSON.parse(text);
}

export async function reloadSchemas() {
    ajv = new Ajv({
        allErrors: true,
        inlineRefs: false,
        schemas: [await readJsonSchema(yamlSchemaFileUrl)],
    });
    addFormats(ajv);
}

/**
 * @param {string} keyRef
 */
export function getSchema(keyRef) {
    if (!ajv) throw new Error("Schema not yet loaded, call 'reloadSchemas' before calling this function.");
    return ajv.getSchema(keyRef);
}

/**
 * @param {import("ajv/dist/core").AnyValidateFunction} schema 
 * @param {import("ajv").ErrorsTextOptions} [options]
 */
export function getSchemaErrors(schema, options) {
    if (!ajv) throw new Error("Schema not yet loaded, call 'reloadSchemas' before calling this function.");
    return ajv.errorsText(schema.errors, options);
}
