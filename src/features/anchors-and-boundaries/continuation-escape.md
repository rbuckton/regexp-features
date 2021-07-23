---
### YamlMime:Feature
feature: continuation-escape
name: Continuation Escape
see_also:
- anchors
- buffer-boundaries
- word-boundaries
- text-segment-boundaries
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Continuation Escape</dfn> is a zero-width assertion that matches either the start of the input or the start of the last match.

# syntax
- `\G` &mdash; Matches either the start of the input or the start of the last match.