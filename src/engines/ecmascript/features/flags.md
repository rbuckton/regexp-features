---
### YamlMime:EngineFeature
engine: ecmascript
feature: flags
supported: true
reference: https://tc39.es/ecma262/#sec-regexpinitialize
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
The following flags are supported:
- `i` &mdash; Ignore Case. Matches [character classes] using a case-insensitive comparison.
- `m` &mdash; Multiline. Causes the [anchors] `^` and `$` to match the start and end of each line (respectively), rather than the start and end of the input.
- `s` &mdash; Singleline. Causes the [wildcard] `.` to match newline characters.
- `u` &mdash; Unicode. Enforces stricter parsing of `RegExp` patterns, improved handling of escaped Unicode surrogate pairs, and allows the use of <code>\u{<em>CodePoint</em>}</code>.
- `g` &mdash; Global. Indicates the match must start at or after the index specified by the `lastIndex` property of the `RegExp`. When matching completes successfully, `lastIndex` will be updated with the ending index of the last match.
- `y` &mdash; Sticky. Indicates the match must start at the index specified by the `lastIndex` property of the `RegExp`. When matching completes successfully, `lastIndex` will be updated with the ending index of the last match.
- `d` &mdash; Indices. Indicates the match result object will include an `indices` property with the start and end indices of each captured subexpression.
  > NOTE: This feature is at Stage 4 of the ECMA-262 specification process. See the [RegExp Match Indices proposal](https://github.com/tc39/proposal-regexp-match-indices) for more information.
