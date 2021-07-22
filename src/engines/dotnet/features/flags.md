---
### YamlMime:EngineFeature
engine: dotnet
feature: flags
supported: true
reference: https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-options
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
- `x` &mdash; Extended Mode. Ignores whitespace in a pattern. Spaces must instead be represented by `\s` or `\ ` (an escaped space). Allows `x`-mode [comments].
