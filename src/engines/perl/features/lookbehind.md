---
### YamlMime:EngineFeature
engine: perl
feature: lookbehind
supported: true
reference: https://perldoc.perl.org/perlre#Lookaround-Assertions
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <a id="positive-lookbehind"></a>`(?<=…)` &mdash; Positive Lookbehind. Matches if the provided pattern would match the preceding characters, but does not advance the current position. The pattern must have a fixed length (unbounded [quantifiers] are not permitted).
- `(*plb:…)` &mdash; Positive Lookbehind. Has the same behavior as `(?<=…)`.
- `(*positive_lookbehind:…)` &mdash; Positive Lookbehind. Has the same behavior as `(?<=…)`.
- <a id="negative-lookbehind"></a>`(?<!…)` &mdash; Negative Lookbehind. Matches if the provided pattern would not match the preceding characters, but does not advance the current position. The pattern must have a fixed length (unbounded [quantifiers] are not permitted).
- `(*nlb:…)` &mdash; Negative Lookbehind. Has the same behavior as `(?<!…)`.
- `(*negative_lookbehind:…)` &mdash; Negative Lookbehind. Has the same behavior as `(?<!…)`.
