---
### YamlMime:EngineFeature
engine: boost.regex
feature: character-class-escapes
supported: true
reference: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.single_character_character_class
syntax: *content.syntax
---
# syntax

- `\d` &mdash; A decimal digit character in the range 0-9. Equivalent to `[0-9]`.
- `\D` &mdash; Any character not in the range 0-9. Equivalent to `[^0-9]`.
- `\w` &mdash; Any "word" character. Equivalent to `[a-zA-Z0-9_]`.
- `\W` &mdash; Any non-"word" character. Equivalent to `[^a-zA-Z0-9_]`.
- `\s` &mdash; Any whitespace character.
- `\S` &mdash; Any non-whitespace character.
- `\l` &mdash; Any lower-case character.
- `\L` &mdash; Any non-lower-case character.
- `\u` &mdash; Any upper-case character.
- `\U` &mdash; Any non-upper-case character.
- `\h` &mdash; Any horizontal whitespace character.
- `\H` &mdash; Any non-horizontal whitespace character.
- `\v` &mdash; Any vertical whitespace character.
- `\V` &mdash; Any non-vertical whitespace character.
