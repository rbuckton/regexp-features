---
### YamlMime:Feature
feature: modifiers
name: Modifiers
aliases:
- Modifier
see_also:
- flags
description: *content.description
syntax: *content.syntax
---
# description
<dfn>Modifiers</dfn> allow you to change the currently active [RegExp flags] within a subexpression.

# syntax
- `(?imsx-imsx)` - Sets or unsets (using `-`) the specified [RegExp flags] starting at the current position until the next closing `)` or the end of the pattern. Example: `(?-i)A(?i)B(?-i)C` matches `ABC`, `AbC`.
- `(?imsx-imsx:…)` - Sets or unsets (using `-`) the specified [RegExp flags] for the subexpression. Example: `(?-i:A(?i:B)C)` matches `ABC`, `AbC`.