---
### YamlMime:EngineFeature
engine: perl
feature: negated-posix-character-classes
supported: true
reference: https://perldoc.perl.org/perlrecharclass#POSIX-Character-Classes
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <code>[[:^<em>name</em>:]]</code> &mdash; Where *name* is in a set of predefined names. Matches any character not in the set.
- <code>(?[[:^<em>name</em>:]])</code> &mdash; Where *name* is in a set of predefined names. Matches any character not in the set.