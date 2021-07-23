---
### YamlMime:Feature
feature: word-boundaries
name: Word Boundaries
aliases:
- Word Boundary
see_also:
- anchors
- buffer-boundaries
- text-segment-boundaries
- continuation-escape
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Word Boundary</dfn> is an *Atom* that matches the start or the end of a word.

# syntax
- `\b` &mdash; Matches the start or the end of a word.
- `\B` &mdash; Matches when *not* at the start or the end of a word.