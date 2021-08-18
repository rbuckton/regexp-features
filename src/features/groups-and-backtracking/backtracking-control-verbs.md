---
### YamlMime:Feature
feature: backtracking-control-verbs
name: Backtracking Control Verbs
aliases:
- Backtracking Control Verb
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Backtracking Control Verb</dfn> is a special pattern usually in the form of <code>(*<em>VERB</em>)</code> or <code>(*<em>VERB</em>:<em>arg</em>)</code> that performs some special behavior with respect to backtracking.
# syntax
- `(*PRUNE)`, <code>(*PRUNE:<em>name</em>)</code> &mdash; Prunes the backtracking tree.
- `(*SKIP)`, <code>(*SKIP:<em>name</em>)</code> &mdash; Prunes the backtracking tree and preceding text cannot be part of any match of the pattern.
- <code>(*MARK:<em>name</em>)</code>, <code>(*:<em>name</em>)</code> &mdash; Marks a point in the string where a certain part of the pattern has been matched.
- `(*THEN)`, <code>(*THEN:<em>name</em>)</code> &mdash; When backtracked into on failure causes the engine to attempt the next alternative in the innermost enclosing group with alternatives.
- `(*COMMIT)`, <code>(*COMMIT:<em>arg</em>)</code> &mdash; When backtracked into on failure causes the match to fail outright.
- `(*FAIL)`, `(*F)`, <code>(*FAIL:<em>arg</em>)</code> &mdash; Matches nothing and always fails. Equivalent to `(?!)`.
- `(*ACCEPT)`, <code>(*ACCEPT:<em>arg</em>)</code> &mdash; Causes the end of successful matching at the point where the verb was encountered.
