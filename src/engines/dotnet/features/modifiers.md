---
### YamlMime:EngineFeature
engine: dotnet
feature: modifiers
supported: true
reference: https://docs.microsoft.com/en-us/dotnet/standard/base-types/miscellaneous-constructs-in-regular-expressions#inline-options
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
#### Syntax

- `(?imnsx-imnsx)` - Sets or unsets (using `-`) the specified [RegExp flags] starting at the current position until the next closing `)` or the end of the pattern. Example: `(?-i)A(?i)B(?-i)C` matches `ABC`, `AbC`.
- `(?imnsx-imnsx:…)` - Sets or unsets (using `-`) the specified [RegExp flags] for the subexpression. Example: `(?-i:A(?i:B)C)` matches `ABC`, `AbC`.