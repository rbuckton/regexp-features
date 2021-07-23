---
### YamlMime:Feature
feature: flags
name: Flags
aliases:
- Flag
- RegExp Flags
- RegExp Flag
see_also:
- modifiers
description: *content.description
syntax: *content.syntax
---
# description
<dfn>Flags</dfn> control certain aspects of the matching behavior of a pattern.

# syntax
The following flags are supported:
- `i` &mdash; Ignore Case. Matches [character classes] using a case-insensitive comparison.
- `m` &mdash; Multiline. Causes the [anchors] `^` and `$` to match the start and end of each line (respectively), rather than the start and end of the input.
- `s` &mdash; Singleline. Causes the [wildcard] `.` to match newline characters.
- `x` &mdash; Extended Mode. Ignores whitespace in a pattern. Spaces must instead be represented by `\s` or `\ ` (an escaped space).