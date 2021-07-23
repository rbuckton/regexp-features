---
### YamlMime:EngineFeature
engine: boost.regex
feature: recursion
supported: true
reference: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.recursive_expressions
syntax: *content.syntax
---
# syntax
- <code>(?R)</code> &mdash; Reevaluates the entire pattern starting at the current position.
- <code>(?0)</code> &mdash; Reevaluates the entire pattern starting at the current position.
- <code>(?<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is *n*.
- <code>(?-<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*. Example: `(?-1)` would revaluate the last declared [capture group].
- <code>(?+<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*. Example: `(?+1)` would evaluate the next declared [capture group].
- <code>(?&<em>name</em>)</code> &mdash; Re-evaluates the [named capture group] with the provided *name*.