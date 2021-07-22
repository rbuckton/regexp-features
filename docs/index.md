# Regular Expression Feature Comparisons

This provides a comparison of features between various regular expression engines.

# Table of Contents

- [Languages](languages.md)
- [Features](features.md)
- [Engines](engines.md)

# Support Table

|  | [Boost.Regex](engines/boost.regex.md) | [.NET](engines/dotnet.md) | [Oniguruma](engines/oniguruma.md) | [PCRE](engines/pcre.md) |
|:-|:-:|:-:|:-:|:-:|
| [Anchors](features/anchors.md) | [✔](engines/boost.regex.md#feature-anchors) | [✔](engines/dotnet.md#feature-anchors) | [✔](engines/oniguruma.md#feature-anchors) | [✔](engines/pcre.md#feature-anchors) |
| [Buffer Boundaries](features/buffer-boundaries.md) | [✔](engines/boost.regex.md#feature-buffer-boundaries) | [✔](engines/dotnet.md#feature-buffer-boundaries) | [✔](engines/oniguruma.md#feature-buffer-boundaries) | [✔](engines/pcre.md#feature-buffer-boundaries) |
| [Word Boundaries](features/word-boundaries.md) | [✔](engines/boost.regex.md#feature-word-boundaries) | [✔](engines/dotnet.md#feature-word-boundaries) | [✔](engines/oniguruma.md#feature-word-boundaries) | [✔](engines/pcre.md#feature-word-boundaries) |
| [Text Segment Boundaries](features/text-segment-boundaries.md) | [❌](engines/boost.regex.md#feature-text-segment-boundaries) | [❌](engines/dotnet.md#feature-text-segment-boundaries) | [✔](engines/oniguruma.md#feature-text-segment-boundaries) | [❌](engines/pcre.md#feature-text-segment-boundaries) |
| [Continuation Escape](features/continuation-escape.md) | [✔](engines/boost.regex.md#feature-continuation-escape) | [✔](engines/dotnet.md#feature-continuation-escape) | [✔](engines/oniguruma.md#feature-continuation-escape) | [✔](engines/pcre.md#feature-continuation-escape) |
| [Alternatives](features/alternatives.md) | [✔](engines/boost.regex.md#feature-alternatives) | [✔](engines/dotnet.md#feature-alternatives) | [✔](engines/oniguruma.md#feature-alternatives) | [✔](engines/pcre.md#feature-alternatives) |
| [Wildcard](features/wildcard.md) | [✔](engines/boost.regex.md#feature-wildcard) | [✔](engines/dotnet.md#feature-wildcard) | [✔](engines/oniguruma.md#feature-wildcard) | [✔](engines/pcre.md#feature-wildcard) |
| [Character Classes](features/character-classes.md) | [✔](engines/boost.regex.md#feature-character-classes) | [✔](engines/dotnet.md#feature-character-classes) | [✔](engines/oniguruma.md#feature-character-classes) | [✔](engines/pcre.md#feature-character-classes) |
| [Posix Character Classes](features/posix-character-classes.md) | [✔](engines/boost.regex.md#feature-posix-character-classes) | [❌](engines/dotnet.md#feature-posix-character-classes) | [✔](engines/oniguruma.md#feature-posix-character-classes) | [✔](engines/pcre.md#feature-posix-character-classes) |
| [Negated Posix Character Classes](features/negated-posix-character-classes.md) | [❌](engines/boost.regex.md#feature-negated-posix-character-classes) | [❌](engines/dotnet.md#feature-negated-posix-character-classes) | [✔](engines/oniguruma.md#feature-negated-posix-character-classes) | [✔](engines/pcre.md#feature-negated-posix-character-classes) |
| [Collating Elements](features/collating-elements.md) | [✔](engines/boost.regex.md#feature-collating-elements) | [❌](engines/dotnet.md#feature-collating-elements) | [❌](engines/oniguruma.md#feature-collating-elements) | [❌](engines/pcre.md#feature-collating-elements) |
| [Equivalence Classes](features/equivalence-classes.md) | [✔](engines/boost.regex.md#feature-equivalence-classes) | [❌](engines/dotnet.md#feature-equivalence-classes) | [❌](engines/oniguruma.md#feature-equivalence-classes) | [❌](engines/pcre.md#feature-equivalence-classes) |
| [Character Class Escapes](features/character-class-escapes.md) | [✔](engines/boost.regex.md#feature-character-class-escapes) | [✔](engines/dotnet.md#feature-character-class-escapes) | [✔](engines/oniguruma.md#feature-character-class-escapes) | [✔](engines/pcre.md#feature-character-class-escapes) |
| [Line Endings Escape](features/line-endings-escape.md) | [✔](engines/boost.regex.md#feature-line-endings-escape) | [❌](engines/dotnet.md#feature-line-endings-escape) | [✔](engines/oniguruma.md#feature-line-endings-escape) | [✔](engines/pcre.md#feature-line-endings-escape) |
| [Character Property Escapes](features/character-property-escapes.md) | [✔](engines/boost.regex.md#feature-character-property-escapes) | [✔](engines/dotnet.md#feature-character-property-escapes) | [✔](engines/oniguruma.md#feature-character-property-escapes) | [✔](engines/pcre.md#feature-character-property-escapes) |
| [Character Class Nested Set](features/character-class-nested-set.md) | [❌](engines/boost.regex.md#feature-character-class-nested-set) | [❌](engines/dotnet.md#feature-character-class-nested-set) | [✔](engines/oniguruma.md#feature-character-class-nested-set) | [❌](engines/pcre.md#feature-character-class-nested-set) |
| [Character Class Intersection](features/character-class-intersection.md) | [❌](engines/boost.regex.md#feature-character-class-intersection) | [❌](engines/dotnet.md#feature-character-class-intersection) | [✔](engines/oniguruma.md#feature-character-class-intersection) | [❌](engines/pcre.md#feature-character-class-intersection) |
| [Character Class Subtraction](features/character-class-subtraction.md) | [❌](engines/boost.regex.md#feature-character-class-subtraction) | [✔](engines/dotnet.md#feature-character-class-subtraction) | [✔](engines/oniguruma.md#feature-character-class-subtraction) | [❌](engines/pcre.md#feature-character-class-subtraction) |
| [Quoted Characters](features/quoted-characters.md) | [✔](engines/boost.regex.md#feature-quoted-characters) | [❌](engines/dotnet.md#feature-quoted-characters) | [❌](engines/oniguruma.md#feature-quoted-characters) | [✔](engines/pcre.md#feature-quoted-characters) |
| [Quantifiers](features/quantifiers.md) | [✔](engines/boost.regex.md#feature-quantifiers) | [✔](engines/dotnet.md#feature-quantifiers) | [✔](engines/oniguruma.md#feature-quantifiers) | [✔](engines/pcre.md#feature-quantifiers) |
| [Lazy Quantifiers](features/lazy-quantifiers.md) | [✔](engines/boost.regex.md#feature-lazy-quantifiers) | [✔](engines/dotnet.md#feature-lazy-quantifiers) | [✔](engines/oniguruma.md#feature-lazy-quantifiers) | [✔](engines/pcre.md#feature-lazy-quantifiers) |
| [Possessive Quantifiers](features/possessive-quantifiers.md) | [✔](engines/boost.regex.md#feature-possessive-quantifiers) | [❌](engines/dotnet.md#feature-possessive-quantifiers) | [✔](engines/oniguruma.md#feature-possessive-quantifiers) | [✔](engines/pcre.md#feature-possessive-quantifiers) |
| [Capturing Groups](features/capturing-groups.md) | [✔](engines/boost.regex.md#feature-capturing-groups) | [✔](engines/dotnet.md#feature-capturing-groups) | [✔](engines/oniguruma.md#feature-capturing-groups) | [✔](engines/pcre.md#feature-capturing-groups) |
| [Named Capturing Groups](features/named-capturing-groups.md) | [✔](engines/boost.regex.md#feature-named-capturing-groups) | [✔](engines/dotnet.md#feature-named-capturing-groups) | [✔](engines/oniguruma.md#feature-named-capturing-groups) | [✔](engines/pcre.md#feature-named-capturing-groups) |
| [Non-Capturing Groups](features/non-capturing-groups.md) | [✔](engines/boost.regex.md#feature-non-capturing-groups) | [✔](engines/dotnet.md#feature-non-capturing-groups) | [✔](engines/oniguruma.md#feature-non-capturing-groups) | [✔](engines/pcre.md#feature-non-capturing-groups) |
| [Backreferences](features/backreferences.md) | [✔](engines/boost.regex.md#feature-backreferences) | [✔](engines/dotnet.md#feature-backreferences) | [✔](engines/oniguruma.md#feature-backreferences) | [✔](engines/pcre.md#feature-backreferences) |
| [Comments](features/comments.md) | [✔](engines/boost.regex.md#feature-comments) | [✔](engines/dotnet.md#feature-comments) | [✔](engines/oniguruma.md#feature-comments) | [✔](engines/pcre.md#feature-comments) |
| [Line Comments](features/line-comments.md) | [❌](engines/boost.regex.md#feature-line-comments) | [✔](engines/dotnet.md#feature-line-comments) | [❌](engines/oniguruma.md#feature-line-comments) | [✔](engines/pcre.md#feature-line-comments) |
| [Modifiers](features/modifiers.md) | [✔](engines/boost.regex.md#feature-modifiers) | [✔](engines/dotnet.md#feature-modifiers) | [✔](engines/oniguruma.md#feature-modifiers) | [✔](engines/pcre.md#feature-modifiers) |
| [Branch Reset](features/branch-reset.md) | [✔](engines/boost.regex.md#feature-branch-reset) | [❌](engines/dotnet.md#feature-branch-reset) | [❌](engines/oniguruma.md#feature-branch-reset) | [✔](engines/pcre.md#feature-branch-reset) |
| [Lookahead](features/lookahead.md) | [✔](engines/boost.regex.md#feature-lookahead) | [✔](engines/dotnet.md#feature-lookahead) | [✔](engines/oniguruma.md#feature-lookahead) | [✔](engines/pcre.md#feature-lookahead) |
| [Lookbehind](features/lookbehind.md) | [✔](engines/boost.regex.md#feature-lookbehind) | [✔](engines/dotnet.md#feature-lookbehind) | [✔](engines/oniguruma.md#feature-lookbehind) | [✔](engines/pcre.md#feature-lookbehind) |
| [Non-Backtracking Expressions](features/non-backtracking-expressions.md) | [✔](engines/boost.regex.md#feature-non-backtracking-expressions) | [✔](engines/dotnet.md#feature-non-backtracking-expressions) | [✔](engines/oniguruma.md#feature-non-backtracking-expressions) | [✔](engines/pcre.md#feature-non-backtracking-expressions) |
| [Recursion](features/recursion.md) | [✔](engines/boost.regex.md#feature-recursion) | [✔](engines/dotnet.md#feature-recursion) | [✔](engines/oniguruma.md#feature-recursion) | [✔](engines/pcre.md#feature-recursion) |
| [Conditional Expressions](features/conditional-expressions.md) | [✔](engines/boost.regex.md#feature-conditional-expressions) | [✔](engines/dotnet.md#feature-conditional-expressions) | [✔](engines/oniguruma.md#feature-conditional-expressions) | [✔](engines/pcre.md#feature-conditional-expressions) |
| [Subroutines](features/subroutines.md) | [✔](engines/boost.regex.md#feature-subroutines) | [❌](engines/dotnet.md#feature-subroutines) | [✔](engines/oniguruma.md#feature-subroutines) | [✔](engines/pcre.md#feature-subroutines) |
| [Callouts](features/callouts.md) | [❌](engines/boost.regex.md#feature-callouts) | [❌](engines/dotnet.md#feature-callouts) | [✔](engines/oniguruma.md#feature-callouts) | [✔](engines/pcre.md#feature-callouts) |
| [Flags](features/flags.md) | [✔](engines/boost.regex.md#feature-flags) | [✔](engines/dotnet.md#feature-flags) | [✔](engines/oniguruma.md#feature-flags) | [✔](engines/pcre.md#feature-flags) |


