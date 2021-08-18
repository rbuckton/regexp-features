---
### YamlMime:EngineFeature
engine: perl
feature: backtracking-control-verbs
reference: https://perldoc.perl.org/perlre#Special-Backtracking-Control-Verbs
supported: true
syntax: *content.syntax
---
# syntax
- `(*PRUNE)`, <code>(\*PRUNE:<em>name</em>)</code> &mdash; Prunes the backtracking tree.
- `(*SKIP)`, <code>(\*SKIP:<em>name</em>)</code> &mdash; Prunes the backtracking tree and preceding text cannot be part of any match of the pattern.
- <code>(\*MARK:<em>name</em>)</code>, <code>(\*:<em>name</em>)</code> &mdash; Marks a point in the string where a certain part of the pattern has been matched.
- `(*THEN)`, <code>(\*THEN:<em>name</em>)</code> &mdash; When backtracked into on failure causes the engine to attempt the next alternative in the innermost enclosing group with alternatives.
- `(*COMMIT)`, <code>(\*COMMIT:<em>arg</em>)</code> &mdash; When backtracked into on failure causes the match to fail outright.
- `(*FAIL)`, `(*F)`, <code>(\*FAIL:<em>arg</em>)</code> &mdash; Matches nothing and always fails. Equivalent to `(?!)`.
- `(*ACCEPT)`, <code>(\*ACCEPT:<em>arg</em>)</code> &mdash; Causes the end of successful matching at the point where the verb was encountered.
