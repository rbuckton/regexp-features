---
### YamlMime:Feature
feature: subroutines
syntax: *content
---
- `(?(DEFINE) … )` &mdash; Defines a set of reusable [capture groups] that can be referenced elsewhere in the pattern.
- <code>(?*n*)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>(?-*n*)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*. Example: `(?-1)` would revaluate the last declared [capture group].
- <code>(?+*n*)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*. Example: `(?+1)` would evaluate the next declared [capture group].
- <code>(?&*name*)</code> &mdash; Evaluates the [named capture group] with the provided *name*.