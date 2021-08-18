---
### YamlMime:EngineFeature
engine: perl
feature: backreferences
supported: true
reference: https://perldoc.perl.org/perlre#Capture-groups
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <code>&#x5c;<em>n</em></code> &mdash; Where *n* is a decimal digit in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\k&lt;<em>name</em>&gt;</code> &mdash; Matches the same string as the [named capture group] with the name *name*.

- <code>\g<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
- <code>\g-<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the *n*th previous [capture group].
- <code>\g{<em>n</em>}</code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
- <code>\g{-<em>n</em>}</code> &mdash; Where *n* is an integer >= 1. Matches the *n*th previous [capture group].
- <code>\g{<em>name</em>}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k{<em>name</em>}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k&lt;<em>name</em>&gt;</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k'<em>name</em>'</code> &mdash; Matches the [named capture group] with the name *name*.
