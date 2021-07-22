---
### YamlMime:Feature
feature: named-capturing-groups
syntax: *content
---
- <code>(?\<*name*\>…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
- <code>(?'*name*'…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.