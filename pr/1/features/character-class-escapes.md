# Feature: Character Class Escapes
<sup>[Home](../index.md)</sup>
<sup> \| [Features](../features)</sup>
<sup> \| [Improve this article](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-class-escapes.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/character-class-escapes.md)
-->

<!--
'description' sources:
  - [](../src/features/character-classes/character-class-escapes.md)
-->

A <dfn>Character Class Escape</dfn> is a single character escape that represents an entire character class. They can be used as an element of a [Character Class] or as an *Atom*. It is often the case that a lower-case escape character is the inclusive set, while an upper-case variant of the same character excludes that set.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-class-escapes.md)</sup>
<!--
'syntax' sources:
  - [](../src/features/character-classes/character-class-escapes.md)
-->


> NOTE: The following syntax is an example based on some of the supported engines. For specific engine support, see [Engines](#engines).

- `\d` &mdash; A decimal digit character in the range 0-9. Equivalent to `[0-9]`.
- `\D` &mdash; Any character not in the range 0-9. Equivalent to `[^0-9]`.
- `\w` &mdash; Any "word" character. Equivalent to `[a-zA-Z0-9_]`.
- `\W` &mdash; Any non-"word" character. Equivalent to `[^a-zA-Z0-9_]`.
- `\s` &mdash; Any whitespace character.
- `\S` &mdash; Any non-whitespace character.

## Engines

| Engine | Supported |
|:-------|:---------:|
| [PCRE](../engines/pcre.md) | [✔](engines/pcre.md#feature-character-class-escapes) |
| [Boost.Regex](../engines/boost.regex.md) | [✔](engines/boost.regex.md#feature-character-class-escapes) |
| [.NET](../engines/dotnet.md) | [✔](engines/dotnet.md#feature-character-class-escapes) |
| [Oniguruma](../engines/oniguruma.md) | [✔](engines/oniguruma.md#feature-character-class-escapes) |
| [Hyperscan](../engines/hyperscan.md) | [❌](engines/hyperscan.md#feature-character-class-escapes) |
### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-class-escapes.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/character-class-escapes.md)
-->


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Subtraction]

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
[Character Class Subtraction]: character-class-subtraction.md
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
[article:Character Class Subtraction]: character-class-subtraction.md
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