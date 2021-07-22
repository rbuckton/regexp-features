---
### YamlMime:EngineFeature
engine: dotnet
feature: character-property-escapes
supported: true
reference: https://docs.microsoft.com/en-us/dotnet/standard/base-types/character-classes-in-regular-expressions#unicode-category-or-unicode-block-p
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax

- <code>\\p{*name*}</code> &mdash; Where *name* is a predefined unicode property name. Matches a character that has the unicode property *name*.
- <code>\\P{*name*}</code> &mdash; Where *name* is a predefined unicode property name. Matches a character that does not have the unicode property *name*.