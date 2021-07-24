---
### YamlMime:EngineFeature
engine: oniguruma
feature: flags
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L265-L289
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
The following flags are supported:
- `i` &mdash; Ignore Case. Matches [character classes] using a case-insensitive comparison.
- `x` &mdash; Extended Mode. Ignores whitespace in a pattern. Spaces must instead be represented by `\s` or `\ ` (an escaped space).
- `W` &mdash; ASCII-only words (when using `\w`, `\p{Word}`, `[[:word:]]`, `\b`, or `\B`)
- `D` &mdash; ASCII-only digits (when using `\d`, `\p{Digit}`, `[[:digit:]]`)
- `S` &mdash; ASCII-only space (when using `\s`, `\p{Space}`, `[[:space:]]`)
- `P` &mdash; ASCII-only POSIX properties (includes `W`, `D`, and `S` flags)
- <code>y{<em>?</em>}</code> &mdash; Changes meaning of `\X`, `\y`, and `\Y` in unicode mode:
  - `y{g}` &mdash; Extended Grapheme Cluster mode
  - `y{w}` &mdash; Word mode.

Some flags depend on options provided to Oniguruma <sup>[reference](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L512)</sup>:
- `ONIG_SYNTAX_ONIGURUMA`:
  - `m` &mdash; Multiline. Causes the [wildcard] `.` to match newline characters.
- `ONIG_SYNTAX_PERL` and `ONIG_SYNTAX_JAVA`:
  - `m` &mdash; Multiline. Causes the [anchors] `^` and `$` to match the start and end of each line (respectively), rather than the start and end of the input.
  - `s` &mdash; Singleline. Causes the [wildcard] `.` to match newline characters.
