---
### YamlMime:EngineFeature
engine: icu
feature: character-class-subtraction
supported: true
reference: https://unicode-org.github.io/icu/userguide/strings/regexp.html#set-expressions-character-classes
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `[…--…]` &mdash; Matches any character that is in the left-hand set of `--` but not in the right-hand set.
