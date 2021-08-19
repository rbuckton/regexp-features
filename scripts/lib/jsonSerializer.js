/**
 * @param {*} value
 * @param {((this: any, key: string, value: any) => any) | (number | string[])} [replacer]
 * @param {string | number} [space]
 * @returns {string}
 */
export function stringifyJSON(value, replacer, space) {
    if (typeof value === "object" && value !== null) {
        const context = new Context(collectPaths(value));
        value = new Wrapper("#", value, context);
        if (typeof replacer === "function") {
            // In SerializeJSONProperty, `toJSON` is called before the replacer function is called.
            // As a result, we wrap each `Wrapper` in a `ReplacerWrapper` to preserve context.
            value = new ReplacerWrapper(value);

            // indicate that all `Wrappers` should be wrapped in a `ReplacerWrapper`.
            context.hasReplacer = true;

            // patch the replacer function
            const savedReplacer = replacer;
            replacer = function (key, value) {
                if (this instanceof ReplacerWrapper) {
                    throw new TypeError("Illegal state: It should not be possible for the 'this' argument to be a ReplacerWrapper.");
                }
                if (this instanceof Wrapper) {
                    throw new TypeError("Illegal state: It should not be possible for the 'this' argument to be a Wrapper.");
                }
                if (value instanceof ReplacerWrapper) {
                    throw new TypeError("Illegal state: 'toJSON' should have been called on the ReplacerWrapper before the replacer was invoked.");
                }

                // Unwrap a `Wrapper` so that we can pass the underlying value to the replacer.
                /** @type {Wrapper | undefined} */
                let wrapper;
                if (value instanceof Wrapper) {
                    wrapper = value;
                    value = wrapper.value;
                }

                // Invoke the underlying replacer
                value = savedReplacer.call(this, key, value);

                // If the value was previously wrapped, re-wrap it
                if (wrapper) {
                    wrapper.value = value;
                    // `toJSON` has already been called by the SerializeJSONProperty algorithm, so we must
                    // unwrap the wrapper ourselves.
                    value = wrapper.toJSON();
                }

                return value;
            };
        }
    }
    return JSON.stringify(value, /** @type {*} */(replacer), space);
}

function collectPaths(value) {
    /** @type {Map<object, string>} */
    const map = new Map();
    /** @type {[path: string, value: object][]} */
    let queue = [["#", value]];
    let entry;
    while (entry = queue.shift()) {
        const [path, value] = entry;
        if (map.has(value)) continue;
        map.set(value, path);
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                const child = value[i];
                if (typeof child === "object" && child !== null) {
                    queue.push([`${path}/${escapePathSegment(`${i}`)}`, child]);
                }
            }
        }
        else {
            for (const key in value) {
                const child = value[key];
                if (typeof child === "object" && child !== null) {
                    queue.push([`${path}/${escapePathSegment(key)}`, child]);
                }
            }
        }
    }
    return map;
}

/**
 *
 * @param {string} text
 * @param {(this: any, key: string, value: any) => any} [reviver]
 */
export function parseJSON(text, reviver) {
    let value = JSON.parse(text);
    if (typeof value === "object" && value !== null) {
        const root = { "": value };
        value = internalizeJSONProperty(root, "", /*reviver*/ undefined, root);
    }
    if (typeof value === "object" && value !== null && typeof reviver === "function") {
        const root = { "": value };
        value = internalizeJSONProperty(root, "", reviver);
    }
    return value;

    /**
     * @param {object} holder
     * @param {string} name
     * @param {(this: any, key: string, value: any) => any} [reviver]
     * @param {object} [root]
     */
    function internalizeJSONProperty(holder, name, reviver, root) {
        let value = holder[name];
        if (typeof value === "object" && value !== null) {
            if (root && isJsonPointerRef(value)) {
                value = resolvePath(root, value.$ref);
            }
            else if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++) {
                    const newElement = internalizeJSONProperty(value, `${i}`, reviver, root);
                    if (newElement === undefined) {
                        delete value[i];
                    }
                    else {
                        value[i] = newElement;
                    }
                }
            }
            else {
                for (const key in value) {
                    const newElement = internalizeJSONProperty(value, key, reviver, root);
                    if (newElement === undefined) {
                        delete value[key];
                    }
                    else {
                        value[key] = newElement;
                    }
                }
            }
        }
        return reviver ? reviver.call(holder, name, value) : value;
    }
}

/**
 * @param {*} value
 * @returns {value is { $ref: string }}
 */
function isJsonPointerRef(value) {
    let possiblyRef = false;
    if (typeof value === "object" && value !== null) {
        if (Object.getPrototypeOf(value) !== Object.prototype) {
            return false;
        }
        for (const key in value) {
            if (key === "$ref") {
                possiblyRef = true;
            }
            else {
                return false;
            }
        }
    }
    return possiblyRef;
}

/**
 * @param {object} root
 * @param {string} path
 */
function resolvePath(root, path) {
    if (!/^#?($|\/)/.test(path)) {
        throw new Error("Invalid JSON-Pointer path");
    }
    if (path.startsWith("#")) path = path.slice(1);
    const segments = path.split(/\//g).map(unescapePathSegment);
    let value = root;
    for (const segment of segments) {
        if (typeof value !== "object" || value === null) {
            throw new Error("Invalid JSON-Pointer reference");
        }
        value = value[segment];
    }
    return value;
}

/**
 * @param {string} text
 */
function unescapePathSegment(text) {
    return text.replace(/~[0|1]/g, _ => _ === "~0" ? "~" : "/");
}

/**
 * @param {string} text
 */
function escapePathSegment(text) {
    return text.replace(/[~\/]/g, _ => _ === "~" ? "~0" : "~1");
}

class Context {
    /** @type {Map<object, string>} */
    pointers;
    /** @type {boolean} */
    hasReplacer = false;
    /**
     * @param {Map<object, string>} pointers 
     */
    constructor(pointers) {
        this.pointers = pointers;
    }
}

class ReplacerWrapper {
    /** @type {Wrapper} */
    wrapper;
    /**
     * @param {Wrapper} wrapper
     */
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    toJSON() {
        return this.wrapper;
    }
}

class Wrapper {
    /**
     * @param {string} path
     * @param {object} value
     * @param {Context} context
     */
    constructor(path, value, context) {
        this.path = path;
        this.value = value;
        this.context = context;
    }

    /**
     * @param {string} key
     * @param {*} value
     */
    #serializeEntry(key, value) {
        if (typeof value === "object" && value !== null) {
            const thisPath = `${this.path}/${escapePathSegment(key)}`;
            const path = this.context.pointers.get(value);
            if (path !== undefined && path !== thisPath) {
                value = { $ref: path };
            }
            else {
                value = new Wrapper(thisPath, value, this.context);
                if (this.context.hasReplacer) {
                    value = new ReplacerWrapper(value);
                }
            }
        }
        return value;
    }

    toJSON() {
        const path = this.context.pointers.get(this.value);
        if (path !== undefined && path !== this.path) {
            return { $ref: path };
        }
        if (Array.isArray(this.value)) {
            const result = [];
            for (let i = 0; i < this.value.length; i++) {
                result[i] = this.#serializeEntry(`${i}`, this.value[i]);
            }
            return result;
        }
        else {
            const result = {};
            for (const key in this.value) {
                result[key] = this.#serializeEntry(key, this.value[key]);
            }
            return result;
        }
    }
}

