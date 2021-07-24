import { Documentation } from "./documentation.js";

/** @abstract */
export class Node {
    /** @type {Documentation} @readonly */
    docs;
    /** @type {string[]} */
    #references = [];

    /**
     * @param {Documentation} docs
     */
    constructor(docs) {
        this.docs = docs;
    }

    /** @returns {readonly string[]} */
    get references() { return this.#references; }

    /**
     * @param {string} filename
     */
    addReference(filename) {
        this.#references.push(filename);
        return this;
    }
}
