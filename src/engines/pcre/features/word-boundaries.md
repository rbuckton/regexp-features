---
### YamlMime:EngineFeature
engine: pcre
feature: word-boundaries
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC5
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
#### Syntax

- `\b` &mdash; Matches the start or the end of a word.
- `\B` &mdash; Matches when *not* at the start or the end of a word.
- `[[:<:]]` &mdash; Matches the start of a word. Equivalent to: `\b(?=\w)`
- `[[:>:]]` &mdash; Matches the end of a word. Equivalent to: `\b(?<=\w)`