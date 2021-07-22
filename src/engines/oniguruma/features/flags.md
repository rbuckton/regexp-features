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
- `m` &mdash; Multiline. Causes the [wildcard] `.` to match newline characters.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
- `x` &mdash; Extended Mode. Ignores whitespace in a pattern. Spaces must instead be represented by `\s` or `\ ` (an escaped space).
- `W` &mdash; ASCII-only words (when using `\w`, `\p{Word}`, `[[:word:]]`, `\b`, or `\B`)
- `D` &mdash; ASCII-only digits (when using `\d`, `\p{Digit}`, `[[:digit:]]`)
- `S` &mdash; ASCII-only space (when using `\s`, `\p{Space}`, `[[:space:]]`)
- `P` &mdash; ASCII-only POSIX properties (includes `W`, `D`, and `S` flags)
- <code>y{*?*}</code> &mdash; Changes meaning of `\X`, `\y`, and `\Y` in unicode mode:
  - `y{g}` &mdash; Extended Grapheme Cluster mode
  - `y{w}` &mdash; Word mode.