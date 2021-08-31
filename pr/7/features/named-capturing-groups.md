# Feature: Named Capturing Groups
<sup>[Home](../index.md)</sup>
<sup> \| </sup>
<sup>[Features](index.md)</sup>
<sup> \| </sup>
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/named-capturing-groups.md "source for: name, description")</sup>

A <dfn>Named Capturing Group</dfn> is a subexpression that can be captured and returned by the matching algorithm. A Named Capturing Group is also an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by name.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/named-capturing-groups.md "source for: syntax")</sup>


> NOTE: The following syntax is an example based on some of the supported engines. For specific engine support, see [Engines](#engines).

- <code>(?&lt;<em>name</em>&gt;…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
- <code>(?'<em>name</em>'…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.

## Engines

| Engine | Supported |
|:-------|:---------:|
| [PCRE](../engines/pcre.md) | [✔](../engines/pcre.md#feature-named-capturing-groups) |
| [Boost.Regex](../engines/boost.regex.md) | [✔](../engines/boost.regex.md#feature-named-capturing-groups) |
| [.NET](../engines/dotnet.md) | [✔](../engines/dotnet.md#feature-named-capturing-groups) |
| [Oniguruma](../engines/oniguruma.md) | [✔](../engines/oniguruma.md#feature-named-capturing-groups) |
| [Hyperscan](../engines/hyperscan.md) | [✔](../engines/hyperscan.md#feature-named-capturing-groups) |
| [ECMAScript](../engines/ecmascript.md) | [✔](../engines/ecmascript.md#feature-named-capturing-groups) |
| [ICU](../engines/icu.md) | [✔](../engines/icu.md#feature-named-capturing-groups) |
| [Glib/GRegex](../engines/glib-gregex.md) | [✔](../engines/glib-gregex.md#feature-named-capturing-groups) |
| [Perl](../engines/perl.md) | [✔](../engines/perl.md#feature-named-capturing-groups) |

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/named-capturing-groups.md "source for: see_also")</sup>


- [Capturing Groups]
- [Non-Capturing Groups]
- [Backreferences]
- [Recursion]
- [Subroutines]


[new engine]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-engines
[new feature]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-features
[new language]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-languages

[Anchors]: anchors.md
[Anchor]: anchors.md
[Buffer Boundaries]: buffer-boundaries.md
[Buffer Boundary]: buffer-boundaries.md
[Word Boundaries]: word-boundaries.md
[Word Boundary]: word-boundaries.md
[Text Segment Boundaries]: text-segment-boundaries.md
[Text Segment Boundary]: text-segment-boundaries.md
[Continuation Escape]: continuation-escape.md
[Alternatives]: alternatives.md
[Alternative]: alternatives.md
[Wildcard]: wildcard.md
[Wildcards]: wildcard.md
[Character Classes]: character-classes.md
[Character Class]: character-classes.md
[Posix Character Classes]: posix-character-classes.md
[Posix Character Class]: posix-character-classes.md
[Negated Posix Character Classes]: negated-posix-character-classes.md
[Negated Posix Character Class]: negated-posix-character-classes.md
[Collating Elements]: collating-elements.md
[Collating Element]: collating-elements.md
[Equivalence Classes]: equivalence-classes.md
[Equivalence Class]: equivalence-classes.md
[Character Class Escapes]: character-class-escapes.md
[Character Class Escape]: character-class-escapes.md
[Line Endings Escape]: line-endings-escape.md
[Character Property Escapes]: character-property-escapes.md
[Character Property Escape]: character-property-escapes.md
[Character Class Nested Set]: character-class-nested-set.md
[Character Class Nested Sets]: character-class-nested-set.md
[Character Class Intersection]: character-class-intersection.md
[Character Class Intersections]: character-class-intersection.md
[Character Class Union]: character-class-union.md
[Character Class Unions]: character-class-union.md
[Character Class Subtraction]: character-class-subtraction.md
[Character Class Symmetric Difference]: character-class-symmetric-difference.md
[Character Class Symmetric Differences]: character-class-symmetric-difference.md
[Character Class Complement]: character-class-complement.md
[Character Class Complements]: character-class-complement.md
[Quoted Characters]: quoted-characters.md
[Quantifiers]: quantifiers.md
[Quantifier]: quantifiers.md
[Lazy Quantifiers]: lazy-quantifiers.md
[Lazy Quantifier]: lazy-quantifiers.md
[Possessive Quantifiers]: possessive-quantifiers.md
[Possessive Quantifier]: possessive-quantifiers.md
[Capturing Groups]: capturing-groups.md
[Capturing Group]: capturing-groups.md
[Capture Groups]: capturing-groups.md
[Capture Group]: capturing-groups.md
[Named Capturing Groups]: named-capturing-groups.md
[Named Capturing Group]: named-capturing-groups.md
[Named Capture Groups]: named-capturing-groups.md
[Named Capture Group]: named-capturing-groups.md
[Non-Capturing Groups]: non-capturing-groups.md
[Non-Capturing group]: non-capturing-groups.md
[Backreferences]: backreferences.md
[Backreference]: backreferences.md
[Comments]: comments.md
[Comment]: comments.md
[Line Comments]: line-comments.md
[Line Comment]: line-comments.md
[x-mode Comments]: line-comments.md
[x-mode Comment]: line-comments.md
[Modifiers]: modifiers.md
[Modifier]: modifiers.md
[Branch Reset]: branch-reset.md
[Lookahead]: lookahead.md
[Lookbehind]: lookbehind.md
[Non-Backtracking Expressions]: non-backtracking-expressions.md
[Non-Backtracking Expression]: non-backtracking-expressions.md
[Recursion]: recursion.md
[Recursive Expression]: recursion.md
[Conditional Expressions]: conditional-expressions.md
[Conditional Expression]: conditional-expressions.md
[Subroutines]: subroutines.md
[Subroutine]: subroutines.md
[Callouts]: callouts.md
[Callout]: callouts.md
[Backtracking Control Verbs]: backtracking-control-verbs.md
[Backtracking Control Verb]: backtracking-control-verbs.md
[Flags]: flags.md
[Flag]: flags.md
[RegExp Flags]: flags.md
[RegExp Flag]: flags.md


[article:Anchors]: anchors.md
[article:Buffer Boundaries]: buffer-boundaries.md
[article:Word Boundaries]: word-boundaries.md
[article:Text Segment Boundaries]: text-segment-boundaries.md
[article:Continuation Escape]: continuation-escape.md
[article:Alternatives]: alternatives.md
[article:Wildcard]: wildcard.md
[article:Character Classes]: character-classes.md
[article:Posix Character Classes]: posix-character-classes.md
[article:Negated Posix Character Classes]: negated-posix-character-classes.md
[article:Collating Elements]: collating-elements.md
[article:Equivalence Classes]: equivalence-classes.md
[article:Character Class Escapes]: character-class-escapes.md
[article:Line Endings Escape]: line-endings-escape.md
[article:Character Property Escapes]: character-property-escapes.md
[article:Character Class Nested Set]: character-class-nested-set.md
[article:Character Class Intersection]: character-class-intersection.md
[article:Character Class Union]: character-class-union.md
[article:Character Class Subtraction]: character-class-subtraction.md
[article:Character Class Symmetric Difference]: character-class-symmetric-difference.md
[article:Character Class Complement]: character-class-complement.md
[article:Quoted Characters]: quoted-characters.md
[article:Quantifiers]: quantifiers.md
[article:Lazy Quantifiers]: lazy-quantifiers.md
[article:Possessive Quantifiers]: possessive-quantifiers.md
[article:Capturing Groups]: capturing-groups.md
[article:Named Capturing Groups]: named-capturing-groups.md
[article:Non-Capturing Groups]: non-capturing-groups.md
[article:Backreferences]: backreferences.md
[article:Comments]: comments.md
[article:Line Comments]: line-comments.md
[article:Modifiers]: modifiers.md
[article:Branch Reset]: branch-reset.md
[article:Lookahead]: lookahead.md
[article:Lookbehind]: lookbehind.md
[article:Non-Backtracking Expressions]: non-backtracking-expressions.md
[article:Recursion]: recursion.md
[article:Conditional Expressions]: conditional-expressions.md
[article:Subroutines]: subroutines.md
[article:Callouts]: callouts.md
[article:Backtracking Control Verbs]: backtracking-control-verbs.md
[article:Flags]: flags.md

[Reference]: #


[C++]: ../languages/cpp.md
[C#]: ../languages/csharp.md
[D]: ../languages/d.md
[ECMAScript]: ../languages/ecmascript.md
[F#]: ../languages/fsharp.md
[Haskell]: ../languages/haskell.md
[Java]: ../languages/java.md
[Julia]: ../languages/julia.md
[Lua]: ../languages/lua.md
[Object Pascal]: ../languages/object-pascal.md
[Perl]: ../languages/perl.md
[Python]: ../languages/python.md
[Ruby]: ../languages/ruby.md
[Rust]: ../languages/rust.md
[Tcl]: ../languages/tcl.md
[VB.net]: ../languages/vbnet.md
[C]: ../languages/c.md