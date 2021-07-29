---
### YamlMime:EngineFeature
engine: pcre
feature: subroutines
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC26
description: *content.description
syntax: *content.syntax
#example: *content.example
---
# description
A <dfn>Subroutine</dfn> is a pre-defined [capture group] or [named capture group] that can be reused in multiple places within the pattern. These [capture groups] can optionally be placed in a
[DEFINE condition].

# syntax
- `(?(DEFINE)…)` &mdash; Defines a set of reusable [capture groups] that can be referenced elsewhere in the pattern.
- <code>(?<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>(?-<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*. Example: `(?-1)` would revaluate the last declared [capture group].
- <code>(?+<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*. Example: `(?+1)` would evaluate the next declared [capture group].
- <code>(?&<em>name</em>)</code> &mdash; Evaluates the [named capture group] with the provided *name*.
- <code>\g&lt;<em>name</em>&gt;</code> &mdash; Evaluates the [named capture group] with the provided *name*.