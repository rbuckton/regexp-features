---
### YamlMime:Feature
feature: buffer-boundaries
name: Buffer Boundaries
aliases:
- Buffer Boundary
see_also:
- anchors
- word-boundaries
- text-segment-boundaries
- continuation-escape
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Buffer Boundary</dfn> is an *Atom* that matches the start or the end of the input. This differs slightly from `^` and `$` which can be affected by [RegExp flags] like `m`.

# syntax
- `\A` &mdash; Matches the start of the input.
- `\z` &mdash; Matches the end of the input.
- `\Z` &mdash; A zero-width assertion consisting of an optional newline at the end of the buffer. Equivalent to `(?=\n?\z)`.