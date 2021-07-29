---
### YamlMime:Feature
feature: line-comments
name: Line Comments
aliases:
- Line Comment
- x-mode Comments
- x-mode Comment
see_also:
- comments
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Line Comment</dfn> is a sequence of characters starting with `#` and ending with `\n` (or the end of the pattern) that is ignored by pattern matching and can be used to document a pattern.

# syntax
- <code>#…<strong>\n</strong></code> &mdash; The rest of the line starting from `#` is removed from the pattern. Only supported when the `x` (extended mode) [RegExp flag] is set.