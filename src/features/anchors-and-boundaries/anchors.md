---
### YamlMime:Feature
feature: anchors
name: Anchors
aliases:
- Anchor
see_also:
- buffer-boundaries
- word-boundaries
- text-segment-boundaries
- continuation-escape
description: *content.description
syntax: *content.syntax
---
# description
<dfn>Anchors</dfn> match the start or end of a line.

# syntax
- `^` &mdash; Matches the start of a line when the `m` (multiline) [flag] is set. Otherwise, matches the start of the input.
- `$` &mdash; Matches the end of a line when the `m` (multiline) [flag] is set. Otherwise, matches the end of the input.