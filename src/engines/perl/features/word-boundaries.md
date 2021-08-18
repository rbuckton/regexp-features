---
### YamlMime:EngineFeature
engine: perl
feature: word-boundaries
supported: true
reference: https://perldoc.perl.org/perlre#Assertions
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `\b` &mdash; Matches the start or the end of a word.
- `\B` &mdash; Matches when *not* at the start or the end of a word.
- <code>\b{<em>name</em>}</code> &mdash; Matches the start or the end of a unicode boundary specified by *name*.
- <code>\B{<em>name</em>}</code> &mdash; Matches when *not* at the start or the end of a unicode boundary specified by *name*.