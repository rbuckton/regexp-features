---
### YamlMime:EngineFeature
engine: perl
feature: character-class-nested-set
supported: true
reference: https://perldoc.perl.org/perlrecharclass#Extended-Bracketed-Character-Classes
#description: *content.description
syntax: *content.syntax
example: *content.example
---
# syntax
- `(?[ […] ])` &mdash; Where `…` includes any contents allowed in a normal [character class].

# example

```
(?[[a-z]&[^d-q]])
```

Is equivalent to:

```re
[a-cr-z]
```