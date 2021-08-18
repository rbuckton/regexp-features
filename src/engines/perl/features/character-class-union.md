---
### YamlMime:EngineFeature
engine: perl
feature: character-class-union
supported: true
reference: https://perldoc.perl.org/perlrecharclass#Extended-Bracketed-Character-Classes
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <code>(?[ <em>a</em> + <em>b</em> ])</code> &mdash; Where *a* and *b* are metacharacters or other *Class Atoms*.
- <code>(?[ <em>a</em> | <em>b</em> ])</code> &mdash; Where *a* and *b* are metacharacters or other *Class Atoms*.