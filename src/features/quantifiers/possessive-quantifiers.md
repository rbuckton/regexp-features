---
### YamlMime:Feature
feature: possessive-quantifiers
name: Possessive Quantifiers
aliases:
- Possessive Quantifier
see_also:
- quantifiers
- lazy-quantifiers
description: *content.description
syntax: *content.syntax
---
# description
<dfn>Possessive Quantifiers</dfn> are like greedy (i.e., regular) [quantifiers], except that backtracking is not performed.

# syntax
- `*+` &mdash; Match zero or more characters without backtracking.
- `++` &mdash; Match one or more characters without backtracking.
- `?+` &mdash; Match zero or one characters without backtracking.
- <code>{<em>n</em>,}+</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times without backtracking.
- <code>{<em>n</em>,<em>m</em>}+</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times without backtracking.