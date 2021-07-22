---
### YamlMime:Feature
feature: conditional-expressions
syntax: *content
---
- <code>(?(*condition*)*yes-pattern*|*no-pattern*)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches *no-pattern*.
- <code>(?(*condition*)*yes-pattern*)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches the empty string.

#### Conditions

The following conditions are supported:

- <code>(?(?=*test-pattern*) … )</code> &mdash; Evaluates to **true** if a [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(?!*test-pattern*) … )</code> &mdash; Evaluates to **true** if a negative [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(*n*) … )</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?(\<*name*\>) … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?('*name*') … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?(R) … )</code> &mdash; Evaluates to **true** if inside a [recursive expression]; Otherwise, evaluates to **false**.
- <code>(?(R*n*) … )</code> &mdash; Evaluates to **true** if inside a [recursive expression] for the [capture group] at offset *n*; Otherwise, evaluates to **false**.
- <code>(?(R&*name*) … )</code> &mdash; Evaluates to **true** if inside a [recursive expression] for the [named capture group] with the name *name*; Otherwise, evaluates to **false**.
- <a name="define-condition"></a><code>(?(DEFINE) … )</code> &mdash; Always evaluates to **false**. This allows you to define [Subroutines].