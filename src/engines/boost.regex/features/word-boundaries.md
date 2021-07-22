---
### YamlMime:EngineFeature
engine: boost.regex
feature: word-boundaries
reference: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.word_boundaries
supported: true
syntax: *content.syntax
---
# syntax
- `` \` `` &mdash; Matches the start of the input.
- `\'` &mdash; Matches the end of the input.
- `\A` &mdash; Matches the start of the input.
- `\z` &mdash; Matches the end of the input.
- `\Z` &mdash; A zero-width assertion consisting of an optional sequence of newlines at the end of the buffer. Equivalent to `(?=\n*\z)`.
