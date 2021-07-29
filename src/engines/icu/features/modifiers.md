---
### YamlMime:EngineFeature
engine: icu
feature: modifiers
supported: true
reference: https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expression-operators
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `(?imswx-imswx)` - Sets or unsets (using `-`) the specified [RegExp flags] starting at the current position until the next closing `)` or the end of the pattern. Example: `(?-i)A(?i)B(?-i)C` matches `ABC`, `AbC`.
- `(?imswx-imswx:…)` - Sets or unsets (using `-`) the specified [RegExp flags] for the subexpression. Example: `(?-i:A(?i:B)C)` matches `ABC`, `AbC`.
