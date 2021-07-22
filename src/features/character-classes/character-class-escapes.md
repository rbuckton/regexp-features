---
### YamlMime:Feature
feature: character-class-escapes
name: Character Class Escapes
aliases:
- Character Class Escape
see_also:
- character-classes
- posix-character-classes
- negated-posix-character-classes
- collating-elements
- equivalence-classes
- line-endings-escape
- character-property-escapes
- character-class-nested-set
- character-class-intersection
- character-class-subtraction
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Character Class Escape</dfn> is a single character escape that represents an entire character class. They can be used as an element of a [Character Class] or as an *Atom*. It is often the case that a lower-case escape character is the inclusive set, while an upper-case variant of the same character excludes that set.
# syntax
- `\d` &mdash; A decimal digit character in the range 0-9. Equivalent to `[0-9]`.
- `\D` &mdash; Any character not in the range 0-9. Equivalent to `[^0-9]`.
- `\w` &mdash; Any "word" character. Equivalent to `[a-zA-Z0-9_]`.
- `\W` &mdash; Any non-"word" character. Equivalent to `[^a-zA-Z0-9_]`.
- `\s` &mdash; Any whitespace character.
- `\S` &mdash; Any non-whitespace character.