---
### YamlMime:EngineFeature
engine: perl
feature: callouts
supported: true
reference: https://perldoc.perl.org/perlre#(?%7B-code-%7D)
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <code>(?{<em>code</em>})</code> &mdash; - Zero-width assertion that executes embedded Perl code.
- <code>(??{<em>code</em>})</code> &mdash; - Zero-width assertion that executes embedded Perl code. The return value of the embedded code is interpreted as a pattern to be matched at this position.