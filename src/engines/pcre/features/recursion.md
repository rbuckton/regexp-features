---
### YamlMime:EngineFeature
engine: pcre
feature: recursion
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC25
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
#### Syntax

- <code>(?R)</code> &mdash; Reevaluates the entire pattern starting at the current position.
- <code>(?0)</code> &mdash; Reevaluates the entire pattern starting at the current position.
- <code>(?*n*)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is *n*.
- <code>(?-*n*)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*. Example: `(?-1)` would revaluate the last declared [capture group].
- <code>(?+*n*)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*. Example: `(?+1)` would evaluate the next declared [capture group].
- <code>(?&*name*)</code> &mdash; Re-evaluates the [named capture group] with the provided *name*.
- <code>(?P>*name*)</code> &mdash; Re-evaluates the [named capture group] with the provided *name*.