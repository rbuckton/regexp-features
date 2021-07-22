---
### YamlMime:Feature
feature: line-endings-escape
name: Line Endings Escape
see_also:
- character-classes
- posix-character-classes
- negated-posix-character-classes
- collating-elements
- equivalence-classes
- character-class-escapes
- character-property-escapes
- character-class-nested-set
- character-class-intersection
- character-class-subtraction
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Line Endings Escape</dfn> is an *Atom* that matches any line ending character sequence.

# syntax
- `\R` &mdash; Equivalent to `(?>\r\n?|[\x0A-\x0C\x85\u{2028}\u{2029}])`