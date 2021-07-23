---
### YamlMime:EngineFeature
engine: oniguruma
feature: character-property-escapes
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L112
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax

- <code>\\p{<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that has the property *name*.
- <code>\\p{^<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that does not have the property *name*.
- <code>\\P{<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that does not have the property *name*.
