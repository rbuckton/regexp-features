---
### YamlMime:Feature
feature: character-class-nested-set
name: Character Class Nested Set
see_also:
- character-classes
- posix-character-classes
- negated-posix-character-classes
- collating-elements
- equivalence-classes
- character-class-escapes
- line-ending-escape
- character-property-escapes
- character-class-intersection
- character-class-subtraction
aliases:
- Character Class Nested Sets
description: *content.description
syntax: *content.syntax
example: *content.example
---
# description

A <dfn>Character Class Nested Set</dfn> allows you to to define a nested [character class] inside of a [character class].

# syntax

- `[[…]]` &mdash; Matches any character in the set, just like a normal [character class].
- `[[^…]]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `-` between two entries in the set. Matches any character not in the set, just like a normal [negated character class].
- <code>[[*a*-*z*]]</code> &mdash; Where *a* and *z* are single characters or character escapes. Matches any character in the range between *a* and *z* (inclusive), just like a normal [character class range].

# example

```
[a-z&&[^d-q]]
```

Is equivalent to:

```re
[a-cr-z]
```