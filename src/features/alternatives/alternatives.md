---
### YamlMime:Feature
feature: alternatives
name: Alternatives
aliases:
- Alternative
description: *content.description
syntax: *content.syntax
---
# description
An <dfn>Alternative</dfn> represents two or more branches in a pattern. If first branch of a pattern fails to match, each alternative is attempted from left to right until a match is found.

# syntax
- `…|…` &mdash; Matches the pattern to the left of the `|`. If that fails, matches the pattern to the right of `|`.