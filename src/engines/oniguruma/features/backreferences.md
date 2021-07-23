---
### YamlMime:EngineFeature
engine: oniguruma
feature: backreferences
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L398
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# syntax
- <code>\\<em>n</em></code> &mdash; Where *n* is a decimal digit in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\\k\<<em>n</em>\></code> &mdash; Where *n* is an integer > 0. Matches the same string as the [capture group] *n*.
- <code>\\k'<em>n</em>'</code> &mdash; Where *n* is an integer > 0. Matches the same string as the [capture group] *n*.
- <code>\\k\<<em>-n</em>\></code> &mdash; Where *n* is an integer > 0. Matches the *n*th previous [capture group].
- <code>\\k'<em>-n</em>'</code> &mdash; Where *n* is an integer > 0. Matches the *n*th previous [capture group].
- <code>\\k\<<em>+n</em>\></code> &mdash; Where *n* is an integer > 0. Matches the *n*th next [capture group].
- <code>\\k'<em>+n</em>'</code> &mdash; Where *n* is an integer > 0. Matches the *n*th next [capture group].
- <code>\\k\<<em>name</em>\></code> &mdash; Matches the same string as the [named capture group] with the name *name*.
- <code>\\k'<em>name</em>'</code> &mdash; Matches the same string as the [named capture group] with the name *name*.
