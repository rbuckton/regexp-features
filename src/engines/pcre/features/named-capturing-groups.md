---
### YamlMime:EngineFeature
engine: pcre
feature: named-capturing-groups
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC16
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
#### Syntax

- <code>(?&lt;<em>name</em>&gt;…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
- <code>(?'<em>name</em>'…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
- <code>(?P&lt;<em>name</em>&gt;…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
