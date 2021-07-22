---
### YamlMime:EngineFeature
engine: boost.regex
feature: alternatives
supported: true
reference: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.alternation
syntax: *content.syntax
---
# syntax

- `|` &mdash; Matches the pattern to the left of the `|`. If that fails, matches the pattern to the right of `|`.

> NOTE: In `Boost.Regex`, empty alternatives are not allowed, so `|abc` is invalid. You can specify an explicit empty alternative by using `(?:)`, for example: `(?:)|abc`.