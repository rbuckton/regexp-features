---
### YamlMime:EngineFeature
engine: pcre
feature: callouts
supported: true
reference: http://www.pcre.org/current/doc/html/pcre2pattern.html#SEC28
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
#### Syntax

- <code>(?C)</code> &mdash; Invokes the user defined function with the argument `0`.
- <code>(?C*n*)</code> &mdash; Where *n* is an integer. Invokes the user defined function with the argument *n*.
- <code>(?C\`*arg*\`)</code> &mdash; Where *arg* is any character except `` ` ``. If an `` ` `` must be included it should be escaped by doubling it (i.e., ``` `` ```). Invokes the user defined function with the argument *arg*.
- <code>(?C'*arg*')</code> &mdash; Where *arg* is any character except `'`. If an `'` must be included it should be escaped by doubling it (i.e., `''`). Invokes the user defined function with the argument *arg*.
- <code>(?C"*arg*")</code> &mdash; Where *arg* is any character except `"`. If an `"` must be included it should be escaped by doubling it (i.e., `""`). Invokes the user defined function with the argument *arg*.
- <code>(?C^*arg*^)</code> &mdash; Where *arg* is any character except `^`. If an `^` must be included it should be escaped by doubling it (i.e., `^^`). Invokes the user defined function with the argument *arg*.
- <code>(?C%*arg*%)</code> &mdash; Where *arg* is any character except `%`. If an `%` must be included it should be escaped by doubling it (i.e., `%%`). Invokes the user defined function with the argument *arg*.
- <code>(?C#*arg*#)</code> &mdash; Where *arg* is any character except `#`. If an `#` must be included it should be escaped by doubling it (i.e., `##`). Invokes the user defined function with the argument *arg*.
- <code>(?C$*arg*$)</code> &mdash; Where *arg* is any character except `$`. If an `$` must be included it should be escaped by doubling it (i.e., `$$`). Invokes the user defined function with the argument *arg*.
- <code>(?C{*arg*})</code> &mdash; Where *arg* is any character except `}`. If an `}` must be included it should be escaped by doubling it (i.e., `}}`). Invokes the user defined function with the argument *arg*.