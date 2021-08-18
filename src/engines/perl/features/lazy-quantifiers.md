---
### YamlMime:EngineFeature
engine: perl
feature: lazy-quantifiers
supported: true
reference: https://perldoc.perl.org/perlre#Quantifiers
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `*?` &mdash; Matches the preceding *Atom* zero or more times.
- `+?` &mdash; Matches the preceding *Atom* one or more times.
- `??` &mdash; Matches the preceding *Atom* zero or one times.
- <code>{<em>n</em>}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times.
- <code>{<em>n</em>,}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times.
- <code>{,<em>n</em>}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-most *n* times.
- <code>{<em>n</em>,<em>m</em>}?</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times.