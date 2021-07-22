# Table of Contents

- [Languages](languages.md)
- [Features](features.md)
- [Engines](engines.md)

# Support Table

| Engine | Anchors | Buffer Boundaries | Word Boundaries | Text Segment Boundaries | Continuation Escape | Alternatives | Wildcard |
|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| [Boost.Regex](engines/boost.regex.md) | [✔](engines/boost.regex.md#feature-anchors) | [✔](engines/boost.regex.md#feature-buffer-boundaries) | [✔](engines/boost.regex.md#feature-word-boundaries) | [❌](engines/boost.regex.md#feature-text-segment-boundaries) | [✔](engines/boost.regex.md#feature-continuation-escape) | [✔](engines/boost.regex.md#feature-alternatives) | [✔](engines/boost.regex.md#feature-wildcard) |
| [.NET](engines/dotnet.md) | [✔](engines/dotnet.md#feature-anchors) | [✔](engines/dotnet.md#feature-buffer-boundaries) | [✔](engines/dotnet.md#feature-word-boundaries) | [❌](engines/dotnet.md#feature-text-segment-boundaries) | [✔](engines/dotnet.md#feature-continuation-escape) | [✔](engines/dotnet.md#feature-alternatives) | [✔](engines/dotnet.md#feature-wildcard) |
| [Oniguruma](engines/oniguruma.md) | [✔](engines/oniguruma.md#feature-anchors) | [✔](engines/oniguruma.md#feature-buffer-boundaries) | [✔](engines/oniguruma.md#feature-word-boundaries) | [✔](engines/oniguruma.md#feature-text-segment-boundaries) | [✔](engines/oniguruma.md#feature-continuation-escape) | [✔](engines/oniguruma.md#feature-alternatives) | [✔](engines/oniguruma.md#feature-wildcard) |
| [PCRE](engines/pcre.md) | [✔](engines/pcre.md#feature-anchors) | [✔](engines/pcre.md#feature-buffer-boundaries) | [✔](engines/pcre.md#feature-word-boundaries) | [❌](engines/pcre.md#feature-text-segment-boundaries) | [✔](engines/pcre.md#feature-continuation-escape) | [✔](engines/pcre.md#feature-alternatives) | [✔](engines/pcre.md#feature-wildcard) |


| Engine | Character Classes | Posix Character Classes | Negated Posix Character Classes | Collating Elements | Equivalence Classes | Character Class Escapes | Line Endings Escape |
|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| [Boost.Regex](engines/boost.regex.md) | [✔](engines/boost.regex.md#feature-character-classes) | [✔](engines/boost.regex.md#feature-posix-character-classes) | [❌](engines/boost.regex.md#feature-negated-posix-character-classes) | [✔](engines/boost.regex.md#feature-collating-elements) | [✔](engines/boost.regex.md#feature-equivalence-classes) | [✔](engines/boost.regex.md#feature-character-class-escapes) | [✔](engines/boost.regex.md#feature-line-endings-escape) |
| [.NET](engines/dotnet.md) | [✔](engines/dotnet.md#feature-character-classes) | [❌](engines/dotnet.md#feature-posix-character-classes) | [❌](engines/dotnet.md#feature-negated-posix-character-classes) | [❌](engines/dotnet.md#feature-collating-elements) | [❌](engines/dotnet.md#feature-equivalence-classes) | [✔](engines/dotnet.md#feature-character-class-escapes) | [❌](engines/dotnet.md#feature-line-endings-escape) |
| [Oniguruma](engines/oniguruma.md) | [✔](engines/oniguruma.md#feature-character-classes) | [✔](engines/oniguruma.md#feature-posix-character-classes) | [✔](engines/oniguruma.md#feature-negated-posix-character-classes) | [❌](engines/oniguruma.md#feature-collating-elements) | [❌](engines/oniguruma.md#feature-equivalence-classes) | [✔](engines/oniguruma.md#feature-character-class-escapes) | [✔](engines/oniguruma.md#feature-line-endings-escape) |
| [PCRE](engines/pcre.md) | [✔](engines/pcre.md#feature-character-classes) | [✔](engines/pcre.md#feature-posix-character-classes) | [✔](engines/pcre.md#feature-negated-posix-character-classes) | [❌](engines/pcre.md#feature-collating-elements) | [❌](engines/pcre.md#feature-equivalence-classes) | [✔](engines/pcre.md#feature-character-class-escapes) | [✔](engines/pcre.md#feature-line-endings-escape) |


| Engine | Character Property Escapes | Character Class Nested Set | Character Class Intersection | Character Class Subtraction | Quoted Characters | Quantifiers | Lazy Quantifiers |
|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| [Boost.Regex](engines/boost.regex.md) | [✔](engines/boost.regex.md#feature-character-property-escapes) | [❌](engines/boost.regex.md#feature-character-class-nested-set) | [❌](engines/boost.regex.md#feature-character-class-intersection) | [❌](engines/boost.regex.md#feature-character-class-subtraction) | [✔](engines/boost.regex.md#feature-quoted-characters) | [✔](engines/boost.regex.md#feature-quantifiers) | [✔](engines/boost.regex.md#feature-lazy-quantifiers) |
| [.NET](engines/dotnet.md) | [✔](engines/dotnet.md#feature-character-property-escapes) | [❌](engines/dotnet.md#feature-character-class-nested-set) | [❌](engines/dotnet.md#feature-character-class-intersection) | [✔](engines/dotnet.md#feature-character-class-subtraction) | [❌](engines/dotnet.md#feature-quoted-characters) | [✔](engines/dotnet.md#feature-quantifiers) | [✔](engines/dotnet.md#feature-lazy-quantifiers) |
| [Oniguruma](engines/oniguruma.md) | [✔](engines/oniguruma.md#feature-character-property-escapes) | [✔](engines/oniguruma.md#feature-character-class-nested-set) | [✔](engines/oniguruma.md#feature-character-class-intersection) | [✔](engines/oniguruma.md#feature-character-class-subtraction) | [❌](engines/oniguruma.md#feature-quoted-characters) | [✔](engines/oniguruma.md#feature-quantifiers) | [✔](engines/oniguruma.md#feature-lazy-quantifiers) |
| [PCRE](engines/pcre.md) | [✔](engines/pcre.md#feature-character-property-escapes) | [❌](engines/pcre.md#feature-character-class-nested-set) | [❌](engines/pcre.md#feature-character-class-intersection) | [❌](engines/pcre.md#feature-character-class-subtraction) | [✔](engines/pcre.md#feature-quoted-characters) | [✔](engines/pcre.md#feature-quantifiers) | [✔](engines/pcre.md#feature-lazy-quantifiers) |


| Engine | Possessive Quantifiers | Capturing Groups | Named Capturing Groups | Non-Capturing Groups | Backreferences | Comments | Line Comments |
|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| [Boost.Regex](engines/boost.regex.md) | [✔](engines/boost.regex.md#feature-possessive-quantifiers) | [✔](engines/boost.regex.md#feature-capturing-groups) | [✔](engines/boost.regex.md#feature-named-capturing-groups) | [✔](engines/boost.regex.md#feature-non-capturing-groups) | [✔](engines/boost.regex.md#feature-backreferences) | [✔](engines/boost.regex.md#feature-comments) | [❌](engines/boost.regex.md#feature-line-comments) |
| [.NET](engines/dotnet.md) | [❌](engines/dotnet.md#feature-possessive-quantifiers) | [✔](engines/dotnet.md#feature-capturing-groups) | [✔](engines/dotnet.md#feature-named-capturing-groups) | [✔](engines/dotnet.md#feature-non-capturing-groups) | [✔](engines/dotnet.md#feature-backreferences) | [✔](engines/dotnet.md#feature-comments) | [✔](engines/dotnet.md#feature-line-comments) |
| [Oniguruma](engines/oniguruma.md) | [✔](engines/oniguruma.md#feature-possessive-quantifiers) | [✔](engines/oniguruma.md#feature-capturing-groups) | [✔](engines/oniguruma.md#feature-named-capturing-groups) | [✔](engines/oniguruma.md#feature-non-capturing-groups) | [✔](engines/oniguruma.md#feature-backreferences) | [✔](engines/oniguruma.md#feature-comments) | [❌](engines/oniguruma.md#feature-line-comments) |
| [PCRE](engines/pcre.md) | [✔](engines/pcre.md#feature-possessive-quantifiers) | [✔](engines/pcre.md#feature-capturing-groups) | [✔](engines/pcre.md#feature-named-capturing-groups) | [✔](engines/pcre.md#feature-non-capturing-groups) | [✔](engines/pcre.md#feature-backreferences) | [✔](engines/pcre.md#feature-comments) | [✔](engines/pcre.md#feature-line-comments) |


| Engine | Modifiers | Branch Reset | Lookahead | Lookbehind | Non-Backtracking Expressions | Recursion | Conditional Expressions |
|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| [Boost.Regex](engines/boost.regex.md) | [✔](engines/boost.regex.md#feature-modifiers) | [✔](engines/boost.regex.md#feature-branch-reset) | [✔](engines/boost.regex.md#feature-lookahead) | [✔](engines/boost.regex.md#feature-lookbehind) | [✔](engines/boost.regex.md#feature-non-backtracking-expressions) | [✔](engines/boost.regex.md#feature-recursion) | [✔](engines/boost.regex.md#feature-conditional-expressions) |
| [.NET](engines/dotnet.md) | [✔](engines/dotnet.md#feature-modifiers) | [❌](engines/dotnet.md#feature-branch-reset) | [✔](engines/dotnet.md#feature-lookahead) | [✔](engines/dotnet.md#feature-lookbehind) | [✔](engines/dotnet.md#feature-non-backtracking-expressions) | [✔](engines/dotnet.md#feature-recursion) | [✔](engines/dotnet.md#feature-conditional-expressions) |
| [Oniguruma](engines/oniguruma.md) | [✔](engines/oniguruma.md#feature-modifiers) | [❌](engines/oniguruma.md#feature-branch-reset) | [✔](engines/oniguruma.md#feature-lookahead) | [✔](engines/oniguruma.md#feature-lookbehind) | [✔](engines/oniguruma.md#feature-non-backtracking-expressions) | [✔](engines/oniguruma.md#feature-recursion) | [✔](engines/oniguruma.md#feature-conditional-expressions) |
| [PCRE](engines/pcre.md) | [✔](engines/pcre.md#feature-modifiers) | [✔](engines/pcre.md#feature-branch-reset) | [✔](engines/pcre.md#feature-lookahead) | [✔](engines/pcre.md#feature-lookbehind) | [✔](engines/pcre.md#feature-non-backtracking-expressions) | [✔](engines/pcre.md#feature-recursion) | [✔](engines/pcre.md#feature-conditional-expressions) |


| Engine | Subroutines | Callouts | Flags |
|:-|:-:|:-:|:-:|
| [Boost.Regex](engines/boost.regex.md) | [✔](engines/boost.regex.md#feature-subroutines) | [❌](engines/boost.regex.md#feature-callouts) | [✔](engines/boost.regex.md#feature-flags) |
| [.NET](engines/dotnet.md) | [❌](engines/dotnet.md#feature-subroutines) | [❌](engines/dotnet.md#feature-callouts) | [✔](engines/dotnet.md#feature-flags) |
| [Oniguruma](engines/oniguruma.md) | [✔](engines/oniguruma.md#feature-subroutines) | [✔](engines/oniguruma.md#feature-callouts) | [✔](engines/oniguruma.md#feature-flags) |
| [PCRE](engines/pcre.md) | [✔](engines/pcre.md#feature-subroutines) | [✔](engines/pcre.md#feature-callouts) | [✔](engines/pcre.md#feature-flags) |


