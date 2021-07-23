---
### YamlMime:Feature
feature: capturing-groups
name: Capturing Groups
aliases:
- Capturing Group
- Capture Groups
- Capture Group
see_also:
- named-capturing-groups
- non-capturing-groups
- backreferences
- recursion
- subroutines
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by index. A Capturing Group can be captured and returned by the matching algorithm.

# syntax
- `(…)` &mdash; Groups the subexpression as a single *Atom*. The result is captured and returned by the matching algorithm.