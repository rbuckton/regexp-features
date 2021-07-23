---
### YamlMime:Feature
feature: lazy-quantifiers
name: Lazy Quantifiers
aliases:
- Lazy Quantifier
see_also:
- quantifiers
- possessive-quantifiers
description: *content.description
syntax: *content.syntax
---
# description
<dfn>Lazy Quantifiers</dfn> specify repetition of an *Atom*, but attempt to match as few instances of the preceding *Atom* as possible to satisfy the pattern before advancing.

# syntax
- `*?` &mdash; Matches the preceding *Atom* zero or more times.
- `+?` &mdash; Matches the preceding *Atom* one or more times.
- `??` &mdash; Matches the preceding *Atom* zero or one times.
- <code>{<em>n</em>}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times.
- <code>{<em>n</em>,}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times.
- <code>{<em>n</em>,<em>n</em>}?</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times.