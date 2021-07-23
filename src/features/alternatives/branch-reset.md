---
### YamlMime:Feature
feature: branch-reset
name: Branch Reset
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Branch Reset</dfn> resets the subexpression count at the start of each [Alternative] (`|`), which affects numbering for [Backreferences] and captured results returned from the matching algorithm.

# syntax
- `(?|…)` &mdash; Resets the subexpression count at the start of each [Alternative].