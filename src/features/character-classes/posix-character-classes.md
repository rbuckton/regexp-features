---
### YamlMime:Feature
feature: posix-character-classes
name: Posix Character Classes
aliases:
- Posix Character Class
see_also:
- character-classes
- negated-posix-character-classes
- collating-elements
- equivalence-classes
- character-class-escapes
- line-endings-escape
- character-property-escapes
- character-class-nested-set
- character-class-intersection
- character-class-subtraction
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of characters.

# syntax
- <code>\[\[:<em>name</em>:\]\]</code> &mdash; Where *name* is in a set of predefined names. Matches any character in the set.