import { compareOptionalStrings, compareStrings, isDefined } from "./utils.js";

/** 
 * @typedef Diagnostic
 * @property {boolean} error
 * @property {string} [filename]
 * @property {string} message
 */

export class Diagnostics {
    /** @type {Map<string | undefined, Set<string>>} */
    #errors = new Map();

    /** @type {Map<string | undefined, Set<string>>} */
    #warnings = new Map();

    get hasErrors() {
        return this.#errors.size > 0;
    }

    get hasWarnings() {
        return this.#errors.size > 0;
    }

    get errorsSize() {
        return this.#errors.size;
    }

    get warningsSize() {
        return this.#warnings.size;
    }

    /**
     * @param {string} message
     * @param {string} [filename]
     */
    addError(message, filename) {
        let errors = this.#errors.get(filename);
        if (!errors) this.#errors.set(filename, errors = new Set());
        errors.add(message);
    }

    /**
     * @param {string} message
     * @param {string} [filename]
     */
    addWarning(message, filename) {
        let warnings = this.#warnings.get(filename);
        if (!warnings) this.#warnings.set(filename, warnings = new Set());
        warnings.add(message);
    }

    /**
     * @param {Diagnostics} other
     */
    copyFrom(other) {
        for (const [filename, messages] of other.#warnings) {
            for (const message of messages) {
                this.addWarning(message, filename);
            }
        }
        for (const [filename, messages] of other.#errors) {
            for (const message of messages) {
                this.addError(message, filename);
            }
        }
    }

    clear() {
        this.#warnings.clear();
        this.#errors.clear();
    }

    /**
     * @returns {IterableIterator<string>}
     */
    * keys() {
        yield* [...new Set([...this.#warnings.keys(), ...this.#errors.keys()])]
            .filter(isDefined)
            .sort(compareStrings);
    }

    /**
     * @returns {IterableIterator<Diagnostic>}
     */
    * values() {
        for (const [filename, messages] of [...this.#warnings].sort(compareDiagnosticEntries)) {
            for (const message of messages) {
                yield { error: false, filename, message };
            }
        }
        for (const [filename, messages] of [...this.#errors].sort(compareDiagnosticEntries)) {
            for (const message of messages) {
                yield { error: true, filename, message };
            }
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }
}

/**
 * 
 * @param {[string | undefined, Set<string>]} a 
 * @param {[string | undefined, Set<string>]} b 
 */
function compareDiagnosticEntries([a], [b]) {
    return compareOptionalStrings(a, b);
}

export class DiagnosticsReporter {
    /** @type {Diagnostics} */
    #diagnostics;
    /** @type {readonly import("../types.js").YamlSource<any>[]} */
    #sources;
    /** @type {readonly string[]} */
    #references;

    /**
     * @param {Diagnostics} diagnostics
     * @param {readonly import("../types.js").YamlSource<any>[]} sources
     * @param {readonly string[]} references
     */
    constructor(diagnostics, sources, references) {
        this.#diagnostics = diagnostics;
        this.#sources = sources;
        this.#references = references;
    }

    /**
     * Report an error for a file.
     * @param {string} message
     * @param {string} filename
     */
    reportError(message, filename) {
        this.#diagnostics.addError(message, filename);
    }

    /**
     * Report an error on a source, if available. Otherwise, report an error on a reference.
     * @param {string} sourceMessage The message to report for a source.
     * @param {string} referenceMessage The message to report for a reference.
     * @param {boolean} first Only report an error on the first source.
     * @returns `true` if the error was reported; otherwise, `false`.
     */
    reportSourceOrReferenceError(sourceMessage, referenceMessage, first = false) {
        return this.reportSourceError(sourceMessage, first)
            || this.reportReferenceError(referenceMessage);
    }

    /**
     * Report an error on a source, if available.
     * @param {string} message The message to report for a source.
     * @param {boolean} first Only report an error on the first source.
     * @returns `true` if the error was reported; otherwise, `false`.
     */
    reportSourceError(message, first = false) {
        for (const source of this.#sources) {
            this.reportError(message, source.filename);
            if (first) break;
        }
        return this.#sources.length > 0;
    }

    /**
     * Report an error on a reference, if available.
     * @param {string} message The message to report for a reference.
     * @returns `true` if the error was reported; otherwise, `false`.
     */
    reportReferenceError(message) {
        for (const reference of this.#references) {
            this.reportError(message, reference);
        }
        return this.#references.length > 0;
    }

    /**
     * Report an error without a filename.
     * @param {string} message The message to report globally.
     */
    reportGlobalError(message) {
        this.#diagnostics.addError(message);
    }

    /**
     * Report a warning for a file.
     * @param {string} message
     * @param {string} filename
     */
    reportWarning(message, filename) {
        this.#diagnostics.addWarning(message, filename);
    }

    /**
     * Report a warning on a source, if available. Otherwise, report a warning on a reference.
     * @param {string} sourceMessage The message to report for a source.
     * @param {string} referenceMessage The message to report for a reference.
     * @param {boolean} first Only report a warning on the first source.
     * @returns `true` if the warning was reported; otherwise, `false`.
     */
    reportSourceOrReferenceWarning(sourceMessage, referenceMessage, first = false) {
        return this.reportSourceWarning(sourceMessage, first)
            || this.reportReferenceWarning(referenceMessage);
    }

    /**
     * Report a warning on a source, if available.
     * @param {string} message The message to report for a source.
     * @param {boolean} first Only report a warning on the first source.
     * @returns `true` if the warning was reported; otherwise, `false`.
     */
    reportSourceWarning(message, first = false) {
        for (const source of this.#sources) {
            this.reportWarning(message, source.filename);
            if (first) break;
        }
        return this.#sources.length > 0;
    }

    /**
     * Report a warning on a reference, if available.
     * @param {string} message The message to report for a reference.
     * @param {boolean} first Only report a warning on the first source.
     * @returns `true` if the warning was reported; otherwise, `false`.
     */
    reportReferenceWarning(message, first = false) {
        for (const reference of this.#references) {
            this.reportWarning(message, reference);
            if (first) break;
        }
        return this.#references.length > 0;
    }

    /**
     * Report an error without a filename.
     * @param {string} message The message to report globally.
     */
    reportGlobalWarning(message) {
        this.#diagnostics.addWarning(message);
    }
}
