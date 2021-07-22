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

- `\d` &mdash; A decimal digit character in the range 0-9. Equivalent to `[0-9]`.
- `\D` &mdash; Any character not in the range 0-9. Equivalent to `[^0-9]`.
- `\h` &mdash; Any hexadecimal digit character. Equivalent to `[0-9a-fA-F]`.
- `\H` &mdash; Any non-hexadecimal character. Equivalent to `[^0-9a-fA-F]`.
- `\w` &mdash; Any "word" character. Equivalent to `[a-zA-Z0-9_]` in non-Unicode mode, `\p{General_Category}` in Unicode mode.
- `\W` &mdash; Any non-"word" character. Equivalent to `[^a-zA-Z0-9_]` in non-Unicode mode, `\P{General_Category}` in Unicode mode.
- `\s` &mdash; Any whitespace character.
- `\S` &mdash; Any non-whitespace character.
- `\N` &mdash; Any non-newline character. Equivalent to `(?-m:.)`.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
- `\O` &mdash; Any character. Equivalent to `(?m:.)`.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
- `\X` &mdash; Text segment. Equivalent to `(?>\O(?:\Y\O)*)`.
