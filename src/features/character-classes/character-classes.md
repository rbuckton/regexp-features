---
### YamlMime:Feature
feature: character-classes
name: Character Classes
aliases:
- Character Class
see_also:
- posix-character-classes
- negated-posix-character-classes
- collating-elements
- equivalence-classes
- character-class-escapes
- line-endings-escape
- character-property-escapes
- character-class-nested-set
- character-class-intersection
- character-class-subtraction
links:
- name: Character Class Range
  href: '#character-class-range'
- name: Negated Character Class
  href: '#negated-character-class'
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Character Class</dfn> is an *Atom* that specifies a set of characters to match a single character in the set.

# syntax
- `[…]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `^` at the start and `-` between two entries in the set. Matches a character in the set. Example: `[abc]` matches `a`, `b`, or `c`.
- <a id="negated-character-class"></a>`[^…]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `-` between two entries in the set. Matches any character not in the set. Example: `[^abc]` matches `d`, `e`, or `f`, etc., but not `a`, `b`, or `c`.
- <a id="character-class-range"></a><code>[*a*-*z*]</code> &mdash; Where *a* and *z* are single characters or character escapes. Matches any character in the range between *a* and *z* (inclusive). Example: `[a-c]` matches `a`, `b`, or `c`, but not `d`.