---
### YamlMime:EngineFeature
engine: perl
feature: character-classes
supported: true
reference: https://perldoc.perl.org/perlre#Character-Classes-and-other-Special-Escapes
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `[…]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `^` at the start and `-` between two entries in the set. Matches a character in the set. Example: `[abc]` matches `a`, `b`, or `c`.
- <a id="negated-character-class"></a>`[^…]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `-` between two entries in the set. Matches any character not in the set. Example: `[^abc]` matches `d`, `e`, or `f`, etc., but not `a`, `b`, or `c`.
- <a id="character-class-range"></a><code>[<em>a</em>-<em>z</em>]</code> &mdash; Where *a* and *z* are single characters or character escapes. Matches any character in the range between *a* and *z* (inclusive). Example: `[a-c]` matches `a`, `b`, or `c`, but not `d`.
- `(?[…])` &mdash; Extended Bracketed Character Class, permit the following features:
  - [Character Class Intersection]
  - [Character Class Subtraction]
  - [Character Class Nested Set]
  - [Character Class Union]
  - [Character Class Symmetric Difference]
  - [Character Class Complement]

#### Extended Bracketed Character Class

Inside of `(?[…])`, only meta characters are permitted and whitespace is ignored. Individual characters (like `a`, `1`, etc.) must be enclosed in a [Character Class Nested Set].

In addition, expressions within the bracketed character class may be grouped using `(` and `)`.