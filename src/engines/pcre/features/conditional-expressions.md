---
### YamlMime:EngineFeature
engine: pcre
feature: conditional-expressions
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC23
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# Syntax

- <code>(?(<em>condition</em>)<em>condition</em>|<em>condition</em>)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches *no-pattern*.
- <code>(?(<em>condition</em>)<em>condition</em>)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches the empty string.

#### Conditions

The following conditions are supported:

- <code>(?(?=<em>test-pattern</em>)…)</code> &mdash; Evaluates to **true** if a [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(?!<em>test-pattern</em>)…)</code> &mdash; Evaluates to **true** if a negative [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(<em>n</em>)…)</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?(&lt;<em>name</em>&gt;)…)</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?('<em>name</em>')…)</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?(R)…)</code> &mdash; Evaluates to **true** if inside a [recursive expression]; Otherwise, evaluates to **false**.
- <code>(?(R<em>n</em>)…)</code> &mdash; Evaluates to **true** if inside a [recursive expression] for the [capture group] at offset *n*; Otherwise, evaluates to **false**.
- <code>(?(R&<em>name</em>)…)</code> &mdash; Evaluates to **true** if inside a [recursive expression] for the [named capture group] with the name *name*; Otherwise, evaluates to **false**.
- <a name="define-condition"></a><code>(?(DEFINE)…)</code> &mdash; Always evaluates to **false**. This allows you to define [Subroutines].
- <code>(?(VERSION=<em>version</em>)…)</code> &mdash; Evaluates to **true** if the PCRE version is equal to supplied version; otherwise, evaluates to **false**.
- <code>(?(VERSION&gt;=<em>version</em>)…)</code> &mdash; Evaluates to **true** if the PCRE version is greater than or equal to the supplied version; otherwise, evaluates to **false**.