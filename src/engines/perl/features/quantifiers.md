---
### YamlMime:EngineFeature
engine: perl
feature: quantifiers
supported: true
reference: https://perldoc.perl.org/perlre#Quantifiers
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `*` &mdash; Matches the preceding *Atom* zero or more times. Example: `a*b` matches `b`, `ab`, `aab`, `aaab`, etc.
- `+` &mdash; Matches the preceding *Atom* one or more times. Example: `a+b` matches `ab`, `aab`, `aaab`, etc., but not `b`.
- `?` &mdash; Matches the preceding *Atom* zero or one times. Example: `a?b` matches `b`, `ab`.
- <code>{<em>n</em>}</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times. Example: `a{2}` matches `aa` but not `a` or `aaa`.
- <code>{<em>n</em>,}</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times. Example: `a{2,}` matches `aa`, `aaa`, `aaaa`, etc., but not `a`.
- <code>{,<em>n</em>}</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-most *n* times. Example: `a{,2}` matches ``, `a`, `aa`, but not `aaa`, `aaaa`, etc.
- <code>{<em>n</em>,<em>m</em>}</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times. Example: `a{2,3}` matches `aa`, `aaa`, `aaaa`, etc., but not `a` or `aaaa`.