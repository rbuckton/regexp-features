---
### YamlMime:Feature
feature: character-property-escapes
name: Character Property Escapes
aliases:
- Character Property Escape
see_also:
- character-classes
- posix-character-classes
- negated-posix-character-classes
- collating-elements
- equivalence-classes
- character-class-escapes
- line-endings-escape
- character-class-nested-set
- character-class-intersection
- character-class-subtraction
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Character Property Escape</dfn> is an escape sequence used to match a character with a specific character property.

# syntax
- <code>\\p<em>X</em></code> &mdash; Where *X* is a single character. Matches a character that has the property *X*.
- <code>\\p{<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that has the property *name*.
- <code>\\P<em>X</em></code> &mdash; Where *X* is a single character. Matches a character that does not have the property *X*.
- <code>\\P{<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that does not have the property *name*.