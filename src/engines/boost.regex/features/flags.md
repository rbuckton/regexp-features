---
### YamlMime:EngineFeature
engine: boost.regex
feature: flags
reference: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.modifiers
supported: true
syntax: *content.syntax
---
# syntax
The following flags are supported:

- `i` &mdash; Ignore Case. Matches [character classes] using a case-insensitive comparison.
- `m` &mdash; Multiline. Causes the [anchors] `^` and `$` to match the start and end of each line (respectively), rather than the start and end of the input.
- `s` &mdash; Singleline. Causes the [wildcard] `.` to match newline characters.
- `x` &mdash; Extended Mode. Ignores whitespace in a pattern. Spaces must instead be represented by `\s` or `\ ` (an escaped space).