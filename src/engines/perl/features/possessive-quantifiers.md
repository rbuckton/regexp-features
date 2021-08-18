---
### YamlMime:EngineFeature
engine: perl
feature: possessive-quantifiers
supported: true
reference: https://perldoc.perl.org/perlre#Quantifiers
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `*+` &mdash; Match zero or more characters without backtracking.
- `++` &mdash; Match one or more characters without backtracking.
- `?+` &mdash; Match zero or one characters without backtracking.
- <code>{<em>n</em>}+</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times without backtracking (redundant).
- <code>{<em>n</em>,}+</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times without backtracking.
- <code>{,<em>n</em>}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-most *n* times without backtracking.
- <code>{<em>n</em>,<em>m</em>}+</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times without backtracking.