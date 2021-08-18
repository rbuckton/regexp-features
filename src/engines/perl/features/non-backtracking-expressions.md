---
### YamlMime:EngineFeature
engine: perl
feature: non-backtracking-expressions
supported: true
reference: https://perldoc.perl.org/perlre#(?%3Epattern)
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `(?>…)` &mdash; Matches the provided pattern, but no backtracking is performed if the match fails.
- `(*atomic:…)` &mdash; Matches the provided pattern, but no backtracking is performed if the match fails.