---
### YamlMime:EngineFeature
engine: oniguruma
feature: conditional-expressions
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L379
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <code>(?(*condition*)*yes-pattern*|*no-pattern*)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches *no-pattern*.
- <code>(?(*condition*)*yes-pattern*)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches the empty string.

#### Conditions

The following conditions are supported:

- <code>(?(?=*test-pattern*) … )</code> &mdash; Evaluates to **true** if a [lookahead] for *test-pattern* matches; otherwise, evaluates to **false**.
- <code>(?(?!*test-pattern*) … )</code> &mdash; Evaluates to **true** if a negative [lookahead] for *test-pattern* matches; otherwise, evaluates to **false**.
- <code>(?(*n*) … )</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(-*n*) … )</code> &mdash; Evaluates to **true** if the *n*th [capture group] declared to the left of the current *Atom* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(+*n*) … )</code> &mdash; Evaluates to **true** if the *n*th [capture group] declared to the right of the current *Atom* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(*n*-*level*) … )</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?(*n*+*level*) … )</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?(\<*name*\>) … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; otherwise, evaluates to **false**.
- <code>(?('*name*') … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(\<*name*-*level*\>) … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?('*name*-*level*') … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?(\<*name*+*level*\>) … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?('*name*+*level*') … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
