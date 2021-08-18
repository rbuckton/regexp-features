---
### YamlMime:EngineFeature
engine: perl
feature: lookahead
supported: true
reference: https://perldoc.perl.org/perlre#Lookaround-Assertions
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <a id="positive-lookahead"></a>`(?=…)` &mdash; Positive Lookahead. Matches if the provided pattern would match but does not advance the current position.
- `(*pla:…)` &mdash; Positive Lookahead. Has the same behavior as `(?=…)`.
- `(*positive_lookahead:…)` &mdash; Positive Lookahead. Has the same behavior as `(?=…)`.
- <a id="negative-lookahead"></a>`(?!…)` &mdash; Negative Lookahead. Matches if the provided pattern would not match, but does not advance the current position.
- `(*nla:…)` &mdash; Negative Lookahead. Has the same behavior as `(?!…)`.
- `(*negative_lookahead:…)` &mdash; Negative Lookahead. Has the same behavior as `(?!…)`.
