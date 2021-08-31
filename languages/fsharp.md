# Language: F#
<sup>[Home](../index.md)</sup>
<sup> \| </sup>
<sup>[Languages](index.md)</sup>
<sup> \| </sup>
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/languages/fsharp.md "source for: name")</sup>


<!--
'name' sources:
  - [](../../src/languages/fsharp.md)
-->


## Engines

- [.NET](../engines/dotnet.md)



[new engine]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-engines
[new feature]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-features
[new language]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-languages

[Flags]: ../features/flags.md
[Flag]: ../features/flags.md
[RegExp Flags]: ../features/flags.md
[RegExp Flag]: ../features/flags.md
[Anchors]: ../features/anchors.md
[Anchor]: ../features/anchors.md
[Buffer Boundaries]: ../features/buffer-boundaries.md
[Buffer Boundary]: ../features/buffer-boundaries.md
[Word Boundaries]: ../features/word-boundaries.md
[Word Boundary]: ../features/word-boundaries.md
[Text Segment Boundaries]: ../features/text-segment-boundaries.md
[Text Segment Boundary]: ../features/text-segment-boundaries.md
[Continuation Escape]: ../features/continuation-escape.md
[Alternatives]: ../features/alternatives.md
[Alternative]: ../features/alternatives.md
[Wildcard]: ../features/wildcard.md
[Wildcards]: ../features/wildcard.md
[Character Classes]: ../features/character-classes.md
[Character Class]: ../features/character-classes.md
[Posix Character Classes]: ../features/posix-character-classes.md
[Posix Character Class]: ../features/posix-character-classes.md
[Negated Posix Character Classes]: ../features/negated-posix-character-classes.md
[Negated Posix Character Class]: ../features/negated-posix-character-classes.md
[Collating Elements]: ../features/collating-elements.md
[Collating Element]: ../features/collating-elements.md
[Equivalence Classes]: ../features/equivalence-classes.md
[Equivalence Class]: ../features/equivalence-classes.md
[Character Class Escapes]: ../features/character-class-escapes.md
[Character Class Escape]: ../features/character-class-escapes.md
[Line Endings Escape]: ../features/line-endings-escape.md
[Character Property Escapes]: ../features/character-property-escapes.md
[Character Property Escape]: ../features/character-property-escapes.md
[Character Class Nested Set]: ../features/character-class-nested-set.md
[Character Class Nested Sets]: ../features/character-class-nested-set.md
[Character Class Intersection]: ../features/character-class-intersection.md
[Character Class Intersections]: ../features/character-class-intersection.md
[Character Class Union]: ../features/character-class-union.md
[Character Class Unions]: ../features/character-class-union.md
[Character Class Subtraction]: ../features/character-class-subtraction.md
[Character Class Symmetric Difference]: ../features/character-class-symmetric-difference.md
[Character Class Symmetric Differences]: ../features/character-class-symmetric-difference.md
[Character Class Complement]: ../features/character-class-complement.md
[Character Class Complements]: ../features/character-class-complement.md
[Quoted Characters]: ../features/quoted-characters.md
[Quantifiers]: ../features/quantifiers.md
[Quantifier]: ../features/quantifiers.md
[Lazy Quantifiers]: ../features/lazy-quantifiers.md
[Lazy Quantifier]: ../features/lazy-quantifiers.md
[Possessive Quantifiers]: ../features/possessive-quantifiers.md
[Possessive Quantifier]: ../features/possessive-quantifiers.md
[Capturing Groups]: ../features/capturing-groups.md
[Capturing Group]: ../features/capturing-groups.md
[Capture Groups]: ../features/capturing-groups.md
[Capture Group]: ../features/capturing-groups.md
[Named Capturing Groups]: ../features/named-capturing-groups.md
[Named Capturing Group]: ../features/named-capturing-groups.md
[Named Capture Groups]: ../features/named-capturing-groups.md
[Named Capture Group]: ../features/named-capturing-groups.md
[Non-Capturing Groups]: ../features/non-capturing-groups.md
[Non-Capturing group]: ../features/non-capturing-groups.md
[Backreferences]: ../features/backreferences.md
[Backreference]: ../features/backreferences.md
[Comments]: ../features/comments.md
[Comment]: ../features/comments.md
[Line Comments]: ../features/line-comments.md
[Line Comment]: ../features/line-comments.md
[x-mode Comments]: ../features/line-comments.md
[x-mode Comment]: ../features/line-comments.md
[Modifiers]: ../features/modifiers.md
[Modifier]: ../features/modifiers.md
[Branch Reset]: ../features/branch-reset.md
[Lookahead]: ../features/lookahead.md
[Lookbehind]: ../features/lookbehind.md
[Non-Backtracking Expressions]: ../features/non-backtracking-expressions.md
[Non-Backtracking Expression]: ../features/non-backtracking-expressions.md
[Recursion]: ../features/recursion.md
[Recursive Expression]: ../features/recursion.md
[Conditional Expressions]: ../features/conditional-expressions.md
[Conditional Expression]: ../features/conditional-expressions.md
[Subroutines]: ../features/subroutines.md
[Subroutine]: ../features/subroutines.md
[Callouts]: ../features/callouts.md
[Callout]: ../features/callouts.md
[Backtracking Control Verbs]: ../features/backtracking-control-verbs.md
[Backtracking Control Verb]: ../features/backtracking-control-verbs.md


[article:Flags]: ../features/flags.md
[article:Anchors]: ../features/anchors.md
[article:Buffer Boundaries]: ../features/buffer-boundaries.md
[article:Word Boundaries]: ../features/word-boundaries.md
[article:Text Segment Boundaries]: ../features/text-segment-boundaries.md
[article:Continuation Escape]: ../features/continuation-escape.md
[article:Alternatives]: ../features/alternatives.md
[article:Wildcard]: ../features/wildcard.md
[article:Character Classes]: ../features/character-classes.md
[article:Posix Character Classes]: ../features/posix-character-classes.md
[article:Negated Posix Character Classes]: ../features/negated-posix-character-classes.md
[article:Collating Elements]: ../features/collating-elements.md
[article:Equivalence Classes]: ../features/equivalence-classes.md
[article:Character Class Escapes]: ../features/character-class-escapes.md
[article:Line Endings Escape]: ../features/line-endings-escape.md
[article:Character Property Escapes]: ../features/character-property-escapes.md
[article:Character Class Nested Set]: ../features/character-class-nested-set.md
[article:Character Class Intersection]: ../features/character-class-intersection.md
[article:Character Class Union]: ../features/character-class-union.md
[article:Character Class Subtraction]: ../features/character-class-subtraction.md
[article:Character Class Symmetric Difference]: ../features/character-class-symmetric-difference.md
[article:Character Class Complement]: ../features/character-class-complement.md
[article:Quoted Characters]: ../features/quoted-characters.md
[article:Quantifiers]: ../features/quantifiers.md
[article:Lazy Quantifiers]: ../features/lazy-quantifiers.md
[article:Possessive Quantifiers]: ../features/possessive-quantifiers.md
[article:Capturing Groups]: ../features/capturing-groups.md
[article:Named Capturing Groups]: ../features/named-capturing-groups.md
[article:Non-Capturing Groups]: ../features/non-capturing-groups.md
[article:Backreferences]: ../features/backreferences.md
[article:Comments]: ../features/comments.md
[article:Line Comments]: ../features/line-comments.md
[article:Modifiers]: ../features/modifiers.md
[article:Branch Reset]: ../features/branch-reset.md
[article:Lookahead]: ../features/lookahead.md
[article:Lookbehind]: ../features/lookbehind.md
[article:Non-Backtracking Expressions]: ../features/non-backtracking-expressions.md
[article:Recursion]: ../features/recursion.md
[article:Conditional Expressions]: ../features/conditional-expressions.md
[article:Subroutines]: ../features/subroutines.md
[article:Callouts]: ../features/callouts.md
[article:Backtracking Control Verbs]: ../features/backtracking-control-verbs.md

[Reference]: #


[C]: c.md
[C++]: cpp.md
[C#]: csharp.md
[D]: d.md
[ECMAScript]: ecmascript.md
[F#]: fsharp.md
[Haskell]: haskell.md
[Java]: java.md
[Julia]: julia.md
[Lua]: lua.md
[Object Pascal]: object-pascal.md
[Perl]: perl.md
[Python]: python.md
[Ruby]: ruby.md
[Rust]: rust.md
[Tcl]: tcl.md
[VB.net]: vbnet.md