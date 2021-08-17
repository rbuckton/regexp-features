# Engine: Oniguruma <a id="top"></a>
<sup>[Home](../index.md)</sup>
<sup> \| </sup>
<sup>[Engines](index.md)</sup>
<sup> \| </sup>
<sup>[Reference]</sup>
<sup> \| </sup>
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/engine.md "source for: name, reference")</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/engine.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/engine.md)
-->



## Languages
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/engine.md "source for: languages")</sup>

- [C]
- [C++]

## Features

<a id="supported-features"></a>The following features are supported:

- ✔ [Flags]
- ✔ [Anchors]
- ✔ [Buffer Boundaries]
- ✔ [Word Boundaries]
- ✔ [Text Segment Boundaries]
- ✔ [Continuation Escape]
- ✔ [Alternatives]
- ✔ [Wildcard]
- ✔ [Character Classes]
- ✔ [Posix Character Classes]
- ✔ [Negated Posix Character Classes]
- ✔ [Character Class Escapes]
- ✔ [Line Endings Escape]
- ✔ [Character Property Escapes]
- ✔ [Character Class Nested Set]
- ✔ [Character Class Intersection]
- ✔ [Character Class Subtraction]
- ✔ [Quantifiers]
- ✔ [Lazy Quantifiers]
- ✔ [Possessive Quantifiers]
- ✔ [Capturing Groups]
- ✔ [Named Capturing Groups]
- ✔ [Non-Capturing Groups]
- ✔ [Backreferences]
- ✔ [Comments]
- ✔ [Modifiers]
- ✔ [Lookahead]
- ✔ [Lookbehind]
- ✔ [Non-Backtracking Expressions]
- ✔ [Recursion]
- ✔ [Conditional Expressions]
- ✔ [Subroutines]
- ✔ [Callouts]

<a id="not-supported-features"></a>The following features are *not* supported:

- ❌ [Collating Elements]
- ❌ [Equivalence Classes]
- ❌ [Quoted Characters]
- ❌ [Line Comments]
- ❌ [Branch Reset]

## Feature: Flags
<sup>[Main article][article:Flags]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Flags]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/flags.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/flags.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/flags-and-modifiers/flags.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/flags.md)
-->

<dfn>Flags</dfn> control certain aspects of the matching behavior of a pattern.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/flags.md "source for: syntax")</sup>


The following flags are supported:
- `i` &mdash; Ignore Case. Matches [character classes] using a case-insensitive comparison.
- `x` &mdash; Extended Mode. Ignores whitespace in a pattern. Spaces must instead be represented by `\s` or `\ ` (an escaped space).
- `W` &mdash; ASCII-only words (when using `\w`, `\p{Word}`, `[[:word:]]`, `\b`, or `\B`)
- `D` &mdash; ASCII-only digits (when using `\d`, `\p{Digit}`, `[[:digit:]]`)
- `S` &mdash; ASCII-only space (when using `\s`, `\p{Space}`, `[[:space:]]`)
- `P` &mdash; ASCII-only POSIX properties (includes `W`, `D`, and `S` flags)
- <code>y{<em>?</em>}</code> &mdash; Changes meaning of `\X`, `\y`, and `\Y` in unicode mode:
  - `y{g}` &mdash; Extended Grapheme Cluster mode
  - `y{w}` &mdash; Word mode.

Some flags depend on options provided to Oniguruma <sup>[reference](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L512)</sup>:
- `ONIG_SYNTAX_ONIGURUMA`:
  - `m` &mdash; Multiline. Causes the [wildcard] `.` to match newline characters.
- `ONIG_SYNTAX_PERL` and `ONIG_SYNTAX_JAVA`:
  - `m` &mdash; Multiline. Causes the [anchors] `^` and `$` to match the start and end of each line (respectively), rather than the start and end of the input.
  - `s` &mdash; Singleline. Causes the [wildcard] `.` to match newline characters.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/flags.md "source for: see_also")</sup>


- [Modifiers]

## Feature: Anchors
<sup>[Main article][article:Anchors]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Anchors]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/anchors.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/anchors.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/anchors.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/anchors.md)
-->

<dfn>Anchors</dfn> match the start or end of a line.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/anchors.md "source for: syntax")</sup>


- `^` &mdash; Matches the start of a line when the `m` (multiline) [flag] is set. Otherwise, matches the start of the input.
- `$` &mdash; Matches the end of a line when the `m` (multiline) [flag] is set. Otherwise, matches the end of the input.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/anchors.md "source for: see_also")</sup>


- [Buffer Boundaries]
- [Word Boundaries]
- [Text Segment Boundaries]
- [Continuation Escape]

## Feature: Buffer Boundaries
<sup>[Main article][article:Buffer Boundaries]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Buffer Boundaries]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/buffer-boundaries.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/buffer-boundaries.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/buffer-boundaries.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/buffer-boundaries.md)
-->

A <dfn>Buffer Boundary</dfn> is an *Atom* that matches the start or the end of the input. This differs slightly from `^` and `$` which can be affected by [RegExp flags] like `m`.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/buffer-boundaries.md "source for: syntax")</sup>


- `\A` &mdash; Matches the start of the input.
- `\z` &mdash; Matches the end of the input.
- `\Z` &mdash; A zero-width assertion consisting of an optional newline at the end of the buffer. Equivalent to `(?=\n?\z)`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/buffer-boundaries.md "source for: see_also")</sup>


- [Anchors]
- [Word Boundaries]
- [Text Segment Boundaries]
- [Continuation Escape]

## Feature: Word Boundaries
<sup>[Main article][article:Word Boundaries]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Word Boundaries]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/word-boundaries.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/word-boundaries.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/word-boundaries.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/word-boundaries.md)
-->

A <dfn>Word Boundary</dfn> is an *Atom* that matches the start or the end of a word.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/word-boundaries.md "source for: syntax")</sup>


- `\b` &mdash; Matches the start or the end of a word.
- `\B` &mdash; Matches when *not* at the start or the end of a word.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/word-boundaries.md "source for: see_also")</sup>


- [Anchors]
- [Buffer Boundaries]
- [Text Segment Boundaries]
- [Continuation Escape]

## Feature: Text Segment Boundaries
<sup>[Main article][article:Text Segment Boundaries]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Text Segment Boundaries]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/text-segment-boundaries.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/text-segment-boundaries.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/text-segment-boundaries.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/text-segment-boundaries.md)
-->

A <dfn>Text Segment Boundary</dfn> is an *Atom* that matches the start or the end of a text segment.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/text-segment-boundaries.md "source for: syntax")</sup>


- `\y` &mdash; Matches the start or the end of a text segment.
- `\Y` &mdash; Matches when *not* at the start or the end of a text segment.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/text-segment-boundaries.md "source for: see_also")</sup>


- [Anchors]
- [Buffer Boundaries]
- [Word Boundaries]
- [Continuation Escape]

## Feature: Continuation Escape
<sup>[Main article][article:Continuation Escape]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Continuation Escape]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/continuation-escape.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/continuation-escape.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/continuation-escape.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/continuation-escape.md)
-->

A <dfn>Continuation Escape</dfn> is a zero-width assertion that matches either the start of the input or the start of the last match.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/continuation-escape.md "source for: syntax")</sup>


- `\G` &mdash; Matches either the start of the input or the start of the last match.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/continuation-escape.md "source for: see_also")</sup>


- [Anchors]
- [Buffer Boundaries]
- [Word Boundaries]
- [Text Segment Boundaries]

## Feature: Alternatives
<sup>[Main article][article:Alternatives]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Alternatives]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/alternatives.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/alternatives.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/alternatives/alternatives.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/alternatives.md)
-->

An <dfn>Alternative</dfn> represents two or more branches in a pattern. If first branch of a pattern fails to match, each alternative is attempted from left to right until a match is found.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/alternatives.md "source for: syntax")</sup>


- `…|…` &mdash; Matches the pattern to the left of the `|`. If that fails, matches the pattern to the right of `|`.

## Feature: Wildcard
<sup>[Main article][article:Wildcard]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Wildcard]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/wildcard.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/wildcard.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/wildcard.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/wildcard.md)
-->

A <dfn>Wildcard</dfn> matches a single, non-newline character.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/wildcard.md "source for: syntax")</sup>


- `.` &mdash; Matches any character except newline characters. If the `m` [flag] is set then this matches any character.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.

## Feature: Character Classes
<sup>[Main article][article:Character Classes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Classes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-classes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-classes.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-classes.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/character-classes.md)
-->

A <dfn>Character Class</dfn> is an *Atom* that specifies a set of characters to match a single character in the set.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-classes.md "source for: syntax")</sup>


- `[…]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `^` at the start and `-` between two entries in the set. Matches a character in the set. Example: `[abc]` matches `a`, `b`, or `c`.
- <a id="negated-character-class"></a>`[^…]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `-` between two entries in the set. Matches any character not in the set. Example: `[^abc]` matches `d`, `e`, or `f`, etc., but not `a`, `b`, or `c`.
- <a id="character-class-range"></a><code>[<em>a</em>-<em>z</em>]</code> &mdash; Where *a* and *z* are single characters or character escapes. Matches any character in the range between *a* and *z* (inclusive). Example: `[a-c]` matches `a`, `b`, or `c`, but not `d`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-classes.md "source for: see_also")</sup>


- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Subtraction]

## Feature: Posix Character Classes
<sup>[Main article][article:Posix Character Classes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Posix Character Classes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/posix-character-classes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/posix-character-classes.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/posix-character-classes.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/posix-character-classes.md)
-->

A <dfn>Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of characters.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/posix-character-classes.md "source for: syntax")</sup>


- <code>[[:<em>name</em>:]]</code> &mdash; Where *name* is in a set of predefined names. Matches any character in the set.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/posix-character-classes.md "source for: see_also")</sup>


- [Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Subtraction]

## Feature: Negated Posix Character Classes
<sup>[Main article][article:Negated Posix Character Classes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Negated Posix Character Classes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/negated-posix-character-classes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/negated-posix-character-classes.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/negated-posix-character-classes.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/negated-posix-character-classes.md)
-->

A <dfn>Negated Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of excluded characters.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/negated-posix-character-classes.md "source for: syntax")</sup>


- <code>[[:^<em>name</em>:]]</code> &mdash; Where *name* is in a set of predefined names. Matches any character not in the set.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/negated-posix-character-classes.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Subtraction]

## Feature: Collating Elements
<sup>[Main article][article:Collating Elements]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Collating Elements]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/collating-elements.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/collating-elements.md "source for: supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/collating-elements.md)
-->

> ❌ This feature is not supported.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/collating-elements.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Subtraction]

## Feature: Equivalence Classes
<sup>[Main article][article:Equivalence Classes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Equivalence Classes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/equivalence-classes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/equivalence-classes.md "source for: supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/equivalence-classes.md)
-->

> ❌ This feature is not supported.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/equivalence-classes.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Subtraction]

## Feature: Character Class Escapes
<sup>[Main article][article:Character Class Escapes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Escapes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-escapes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-escapes.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-escapes.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/character-class-escapes.md)
-->

A <dfn>Character Class Escape</dfn> is a single character escape that represents an entire character class. They can be used as an element of a [Character Class] or as an *Atom*. It is often the case that a lower-case escape character is the inclusive set, while an upper-case variant of the same character excludes that set.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-escapes.md "source for: syntax")</sup>


- `\d` &mdash; A decimal digit character in the range 0-9. Equivalent to `[0-9]`.
- `\D` &mdash; Any character not in the range 0-9. Equivalent to `[^0-9]`.
- `\h` &mdash; Any hexadecimal digit character. Equivalent to `[0-9a-fA-F]`.
- `\H` &mdash; Any non-hexadecimal character. Equivalent to `[^0-9a-fA-F]`.
- `\w` &mdash; Any "word" character. Equivalent to `[a-zA-Z0-9_]` in non-Unicode mode, `\p{General_Category}` in Unicode mode.
- `\W` &mdash; Any non-"word" character. Equivalent to `[^a-zA-Z0-9_]` in non-Unicode mode, `\P{General_Category}` in Unicode mode.
- `\s` &mdash; Any whitespace character.
- `\S` &mdash; Any non-whitespace character.
- `\N` &mdash; Any non-newline character. Equivalent to `(?-m:.)`.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
- `\O` &mdash; Any character. Equivalent to `(?m:.)`.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
- `\X` &mdash; Text segment. Equivalent to `(?>\O(?:\Y\O)*)`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-escapes.md "source for: see_also")</sup>


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

## Feature: Line Endings Escape
<sup>[Main article][article:Line Endings Escape]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Line Endings Escape]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/line-endings-escape.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/line-endings-escape.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/line-endings-escape.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/line-endings-escape.md)
-->

A <dfn>Line Endings Escape</dfn> is an *Atom* that matches any line ending character sequence.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/line-endings-escape.md "source for: syntax")</sup>


- `\R` &mdash; Equivalent to `(?>\r\n?|[\x0A-\x0C\x85\u{2028}\u{2029}])`

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/line-endings-escape.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Subtraction]

## Feature: Character Property Escapes
<sup>[Main article][article:Character Property Escapes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Property Escapes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-property-escapes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-property-escapes.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-property-escapes.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/character-property-escapes.md)
-->

A <dfn>Character Property Escape</dfn> is an escape sequence used to match a character with a specific character property.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-property-escapes.md "source for: syntax")</sup>


- <code>\p{<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that has the property *name*.
- <code>\p{^<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that does not have the property *name*.
- <code>\P{<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that does not have the property *name*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-property-escapes.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Subtraction]

## Feature: Character Class Nested Set
<sup>[Main article][article:Character Class Nested Set]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Nested Set]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-nested-set.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-nested-set.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-nested-set.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/character-class-nested-set.md)
-->

A <dfn>Character Class Nested Set</dfn> allows you to to define a nested [character class] inside of a [character class].

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-nested-set.md "source for: syntax")</sup>


- `[[…]]` &mdash; Matches any character in the set, just like a normal [character class].
- `[[^…]]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `-` between two entries in the set. Matches any character not in the set, just like a normal [negated character class].
- <code>[[<em>a</em>-<em>z</em>]]</code> &mdash; Where *a* and *z* are single characters or character escapes. Matches any character in the range between *a* and *z* (inclusive), just like a normal [character class range].

### Example
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-nested-set.md "source for: example")</sup>


```
[a-z&&[^d-q]]
```

Is equivalent to:

```re
[a-cr-z]
```

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-nested-set.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Intersection]
- [Character Class Subtraction]

## Feature: Character Class Intersection
<sup>[Main article][article:Character Class Intersection]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Intersection]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-intersection.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-intersection.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-intersection.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/character-class-intersection.md)
-->

<dfn>Character Class Intersection</dfn> allows you to indicate that only characters that are in both [character classes] should match.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-intersection.md "source for: syntax")</sup>


- `[…&&…]` &mdash; Matches any character that is in both the left- and right-hand sets of `&&`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-intersection.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Subtraction]

## Feature: Character Class Subtraction
<sup>[Main article][article:Character Class Subtraction]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Subtraction]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-subtraction.md "source for: name"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-subtraction.md "source for: reference, supported, description")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-subtraction.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/character-class-subtraction.md)
-->

<dfn>Character Class Subtraction</dfn> allows you to exclude a class of characters from another class of characters in a [character class].

> NOTE: Oniguruma does not support character class subtraction directly, instead you must use a combination of [character class intersections] and [character class nested sets]

### Example
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-subtraction.md "source for: example")</sup>


```
[a-w&&[^c-g]z]
```

Is equivalent to the following pseudo pattern:

```
([a-w] AND ([^c-g] OR z))
```

Which reduces to:

```re
[abh-w]
```

Source for this example comes from Oniguruma: [source](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L212)

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-subtraction.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]

## Feature: Quoted Characters
<sup>[Main article][article:Quoted Characters]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Quoted Characters]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quoted-characters.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/quoted-characters.md "source for: supported")</sup>


<!--
'name' sources:
  - [](../../src/features/quoted-characters.md)
-->

> ❌ This feature is not supported.

## Feature: Quantifiers
<sup>[Main article][article:Quantifiers]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Quantifiers]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/quantifiers.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/quantifiers.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/quantifiers/quantifiers.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/quantifiers.md)
-->

<dfn>Quantifiers</dfn> specify repetition of an *Atom*. By default, quantifiers are "greedy" in that they attempt to match as many instances of the preceding *Atom* as possible to satisfy the pattern before backtracking.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/quantifiers.md "source for: syntax")</sup>


- `*` &mdash; Matches the preceding *Atom* zero or more times. Example: `a*b` matches `b`, `ab`, `aab`, `aaab`, etc.
- `+` &mdash; Matches the preceding *Atom* one or more times. Example: `a+b` matches `ab`, `aab`, `aaab`, etc., but not `b`.
- `?` &mdash; Matches the preceding *Atom* zero or one times. Example: `a?b` matches `b`, `ab`.
- <code>{<em>n</em>}</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times. Example: `a{2}` matches `aa` but not `a` or `aaa`.
- <code>{<em>n</em>,}</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times. Example: `a{2,}` matches `aa`, `aaa`, `aaaa`, etc., but not `a`.
- <code>{<em>n</em>,<em>n</em>}</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times. Example: `a{2,3}` matches `aa`, `aaa`, `aaaa`, etc., but not `a` or `aaaa`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/quantifiers.md "source for: see_also")</sup>


- [Lazy Quantifiers]
- [Possessive Quantifiers]

## Feature: Lazy Quantifiers
<sup>[Main article][article:Lazy Quantifiers]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Lazy Quantifiers]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/lazy-quantifiers.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/lazy-quantifiers.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/quantifiers/lazy-quantifiers.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/lazy-quantifiers.md)
-->

<dfn>Lazy Quantifiers</dfn> specify repetition of an *Atom*, but attempt to match as few instances of the preceding *Atom* as possible to satisfy the pattern before advancing.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/lazy-quantifiers.md "source for: syntax")</sup>


- `*?` &mdash; Matches the preceding *Atom* zero or more times.
- `+?` &mdash; Matches the preceding *Atom* one or more times.
- `??` &mdash; Matches the preceding *Atom* zero or one times.
- <code>{<em>n</em>}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times.
- <code>{<em>n</em>,}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times.
- <code>{<em>n</em>,<em>n</em>}?</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/lazy-quantifiers.md "source for: see_also")</sup>


- [Quantifiers]
- [Possessive Quantifiers]

## Feature: Possessive Quantifiers
<sup>[Main article][article:Possessive Quantifiers]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Possessive Quantifiers]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/possessive-quantifiers.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/possessive-quantifiers.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/quantifiers/possessive-quantifiers.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/possessive-quantifiers.md)
-->

<dfn>Possessive Quantifiers</dfn> are like greedy (i.e., regular) [quantifiers], except that backtracking is not performed.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/possessive-quantifiers.md "source for: syntax")</sup>


- `*+` &mdash; Match zero or more characters without backtracking.
- `++` &mdash; Match one or more characters without backtracking.
- `?+` &mdash; Match zero or one characters without backtracking.
- <code>{<em>n</em>,}+</code> &mdash; Match _n_ or more characters without backtracking.
- <code>{<em>n</em>,<em>m</em>}+</code> &mdash; Match between _n_ and _m_ characters without backtracking.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/possessive-quantifiers.md "source for: see_also")</sup>


- [Quantifiers]
- [Lazy Quantifiers]

## Feature: Capturing Groups
<sup>[Main article][article:Capturing Groups]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Capturing Groups]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/capturing-groups.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/capturing-groups.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/capturing-groups.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/capturing-groups.md)
-->

A <dfn>Capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by index. A Capturing Group can be captured and returned by the matching algorithm.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/capturing-groups.md "source for: syntax")</sup>


- `(…)` &mdash; Groups the subexpression as a single *Atom*. The result is captured and returned by the matching algorithm.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/capturing-groups.md "source for: see_also")</sup>


- [Named Capturing Groups]
- [Non-Capturing Groups]
- [Backreferences]
- [Recursion]
- [Subroutines]

## Feature: Named Capturing Groups
<sup>[Main article][article:Named Capturing Groups]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Named Capturing Groups]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/named-capturing-groups.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/named-capturing-groups.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/named-capturing-groups.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/named-capturing-groups.md)
-->

A <dfn>Named Capturing Group</dfn> is a subexpression that can be captured and returned by the matching algorithm. A Named Capturing Group is also an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by name.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/named-capturing-groups.md "source for: syntax")</sup>


- <code>(?&lt;<em>name</em>&gt;…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
- <code>(?'<em>name</em>'…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/named-capturing-groups.md "source for: see_also")</sup>


- [Capturing Groups]
- [Non-Capturing Groups]
- [Backreferences]
- [Recursion]
- [Subroutines]

## Feature: Non-Capturing Groups
<sup>[Main article][article:Non-Capturing Groups]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Non-Capturing Groups]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-capturing-groups.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/non-capturing-groups.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/non-capturing-groups.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/non-capturing-groups.md)
-->

A <dfn>Non-capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] but cannot be referenced using [Backreferences]. A Non-capturing Group is not captured by the matching algorithm.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-capturing-groups.md "source for: syntax")</sup>


- `(?:…)` &mdash; Groups the subexpression as a single *Atom*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-capturing-groups.md "source for: see_also")</sup>


- [Capturing Groups]
- [Named Capturing Groups]

## Feature: Backreferences
<sup>[Main article][article:Backreferences]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Backreferences]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/backreferences.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/backreferences.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/backreferences.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/backreferences.md)
-->

<dfn>Backreferences</dfn> allow a pattern to re-match a previously matched capture group<sup>[1][Capturing Groups] [2][Named Capturing Groups]</sup> either by number (_n_) or by _name_.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/backreferences.md "source for: syntax")</sup>


- <code>&#x5c;<em>n</em></code> &mdash; Where *n* is a decimal digit in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\k&lt;<em>n</em>&gt;</code> &mdash; Where *n* is an integer > 0. Matches the same string as the [capture group] *n*.
- <code>\k'<em>n</em>'</code> &mdash; Where *n* is an integer > 0. Matches the same string as the [capture group] *n*.
- <code>\k&lt;-<em>n</em>&gt;</code> &mdash; Where *n* is an integer > 0. Matches the *n*th previous [capture group].
- <code>\k'-<em>n</em>'</code> &mdash; Where *n* is an integer > 0. Matches the *n*th previous [capture group].
- <code>\k&lt;+<em>n</em>&gt;</code> &mdash; Where *n* is an integer > 0. Matches the *n*th next [capture group].
- <code>\k'+<em>n</em>'</code> &mdash; Where *n* is an integer > 0. Matches the *n*th next [capture group].
- <code>\k&lt;<em>name</em>&gt;</code> &mdash; Matches the same string as the [named capture group] with the name *name*.
- <code>\k'<em>name</em>'</code> &mdash; Matches the same string as the [named capture group] with the name *name*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/backreferences.md "source for: see_also")</sup>


- [Capturing Groups]
- [Named Capturing Groups]

## Feature: Comments
<sup>[Main article][article:Comments]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Comments]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/comments.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/comments.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/comments/comments.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/comments.md)
-->

A <dfn>Comment</dfn> is a sequence of characters that is ignored by pattern matching and can be used to document a pattern.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/comments.md "source for: syntax")</sup>


- `(?#…)` &mdash; The entire expression is removed from the pattern. A comment may not contain other `(` or `)` characters.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/comments.md "source for: see_also")</sup>


- [Line Comments]

## Feature: Line Comments
<sup>[Main article][article:Line Comments]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Line Comments]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/line-comments.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/line-comments.md "source for: supported")</sup>


<!--
'name' sources:
  - [](../../src/features/comments/line-comments.md)
-->

> ❌ This feature is not supported.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/line-comments.md "source for: see_also")</sup>


- [Comments]

## Feature: Modifiers
<sup>[Main article][article:Modifiers]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Modifiers]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/modifiers.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/modifiers.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/flags-and-modifiers/modifiers.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/modifiers.md)
-->

<dfn>Modifiers</dfn> allow you to change the currently active [RegExp flags] within a subexpression.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/modifiers.md "source for: syntax")</sup>


- `(?imxWDSPy-imxWDSPy)` - Sets or unsets (using `-`) the specified [RegExp flags] starting at the current position until the next closing `)` or the end of the pattern. Example: `(?-i)A(?i)B(?-i)C` matches `ABC`, `AbC`.
  - NOTE: When option `ONIG_SYNTAX_ONIGURUMA` is specified, the `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc. <sup>[reference](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L512)</sup>
  - NOTE: When option `ONIG_SYNTAX_PERL` or `ONIG_SYNTAX_JAVA` are specified, the `m` and `s` flags are equivalent to their Perl/Java counterparts. <sup>[reference](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L512)</sup>
- `(?imxWDSPy-imxWDSPy:…)` - Sets or unsets (using `-`) the specified [RegExp flags] for the subexpression. Example: `(?-i:A(?i:B)C)` matches `ABC`, `AbC`.
  - NOTE: When option `ONIG_SYNTAX_ONIGURUMA` is specified, the `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc. <sup>[reference](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L512)</sup>
  - NOTE: When option `ONIG_SYNTAX_PERL` or `ONIG_SYNTAX_JAVA` are specified, the `m` and `s` flags are equivalent to their Perl/Java counterparts. <sup>[reference](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L512)</sup>

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/modifiers.md "source for: see_also")</sup>


- [Flags]

## Feature: Branch Reset
<sup>[Main article][article:Branch Reset]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Branch Reset]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/branch-reset.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/branch-reset.md "source for: supported")</sup>


<!--
'name' sources:
  - [](../../src/features/alternatives/branch-reset.md)
-->

> ❌ This feature is not supported.

## Feature: Lookahead
<sup>[Main article][article:Lookahead]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Lookahead]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookahead.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/lookahead.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/lookaround/lookahead.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/lookahead.md)
-->

A <dfn>Lookahead</dfn> is a zero-width assertion that matches if the provided pattern would match the characters to the right of the current position.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookahead.md "source for: syntax")</sup>


- <a id="positive-lookahead"></a>`(?=…)` &mdash; Matches if the provided pattern would match but does not advance the current position.
- <a id="negative-lookahead"></a>`(?!…)` &mdash; Matches if the provided pattern would not match, but does not advance the current position.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookahead.md "source for: see_also")</sup>


- [Lookbehind]

## Feature: Lookbehind
<sup>[Main article][article:Lookbehind]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Lookbehind]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookbehind.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/lookbehind.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/lookaround/lookbehind.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/lookbehind.md)
-->

A <dfn>Lookbehind</dfn> is a zero-width assertion that matches if the provided pattern would match the characters to the left of the current position.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookbehind.md "source for: syntax")</sup>


- <a id="positive-lookbehind"></a>`(?<=…)` &mdash; Matches if the provided pattern would match the preceding characters, but does not advance the current position. The pattern must have a fixed length (unbounded [quantifiers] are not permitted).
- <a id="negative-lookbehind"></a>`(?<!…)` &mdash; Matches if the provided pattern would not match the preceding characters, but does not advance the current position. The pattern must have a fixed length (unbounded [quantifiers] are not permitted).

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookbehind.md "source for: see_also")</sup>


- [Lookahead]

## Feature: Non-Backtracking Expressions
<sup>[Main article][article:Non-Backtracking Expressions]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Non-Backtracking Expressions]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-backtracking-expressions.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/non-backtracking-expression.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/non-backtracking-expressions.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/non-backtracking-expression.md)
-->

A <dfn>Non-Backtracking Expression</dfn> is matched independent of neighboring patterns, and will not backtrack in the event of a failed match. This is often used to improve performance.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-backtracking-expressions.md "source for: syntax")</sup>


- `(?>…)` &mdash; Matches the provided pattern, but no backtracking is performed if the match fails.

## Feature: Recursion
<sup>[Main article][article:Recursion]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Recursion]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/recursion.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/recursion.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/recursion.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/recursion.md)
-->

A <dfn>Recursive Expression</dfn> provides a mechanism for re-evaluating a [capture group] inside of itself, to handle cases such as matching balanced parenthesis or brackets, etc.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/recursion.md "source for: syntax")</sup>


- <code>\k&lt;<em>n</em>+<em>n</em>&gt;</code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\k'<em>n</em>+<em>n</em>'</code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\k&lt;<em>n</em>-<em>n</em>&gt;</code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\k'<em>n</em>-<em>n</em>'</code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\k&lt;<em>name</em>&gt;</code> &mdash; Where *level* is an integer >= 0. Matches the same string as the [named capture group] with the name *name* at the recursion level relative to the referenced [named capture group].
- <code>\k'<em>name</em>'</code> &mdash; Where *level* is an integer >= 0. Matches the same string as the [named capture group] with the name *name* at the recursion level relative to the referenced [named capture group].
- <code>\g&lt;<em>n</em>&gt;</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>\g'<em>n</em>'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- `\g<0>` &mdash; Evaluates the entire pattern at the current position.
- `\g'0'` &mdash; Evaluates the entire pattern at the current position.
- <code>\g&lt;<em>-n</em>&gt;</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\g'<em>-n</em>'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\g&lt;<em>+n</em>&gt;</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\g'<em>+n</em>'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\g&lt;<em>name</em>&gt;</code> &mdash; Evaluates the [named capture group] with the provided *name*.
- <code>\g'<em>name</em>'</code> &mdash; Evaluates the [named capture group] with the provided *name*.

> NOTE: Left-most recursive calls are forbidden:
> - `(?<name>a|\g<name>b)` - error
> - `(?<name>a|b\g<name>c)` - ok
>
> Source for this example comes from Oniguruma: [source](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L464-L467)

## Feature: Conditional Expressions
<sup>[Main article][article:Conditional Expressions]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Conditional Expressions]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/conditional-expressions.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/conditional-expressions.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/alternatives/conditional-expressions.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/conditional-expressions.md)
-->

A <dfn>Conditional Expression</dfn> checks a condition and evaluates its first alternative if the condition is **true**; otherwise, it evaluates its second alternative.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/conditional-expressions.md "source for: syntax")</sup>


- <code>(?(<em>condition</em>)<em>condition</em>|<em>condition</em>)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches *no-pattern*.
- <code>(?(<em>condition</em>)<em>condition</em>)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches the empty string.

#### Conditions

The following conditions are supported:

- <code>(?(?=<em>test-pattern</em>)…)</code> &mdash; Evaluates to **true** if a [lookahead] for *test-pattern* matches; otherwise, evaluates to **false**.
- <code>(?(?!<em>test-pattern</em>)…)</code> &mdash; Evaluates to **true** if a negative [lookahead] for *test-pattern* matches; otherwise, evaluates to **false**.
- <code>(?(<em>n</em>)…)</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(-<em>n</em>)…)</code> &mdash; Evaluates to **true** if the *n*th [capture group] declared to the left of the current *Atom* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(+<em>n</em>)…)</code> &mdash; Evaluates to **true** if the *n*th [capture group] declared to the right of the current *Atom* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(<em>n</em>-<em>n</em>)…)</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?(<em>n</em>+<em>n</em>)…)</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?(&lt;<em>name</em>&gt;)…)</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; otherwise, evaluates to **false**.
- <code>(?('<em>name</em>')…)</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(&lt;<em>name</em>-<em>name</em>&gt;)…)</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?('<em>name</em>-<em>name</em>')…)</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?(&lt;<em>name</em>+<em>name</em>&gt;)…)</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?('<em>name</em>+<em>name</em>')…)</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.

## Feature: Subroutines
<sup>[Main article][article:Subroutines]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Subroutines]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/subroutines.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/subroutines.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/subroutines.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/subroutines.md)
-->

A <dfn>Subroutine</dfn> is a pre-defined [capture group] or [named capture group] that can be reused in multiple places within the pattern to re-evaluate the subexpression from the group.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/subroutines.md "source for: syntax")</sup>


- <code>\g&lt;<em>n</em>&gt;</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>\g'<em>n</em>'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- `\g<0>` &mdash; Evaluates the entire pattern at the current position.
- `\g'0'` &mdash; Evaluates the entire pattern at the current position.
- <code>\g&lt;<em>-n</em>&gt;</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\g'<em>-n</em>'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\g&lt;<em>+n</em>&gt;</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\g'<em>+n</em>'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\g&lt;<em>name</em>&gt;</code> &mdash; Evaluates the [named capture group] with the provided *name*.
- <code>\g'<em>name</em>'</code> &mdash; Evaluates the [named capture group] with the provided *name*.

### Example
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/subroutines.md "source for: example")</sup>


```re
(?(DEFINE)
  (?<Year>\d{4}|[+-]\d{5,})
  (?<Month>0[1-9]|1[0-2])
  (?<Day>0[1-9]|2[0-9]|3[01])
)
(?<Date>(?&Year)-(?&Month)-(?&Day)|(?&Year)(?&Month)(?&Day))
```

## Feature: Callouts
<sup>[Main article][article:Callouts]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Callouts]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/callouts.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/callouts.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/callouts.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/features/callouts.md)
-->

A <dfn>Callout</dfn> is a user-defined function that can be evaluated while matching.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/callouts.md "source for: syntax")</sup>


- Callouts of contents:
  - <code>(?{…<em>contents</em>…})</code> &mdash; Invokes the callout with the provided *contents*.
  - <code>(?{…<em>contents</em>…}<em>D</em>)</code> &mdash; Invokes the callout with the provided *contents* and direction flag character *D*. The direction flag must be one of:
    - `X` &mdash; Invoked while progressing and retracting.
    - `<` &mdash; Invoked while retracting.
    - `>` &mdash; Invoked while progressing.
  - <code>(?{…<em>contents</em>…}[<em>tag</em>])</code> &mdash; Invokes the callout with the provided *contents* and *tag*.
  - <code>(?{…<em>contents</em>…}[<em>tag</em>]<em>D</em>)</code> &mdash; Invokes the callout with the provided *contents*, *tag*, and direction flag character *D*. The direction flag must be one of:
    - `X` &mdash; Invoked while progressing and retracting.
    - `<` &mdash; Invoked while retracting.
    - `>` &mdash; Invoked while progressing.
- Callouts of *name*:
 - <code>(*<em>name</em>)</code> &mdash; Invokes the callout with the provided *name*.
 - <code>(*<em>name</em>{<em>args</em>…})</code> &mdash; Invokes the callout with the provided *name* and *args*.
 - <code>(*<em>name</em>[<em>tag</em>])</code> &mdash; Invokes the callout with the provided *name* and *tag*.
 - <code>(*<em>name</em>[<em>tag</em>]{<em>args</em>…})</code> &mdash; Invokes the callout with the provided *name*, *tag*, and *args*.




[new engine]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-engines
[new feature]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-features
[new language]: https://github.com/rbuckton/regexp-features/blob/main/CONTRIBUTING.md#adding-new-languages

[Flags]: #feature-flags
[Flag]: #feature-flags
[RegExp Flags]: #feature-flags
[RegExp Flag]: #feature-flags
[Anchors]: #feature-anchors
[Anchor]: #feature-anchors
[Buffer Boundaries]: #feature-buffer-boundaries
[Buffer Boundary]: #feature-buffer-boundaries
[Word Boundaries]: #feature-word-boundaries
[Word Boundary]: #feature-word-boundaries
[Text Segment Boundaries]: #feature-text-segment-boundaries
[Text Segment Boundary]: #feature-text-segment-boundaries
[Continuation Escape]: #feature-continuation-escape
[Alternatives]: #feature-alternatives
[Alternative]: #feature-alternatives
[Wildcard]: #feature-wildcard
[Wildcards]: #feature-wildcard
[Character Classes]: #feature-character-classes
[Character Class]: #feature-character-classes
[Posix Character Classes]: #feature-posix-character-classes
[Posix Character Class]: #feature-posix-character-classes
[Negated Posix Character Classes]: #feature-negated-posix-character-classes
[Negated Posix Character Class]: #feature-negated-posix-character-classes
[Collating Elements]: #feature-collating-elements
[Collating Element]: #feature-collating-elements
[Equivalence Classes]: #feature-equivalence-classes
[Equivalence Class]: #feature-equivalence-classes
[Character Class Escapes]: #feature-character-class-escapes
[Character Class Escape]: #feature-character-class-escapes
[Line Endings Escape]: #feature-line-endings-escape
[Character Property Escapes]: #feature-character-property-escapes
[Character Property Escape]: #feature-character-property-escapes
[Character Class Nested Set]: #feature-character-class-nested-set
[Character Class Nested Sets]: #feature-character-class-nested-set
[Character Class Intersection]: #feature-character-class-intersection
[Character Class Intersections]: #feature-character-class-intersection
[Character Class Subtraction]: #feature-character-class-subtraction
[Quoted Characters]: #feature-quoted-characters
[Quantifiers]: #feature-quantifiers
[Quantifier]: #feature-quantifiers
[Lazy Quantifiers]: #feature-lazy-quantifiers
[Lazy Quantifier]: #feature-lazy-quantifiers
[Possessive Quantifiers]: #feature-possessive-quantifiers
[Possessive Quantifier]: #feature-possessive-quantifiers
[Capturing Groups]: #feature-capturing-groups
[Capturing Group]: #feature-capturing-groups
[Capture Groups]: #feature-capturing-groups
[Capture Group]: #feature-capturing-groups
[Named Capturing Groups]: #feature-named-capturing-groups
[Named Capturing Group]: #feature-named-capturing-groups
[Named Capture Groups]: #feature-named-capturing-groups
[Named Capture Group]: #feature-named-capturing-groups
[Non-Capturing Groups]: #feature-non-capturing-groups
[Non-Capturing group]: #feature-non-capturing-groups
[Backreferences]: #feature-backreferences
[Backreference]: #feature-backreferences
[Comments]: #feature-comments
[Comment]: #feature-comments
[Line Comments]: #feature-line-comments
[Line Comment]: #feature-line-comments
[x-mode Comments]: #feature-line-comments
[x-mode Comment]: #feature-line-comments
[Modifiers]: #feature-modifiers
[Modifier]: #feature-modifiers
[Branch Reset]: #feature-branch-reset
[Lookahead]: #feature-lookahead
[Lookbehind]: #feature-lookbehind
[Non-Backtracking Expressions]: #feature-non-backtracking-expressions
[Non-Backtracking Expression]: #feature-non-backtracking-expressions
[Recursion]: #feature-recursion
[Recursive Expression]: #feature-recursion
[Conditional Expressions]: #feature-conditional-expressions
[Conditional Expression]: #feature-conditional-expressions
[Subroutines]: #feature-subroutines
[Subroutine]: #feature-subroutines
[Callouts]: #feature-callouts
[Callout]: #feature-callouts


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
[article:Character Class Subtraction]: ../features/character-class-subtraction.md
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
[article:Flags]: ../features/flags.md

[Reference]: https://github.com/kkos/oniguruma

[reference:Flags]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L265-L289
[reference:Anchors]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L172
[reference:Buffer Boundaries]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L179-L181
[reference:Word Boundaries]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L176-L177
[reference:Text Segment Boundaries]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L186-L201
[reference:Continuation Escape]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L182
[reference:Alternatives]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L9
[reference:Wildcard]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L48
[reference:Character Classes]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L205
[reference:Posix Character Classes]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L218
[reference:Negated Posix Character Classes]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L218
[reference:Collating Elements]: #not-supported-features
[reference:Equivalence Classes]: #not-supported-features
[reference:Character Class Escapes]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L50-L91
[reference:Line Endings Escape]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L83-L87
[reference:Character Property Escapes]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L112
[reference:Character Class Nested Set]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L210
[reference:Character Class Intersection]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L210
[reference:Character Class Subtraction]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L210-L212
[reference:Quoted Characters]: #not-supported-features
[reference:Quantifiers]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L132
[reference:Lazy Quantifiers]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L145
[reference:Possessive Quantifiers]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L159
[reference:Capturing Groups]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L293
[reference:Named Capturing Groups]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L312
[reference:Non-Capturing Groups]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L292
[reference:Backreferences]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L398
[reference:Comments]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L263
[reference:Line Comments]: #not-supported-features
[reference:Modifiers]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L265-L289
[reference:Branch Reset]: #not-supported-features
[reference:Lookahead]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L295-L296
[reference:Lookbehind]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L298-L299
[reference:Non-Backtracking Expressions]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L309-L310
[reference:Recursion]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L418
[reference:Conditional Expressions]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L379
[reference:Subroutines]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L451
[reference:Callouts]: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L322

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