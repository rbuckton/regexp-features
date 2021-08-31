---
### YamlMime:EngineFeature
engine: perl
feature: character-class-escapes
supported: true
reference: https://perldoc.perl.org/perlre#Character-Classes-and-other-Special-Escapes
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- `\d` &mdash; Any decimal digit character. Equivalent to `\p{Nd}` unless in ASCII-only (`a`) mode, in which case `\d` is equivalent to `[0-9]`.
- `\D` &mdash; Any non-decimal digit character. Equivalent to `\P{Nd}` unless in ASCII-only (`a`) mode, in which case `\D` is equivalent to `[^0-9]`.
- `\w` &mdash; Any "word" character. Equivalent to [`\p{Word}`](https://perldoc.perl.org/perluniprops#Properties-accessible-through-%5Cp%7B%7D-and-%5CP%7B%7D) unless in ASCII-only (`a`) mode, in which case `\w` is equivalent to `[a-zA-Z0-9_]`.
- `\W` &mdash; Any non-"word" character. Equivalent to [`\P{Word}`](https://perldoc.perl.org/perluniprops#Properties-accessible-through-%5Cp%7B%7D-and-%5CP%7B%7D) unless in ASCII-only (`a`) mode, in which case `\w` is equivalent to `[a-zA-Z0-9_]`.
- `\s` &mdash; Any whitespace character. Equivalent to [`\p{SpacePerl}`](https://perldoc.perl.org/perluniprops#Properties-accessible-through-%5Cp%7B%7D-and-%5CP%7B%7D) (which includes `\p{Z}`, among others) unless in ASCII-only (`a`) mode, in which case `\s` is equivalent to `[ \f\n\r\t\x0b]`.
- `\S` &mdash; Any non-whitespace character. Equivalent to [`\P{SpacePerl}`](https://perldoc.perl.org/perluniprops#Properties-accessible-through-%5Cp%7B%7D-and-%5CP%7B%7D) (which includes `\p{Z}`, among others) unless in ASCII-only (`a`) mode, in which case `\s` is equivalent to `[^ \f\n\r\t\x0b]`.
