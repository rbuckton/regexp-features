---
### YamlMime:Feature
feature: equivalence-classes
name: Equivalence Classes
aliases:
- Equivalence Class
see_also:
- character-classes
- posix-character-classes
- negated-posix-character-classes
- collating-elements
- character-class-escapes
- line-endings-escape
- character-property-escapes
- character-class-nested-set
- character-class-intersection
- character-class-union
- character-class-subtraction
- character-class-symmetric-difference
- character-class-complement
description: *content.description
syntax: *content.syntax
---
# description
An <dfn>Equivalence Class</dfn> matches any character or collating element with the same primary sort key as the provided collating element.

# syntax
- <code>[[=<em>col</em>=]]</code> &mdash; Matches any character with the same primary sort key as *col*. Example: `[[=a=]]` matches `a`, `À`, `Á`, `Â`, `Ã`, `Ä`, `Å`, `A`, `à`, `á`, `â`, etc.