---
### YamlMime:Feature
feature: recursion
name: Recursion
aliases:
- Recursive Expression
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Recursive Expression</dfn> provides a mechanism for re-evaluating a [capture group] inside of itself, to handle cases such as matching balanced parenthesis or brackets, etc.

# syntax
- <code>(?R)</code> &mdash; Reevaluates the entire pattern starting at the current position.
- <code>(?0)</code> &mdash; Reevaluates the entire pattern starting at the current position.