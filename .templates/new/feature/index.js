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
        const { Feature } = await import("../../../scripts/lib/feature.js");
        await reloadSchemas();
        const docs = await Documentation.create(path.join(__dirname, "../../../src"));
        docs.check();

        /** @type {{ name: string }} */
        let { name } = await prompter.prompt({
            type: "input",
            name: "name",
            message: "feature name",
            required: true
        });

        /** @type {{ id: string, reference: string }} */
        let { id } = await prompter.prompt([
            {
                type: "input",
                name: "id",
                message: "feature id",
                initial: name?.toLowerCase()
                    .replace(/^[^-\w.]+/, "")
                    .replace(/[^-\w.]+$/, "")
                    .replace(/[^\w.]+/, "-"),
                required: true
            },
        ]);

        const feature = new Feature(docs, id);
        feature.mergeFrom({ feature: id, name }, "");

        return {
            ...args,
            feature
        };
    }
}