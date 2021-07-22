---
### YamlMime:EngineFeature
engine: oniguruma
feature: modifiers
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L265-L289
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `(?imxWDSPy-imxWDSPy)` - Sets or unsets (using `-`) the specified [RegExp flags] starting at the current position until the next closing `)` or the end of the pattern. Example: `(?-i)A(?i)B(?-i)C` matches `ABC`, `AbC`.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
- `(?imxWDSPy-imxWDSPy:…)` - Sets or unsets (using `-`) the specified [RegExp flags] for the subexpression. Example: `(?-i:A(?i:B)C)` matches `ABC`, `AbC`.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
