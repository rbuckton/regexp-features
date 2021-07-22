---
### YamlMime:EngineFeature
engine: pcre
feature: modifiers
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC13
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
#### Syntax

- `(?imnsxx-imnsxx)` - Sets or unsets (using `-`) the specified [RegExp flags] starting at the current position until the next closing `)` or the end of the pattern. Example: `(?-i)A(?i)B(?-i)C` matches `ABC`, `AbC`.
- `(?imnsxx-imnsxx: … )` - Sets or unsets (using `-`) the specified [RegExp flags] for the subexpression. Example: `(?-i:A(?i:B)C)` matches `ABC`, `AbC`.
- `(?^)` - Unsets all [RegExp flags].
- `(?^imnsxx)` - Unsets all [RegExp flags] and sets the requested flags.