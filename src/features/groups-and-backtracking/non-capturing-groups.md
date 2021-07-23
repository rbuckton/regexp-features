---
### YamlMime:Feature
feature: non-capturing-groups
name: Non-Capturing Groups
aliases:
- Non-Capturing group
see_also:
- capturing-groups
- named-capturing-groups
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Non-capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] but cannot be referenced using [Backreferences]. A Non-capturing Group is not captured by the matching algorithm.

# syntax
- `(?:…)` &mdash; Groups the subexpression as a single *Atom*.