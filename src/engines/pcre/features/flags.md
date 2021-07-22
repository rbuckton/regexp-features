---
### YamlMime:EngineFeature
engine: pcre
feature: flags
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC13
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
The following flags are supported:
- `i` &mdash; Ignore Case. Matches [character classes] using a case-insensitive comparison.
- `m` &mdash; Multiline. Causes the [anchors] `^` and `$` to match the start and end of each line (respectively), rather than the start and end of the input.
- `n` &mdash; Explicit captures. Regular [Capturing Groups] are not captured, only [Named Capturing Groups] are captured.
- `s` &mdash; Singleline. Causes the [wildcard] `.` to match newline characters.
- `x` &mdash; Extended Mode. Ignores whitespace in a pattern. Spaces must instead be represented by `\s` or `\ ` (an escaped space).
- `xx` &mdash; "Extended More" Mode. Same as `x` but unescaped spaces and horizontal tab characters are also ignored inside [character classes].