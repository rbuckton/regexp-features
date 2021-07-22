---
### YamlMime:Feature
feature: collating-elements
name: Collating Elements
aliases:
- Collating Element
see_also:
- character-classes
- posix-character-classes
- negated-posix-character-classes
- equivalence-classes
- character-class-escapes
- line-ending-escape
- character-property-escapes
- character-class-nested-set
- character-class-intersection
- character-class-subtraction
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Collating Element</dfn> is one or more characters that collate as a single unit.

# syntax
- <code>\[\[.*col*.\]\]</code> &mdash; Matches the collating element *col* if *col* is treated as a single collating unit in the current locale. Example: `[[.ae.]-c]` matches a single character in the range "ae"-"c". *col* may also be specified by a symbolic name.