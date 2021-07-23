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

- <code>(?(<em>condition</em>)<em>condition</em>|<em>condition</em>)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches *no-pattern*.
- <code>(?(<em>condition</em>)<em>condition</em>)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches the empty string.

#### Conditions

The following conditions are supported:

- <code>(?(<em>n</em>) … )</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched; Otherwise, evaluates to **false**. If *n* does not correspond to a [capture group], an error is thrown.
- <code>(?(<em>name</em>) … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; Otherwise, evaluates to **false**. If *name* does not correspond to a [named capture group], *name* is interpeted as a [lookahead] pattern.
- <code>(?(<em>test-pattern</em>) … )</code> &mdash; Evaluates to <em>test-pattern</em>true<em>test-pattern</em> if a [lookahead] for <em>test-pattern</em> matches; Otherwise, evaluates to <em>test-pattern</em>false<em>test-pattern</em>. Equivalent to: <code>(?(?=<em>test-pattern</em>) … )</code>.
- <code>(?(?=<em>test-pattern</em>) … )</code> &mdash; Evaluates to **true** if a [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(?!<em>test-pattern</em>) … )</code> &mdash; Evaluates to **true** if a negative [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(?<=<em>test-pattern</em>) … )</code> &mdash; Evaluates to **true** if a [lookbehind] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(?<!<em>test-pattern</em>) … )</code> &mdash; Evaluates to **true** if a negative [lookbehind] for *test-pattern* matches; Otherwise, evaluates to **false**.