---
### YamlMime:EngineFeature
engine: oniguruma
feature: wildcard
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L48
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `.` &mdash; Matches any character except newline characters. If the `m` [flag] is set then this matches any character.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
