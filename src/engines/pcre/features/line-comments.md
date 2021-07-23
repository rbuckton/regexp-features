---
### YamlMime:EngineFeature
engine: pcre
feature: line-comments
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC24
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <code># … <strong>\\n</strong></code> &mdash; The rest of the line is removed from the pattern. Only supported when either the `x` (extended mode) or `xx` (extended more mode) [RegExp flags] are set.
