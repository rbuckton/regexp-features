---
### YamlMime:Feature
feature: backreferences
syntax: *content
---
- <code>\\*n*</code> &mdash; Where *n* is a decimal digit in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\\k\<*name*\></code> &mdash; Matches the same string as the [named capture group] with the name *name*.