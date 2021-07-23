---
### YamlMime:Feature
feature: text-segment-boundaries
name: Text Segment Boundaries
aliases:
- Text Segment Boundary
see_also:
- anchors
- buffer-boundaries
- word-boundaries
- continuation-escape
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Text Segment Boundary</dfn> is an *Atom* that matches the start or the end of a text segment.

# syntax
- `\y` &mdash; Matches the start or the end of a text segment.
- `\Y` &mdash; Matches when *not* at the start or the end of a text segment.