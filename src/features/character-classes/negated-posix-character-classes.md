---
### YamlMime:Feature
feature: negated-posix-character-classes
name: Negated Posix Character Classes
aliases:
- Negated Posix Character Class
see_also:
- character-classes
- posix-character-classes
- collating-elements
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
A <dfn>Negated Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of excluded characters.

# syntax
- <code>\[\[:^*name*:\]\]</code> &mdash; Where *name* is in a set of predefined names. Matches any character not in the set.