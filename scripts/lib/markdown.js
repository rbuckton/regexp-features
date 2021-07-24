import matter from "gray-matter";
import marked from "marked";
import yaml from "js-yaml";
import { trimLines } from "./utils.js";

/**
 * @param {Record<string, any>} anchors
 * @param {string} text
 * @param {readonly string[]} path
 * @param {MarkdownFragment} fragment
 */
function buildAnchorMap(anchors, text, path, fragment) {
    const value = text.slice(fragment.pos, fragment.end);
    anchors[path.join(".")] = value.trim() ? trimLines(value) : undefined;
    if (fragment.headings) {
        for (const key of Object.keys(fragment.headings)) {
            buildAnchorMap(anchors, text, [...path, key], fragment.headings[key]);
        }
    }
}

/**
 * @typedef MarkdownFragment
 * @property {number} pos
 * @property {number} end
 * @property {number} depth
 * @property {Record<string, MarkdownFragment>} [headings]
 */

/**
 * @param {string} text
 * @returns {Record<string, any>}
 */
function parseMarkdownAnchors(text) {
    const tokens = marked.lexer(text, { gfm: true });
    /** @type {MarkdownFragment | undefined} */
    let content = { pos: 0, end: text.length, depth: 0 };
    /** @type {MarkdownFragment[]} */
    const stack = [];
    let pos = 0;
    for (const token of tokens) {
        if (token.type === "heading") {
            const heading = token.text.trim().toLowerCase();
            // as long as the new heading has a lower depth than the current heading,
            // pop the heading off the stack and update it.
            while (token.depth <= content.depth && stack.length) {
                content.end = pos;
                content = stack.pop();
                if (!content) throw new Error("Illegal operation");
            }

            // new nested heading, don't add if it already exists
            content.headings ??= /** @type {Record<string, MarkdownFragment>} */(Object.create(null));
            if (!(heading in content.headings)) {
                stack.push(content);
                pos += token.raw.length;
                content = content.headings[heading] = { pos, end: pos, depth: token.depth };
                continue;
            }
        }
        pos += token.raw.length;
        content.end = pos;
    }

    while (stack.length) {
        content.end = pos;
        content = stack.pop();
        if (!content) throw new Error("Illegal operation");
    }

    /** @type {Record<string, any>} */
    const anchors = Object.create(null);
    // add some predefined anchors that will be overwritten.
    anchors["content.description"] = undefined;
    anchors["content.syntax"] = undefined;
    anchors["content.example"] = undefined;
    buildAnchorMap(anchors, text, ["content"], content);
    return anchors;
}

/**
 * @param {string} text
 */
export function parseMarkdownOverrideFile(text) {
    const file = matter(text, { language: "yaml", engines: { "yaml": () => ({}) } });
    if (/** @type {*} */(file).isEmpty) {
        return undefined;
    }

    let usedContent = false;
    const anchors = parseMarkdownAnchors(file.content);
    const anchorMapSet = new WeakSet();
    const data = yaml.load(file.matter, {
        listener: (event, /** @type {yaml.State & { anchorMap: Record<String, any> }} */ state) => {
            if (event === "open") {
                if (!anchorMapSet.has(state.anchorMap)) {
                    anchorMapSet.add(state.anchorMap);
                    for (const [key, value] of Object.entries(anchors)) {
                        let overridden = false;
                        let underlyingValue = value;
                        Object.defineProperty(state.anchorMap, key, {
                            enumerable: true,
                            configurable: true,
                            get() {
                                if (!overridden) {
                                    usedContent = true;
                                }
                                return underlyingValue;
                            },
                            set(value) {
                                overridden = true;
                                underlyingValue = value;
                            }
                        });
                    }
                }
            }
        }
    });

    if (typeof data !== "object" || data === null) {
        throw new TypeError("Invalid yaml");
    }

    file.data = data;
    if (!usedContent && file.content.trim()) {
        file.data.content = file.content;
    }
    return file;
}