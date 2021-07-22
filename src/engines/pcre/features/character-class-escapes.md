---
### YamlMime:EngineFeature
engine: pcre
feature: character-class-escapes
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC9
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
#### Syntax

- `\d` &mdash; A decimal digit character in the range 0-9. Equivalent to `[0-9]`.
- `\D` &mdash; Any character not in the range 0-9. Equivalent to `[^0-9]`.
- `\w` &mdash; Any "word" character. Equivalent to `[a-zA-Z0-9_]`.
- `\W` &mdash; Any non-"word" character. Equivalent to `[^a-zA-Z0-9_]`.
- `\s` &mdash; Any whitespace character.
- `\S` &mdash; Any non-whitespace character.
- `\h` &mdash; Any horizontal whitespace character.
- `\H` &mdash; Any non-horizontal whitespace character.
- `\v` &mdash; Any vertical whitespace character.
- `\V` &mdash; Any non-vertical whitespace character.
- `\N` &mdash; Any character that is not a newline. Similar to `.`, but is not affected by the `s` [RegExp flag].