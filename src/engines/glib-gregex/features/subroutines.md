---
### YamlMime:EngineFeature
engine: glib-gregex
feature: subroutines
supported: true
reference: https://developer-old.gnome.org/glib/unstable/glib-regex-syntax.html#id-1.5.25.18.9
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
### Syntax
- `(?(DEFINE)…)` &mdash; Defines a set of reusable [capture groups] that can be referenced elsewhere in the pattern.
- <code>(?<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>(?-<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*. Example: `(?-1)` would revaluate the last declared [capture group].
- <code>(?+<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*. Example: `(?+1)` would evaluate the next declared [capture group].
- <code>(?&<em>name</em>)</code> &mdash; Evaluates the [named capture group] with the provided *name*.
- <code>(?P&gt;<em>name</em>)</code> &mdash; Evaluates the [named capture group] with the provided *name*.
