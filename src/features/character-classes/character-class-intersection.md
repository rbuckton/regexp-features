---
### YamlMime:Feature
feature: character-class-intersection
name: Character Class Intersection
see_also:
- character-classes
- posix-character-classes
- negated-posix-character-classes
- collating-elements
- equivalence-classes
- character-class-escapes
- line-ending-escape
- character-property-escapes
- character-class-nested-set
- character-class-subtraction
aliases:
- Character Class Intersections
description: *content.description
syntax: *content.syntax
---
# description

<dfn>Character Class Intersection</dfn> allows you to indicate that only characters that are in both [character classes] should match.

# syntax

- `[…&&…]` &mdash; Matches any character that is in both the left- and right-hand sets of `&&`.