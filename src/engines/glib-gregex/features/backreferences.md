---
### YamlMime:EngineFeature
engine: glib-gregex
feature: backreferences
supported: true
reference: https://developer-old.gnome.org/glib/unstable/glib-regex-syntax.html#id-1.5.25.16
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
#### Syntax

- <code>&#x5c;<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
  - NOTE: If the *n* is > 9 it may be interpreted as an octal literal if there are less than *n* [capture groups] in the pattern.
- <code>\g<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
- <code>\g-<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the *n*th previous [capture group].
- <code>\g+<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the *n*th next [capture group].
- <code>\g{<em>n</em>}</code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
- <code>\g{-<em>n</em>}</code> &mdash; Where *n* is an integer >= 1. Matches the *n*th previous [capture group].
- <code>\g{+<em>n</em>}</code> &mdash; Where *n* is an integer >= 1. Matches the *n*th next [capture group].
- <code>\g{<em>name</em>}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k&lt;<em>name</em>&gt;</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k'<em>name</em>'</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>(?P=<em>name</em>)</code> &mdash; Matches the [named capture group] with the name *name*.