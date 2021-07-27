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
        const { Engine } = await import("../../../scripts/lib/engine.js");
        await reloadSchemas();
        const docs = await Documentation.create(path.join(__dirname, "../../../src"));
        docs.check();

        /** @type {{ name: string }} */
        let { name } = await prompter.prompt({
            type: "input",
            name: "name",
            message: "engine name",
            required: true
        });

        /** @type {{ id: string, reference: string, languages: string[] }} */
        let { id, reference, languages } = await prompter.prompt([
            {
                type: "input",
                name: "id",
                message: "engine id",
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
                required: true
            },
            {
                type: "multiselect",
                name: "languages",
                message: "languages",
                choices: docs.orderedLanguages.map(lang => ({ name: lang.id, message: lang.name, value: lang.id }))
            },
        ]);

        const engine = new Engine(docs, id);
        engine.mergeFrom({ engine: id, name, reference, languages }, "");

        const featureCount = docs.orderedFeatures.length;
        let i = 0;
        for (const feature of docs.orderedFeatures) {
            console.log(`feature '${feature.name}' [${++i}/${featureCount}]:`);

            const engineFeature = engine.getOrCreateEngineFeature(feature);
            engineFeature.mergeFrom({ engine: id, feature: feature.id, supported: false }, "");

            /** @type {{ supported: boolean }} */
            const { supported } = await prompter.prompt({
                type: "confirm",
                name: "supported",
                message: "supported?",
                initial: docs.getDefaultFeature(feature.id)?.supported ?? false
            });

            if (supported) {
                /** @type {{ reference: string }} */
                const { reference } = await prompter.prompt({
                    type: "input",
                    name: "reference",
                    message: "reference url",
                    required: true
                });
                engineFeature.mergeFrom({ engine: id, feature: feature.id, supported: true, reference }, "");
            }
        }

        return {
            ...args,
            engine
        };
    }
}