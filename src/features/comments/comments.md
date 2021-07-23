---
### YamlMime:Feature
feature: comments
name: Comments
aliases:
- Comment
see_also:
- line-comments
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Comment</dfn> is a sequence of characters that is ignored by pattern matching and can be used to document a pattern.

# syntax
- `(?#…)` &mdash; The entire expression is removed from the pattern. A comment may not contain other `(` or `)` characters.