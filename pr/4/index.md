# Regular Expression Feature Comparisons

This provides a comparison of features between various regular expression engines.

# Table of Contents

- [Languages](languages/index.md)
- [Features](features/index.md)
- [Engines](engines/index.md)

# Support Table
<sup>[Improve this table](https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md)</sup>

|  | [Boost.Regex](engines/boost.regex.md) | [.NET](engines/dotnet.md) | [Oniguruma](engines/oniguruma.md) | [Hyperscan](engines/hyperscan.md) | [ECMAScript](engines/ecmascript.md) | [PCRE](engines/pcre.md) |
|:-|:-:|:-:|:-:|:-:|:-:|:-:|
| [Anchors](features/anchors.md) | [✔](engines/boost.regex.md#feature-anchors) | [✔](engines/dotnet.md#feature-anchors) | [✔](engines/oniguruma.md#feature-anchors) | [✔](engines/hyperscan.md#feature-anchors) | [✔](engines/ecmascript.md#feature-anchors) | [✔](engines/pcre.md#feature-anchors) |
| [Buffer Boundaries](features/buffer-boundaries.md) | [✔](engines/boost.regex.md#feature-buffer-boundaries) | [✔](engines/dotnet.md#feature-buffer-boundaries) | [✔](engines/oniguruma.md#feature-buffer-boundaries) | [✔](engines/hyperscan.md#feature-buffer-boundaries) | [❌](engines/ecmascript.md#feature-buffer-boundaries) | [✔](engines/pcre.md#feature-buffer-boundaries) |
| [Word Boundaries](features/word-boundaries.md) | [✔](engines/boost.regex.md#feature-word-boundaries) | [✔](engines/dotnet.md#feature-word-boundaries) | [✔](engines/oniguruma.md#feature-word-boundaries) | [✔](engines/hyperscan.md#feature-word-boundaries) | [✔](engines/ecmascript.md#feature-word-boundaries) | [✔](engines/pcre.md#feature-word-boundaries) |
| [Text Segment Boundaries](features/text-segment-boundaries.md) | [❌](engines/boost.regex.md#feature-text-segment-boundaries) | [❌](engines/dotnet.md#feature-text-segment-boundaries) | [✔](engines/oniguruma.md#feature-text-segment-boundaries) | [❌](engines/hyperscan.md#feature-text-segment-boundaries) | [❌](engines/ecmascript.md#feature-text-segment-boundaries) | [❌](engines/pcre.md#feature-text-segment-boundaries) |
| [Continuation Escape](features/continuation-escape.md) | [✔](engines/boost.regex.md#feature-continuation-escape) | [✔](engines/dotnet.md#feature-continuation-escape) | [✔](engines/oniguruma.md#feature-continuation-escape) | [❌](engines/hyperscan.md#feature-continuation-escape) | [❌](engines/ecmascript.md#feature-continuation-escape) | [✔](engines/pcre.md#feature-continuation-escape) |
| [Alternatives](features/alternatives.md) | [✔](engines/boost.regex.md#feature-alternatives) | [✔](engines/dotnet.md#feature-alternatives) | [✔](engines/oniguruma.md#feature-alternatives) | [✔](engines/hyperscan.md#feature-alternatives) | [✔](engines/ecmascript.md#feature-alternatives) | [✔](engines/pcre.md#feature-alternatives) |
| [Wildcard](features/wildcard.md) | [✔](engines/boost.regex.md#feature-wildcard) | [✔](engines/dotnet.md#feature-wildcard) | [✔](engines/oniguruma.md#feature-wildcard) | [✔](engines/hyperscan.md#feature-wildcard) | [✔](engines/ecmascript.md#feature-wildcard) | [✔](engines/pcre.md#feature-wildcard) |
| [Character Classes](features/character-classes.md) | [✔](engines/boost.regex.md#feature-character-classes) | [✔](engines/dotnet.md#feature-character-classes) | [✔](engines/oniguruma.md#feature-character-classes) | [✔](engines/hyperscan.md#feature-character-classes) | [✔](engines/ecmascript.md#feature-character-classes) | [✔](engines/pcre.md#feature-character-classes) |
| [Posix Character Classes](features/posix-character-classes.md) | [✔](engines/boost.regex.md#feature-posix-character-classes) | [❌](engines/dotnet.md#feature-posix-character-classes) | [✔](engines/oniguruma.md#feature-posix-character-classes) | [✔](engines/hyperscan.md#feature-posix-character-classes) | [❌](engines/ecmascript.md#feature-posix-character-classes) | [✔](engines/pcre.md#feature-posix-character-classes) |
| [Negated Posix Character Classes](features/negated-posix-character-classes.md) | [❌](engines/boost.regex.md#feature-negated-posix-character-classes) | [❌](engines/dotnet.md#feature-negated-posix-character-classes) | [✔](engines/oniguruma.md#feature-negated-posix-character-classes) | [✔](engines/hyperscan.md#feature-negated-posix-character-classes) | [❌](engines/ecmascript.md#feature-negated-posix-character-classes) | [✔](engines/pcre.md#feature-negated-posix-character-classes) |
| [Collating Elements](features/collating-elements.md) | [✔](engines/boost.regex.md#feature-collating-elements) | [❌](engines/dotnet.md#feature-collating-elements) | [❌](engines/oniguruma.md#feature-collating-elements) | [❌](engines/hyperscan.md#feature-collating-elements) | [❌](engines/ecmascript.md#feature-collating-elements) | [❌](engines/pcre.md#feature-collating-elements) |
| [Equivalence Classes](features/equivalence-classes.md) | [✔](engines/boost.regex.md#feature-equivalence-classes) | [❌](engines/dotnet.md#feature-equivalence-classes) | [❌](engines/oniguruma.md#feature-equivalence-classes) | [❌](engines/hyperscan.md#feature-equivalence-classes) | [❌](engines/ecmascript.md#feature-equivalence-classes) | [❌](engines/pcre.md#feature-equivalence-classes) |
| [Character Class Escapes](features/character-class-escapes.md) | [✔](engines/boost.regex.md#feature-character-class-escapes) | [✔](engines/dotnet.md#feature-character-class-escapes) | [✔](engines/oniguruma.md#feature-character-class-escapes) | [✔](engines/hyperscan.md#feature-character-class-escapes) | [✔](engines/ecmascript.md#feature-character-class-escapes) | [✔](engines/pcre.md#feature-character-class-escapes) |
| [Line Endings Escape](features/line-endings-escape.md) | [✔](engines/boost.regex.md#feature-line-endings-escape) | [❌](engines/dotnet.md#feature-line-endings-escape) | [✔](engines/oniguruma.md#feature-line-endings-escape) | [❌](engines/hyperscan.md#feature-line-endings-escape) | [❌](engines/ecmascript.md#feature-line-endings-escape) | [✔](engines/pcre.md#feature-line-endings-escape) |
| [Character Property Escapes](features/character-property-escapes.md) | [✔](engines/boost.regex.md#feature-character-property-escapes) | [✔](engines/dotnet.md#feature-character-property-escapes) | [✔](engines/oniguruma.md#feature-character-property-escapes) | [✔](engines/hyperscan.md#feature-character-property-escapes) | [✔](engines/ecmascript.md#feature-character-property-escapes) | [✔](engines/pcre.md#feature-character-property-escapes) |
| [Character Class Nested Set](features/character-class-nested-set.md) | [❌](engines/boost.regex.md#feature-character-class-nested-set) | [❌](engines/dotnet.md#feature-character-class-nested-set) | [✔](engines/oniguruma.md#feature-character-class-nested-set) | [❌](engines/hyperscan.md#feature-character-class-nested-set) | [❌](engines/ecmascript.md#feature-character-class-nested-set) | [❌](engines/pcre.md#feature-character-class-nested-set) |
| [Character Class Intersection](features/character-class-intersection.md) | [❌](engines/boost.regex.md#feature-character-class-intersection) | [❌](engines/dotnet.md#feature-character-class-intersection) | [✔](engines/oniguruma.md#feature-character-class-intersection) | [❌](engines/hyperscan.md#feature-character-class-intersection) | [❌](engines/ecmascript.md#feature-character-class-intersection) | [❌](engines/pcre.md#feature-character-class-intersection) |
| [Character Class Subtraction](features/character-class-subtraction.md) | [❌](engines/boost.regex.md#feature-character-class-subtraction) | [✔](engines/dotnet.md#feature-character-class-subtraction) | [✔](engines/oniguruma.md#feature-character-class-subtraction) | [❌](engines/hyperscan.md#feature-character-class-subtraction) | [❌](engines/ecmascript.md#feature-character-class-subtraction) | [❌](engines/pcre.md#feature-character-class-subtraction) |
| [Quoted Characters](features/quoted-characters.md) | [✔](engines/boost.regex.md#feature-quoted-characters) | [❌](engines/dotnet.md#feature-quoted-characters) | [❌](engines/oniguruma.md#feature-quoted-characters) | [❌](engines/hyperscan.md#feature-quoted-characters) | [❌](engines/ecmascript.md#feature-quoted-characters) | [✔](engines/pcre.md#feature-quoted-characters) |
| [Quantifiers](features/quantifiers.md) | [✔](engines/boost.regex.md#feature-quantifiers) | [✔](engines/dotnet.md#feature-quantifiers) | [✔](engines/oniguruma.md#feature-quantifiers) | [✔](engines/hyperscan.md#feature-quantifiers) | [✔](engines/ecmascript.md#feature-quantifiers) | [✔](engines/pcre.md#feature-quantifiers) |
| [Lazy Quantifiers](features/lazy-quantifiers.md) | [✔](engines/boost.regex.md#feature-lazy-quantifiers) | [✔](engines/dotnet.md#feature-lazy-quantifiers) | [✔](engines/oniguruma.md#feature-lazy-quantifiers) | [✔](engines/hyperscan.md#feature-lazy-quantifiers) | [✔](engines/ecmascript.md#feature-lazy-quantifiers) | [✔](engines/pcre.md#feature-lazy-quantifiers) |
| [Possessive Quantifiers](features/possessive-quantifiers.md) | [✔](engines/boost.regex.md#feature-possessive-quantifiers) | [❌](engines/dotnet.md#feature-possessive-quantifiers) | [✔](engines/oniguruma.md#feature-possessive-quantifiers) | [❌](engines/hyperscan.md#feature-possessive-quantifiers) | [❌](engines/ecmascript.md#feature-possessive-quantifiers) | [✔](engines/pcre.md#feature-possessive-quantifiers) |
| [Capturing Groups](features/capturing-groups.md) | [✔](engines/boost.regex.md#feature-capturing-groups) | [✔](engines/dotnet.md#feature-capturing-groups) | [✔](engines/oniguruma.md#feature-capturing-groups) | [✔](engines/hyperscan.md#feature-capturing-groups) | [✔](engines/ecmascript.md#feature-capturing-groups) | [✔](engines/pcre.md#feature-capturing-groups) |
| [Named Capturing Groups](features/named-capturing-groups.md) | [✔](engines/boost.regex.md#feature-named-capturing-groups) | [✔](engines/dotnet.md#feature-named-capturing-groups) | [✔](engines/oniguruma.md#feature-named-capturing-groups) | [✔](engines/hyperscan.md#feature-named-capturing-groups) | [✔](engines/ecmascript.md#feature-named-capturing-groups) | [✔](engines/pcre.md#feature-named-capturing-groups) |
| [Non-Capturing Groups](features/non-capturing-groups.md) | [✔](engines/boost.regex.md#feature-non-capturing-groups) | [✔](engines/dotnet.md#feature-non-capturing-groups) | [✔](engines/oniguruma.md#feature-non-capturing-groups) | [✔](engines/hyperscan.md#feature-non-capturing-groups) | [✔](engines/ecmascript.md#feature-non-capturing-groups) | [✔](engines/pcre.md#feature-non-capturing-groups) |
| [Backreferences](features/backreferences.md) | [✔](engines/boost.regex.md#feature-backreferences) | [✔](engines/dotnet.md#feature-backreferences) | [✔](engines/oniguruma.md#feature-backreferences) | [❌](engines/hyperscan.md#feature-backreferences) | [✔](engines/ecmascript.md#feature-backreferences) | [✔](engines/pcre.md#feature-backreferences) |
| [Comments](features/comments.md) | [✔](engines/boost.regex.md#feature-comments) | [✔](engines/dotnet.md#feature-comments) | [✔](engines/oniguruma.md#feature-comments) | [✔](engines/hyperscan.md#feature-comments) | [❌](engines/ecmascript.md#feature-comments) | [✔](engines/pcre.md#feature-comments) |
| [Line Comments](features/line-comments.md) | [❌](engines/boost.regex.md#feature-line-comments) | [✔](engines/dotnet.md#feature-line-comments) | [❌](engines/oniguruma.md#feature-line-comments) | [❌](engines/hyperscan.md#feature-line-comments) | [❌](engines/ecmascript.md#feature-line-comments) | [✔](engines/pcre.md#feature-line-comments) |
| [Modifiers](features/modifiers.md) | [✔](engines/boost.regex.md#feature-modifiers) | [✔](engines/dotnet.md#feature-modifiers) | [✔](engines/oniguruma.md#feature-modifiers) | [✔](engines/hyperscan.md#feature-modifiers) | [❌](engines/ecmascript.md#feature-modifiers) | [✔](engines/pcre.md#feature-modifiers) |
| [Branch Reset](features/branch-reset.md) | [✔](engines/boost.regex.md#feature-branch-reset) | [❌](engines/dotnet.md#feature-branch-reset) | [❌](engines/oniguruma.md#feature-branch-reset) | [❌](engines/hyperscan.md#feature-branch-reset) | [❌](engines/ecmascript.md#feature-branch-reset) | [✔](engines/pcre.md#feature-branch-reset) |
| [Lookahead](features/lookahead.md) | [✔](engines/boost.regex.md#feature-lookahead) | [✔](engines/dotnet.md#feature-lookahead) | [✔](engines/oniguruma.md#feature-lookahead) | [❌](engines/hyperscan.md#feature-lookahead) | [✔](engines/ecmascript.md#feature-lookahead) | [✔](engines/pcre.md#feature-lookahead) |
| [Lookbehind](features/lookbehind.md) | [✔](engines/boost.regex.md#feature-lookbehind) | [✔](engines/dotnet.md#feature-lookbehind) | [✔](engines/oniguruma.md#feature-lookbehind) | [❌](engines/hyperscan.md#feature-lookbehind) | [✔](engines/ecmascript.md#feature-lookbehind) | [✔](engines/pcre.md#feature-lookbehind) |
| [Non-Backtracking Expressions](features/non-backtracking-expressions.md) | [✔](engines/boost.regex.md#feature-non-backtracking-expressions) | [✔](engines/dotnet.md#feature-non-backtracking-expressions) | [✔](engines/oniguruma.md#feature-non-backtracking-expressions) | [❌](engines/hyperscan.md#feature-non-backtracking-expressions) | [❌](engines/ecmascript.md#feature-non-backtracking-expressions) | [✔](engines/pcre.md#feature-non-backtracking-expressions) |
| [Recursion](features/recursion.md) | [✔](engines/boost.regex.md#feature-recursion) | [✔](engines/dotnet.md#feature-recursion) | [✔](engines/oniguruma.md#feature-recursion) | [❌](engines/hyperscan.md#feature-recursion) | [❌](engines/ecmascript.md#feature-recursion) | [✔](engines/pcre.md#feature-recursion) |
| [Conditional Expressions](features/conditional-expressions.md) | [✔](engines/boost.regex.md#feature-conditional-expressions) | [✔](engines/dotnet.md#feature-conditional-expressions) | [✔](engines/oniguruma.md#feature-conditional-expressions) | [❌](engines/hyperscan.md#feature-conditional-expressions) | [❌](engines/ecmascript.md#feature-conditional-expressions) | [✔](engines/pcre.md#feature-conditional-expressions) |
| [Subroutines](features/subroutines.md) | [✔](engines/boost.regex.md#feature-subroutines) | [❌](engines/dotnet.md#feature-subroutines) | [✔](engines/oniguruma.md#feature-subroutines) | [❌](engines/hyperscan.md#feature-subroutines) | [❌](engines/ecmascript.md#feature-subroutines) | [✔](engines/pcre.md#feature-subroutines) |
| [Callouts](features/callouts.md) | [❌](engines/boost.regex.md#feature-callouts) | [❌](engines/dotnet.md#feature-callouts) | [✔](engines/oniguruma.md#feature-callouts) | [❌](engines/hyperscan.md#feature-callouts) | [❌](engines/ecmascript.md#feature-callouts) | [✔](engines/pcre.md#feature-callouts) |
| [Flags](features/flags.md) | [✔](engines/boost.regex.md#feature-flags) | [✔](engines/dotnet.md#feature-flags) | [✔](engines/oniguruma.md#feature-flags) | [✔](engines/hyperscan.md#feature-flags) | [✔](engines/ecmascript.md#feature-flags) | [✔](engines/pcre.md#feature-flags) |




[new engine]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-engines
[new feature]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-features
[new language]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-languages

[Anchors]: features/anchors.md
[Anchor]: features/anchors.md
[Buffer Boundaries]: features/buffer-boundaries.md
[Buffer Boundary]: features/buffer-boundaries.md
[Word Boundaries]: features/word-boundaries.md
[Word Boundary]: features/word-boundaries.md
[Text Segment Boundaries]: features/text-segment-boundaries.md
[Text Segment Boundary]: features/text-segment-boundaries.md
[Continuation Escape]: features/continuation-escape.md
[Alternatives]: features/alternatives.md
[Alternative]: features/alternatives.md
[Wildcard]: features/wildcard.md
[Wildcards]: features/wildcard.md
[Character Classes]: features/character-classes.md
[Character Class]: features/character-classes.md
[Posix Character Classes]: features/posix-character-classes.md
[Posix Character Class]: features/posix-character-classes.md
[Negated Posix Character Classes]: features/negated-posix-character-classes.md
[Negated Posix Character Class]: features/negated-posix-character-classes.md
[Collating Elements]: features/collating-elements.md
[Collating Element]: features/collating-elements.md
[Equivalence Classes]: features/equivalence-classes.md
[Equivalence Class]: features/equivalence-classes.md
[Character Class Escapes]: features/character-class-escapes.md
[Character Class Escape]: features/character-class-escapes.md
[Line Endings Escape]: features/line-endings-escape.md
[Character Property Escapes]: features/character-property-escapes.md
[Character Property Escape]: features/character-property-escapes.md
[Character Class Nested Set]: features/character-class-nested-set.md
[Character Class Nested Sets]: features/character-class-nested-set.md
[Character Class Intersection]: features/character-class-intersection.md
[Character Class Intersections]: features/character-class-intersection.md
[Character Class Subtraction]: features/character-class-subtraction.md
[Quoted Characters]: features/quoted-characters.md
[Quantifiers]: features/quantifiers.md
[Quantifier]: features/quantifiers.md
[Lazy Quantifiers]: features/lazy-quantifiers.md
[Lazy Quantifier]: features/lazy-quantifiers.md
[Possessive Quantifiers]: features/possessive-quantifiers.md
[Possessive Quantifier]: features/possessive-quantifiers.md
[Capturing Groups]: features/capturing-groups.md
[Capturing Group]: features/capturing-groups.md
[Capture Groups]: features/capturing-groups.md
[Capture Group]: features/capturing-groups.md
[Named Capturing Groups]: features/named-capturing-groups.md
[Named Capturing Group]: features/named-capturing-groups.md
[Named Capture Groups]: features/named-capturing-groups.md
[Named Capture Group]: features/named-capturing-groups.md
[Non-Capturing Groups]: features/non-capturing-groups.md
[Non-Capturing group]: features/non-capturing-groups.md
[Backreferences]: features/backreferences.md
[Backreference]: features/backreferences.md
[Comments]: features/comments.md
[Comment]: features/comments.md
[Line Comments]: features/line-comments.md
[Line Comment]: features/line-comments.md
[x-mode Comments]: features/line-comments.md
[x-mode Comment]: features/line-comments.md
[Modifiers]: features/modifiers.md
[Modifier]: features/modifiers.md
[Branch Reset]: features/branch-reset.md
[Lookahead]: features/lookahead.md
[Lookbehind]: features/lookbehind.md
[Non-Backtracking Expressions]: features/non-backtracking-expressions.md
[Non-Backtracking Expression]: features/non-backtracking-expressions.md
[Recursion]: features/recursion.md
[Recursive Expression]: features/recursion.md
[Conditional Expressions]: features/conditional-expressions.md
[Conditional Expression]: features/conditional-expressions.md
[Subroutines]: features/subroutines.md
[Subroutine]: features/subroutines.md
[Callouts]: features/callouts.md
[Callout]: features/callouts.md
[Flags]: features/flags.md
[Flag]: features/flags.md
[RegExp Flags]: features/flags.md
[RegExp Flag]: features/flags.md


[article:Anchors]: features/anchors.md
[article:Buffer Boundaries]: features/buffer-boundaries.md
[article:Word Boundaries]: features/word-boundaries.md
[article:Text Segment Boundaries]: features/text-segment-boundaries.md
[article:Continuation Escape]: features/continuation-escape.md
[article:Alternatives]: features/alternatives.md
[article:Wildcard]: features/wildcard.md
[article:Character Classes]: features/character-classes.md
[article:Posix Character Classes]: features/posix-character-classes.md
[article:Negated Posix Character Classes]: features/negated-posix-character-classes.md
[article:Collating Elements]: features/collating-elements.md
[article:Equivalence Classes]: features/equivalence-classes.md
[article:Character Class Escapes]: features/character-class-escapes.md
[article:Line Endings Escape]: features/line-endings-escape.md
[article:Character Property Escapes]: features/character-property-escapes.md
[article:Character Class Nested Set]: features/character-class-nested-set.md
[article:Character Class Intersection]: features/character-class-intersection.md
[article:Character Class Subtraction]: features/character-class-subtraction.md
[article:Quoted Characters]: features/quoted-characters.md
[article:Quantifiers]: features/quantifiers.md
[article:Lazy Quantifiers]: features/lazy-quantifiers.md
[article:Possessive Quantifiers]: features/possessive-quantifiers.md
[article:Capturing Groups]: features/capturing-groups.md
[article:Named Capturing Groups]: features/named-capturing-groups.md
[article:Non-Capturing Groups]: features/non-capturing-groups.md
[article:Backreferences]: features/backreferences.md
[article:Comments]: features/comments.md
[article:Line Comments]: features/line-comments.md
[article:Modifiers]: features/modifiers.md
[article:Branch Reset]: features/branch-reset.md
[article:Lookahead]: features/lookahead.md
[article:Lookbehind]: features/lookbehind.md
[article:Non-Backtracking Expressions]: features/non-backtracking-expressions.md
[article:Recursion]: features/recursion.md
[article:Conditional Expressions]: features/conditional-expressions.md
[article:Subroutines]: features/subroutines.md
[article:Callouts]: features/callouts.md
[article:Flags]: features/flags.md

[Reference]: #


[C++]: languages/cpp.md
[C#]: languages/csharp.md
[D]: languages/d.md
[ECMAScript]: languages/ecmascript.md
[F#]: languages/fsharp.md
[Haskell]: languages/haskell.md
[Java]: languages/java.md
[Julia]: languages/julia.md
[Lua]: languages/lua.md
[Object Pascal]: languages/object-pascal.md
[Perl]: languages/perl.md
[Python]: languages/python.md
[Ruby]: languages/ruby.md
[Rust]: languages/rust.md
[Tcl]: languages/tcl.md
[VB.net]: languages/vbnet.md
[C]: languages/c.md
