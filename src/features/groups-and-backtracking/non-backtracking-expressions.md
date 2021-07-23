---
### YamlMime:Feature
feature: non-backtracking-expressions
name: Non-Backtracking Expressions
aliases:
- Non-Backtracking Expression
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Non-Backtracking Expression</dfn> is matched independent of neighboring patterns, and will not backtrack in the event of a failed match. This is often used to improve performance.

# syntax
- `(?>…)` &mdash; Matches the provided pattern, but no backtracking is performed if the match fails.