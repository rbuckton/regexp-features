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

- <code>\\*n*</code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
  - NOTE: If the *n* is > 8 it will instead be interpreted as an octal literal.
- <code>\\g*n*</code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
- <code>\\g-*n*</code> &mdash; Where *n* is an integer >= 1. Matches the *n*th previous [capture group].
- <code>\\g+*n*</code> &mdash; Where *n* is an integer >= 1. Matches the *n*th next [capture group].
- <code>\\g{*n*}</code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
- <code>\\g{-*n*}</code> &mdash; Where *n* is an integer >= 1. Matches the *n*th previous [capture group].
- <code>\\g{+*n*}</code> &mdash; Where *n* is an integer >= 1. Matches the *n*th next [capture group].
- <code>\\g{*name*}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\\k{*name*}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\\k\<*name*\></code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\\k'*name*'</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>(?P=*name*)</code> &mdash; Matches the [named capture group] with the name *name*.