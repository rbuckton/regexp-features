---
### YamlMime:Feature
feature: lazy-quantifiers
syntax: *content
---
- `*?` &mdash; Matches the preceding *Atom* zero or more times.
- `+?` &mdash; Matches the preceding *Atom* one or more times.
- `??` &mdash; Matches the preceding *Atom* zero or one times.
- <code>{*n*}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times.
- <code>{*n*,}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times.
- <code>{*n*,*m*}?</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times.