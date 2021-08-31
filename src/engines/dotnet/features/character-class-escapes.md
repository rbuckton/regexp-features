---
### YamlMime:EngineFeature
engine: dotnet
feature: character-class-escapes
supported: true
reference: https://docs.microsoft.com/en-us/dotnet/standard/base-types/character-classes-in-regular-expressions#word-character-w
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `\d` &mdash; Any digit character. Equivalent to `\p{Nd}` unless in ECMAScript-compliant mode, in which case `\d` is equivalent to `[0-9]`.
- `\D` &mdash; Any non-digit character. Equivalent to `\P{Nd}` unless in ECMAScript-compliant mode, in which case `\D` is equivalent to `[^0-9]`.
- `\w` &mdash; Any "word" character. Equivalent to `[\p{Ll}\p{Lu}\p{Lt}\p{Lo}\p{Lm}\p{Mn}\p{Nd}\p{Pc}]` unless in ECMAScript-compliant mode, in which case `\w` is equivalent to `[a-zA-Z0-9_]`.
- `\W` &mdash; Any non-"word" character. Equivalent to `[^\p{Ll}\p{Lu}\p{Lt}\p{Lo}\p{Lm}\p{Mn}\p{Nd}\p{Pc}]` unless in ECMAScript-compliant mode, in which case `\W` is equivalent to `[^a-zA-Z0-9_]`.
- `\s` &mdash; Any whitespace character. Equivalent to `[\f\n\r\t\v\x85\p{Z}]` unless in ECMAScript-compliant mode, in which case `\s` is equivalent to `[ \f\n\r\t\v]`.
- `\S` &mdash; Any non-whitespace character. Equivalent to `[^\f\n\r\t\v\x85\p{Z}]` unless in ECMAScript-compliant mode, in which case `\s` is equivalent to `[^ \f\n\r\t\v]`.
