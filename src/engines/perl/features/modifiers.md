---
### YamlMime:EngineFeature
engine: perl
feature: modifiers
supported: true
reference: yhttps://perldoc.perl.org/perlre#Modifiers
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `(?adlupimnsx-imnsx)` - Sets or unsets (using `-`) the specified [RegExp flags] starting at the current position until the next closing `)` or the end of the pattern. Example: `(?-i)A(?i)B(?-i)C` matches `ABC`, `AbC`.
- `(?adlupimnsx-imnsx:…)` - Sets or unsets (using `-`) the specified [RegExp flags] for the subexpression. Example: `(?-i:A(?i:B)C)` matches `ABC`, `AbC`.
- `(?^alupimnsx)` - The `^` is a shorthand for `d-imnsx`. Flags other than `d` may follow the caret to override, but `-` is not permitted.
- `(?^alupimnsx:…)` - The `^` is a shorthand for `d-imnsx`. Flags other than `d` may follow the caret to override, but `-` is not permitted.