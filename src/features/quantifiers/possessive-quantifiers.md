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
- <code>{<em>n</em>,}+</code> &mdash; Match _n_ or more characters without backtracking.
- <code>{<em>n</em>,<em>m</em>}+</code> &mdash; Match between _n_ and _m_ characters without backtracking.