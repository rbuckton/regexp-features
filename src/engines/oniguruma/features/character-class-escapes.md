---
### YamlMime:EngineFeature
engine: oniguruma
feature: character-class-escapes
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L50-L91
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# Syntax

- `\d` &mdash; A digit character. 
  - Non-unicode mode: Equivalent to `[0-9]`.
  - Unicode mode: Equivalent to `\p{General_Category=Decimal_Number}`
- `\D` &mdash; Any non-digit character. 
  - Non-unicode mode: Equivalent to `[^0-9]`.
  - Unicode mode: Equivalent to `\P{General_Category=Decimal_Number}`
- `\h` &mdash; Any hexadecimal digit character. Equivalent to `[0-9a-fA-F]`.
- `\H` &mdash; Any non-hexadecimal character. Equivalent to `[^0-9a-fA-F]`.
- `\w` &mdash; Any "word" character.
  - Non-unicode mode: Equivalent to `[a-zA-Z0-9_]`.
  - Unicode mode: Any character in the following General_Category sets: Letter, Mark, Number, Connector_Punctuation
- `\W` &mdash; Any non-"word" character.
  - Non-unicode mode: Equivalent to `[^a-zA-Z0-9_]`.
  - Unicode mode: Any character not in the following General_Category sets: Letter, Mark, Number, Connector_Punctuation
- `\s` &mdash; Any whitespace character.
  - Non-unicode mode: Any character in the set `\t`, `\n`, `\v`, `\f`, `\r`, `\x20`.
  - Unicode mode: Any character in the set `U+0009`, `U+000A`, `U+000B`, `U+000C`, `U+000D`, `U+0085`, or the following General_Category sets: Line_Separator, Paragraph_Separator, Space_Separator
- `\S` &mdash; Any non-whitespace character.
  - Non-unicode mode: Any character not in the set `\t`, `\n`, `\v`, `\f`, `\r`, `\x20`.
  - Unicode mode: Any character not in the set `U+0009`, `U+000A`, `U+000B`, `U+000C`, `U+000D`, `U+0085`, or the following General_Category sets: Line_Separator, Paragraph_Separator, Space_Separator
- `\N` &mdash; Any non-newline character. Equivalent to `(?-m:.)`.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
- `\O` &mdash; Any character. Equivalent to `(?m:.)`.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
- `\X` &mdash; Text segment. Equivalent to `(?>\O(?:\Y\O)*)`.
