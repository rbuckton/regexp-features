---
### YamlMime:EngineFeature
engine: dotnet
feature: conditional-expressions
supported: true
reference: https://docs.microsoft.com/en-us/dotnet/standard/base-types/alternation-constructs-in-regular-expressions#Conditional_Expr
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax

- <code>(?(*condition*)*yes-pattern*|*no-pattern*)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches *no-pattern*.
- <code>(?(*condition*)*yes-pattern*)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches the empty string.

#### Conditions

The following conditions are supported:

- <code>(?(*n*) … )</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched; Otherwise, evaluates to **false**. If *n* does not correspond to a [capture group], an error is thrown.
- <code>(?(*name*) … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; Otherwise, evaluates to **false**. If *name* does not correspond to a [named capture group], *name* is interpeted as a [lookahead] pattern.
- <code>(?(*test-pattern*) … )</code> &mdash; Evaluates to **true** if a [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**. Equivalent to: <code>(?(?=*test-pattern*) … )</code>.
- <code>(?(?=*test-pattern*) … )</code> &mdash; Evaluates to **true** if a [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(?!*test-pattern*) … )</code> &mdash; Evaluates to **true** if a negative [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(?<=*test-pattern*) … )</code> &mdash; Evaluates to **true** if a [lookbehind] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(?<!*test-pattern*) … )</code> &mdash; Evaluates to **true** if a negative [lookbehind] for *test-pattern* matches; Otherwise, evaluates to **false**.