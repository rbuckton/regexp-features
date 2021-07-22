---
### YamlMime:EngineFeature
engine: boost.regex
feature: backreferences
supported: true
reference: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.back_references
syntax: *content.syntax
---
# syntax

- <code>\\*n*</code> &mdash; Where *n* is in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\\g*n*</code> &mdash; Where *n* is in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\\g-*n*</code> &mdash; Where *n* is in the range 1-9. Matches the *n*th previous [capture group].
- <code>\\g{*n*}</code> &mdash; Where *n* is an integer >= 0. Matches the same string as the [capture group] *n*.
- <code>\\g{-*n*}</code> &mdash; Where *n* is an integer >= 0. Matches the *n*th previous [capture group].
- <code>\\g{*name*}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\\k\<*name*\></code> &mdash; Matches the [named capture group] with the name *name*.
