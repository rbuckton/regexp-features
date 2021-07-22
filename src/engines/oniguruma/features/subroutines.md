---
### YamlMime:EngineFeature
engine: oniguruma
feature: subroutines
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L451
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <code>\\g\<*n*\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>\\g'*n*'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- `\g<0>` &mdash; Evaluates the entire pattern at the current position.
- `\g'0'` &mdash; Evaluates the entire pattern at the current position.
- <code>\\g\<*-n*\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\\g'*-n*'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\\g\<*+n*\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\\g'*+n*'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\\g\<*name*\></code> &mdash; Evaluates the [named capture group] with the provided *name*.
- <code>\\g'*name*'</code> &mdash; Evaluates the [named capture group] with the provided *name*.
