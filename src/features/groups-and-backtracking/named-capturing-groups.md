---
### YamlMime:Feature
feature: named-capturing-groups
name: Named Capturing Groups
aliases:
- Named Capturing Group
- Named Capture Groups
- Named Capture Group
see_also:
- capturing-groups
- non-capturing-groups
- backreferences
- recursion
- subroutines
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Named Capturing Group</dfn> is a subexpression that can be captured and returned by the matching algorithm. A Named Capturing Group is also an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by name.

# syntax
- <code>(?\<<em>name</em>\>…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
- <code>(?'<em>name</em>'…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.