# Engine: Oniguruma

<sup>[Reference] \| </sup>
<sup>[Improve this article](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/engine.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/engine.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/oniguruma/engine.md)
-->


## Languages
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/engine.md)</sup>

<!--
'languages' sources:
  - [](../../src/engines/oniguruma/engine.md)
-->

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

<!--
'name' sources:
  - [](../../src/features/flags-and-modifiers/flags.yml)
-->

<sup>[Main article][article:Flags] \| [Reference][reference:Flags] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/flags.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/flags.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/flags.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/flags.md)
-->


<!--
'description' sources:
  - [](../../src/features/flags-and-modifiers/flags.description.md)
-->


<dfn>Flags</dfn> control certain aspects of the matching behavior of a pattern.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/flags.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/oniguruma/features/flags.md)
-->


The following flags are supported:
- `i` &mdash; Ignore Case. Matches [character classes] using a case-insensitive comparison.
- `m` &mdash; Multiline. Causes the [wildcard] `.` to match newline characters.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
- `x` &mdash; Extended Mode. Ignores whitespace in a pattern. Spaces must instead be represented by `\s` or `\ ` (an escaped space).
- `W` &mdash; ASCII-only words (when using `\w`, `\p{Word}`, `[[:word:]]`, `\b`, or `\B`)
- `D` &mdash; ASCII-only digits (when using `\d`, `\p{Digit}`, `[[:digit:]]`)
- `S` &mdash; ASCII-only space (when using `\s`, `\p{Space}`, `[[:space:]]`)
- `P` &mdash; ASCII-only POSIX properties (includes `W`, `D`, and `S` flags)
- <code>y{*?*}</code> &mdash; Changes meaning of `\X`, `\y`, and `\Y` in unicode mode:
  - `y{g}` &mdash; Extended Grapheme Cluster mode
  - `y{w}` &mdash; Word mode.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/flags.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/flags-and-modifiers/flags.yml)
-->


- [Modifiers]

## Feature: Anchors

<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/anchors.yml)
-->

<sup>[Main article][article:Anchors] \| [Reference][reference:Anchors] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/anchors.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/anchors.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/anchors.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/anchors.md)
-->


<!--
'description' sources:
  - [](../../src/features/anchors-and-boundaries/anchors.description.md)
-->


<dfn>Anchors</dfn> match the start or end of a line.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/anchors.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/anchors-and-boundaries/anchors.syntax.md)
-->


- `^` &mdash; Matches the start of a line when the `m` (multiline) [flag] is set. Otherwise, matches the start of the input.
- `$` &mdash; Matches the end of a line when the `m` (multiline) [flag] is set. Otherwise, matches the end of the input.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/anchors.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/anchors-and-boundaries/anchors.yml)
-->


- [Buffer Boundaries]
- [Word Boundaries]
- [Text Segment Boundaries]
- [Continuation Escape]

## Feature: Buffer Boundaries

<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/buffer-boundaries.yml)
-->

<sup>[Main article][article:Buffer Boundaries] \| [Reference][reference:Buffer Boundaries] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/buffer-boundaries.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/buffer-boundaries.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/buffer-boundaries.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/buffer-boundaries.md)
-->


<!--
'description' sources:
  - [](../../src/features/anchors-and-boundaries/buffer-boundaries.description.md)
-->


A <dfn>Buffer Boundary</dfn> is an *Atom* that matches the start or the end of the input. This differs slightly from `^` and `$` which can be affected by [RegExp flags] like `m`.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/buffer-boundaries.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/anchors-and-boundaries/buffer-boundaries.syntax.md)
-->


- `\A` &mdash; Matches the start of the input.
- `\z` &mdash; Matches the end of the input.
- `\Z` &mdash; A zero-width assertion consisting of an optional newline at the end of the buffer. Equivalent to `(?=\n?\z)`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/buffer-boundaries.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/anchors-and-boundaries/buffer-boundaries.yml)
-->


- [Anchors]
- [Word Boundaries]
- [Text Segment Boundaries]
- [Continuation Escape]

## Feature: Word Boundaries

<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/word-boundaries.yml)
-->

<sup>[Main article][article:Word Boundaries] \| [Reference][reference:Word Boundaries] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/word-boundaries.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/word-boundaries.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/word-boundaries.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/word-boundaries.md)
-->


<!--
'description' sources:
  - [](../../src/features/anchors-and-boundaries/word-boundaries.description.md)
-->


A <dfn>Word Boundary</dfn> is an *Atom* that matches the start or the end of a word.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/word-boundaries.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/anchors-and-boundaries/word-boundaries.syntax.md)
-->


- `\b` &mdash; Matches the start or the end of a word.
- `\B` &mdash; Matches when *not* at the start or the end of a word.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/word-boundaries.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/anchors-and-boundaries/word-boundaries.yml)
-->


- [Anchors]
- [Buffer Boundaries]
- [Text Segment Boundaries]
- [Continuation Escape]

## Feature: Text Segment Boundaries

<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/text-segment-boundaries.yml)
-->

<sup>[Main article][article:Text Segment Boundaries] \| [Reference][reference:Text Segment Boundaries] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/text-segment-boundaries.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/text-segment-boundaries.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/text-segment-boundaries.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/text-segment-boundaries.md)
-->


<!--
'description' sources:
  - [](../../src/features/anchors-and-boundaries/text-segment-boundaries.description.md)
-->


A <dfn>Text Segment Boundary</dfn> is an *Atom* that matches the start or the end of a text segment.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/text-segment-boundaries.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/anchors-and-boundaries/text-segment-boundaries.syntax.md)
-->


- `\y` &mdash; Matches the start or the end of a text segment.
- `\Y` &mdash; Matches when *not* at the start or the end of a text segment.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/text-segment-boundaries.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/anchors-and-boundaries/text-segment-boundaries.yml)
-->


- [Anchors]
- [Buffer Boundaries]
- [Word Boundaries]
- [Continuation Escape]

## Feature: Continuation Escape

<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/continuation-escape.yml)
-->

<sup>[Main article][article:Continuation Escape] \| [Reference][reference:Continuation Escape] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/continuation-escape.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/continuation-escape.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/continuation-escape.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/continuation-escape.md)
-->


<!--
'description' sources:
  - [](../../src/features/anchors-and-boundaries/continuation-escape.description.md)
-->


A <dfn>Continuation Escape</dfn> is a zero-width assertion that matches either the start of the input or the start of the last match.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/continuation-escape.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/anchors-and-boundaries/continuation-escape.syntax.md)
-->


- `\G` &mdash; Matches either the start of the input or the start of the last match.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/continuation-escape.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/anchors-and-boundaries/continuation-escape.yml)
-->


- [Anchors]
- [Buffer Boundaries]
- [Word Boundaries]
- [Text Segment Boundaries]

## Feature: Alternatives

<!--
'name' sources:
  - [](../../src/features/alternatives/alternatives.yml)
-->

<sup>[Main article][article:Alternatives] \| [Reference][reference:Alternatives] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/alternatives.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/alternatives.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/alternatives.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/alternatives.md)
-->


<!--
'description' sources:
  - [](../../src/features/alternatives/alternatives.description.md)
-->


An <dfn>Alternative</dfn> represents two or more branches in a pattern. If first branch of a pattern fails to match, each alternative is attempted from left to right until a match is found.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/alternatives.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/alternatives/alternatives.syntax.md)
-->


- `…|…` &mdash; Matches the pattern to the left of the `|`. If that fails, matches the pattern to the right of `|`.

## Feature: Wildcard

<!--
'name' sources:
  - [](../../src/features/wildcard.yml)
-->

<sup>[Main article][article:Wildcard] \| [Reference][reference:Wildcard] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/wildcard.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/wildcard.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/wildcard.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/wildcard.md)
-->


<!--
'description' sources:
  - [](../../src/features/wildcard.description.md)
-->


A <dfn>Wildcard</dfn> matches a single, non-newline character.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/wildcard.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/oniguruma/features/wildcard.md)
-->


- `.` &mdash; Matches any character except newline characters. If the `m` [flag] is set then this matches any character.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.

## Feature: Character Classes

<!--
'name' sources:
  - [](../../src/features/character-classes/character-classes.md)
-->

<sup>[Main article][article:Character Classes] \| [Reference][reference:Character Classes] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-classes.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/character-classes.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/character-classes.md)
-->


A <dfn>Character Class</dfn> is an *Atom* that specifies a set of characters to match a single character in the set.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-classes.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/character-classes/character-classes.md)
-->


- `[…]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `^` at the start and `-` between two entries in the set. Matches a character in the set. Example: `[abc]` matches `a`, `b`, or `c`.
- <a id="negated-character-class"></a>`[^…]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `-` between two entries in the set. Matches any character not in the set. Example: `[^abc]` matches `d`, `e`, or `f`, etc., but not `a`, `b`, or `c`.
- <a id="character-class-range"></a><code>[<em>a</em>-<em>z</em>]</code> &mdash; Where *a* and *z* are single characters or character escapes. Matches any character in the range between *a* and *z* (inclusive). Example: `[a-c]` matches `a`, `b`, or `c`, but not `d`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-classes.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/character-classes.md)
-->


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

<!--
'name' sources:
  - [](../../src/features/character-classes/posix-character-classes.md)
-->

<sup>[Main article][article:Posix Character Classes] \| [Reference][reference:Posix Character Classes] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/posix-character-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/posix-character-classes.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/posix-character-classes.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/posix-character-classes.md)
-->


A <dfn>Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of characters.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/posix-character-classes.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/character-classes/posix-character-classes.md)
-->


- <code>\[\[:*name*:\]\]</code> &mdash; Where *name* is in a set of predefined names. Matches any character in the set.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/posix-character-classes.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/posix-character-classes.md)
-->


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

<!--
'name' sources:
  - [](../../src/features/character-classes/negated-posix-character-classes.md)
-->

<sup>[Main article][article:Negated Posix Character Classes] \| [Reference][reference:Negated Posix Character Classes] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/negated-posix-character-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/negated-posix-character-classes.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/negated-posix-character-classes.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/negated-posix-character-classes.md)
-->


A <dfn>Negated Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of excluded characters.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/negated-posix-character-classes.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/character-classes/negated-posix-character-classes.md)
-->


- <code>\[\[:^*name*:\]\]</code> &mdash; Where *name* is in a set of predefined names. Matches any character not in the set.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/negated-posix-character-classes.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/negated-posix-character-classes.md)
-->


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

<!--
'name' sources:
  - [](../../src/features/character-classes/collating-elements.md)
-->

<sup>[Main article][article:Collating Elements] \| [Reference][reference:Collating Elements] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/collating-elements.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/collating-elements.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/oniguruma/features/collating-elements.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/features/character-classes/collating-elements.md)
-->


A <dfn>Collating Element</dfn> is one or more characters that collate as a single unit.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/collating-elements.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/collating-elements.md)
-->


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

<!--
'name' sources:
  - [](../../src/features/character-classes/equivalence-classes.md)
-->

<sup>[Main article][article:Equivalence Classes] \| [Reference][reference:Equivalence Classes] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/equivalence-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/equivalence-classes.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/oniguruma/features/equivalence-classes.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/features/character-classes/equivalence-classes.md)
-->


An <dfn>Equivalence Class</dfn> matches any character or collating element with the same primary sort key as the provided collating element.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/equivalence-classes.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/equivalence-classes.md)
-->


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

<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-escapes.md)
-->

<sup>[Main article][article:Character Class Escapes] \| [Reference][reference:Character Class Escapes] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-escapes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-escapes.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/character-class-escapes.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/character-class-escapes.md)
-->


A <dfn>Character Class Escape</dfn> is a single character escape that represents an entire character class. They can be used as an element of a [Character Class] or as an *Atom*. It is often the case that a lower-case escape character is the inclusive set, while an upper-case variant of the same character excludes that set.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-escapes.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/oniguruma/features/character-class-escapes.md)
-->


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
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-escapes.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/character-class-escapes.md)
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

## Feature: Line Endings Escape

<!--
'name' sources:
  - [](../../src/features/character-classes/line-endings-escape.md)
-->

<sup>[Main article][article:Line Endings Escape] \| [Reference][reference:Line Endings Escape] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/line-endings-escape.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/line-endings-escape.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/line-endings-escape.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/line-endings-escape.md)
-->


A <dfn>Line Endings Escape</dfn> is an *Atom* that matches any line ending character sequence.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/line-endings-escape.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/character-classes/line-endings-escape.md)
-->


- `\R` &mdash; Equivalent to `(?>\r\n?|[\x0A-\x0C\x85\u{2028}\u{2029}])`

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/line-endings-escape.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/line-endings-escape.md)
-->


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

<!--
'name' sources:
  - [](../../src/features/character-classes/character-property-escapes.md)
-->

<sup>[Main article][article:Character Property Escapes] \| [Reference][reference:Character Property Escapes] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-property-escapes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-property-escapes.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/character-property-escapes.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/character-property-escapes.md)
-->


A <dfn>Character Property Escape</dfn> is an escape sequence used to match a character with a specific character property.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-property-escapes.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/oniguruma/features/character-property-escapes.md)
-->


- <code>\\p{*name*}</code> &mdash; Where *name* is a predefined property name. Matches a character that has the property *name*.
- <code>\\p{^*name*}</code> &mdash; Where *name* is a predefined property name. Matches a character that does not have the property *name*.
- <code>\\P{*name*}</code> &mdash; Where *name* is a predefined property name. Matches a character that does not have the property *name*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-property-escapes.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/character-property-escapes.md)
-->


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

<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-nested-set.md)
-->

<sup>[Main article][article:Character Class Nested Set] \| [Reference][reference:Character Class Nested Set] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-nested-set.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-nested-set.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/character-class-nested-set.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/character-class-nested-set.md)
-->


A <dfn>Character Class Nested Set</dfn> allows you to to define a nested [character class] inside of a [character class].

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-nested-set.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/character-classes/character-class-nested-set.md)
-->


- `[[…]]` &mdash; Matches any character in the set, just like a normal [character class].
- `[[^…]]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `-` between two entries in the set. Matches any character not in the set, just like a normal [negated character class].
- <code>[[*a*-*z*]]</code> &mdash; Where *a* and *z* are single characters or character escapes. Matches any character in the range between *a* and *z* (inclusive), just like a normal [character class range].

### Example
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-nested-set.md)</sup>

<!--
'example' sources:
  - [](../../src/features/character-classes/character-class-nested-set.md)
-->


```
[a-z&&[^d-q]]
```

Is equivalent to:

```re
[a-cr-z]
```

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-nested-set.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/character-class-nested-set.md)
-->


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

<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-intersection.md)
-->

<sup>[Main article][article:Character Class Intersection] \| [Reference][reference:Character Class Intersection] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-intersection.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-intersection.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/character-class-intersection.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/character-class-intersection.md)
-->


<dfn>Character Class Intersection</dfn> allows you to indicate that only characters that are in both [character classes] should match.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-intersection.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/character-classes/character-class-intersection.md)
-->


- `[…&&…]` &mdash; Matches any character that is in both the left- and right-hand sets of `&&`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-intersection.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/character-class-intersection.md)
-->


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

<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-subtraction.md)
-->

<sup>[Main article][article:Character Class Subtraction] \| [Reference][reference:Character Class Subtraction] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-subtraction.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-subtraction.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/character-class-subtraction.md)
-->


<!--
'description' sources:
  - [](../../src/engines/oniguruma/features/character-class-subtraction.md)
-->


<dfn>Character Class Subtraction</dfn> allows you to exclude a class of characters from another class of characters in a [character class].

> NOTE: Oniguruma does not support character class subtraction directly, instead you must use a combination of [character class intersections] and [character class nested sets]

### Example
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/character-class-subtraction.md)</sup>

<!--
'example' sources:
  - [](../../src/engines/oniguruma/features/character-class-subtraction.md)
-->


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
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-subtraction.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/character-classes/character-class-subtraction.md)
-->


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

<!--
'name' sources:
  - [](../../src/features/quoted-characters.yml)
-->

<sup>[Main article][article:Quoted Characters] \| [Reference][reference:Quoted Characters] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quoted-characters.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/quoted-characters.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/quoted-characters.description.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/oniguruma/features/quoted-characters.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/features/quoted-characters.description.md)
-->


<dfn>Quoted Characters</dfn> are a sequence of characters treated as literal characters rather than RegExp characters.

## Feature: Quantifiers

<!--
'name' sources:
  - [](../../src/features/quantifiers/quantifiers.yml)
-->

<sup>[Main article][article:Quantifiers] \| [Reference][reference:Quantifiers] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/quantifiers.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/quantifiers.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/quantifiers.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/quantifiers.md)
-->


<!--
'description' sources:
  - [](../../src/features/quantifiers/quantifiers.description.md)
-->


<dfn>Quantifiers</dfn> specify repetition of an *Atom*. By default, quantifiers are "greedy" in that they attempt to match as many instances of the preceding *Atom* as possible to satisfy the pattern before backtracking.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/quantifiers.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/quantifiers/quantifiers.syntax.md)
-->


- `*` &mdash; Matches the preceding *Atom* zero or more times. Example: `a*b` matches `b`, `ab`, `aab`, `aaab`, etc.
- `+` &mdash; Matches the preceding *Atom* one or more times. Example: `a+b` matches `ab`, `aab`, `aaab`, etc., but not `b`.
- `?` &mdash; Matches the preceding *Atom* zero or one times. Example: `a?b` matches `b`, `ab`.
- <code>{*n*}</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times. Example: `a{2}` matches `aa` but not `a` or `aaa`.
- <code>{*n*,}</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times. Example: `a{2,}` matches `aa`, `aaa`, `aaaa`, etc., but not `a`.
- <code>{*n*,*m*}</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times. Example: `a{2,3}` matches `aa`, `aaa`, `aaaa`, etc., but not `a` or `aaaa`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/quantifiers.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/quantifiers/quantifiers.yml)
-->


- [Lazy Quantifiers]
- [Possessive Quantifiers]

## Feature: Lazy Quantifiers

<!--
'name' sources:
  - [](../../src/features/quantifiers/lazy-quantifiers.yml)
-->

<sup>[Main article][article:Lazy Quantifiers] \| [Reference][reference:Lazy Quantifiers] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/lazy-quantifiers.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/lazy-quantifiers.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/lazy-quantifiers.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/lazy-quantifiers.md)
-->


<!--
'description' sources:
  - [](../../src/features/quantifiers/lazy-quantifiers.description.md)
-->


<dfn>Lazy Quantifiers</dfn> specify repetition of an *Atom*, but attempt to match as few instances of the preceding *Atom* as possible to satisfy the pattern before advancing.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/lazy-quantifiers.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/quantifiers/lazy-quantifiers.syntax.md)
-->


- `*?` &mdash; Matches the preceding *Atom* zero or more times.
- `+?` &mdash; Matches the preceding *Atom* one or more times.
- `??` &mdash; Matches the preceding *Atom* zero or one times.
- <code>{*n*}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times.
- <code>{*n*,}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times.
- <code>{*n*,*m*}?</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/lazy-quantifiers.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/quantifiers/lazy-quantifiers.yml)
-->


- [Quantifiers]
- [Possessive Quantifiers]

## Feature: Possessive Quantifiers

<!--
'name' sources:
  - [](../../src/features/quantifiers/possessive-quantifiers.yml)
-->

<sup>[Main article][article:Possessive Quantifiers] \| [Reference][reference:Possessive Quantifiers] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/possessive-quantifiers.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/possessive-quantifiers.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/possessive-quantifiers.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/possessive-quantifiers.md)
-->


<!--
'description' sources:
  - [](../../src/features/quantifiers/possessive-quantifiers.description.md)
-->


<dfn>Possessive Quantifiers</dfn> are like greedy (i.e., regular) [quantifiers], except that backtracking is not performed.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/possessive-quantifiers.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/quantifiers/possessive-quantifiers.syntax.md)
-->


- `*+` &mdash; Match zero or more characters without backtracking.
- `++` &mdash; Match one or more characters without backtracking.
- `?+` &mdash; Match zero or one characters without backtracking.
- `{n,}+` &mdash; Match _n_ or more characters without backtracking.
- `{n,m}+` &mdash; Match between _n_ and _m_ characters without backtracking.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/possessive-quantifiers.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/quantifiers/possessive-quantifiers.yml)
-->


- [Quantifiers]
- [Lazy Quantifiers]

## Feature: Capturing Groups

<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/capturing-groups.md)
-->

<sup>[Main article][article:Capturing Groups] \| [Reference][reference:Capturing Groups] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/capturing-groups.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/capturing-groups.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/capturing-groups.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/capturing-groups.md)
-->


A <dfn>Capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by index. A Capturing Group can be captured and returned by the matching algorithm.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/capturing-groups.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/groups-and-backtracking/capturing-groups.md)
-->


- `(…)` &mdash; Groups the subexpression as a single *Atom*. The result is captured and returned by the matching algorithm.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/capturing-groups.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/groups-and-backtracking/capturing-groups.md)
-->


- [Named Capturing Groups]
- [Non-Capturing Groups]
- [Backreferences]
- [Recursion]
- [Subroutines]

## Feature: Named Capturing Groups

<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/named-capturing-groups.yml)
-->

<sup>[Main article][article:Named Capturing Groups] \| [Reference][reference:Named Capturing Groups] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/named-capturing-groups.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/named-capturing-groups.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/named-capturing-groups.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/named-capturing-groups.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/named-capturing-groups.description.md)
-->


A <dfn>Named Capturing Group</dfn> is a subexpression that can be captured and returned by the matching algorithm. A Named Capturing Group is also an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by name.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/named-capturing-groups.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/groups-and-backtracking/named-capturing-groups.syntax.md)
-->


- <code>(?\<*name*\>…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
- <code>(?'*name*'…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/named-capturing-groups.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/groups-and-backtracking/named-capturing-groups.yml)
-->


- [Capturing Groups]
- [Non-Capturing Groups]
- [Backreferences]
- [Recursion]
- [Subroutines]

## Feature: Non-Capturing Groups

<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/non-capturing-groups.yml)
-->

<sup>[Main article][article:Non-Capturing Groups] \| [Reference][reference:Non-Capturing Groups] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-capturing-groups.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/non-capturing-groups.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-capturing-groups.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/non-capturing-groups.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/non-capturing-groups.description.md)
-->


A <dfn>Non-capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] but cannot be referenced using [Backreferences]. A Non-capturing Group is not captured by the matching algorithm.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-capturing-groups.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/groups-and-backtracking/non-capturing-groups.syntax.md)
-->


- `(?:…)` &mdash; Groups the subexpression as a single *Atom*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-capturing-groups.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/groups-and-backtracking/non-capturing-groups.yml)
-->


- [Capturing Groups]
- [Named Capturing Groups]

## Feature: Backreferences

<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/backreferences.md)
-->

<sup>[Main article][article:Backreferences] \| [Reference][reference:Backreferences] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/backreferences.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/backreferences.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/backreferences.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/backreferences.md)
-->


<dfn>Backreferences</dfn> allow a pattern to re-match a previously matched capture group<sup>[1][Capturing Groups] [2][Named Capturing Groups]</sup> either by number (_n_) or by _name_.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/backreferences.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/oniguruma/features/backreferences.md)
-->


- <code>\\*n*</code> &mdash; Where *n* is a decimal digit in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\\k\<*n*\></code> &mdash; Where *n* is an integer > 0. Matches the same string as the [capture group] *n*.
- <code>\\k'*n*'</code> &mdash; Where *n* is an integer > 0. Matches the same string as the [capture group] *n*.
- <code>\\k\<*-n*\></code> &mdash; Where *n* is an integer > 0. Matches the *n*th previous [capture group].
- <code>\\k'*-n*'</code> &mdash; Where *n* is an integer > 0. Matches the *n*th previous [capture group].
- <code>\\k\<*+n*\></code> &mdash; Where *n* is an integer > 0. Matches the *n*th next [capture group].
- <code>\\k'*+n*'</code> &mdash; Where *n* is an integer > 0. Matches the *n*th next [capture group].
- <code>\\k\<*name*\></code> &mdash; Matches the same string as the [named capture group] with the name *name*.
- <code>\\k'*name*'</code> &mdash; Matches the same string as the [named capture group] with the name *name*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/backreferences.md)</sup>

<!--
'see_also' sources:
  - [](../../src/features/groups-and-backtracking/backreferences.md)
-->


- [Capturing Groups]
- [Named Capturing Groups]

## Feature: Comments

<!--
'name' sources:
  - [](../../src/features/comments/comments.yml)
-->

<sup>[Main article][article:Comments] \| [Reference][reference:Comments] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/comments.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/comments.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/comments.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/comments.md)
-->


<!--
'description' sources:
  - [](../../src/features/comments/comments.description.md)
-->


A <dfn>Comment</dfn> is a sequence of characters that is ignored by pattern matching and can be used to document a pattern.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/comments.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/comments/comments.syntax.md)
-->


- `(?#…)` &mdash; The entire expression is removed from the pattern. A comment may not contain other `(` or `)` characters.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/comments.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/comments/comments.yml)
-->


- [Line Comments]

## Feature: Line Comments

<!--
'name' sources:
  - [](../../src/features/comments/line-comments.yml)
-->

<sup>[Main article][article:Line Comments] \| [Reference][reference:Line Comments] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/line-comments.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/line-comments.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/line-comments.description.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/oniguruma/features/line-comments.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/features/comments/line-comments.description.md)
-->


A <dfn>Line Comment</dfn> is a sequence of characters starting with `#` and ending with `\n` (or the end of the pattern) that is ignored by pattern matching and can be used to document a pattern.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/line-comments.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/comments/line-comments.yml)
-->


- [Comments]

## Feature: Modifiers

<!--
'name' sources:
  - [](../../src/features/flags-and-modifiers/modifiers.yml)
-->

<sup>[Main article][article:Modifiers] \| [Reference][reference:Modifiers] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/modifiers.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/modifiers.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/modifiers.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/modifiers.md)
-->


<!--
'description' sources:
  - [](../../src/features/flags-and-modifiers/modifiers.description.md)
-->


<dfn>Modifiers</dfn> allow you to change the currently active [RegExp flags] within a subexpression.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/modifiers.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/oniguruma/features/modifiers.md)
-->


- `(?imxWDSPy-imxWDSPy)` - Sets or unsets (using `-`) the specified [RegExp flags] starting at the current position until the next closing `)` or the end of the pattern. Example: `(?-i)A(?i)B(?-i)C` matches `ABC`, `AbC`.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.
- `(?imxWDSPy-imxWDSPy:…)` - Sets or unsets (using `-`) the specified [RegExp flags] for the subexpression. Example: `(?-i:A(?i:B)C)` matches `ABC`, `AbC`.
  - NOTE: The `m`-flag in Oniguruma is equivalent to the `s`-flag (i.e., dot all) in Perl, ECMAScript, .NET, etc.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/modifiers.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/flags-and-modifiers/modifiers.yml)
-->


- [Flags]

## Feature: Branch Reset

<!--
'name' sources:
  - [](../../src/features/alternatives/branch-reset.yml)
-->

<sup>[Main article][article:Branch Reset] \| [Reference][reference:Branch Reset] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/branch-reset.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/branch-reset.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/branch-reset.description.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/oniguruma/features/branch-reset.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/features/alternatives/branch-reset.description.md)
-->


A <dfn>Branch Reset</dfn> resets the subexpression count at the start of each [Alternative] (`|`), which affects numbering for [Backreferences] and captured results returned from the matching algorithm.

## Feature: Lookahead

<!--
'name' sources:
  - [](../../src/features/lookaround/lookahead.yml)
-->

<sup>[Main article][article:Lookahead] \| [Reference][reference:Lookahead] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookahead.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/lookahead.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookahead.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/lookahead.md)
-->


<!--
'description' sources:
  - [](../../src/features/lookaround/lookahead.description.md)
-->


A <dfn>Lookahead</dfn> is a zero-width assertion that matches if the provided pattern would match the characters to the right of the current position.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookahead.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/lookaround/lookahead.syntax.md)
-->


- <a id="positive-lookahead"></a>`(?=…)` &mdash; Matches if the provided pattern would match but does not advance the current position.
- <a id="negative-lookahead"></a>`(?!…)` &mdash; Matches if the provided pattern would not match, but does not advance the current position.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookahead.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/lookaround/lookahead.yml)
-->


- [Lookbehind]

## Feature: Lookbehind

<!--
'name' sources:
  - [](../../src/features/lookaround/lookbehind.yml)
-->

<sup>[Main article][article:Lookbehind] \| [Reference][reference:Lookbehind] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookbehind.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/lookbehind.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookbehind.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/lookbehind.md)
-->


<!--
'description' sources:
  - [](../../src/features/lookaround/lookbehind.description.md)
-->


A <dfn>Lookbehind</dfn> is a zero-width assertion that matches if the provided pattern would match the characters to the left of the current position.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookbehind.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/lookaround/lookbehind.syntax.md)
-->


- <a id="positive-lookbehind"></a>`(?<=…)` &mdash; Matches if the provided pattern would match the preceding characters, but does not advance the current position. The pattern must have a fixed length (unbounded [quantifiers] are not permitted).
- <a id="negative-lookbehind"></a>`(?<!…)` &mdash; Matches if the provided pattern would not match the preceding characters, but does not advance the current position. The pattern must have a fixed length (unbounded [quantifiers] are not permitted).

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookbehind.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/lookaround/lookbehind.yml)
-->


- [Lookahead]

## Feature: Non-Backtracking Expressions

<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/non-backtracking-expressions.yml)
-->

<sup>[Main article][article:Non-Backtracking Expressions] \| [Reference][reference:Non-Backtracking Expressions] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-backtracking-expressions.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/non-backtracking-expression.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-backtracking-expressions.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/non-backtracking-expression.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/non-backtracking-expressions.description.md)
-->


A <dfn>Non-Backtracking Expression</dfn> is matched independent of neighboring patterns, and will not backtrack in the event of a failed match. This is often used to improve performance.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-backtracking-expressions.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/groups-and-backtracking/non-backtracking-expressions.syntax.md)
-->


- `(?>…)` &mdash; Matches the provided pattern, but no backtracking is performed if the match fails.

## Feature: Recursion

<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/recursion.yml)
-->

<sup>[Main article][article:Recursion] \| [Reference][reference:Recursion] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/recursion.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/recursion.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/recursion.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/recursion.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/recursion.description.md)
-->


A <dfn>Recursive Expression</dfn> provides a mechanism for re-evaluating a [capture group] inside of itself, to handle cases such as matching balanced parenthesis or brackets, etc.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/recursion.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/oniguruma/features/recursion.md)
-->


- <code>\\k\<*n*+*level*\></code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\\k'*n*+*level*'</code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\\k\<*n*-*level*\></code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\\k'*n*-*level*'</code> &mdash; Where *n* is an integer >= 1 and *level* is an integer >= 0. Matches the same string as the [capture group] *n* at the recursion level relative to the referenced [capture group].
- <code>\\k\<*name*\></code> &mdash; Where *level* is an integer >= 0. Matches the same string as the [named capture group] with the name *name* at the recursion level relative to the referenced [named capture group].
- <code>\\k'*name*'</code> &mdash; Where *level* is an integer >= 0. Matches the same string as the [named capture group] with the name *name* at the recursion level relative to the referenced [named capture group].
- <code>\\g\<*n*\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>\\g'*n*'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- `\g<0>` &mdash; Evaluates the entire pattern at the current position.
- `\g'0'` &mdash; Evaluates the entire pattern at the current position.
- <code>\\g\<*-n*\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\\g'*-n*'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\\g\<*+n*\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\\g'*+n*'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\\g\<*name*\></code> &mdash; Evaluates the [named capture group] with the provided *name*.
- <code>\\g'*name*'</code> &mdash; Evaluates the [named capture group] with the provided *name*.

> NOTE: Left-most recursive calls are forbidden:
> - `(?<name>a|\g<name>b)` - error
> - `(?<name>a|b\g<name>c)` - ok
> Source for this example comes from Oniguruma: [source](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L464-L467)

## Feature: Conditional Expressions

<!--
'name' sources:
  - [](../../src/features/alternatives/conditional-expressions.yml)
-->

<sup>[Main article][article:Conditional Expressions] \| [Reference][reference:Conditional Expressions] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/conditional-expressions.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/conditional-expressions.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/conditional-expressions.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/conditional-expressions.md)
-->


<!--
'description' sources:
  - [](../../src/features/alternatives/conditional-expressions.description.md)
-->


A <dfn>Conditional Expression</dfn> checks a condition and evaluates its first alternative if the condition is **true**; otherwise, it evaluates its second alternative.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/conditional-expressions.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/oniguruma/features/conditional-expressions.md)
-->


- <code>(?(*condition*)*yes-pattern*|*no-pattern*)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches *no-pattern*.
- <code>(?(*condition*)*yes-pattern*)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches the empty string.

#### Conditions

The following conditions are supported:

- <code>(?(?=*test-pattern*) … )</code> &mdash; Evaluates to **true** if a [lookahead] for *test-pattern* matches; otherwise, evaluates to **false**.
- <code>(?(?!*test-pattern*) … )</code> &mdash; Evaluates to **true** if a negative [lookahead] for *test-pattern* matches; otherwise, evaluates to **false**.
- <code>(?(*n*) … )</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(-*n*) … )</code> &mdash; Evaluates to **true** if the *n*th [capture group] declared to the left of the current *Atom* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(+*n*) … )</code> &mdash; Evaluates to **true** if the *n*th [capture group] declared to the right of the current *Atom* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(*n*-*level*) … )</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?(*n*+*level*) … )</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?(\<*name*\>) … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; otherwise, evaluates to **false**.
- <code>(?('*name*') … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; otherwise, evaluates to **false**.
- <code>(?(\<*name*-*level*\>) … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?('*name*-*level*') … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?(\<*name*+*level*\>) … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.
- <code>(?('*name*+*level*') … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched at the recursion level relative to the referenced [capture group]; otherwise, evaluates to **false**.

## Feature: Subroutines

<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/subroutines.yml)
-->

<sup>[Main article][article:Subroutines] \| [Reference][reference:Subroutines] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/subroutines.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/subroutines.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/subroutines.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/subroutines.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/subroutines.description.md)
-->


A <dfn>Subroutine</dfn> is a pre-defined [capture group] or [named capture group] that can be reused in multiple places within the pattern to re-evaluate the subexpression from the group.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/subroutines.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/oniguruma/features/subroutines.md)
-->


- <code>\\g\<*n*\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>\\g'*n*'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- `\g<0>` &mdash; Evaluates the entire pattern at the current position.
- `\g'0'` &mdash; Evaluates the entire pattern at the current position.
- <code>\\g\<*-n*\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\\g'*-n*'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*.
- <code>\\g\<*+n*\></code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\\g'*+n*'</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*.
- <code>\\g\<*name*\></code> &mdash; Evaluates the [named capture group] with the provided *name*.
- <code>\\g'*name*'</code> &mdash; Evaluates the [named capture group] with the provided *name*.

### Example
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/subroutines.example.md)</sup>

<!--
'example' sources:
  - [](../../src/features/groups-and-backtracking/subroutines.example.md)
-->


```re
(?(DEFINE)
  (?<Year>\d{4}|[+-]\d{5,})
  (?<Month>0[1-9]|1[0-2])
  (?<Day>0[1-9]|2[0-9]|3[01])
)
(?<Date>(?&Year)-(?&Month)-(?&Day)|(?&Year)(?&Month)(?&Day))
```

## Feature: Callouts

<!--
'name' sources:
  - [](../../src/features/callouts.yml)
-->

<sup>[Main article][article:Callouts] \| [Reference][reference:Callouts] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/callouts.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/callouts.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/callouts.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/oniguruma/features/callouts.md)
-->


<!--
'description' sources:
  - [](../../src/features/callouts.description.md)
-->


A <dfn>Callout</dfn> is a user-defined function that can be evaluated while matching.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/oniguruma/features/callouts.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/oniguruma/features/callouts.md)
-->


- Callouts of contents:
  - <code>(?{…*contents*…})</code> &mdash; Invokes the callout with the provided *contents*.
  - <code>(?{…*contents*…}*D*)</code> &mdash; Invokes the callout with the provided *contents* and direction flag character *D*. The direction flag must be one of:
    - `X` &mdash; Invoked while progressing and retracting.
    - `<` &mdash; Invoked while retracting.
    - `>` &mdash; Invoked while progressing.
  - <code>(?{…*contents*…}[*tag*])</code> &mdash; Invokes the callout with the provided *contents* and *tag*.
  - <code>(?{…*contents*…}[*tag*]*D*)</code> &mdash; Invokes the callout with the provided *contents*, *tag*, and direction flag character *D*. The direction flag must be one of:
    - `X` &mdash; Invoked while progressing and retracting.
    - `<` &mdash; Invoked while retracting.
    - `>` &mdash; Invoked while progressing.
- Callouts of *name*:
 - <code>(\**name*)</code> &mdash; Invokes the callout with the provided *name*.
 - <code>(\**name*{*args*…})</code> &mdash; Invokes the callout with the provided *name* and *args*.
 - <code>(\**name*[*tag*])</code> &mdash; Invokes the callout with the provided *name* and *tag*.
 - <code>(\**name*[*tag*]{*args*…})</code> &mdash; Invokes the callout with the provided *name*, *tag*, and *args*.


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
[Character Class Range]: #character-class-range
[Negated Character Class]: #negated-character-class

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
[Positive Lookahead]: #positive-lookahead
[Negative Lookahead]: #negative-lookahead

[Lookbehind]: #feature-lookbehind
[Positive Lookbehind]: #positive-lookbehind
[Negative Lookbehind]: #negative-lookbehind

[Non-Backtracking Expressions]: #feature-non-backtracking-expressions
[Non-Backtracking Expression]: #feature-non-backtracking-expressions

[Recursion]: #feature-recursion
[Recursive Expression]: #feature-recursion

[Conditional Expressions]: #feature-conditional-expressions
[Conditional Expression]: #feature-conditional-expressions
[Conditions]: #conditions
[Condition]: #conditions
[DEFINE Condition]: #define-condition

[Subroutines]: #feature-subroutines
[Subroutine]: #feature-subroutines

[Callouts]: #feature-callouts
[Callout]: #feature-callouts

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

[C]: ../languages/c.md
[C++]: ../languages/cpp.md