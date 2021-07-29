---
### YamlMime:Feature
feature: backreferences
name: Backreferences
aliases:
- Backreference
see_also:
- capturing-groups
- named-capturing-groups
description: *content.description
syntax: *content.syntax
---
# description
<dfn>Backreferences</dfn> allow a pattern to re-match a previously matched capture group<sup>[1][Capturing Groups] [2][Named Capturing Groups]</sup> either by number (_n_) or by _name_.

# syntax
- <code>\\<em>n</em></code> &mdash; Where *n* is a decimal digit in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\k&lt;<em>name</em>&gt;</code> &mdash; Matches the same string as the [named capture group] with the name *name*.