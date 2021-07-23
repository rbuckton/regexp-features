---
### YamlMime:EngineFeature
engine: oniguruma
feature: recursion
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L418
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <code>\\k\<<em>n</em>+<em>n</em>\></code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\\k'<em>n</em>+<em>n</em>'</code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\\k\<<em>n</em>-<em>n</em>\></code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\\k'<em>n</em>-<em>n</em>'</code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\\k\<<em>name</em>\></code> &mdash; Where *level* is an integer >= 0. Matches the same string as the [named capture group] with the name *name* at the recursion level relative to the referenced [named capture group].
- <code>\\k'<em>name</em>'</code> &mdash; Where *level* is an integer >= 0. Matches the same string as the [named capture group] with the name *name* at the recursion level relative to the referenced [named capture group].
- <code>\\g\<<em>n</em>\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>\\g'<em>n</em>'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- `\g<0>` &mdash; Evaluates the entire pattern at the current position.
- `\g'0'` &mdash; Evaluates the entire pattern at the current position.
- <code>\\g\<<em>-n</em>\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\\g'<em>-n</em>'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\\g\<<em>+n</em>\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\\g'<em>+n</em>'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\\g\<<em>name</em>\></code> &mdash; Evaluates the [named capture group] with the provided *name*.
- <code>\\g'<em>name</em>'</code> &mdash; Evaluates the [named capture group] with the provided *name*.

> NOTE: Left-most recursive calls are forbidden:
> - `(?<name>a|\g<name>b)` - error
> - `(?<name>a|b\g<name>c)` - ok
> Source for this example comes from Oniguruma: [source](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L464-L467)