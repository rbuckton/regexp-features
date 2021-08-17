---
### YamlMime:EngineFeature
engine: glib-gregex
feature: named-capturing-groups
supported: true
reference: https://developer-old.gnome.org/glib/unstable/glib-regex-syntax.html#id-1.5.25.13
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <code>(?&lt;<em>name</em>&gt;…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
- <code>(?'<em>name</em>'…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
- <code>(?P&lt;<em>name</em>&gt;…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
