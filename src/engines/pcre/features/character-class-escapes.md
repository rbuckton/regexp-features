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
# syntax

- `\d` &mdash; A decimal digit character in the range 0-9. Equivalent to `[0-9]`.
  - If PCRE2_UCP option is set, this is equivalent to `\p{Nd}` instead.
- `\D` &mdash; Any character not in the range 0-9. Equivalent to `[^0-9]`.
  - If PCRE2_UCP option is set, this is equivalent to `\P{Nd}` instead.
- `\w` &mdash; Any "word" character. Equivalent to `[a-zA-Z0-9_]`.
  - If PCRE2_UCP option is set, this is equivalent to `[\p{L}\p{N}_]` instead.
- `\W` &mdash; Any non-"word" character. Equivalent to `[^a-zA-Z0-9_]`.
  - If PCRE2_UCP option is set, this is equivalent to `[^\p{L}\p{N}_]` instead.
- `\s` &mdash; Any whitespace character. Equivalent to `[\x09-\x0d\x20]`, but may depend on locale.
  - If PCRE2_UCP option is set, this is equivalent to `[\p{Z}\h\v]` instead (where `\h` and `\v` are defined below).
- `\S` &mdash; Any non-whitespace character.
  - If PCRE2_UCP option is set, this is equivalent to `[^\p{Z}\h\v]` instead (where `\h` and `\v` are defined below).
- `\h` &mdash; Any horizontal whitespace character. Equivalent to `[\x09\x20\xa0\u{1680}\u{180e}\u{2000}-\u{200a}\u{202f}\u{205f}\u{3000}]`.
- `\H` &mdash; Any non-horizontal whitespace character. Equivalent to `[^\x09\x20\xa0\u{1680}\u{180e}\u{2000}-\u{200a}\u{202f}\u{205f}\u{3000}]`.
- `\v` &mdash; Any vertical whitespace character. Equivalent to `[\x0a-x0d\x85\u{2028}\u{2029}]`.
- `\V` &mdash; Any non-vertical whitespace character. Equivalent to `[^\x0a-x0d\x85\u{2028}\u{2029}]`.
- `\N` &mdash; Any character that is not a newline. Similar to `.`, but is not affected by the `s` [RegExp flag].
