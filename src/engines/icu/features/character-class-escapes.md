---
### YamlMime:EngineFeature
engine: icu
feature: character-class-escapes
supported: true
reference: https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expression-metacharacters
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `\d` &mdash; Match any character with the Unicode General Category of Nd (Number, Decimal Digit.)
- `\D` &mdash; Match any character not in the Unicode General Category of Nd (Number, Decimal Digit.)
- `\w` &mdash; Match any "word" character. Word characters are `[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\u200c\u200d]`.
- `\W` &mdash; Match any non-"word" character. Word characters are `[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\u200c\u200d]`.
- `\s` &mdash; Match any white space character. Whitespace is defined as `[\t\n\f\r\p{Z}]`.
- `\S` &mdash; Match any non-whitespace character. Whitespace is defined as `[\t\n\f\r\p{Z}]`.
