# Feature: Quoted Characters
<sup>[Improve this article](https://github.com/rbuckton/regexp-features/edit/main/src/features/quoted-characters.md)</sup>

<!--
'Quoted Characters' sources:
  - [](../../src/features/quoted-characters.md)
-->


<!--
'name' sources:
  - [](../../src/features/quoted-characters.md)
-->


<!--
'description' sources:
  - [](../../src/features/quoted-characters.md)
-->

<dfn>Quoted Characters</dfn> are a sequence of characters treated as literal characters rather than RegExp characters.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quoted-characters.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/quoted-characters.md)
-->


> NOTE: The following syntax is an example based on some of the supported engines. For specific engine support, see [Engines](#engines).

- `\Q … \E` &mdash; All characters following `\Q` and preceding the next `\E` are treated as literal characters. Example: `\Q.+\E` matches `.+` but not `aa`.
- `\Q … ` &mdash; If there is no trailing `\E`, all characters until the end of the pattern are treated as literal characters.

## Engines

| Engine | Supported |
|:-------|:---------:|
| [PCRE](../engines/pcre.md) | [✔](engines/pcre.md#feature-quoted-characters) |
| [Boost.Regex](../engines/boost.regex.md) | [✔](engines/boost.regex.md#feature-quoted-characters) |
| [.NET](../engines/dotnet.md) | [❌](engines/dotnet.md#feature-quoted-characters) |
| [Oniguruma](../engines/oniguruma.md) | [❌](engines/oniguruma.md#feature-quoted-characters) |


[Anchors]: ./anchors.md
[Buffer Boundaries]: ./buffer-boundaries.md
[Word Boundaries]: ./word-boundaries.md
[Text Segment Boundaries]: ./text-segment-boundaries.md
[Continuation Escape]: ./continuation-escape.md
[Alternatives]: ./alternatives.md
[Wildcard]: ./wildcard.md
[Character Classes]: ./character-classes.md
[Posix Character Classes]: ./posix-character-classes.md
[Negated Posix Character Classes]: ./negated-posix-character-classes.md
[Collating Elements]: ./collating-elements.md
[Equivalence Classes]: ./equivalence-classes.md
[Character Class Escapes]: ./character-class-escapes.md
[Line Endings Escape]: ./line-endings-escape.md
[Character Property Escapes]: ./character-property-escapes.md
[Character Class Nested Set]: ./character-class-nested-set.md
[Character Class Intersection]: ./character-class-intersection.md
[Character Class Subtraction]: ./character-class-subtraction.md
[Quoted Characters]: ./quoted-characters.md
[Quantifiers]: ./quantifiers.md
[Lazy Quantifiers]: ./lazy-quantifiers.md
[Possessive Quantifiers]: ./possessive-quantifiers.md
[Capturing Groups]: ./capturing-groups.md
[Named Capturing Groups]: ./named-capturing-groups.md
[Non-Capturing Groups]: ./non-capturing-groups.md
[Backreferences]: ./backreferences.md
[Comments]: ./comments.md
[Line Comments]: ./line-comments.md
[Modifiers]: ./modifiers.md
[Branch Reset]: ./branch-reset.md
[Lookahead]: ./lookahead.md
[Lookbehind]: ./lookbehind.md
[Non-Backtracking Expressions]: ./non-backtracking-expressions.md
[Recursion]: ./recursion.md
[Conditional Expressions]: ./conditional-expressions.md
[Subroutines]: ./subroutines.md
[Callouts]: ./callouts.md
[Flags]: ./flags.md

[article:Anchors]: ./anchors.md
[article:Buffer Boundaries]: ./buffer-boundaries.md
[article:Word Boundaries]: ./word-boundaries.md
[article:Text Segment Boundaries]: ./text-segment-boundaries.md
[article:Continuation Escape]: ./continuation-escape.md
[article:Alternatives]: ./alternatives.md
[article:Wildcard]: ./wildcard.md
[article:Character Classes]: ./character-classes.md
[article:Posix Character Classes]: ./posix-character-classes.md
[article:Negated Posix Character Classes]: ./negated-posix-character-classes.md
[article:Collating Elements]: ./collating-elements.md
[article:Equivalence Classes]: ./equivalence-classes.md
[article:Character Class Escapes]: ./character-class-escapes.md
[article:Line Endings Escape]: ./line-endings-escape.md
[article:Character Property Escapes]: ./character-property-escapes.md
[article:Character Class Nested Set]: ./character-class-nested-set.md
[article:Character Class Intersection]: ./character-class-intersection.md
[article:Character Class Subtraction]: ./character-class-subtraction.md
[article:Quoted Characters]: ./quoted-characters.md
[article:Quantifiers]: ./quantifiers.md
[article:Lazy Quantifiers]: ./lazy-quantifiers.md
[article:Possessive Quantifiers]: ./possessive-quantifiers.md
[article:Capturing Groups]: ./capturing-groups.md
[article:Named Capturing Groups]: ./named-capturing-groups.md
[article:Non-Capturing Groups]: ./non-capturing-groups.md
[article:Backreferences]: ./backreferences.md
[article:Comments]: ./comments.md
[article:Line Comments]: ./line-comments.md
[article:Modifiers]: ./modifiers.md
[article:Branch Reset]: ./branch-reset.md
[article:Lookahead]: ./lookahead.md
[article:Lookbehind]: ./lookbehind.md
[article:Non-Backtracking Expressions]: ./non-backtracking-expressions.md
[article:Recursion]: ./recursion.md
[article:Conditional Expressions]: ./conditional-expressions.md
[article:Subroutines]: ./subroutines.md
[article:Callouts]: ./callouts.md
[article:Flags]: ./flags.md