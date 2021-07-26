// @ts-check
const path = require("path");
module.exports = {
    /**
     *
     * @param {{ prompter: typeof import("enquirer"), args: any }} param0
     * @returns
     */
    prompt: async ({ prompter, args }) => {
        const { reloadSchemas } = await import("../../../scripts/lib/schema.js");
        const { Documentation } = await import("../../../scripts/lib/documentation.js");
        const { Language } = await import("../../../scripts/lib/language.js");
        await reloadSchemas();
        const docs = await Documentation.create(path.join(__dirname, "../../../src"));
        docs.check();

        /** @type {{ name: string }} */
        let { name } = await prompter.prompt({
            type: "input",
            name: "name",
            message: "language name",
            required: true
        });

        /** @type {{ id: string, reference: string }} */
        let { id, reference } = await prompter.prompt([
            {
                type: "input",
                name: "id",
                message: "language id",
                initial: name?.toLowerCase()
                    .replace(/^[^-\w.]+/, "")
                    .replace(/[^-\w.]+$/, "")
                    .replace(/[^\w.]+/, "-"),
                required: true
            },
            {
                type: "input",
                name: "reference",
                message: "reference url",
            }
        ]);

        const language = new Language(docs, id);
        language.mergeFrom({ language: id, name, reference }, "");

        return {
            ...args,
            language
        };
    }
}