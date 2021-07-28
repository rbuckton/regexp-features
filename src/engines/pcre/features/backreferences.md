---
### YamlMime:EngineFeature
engine: pcre
feature: backreferences
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC19
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
#### Syntax

- <code>\\<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
  - NOTE: If the *n* is > 8 it will instead be interpreted as an octal literal.
- <code>\g<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
- <code>\g-<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the *n*th previous [capture group].
- <code>\g+<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the *n*th next [capture group].
- <code>\g{<em>n</em>}</code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
- <code>\g{-<em>n</em>}</code> &mdash; Where *n* is an integer >= 1. Matches the *n*th previous [capture group].
- <code>\g{+<em>n</em>}</code> &mdash; Where *n* is an integer >= 1. Matches the *n*th next [capture group].
- <code>\g{<em>name</em>}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k{<em>name</em>}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k&lt;<em>name</em>&gt;</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k'<em>name</em>'</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>(?P=<em>name</em>)</code> &mdash; Matches the [named capture group] with the name *name*.