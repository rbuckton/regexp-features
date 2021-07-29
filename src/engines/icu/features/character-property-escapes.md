---
### YamlMime:EngineFeature
engine: icu
feature: character-property-escapes
supported: true
reference: https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expression-metacharacters
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax

- <code>\N{<em>name</em>}</code> &mdash; Where *name* is a predefined unicode character name. Matches the named unicode character.
- <code>\p{<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that has the property *name*.
- <code>\P{<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that does not have the property *name*.
