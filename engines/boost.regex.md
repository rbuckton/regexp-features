# Engine: Boost.Regex

<sup>[Reference] \| </sup>
<sup>[Improve this article](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/engine.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/engine.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/boost.regex/engine.md)
-->


## Languages
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/engine.md)</sup>

<!--
'languages' sources:
  - [](../../src/engines/boost.regex/engine.md)
-->

- [C++]

## Features

<a id="supported-features"></a>The following features are supported:

- ✔ [Flags]
- ✔ [Anchors]
- ✔ [Buffer Boundaries]
- ✔ [Word Boundaries]
- ✔ [Continuation Escape]
- ✔ [Alternatives]
- ✔ [Wildcard]
- ✔ [Character Classes]
- ✔ [Posix Character Classes]
- ✔ [Collating Elements]
- ✔ [Equivalence Classes]
- ✔ [Character Class Escapes]
- ✔ [Line Endings Escape]
- ✔ [Character Property Escapes]
- ✔ [Quoted Characters]
- ✔ [Quantifiers]
- ✔ [Lazy Quantifiers]
- ✔ [Possessive Quantifiers]
- ✔ [Capturing Groups]
- ✔ [Named Capturing Groups]
- ✔ [Non-Capturing Groups]
- ✔ [Backreferences]
- ✔ [Comments]
- ✔ [Modifiers]
- ✔ [Branch Reset]
- ✔ [Lookahead]
- ✔ [Lookbehind]
- ✔ [Non-Backtracking Expressions]
- ✔ [Recursion]
- ✔ [Conditional Expressions]
- ✔ [Subroutines]

<a id="not-supported-features"></a>The following features are *not* supported:

- ❌ [Text Segment Boundaries]
- ❌ [Negated Posix Character Classes]
- ❌ [Character Class Nested Set]
- ❌ [Character Class Intersection]
- ❌ [Character Class Subtraction]
- ❌ [Line Comments]
- ❌ [Callouts]

## Feature: Flags

<!--
'name' sources:
  - [](../../src/features/flags-and-modifiers/flags.yml)
-->

<sup>[Main article][article:Flags] \| [Reference][reference:Flags] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/flags.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/flags.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/flags.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/flags.md)
-->


<!--
'description' sources:
  - [](../../src/features/flags-and-modifiers/flags.description.md)
-->


<dfn>Flags</dfn> control certain aspects of the matching behavior of a pattern.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/flags.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/boost.regex/features/flags.md)
-->


The following flags are supported:

- `i` &mdash; Ignore Case. Matches [character classes] using a case-insensitive comparison.
- `m` &mdash; Multiline. Causes the [anchors] `^` and `$` to match the start and end of each line (respectively), rather than the start and end of the input.
- `s` &mdash; Singleline. Causes the [wildcard] `.` to match newline characters.
- `x` &mdash; Extended Mode. Ignores whitespace in a pattern. Spaces must instead be represented by `\s` or `\ ` (an escaped space).

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/anchors.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/anchors.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/anchors.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/anchors.md)
-->


<!--
'description' sources:
  - [](../../src/features/anchors-and-boundaries/anchors.description.md)
-->


<dfn>Anchors</dfn> match the start or end of a line.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/anchors.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/boost.regex/features/anchors.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/buffer-boundaries.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/buffer-boundaries.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/buffer-boundaries.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/buffer-boundaries.md)
-->


<!--
'description' sources:
  - [](../../src/features/anchors-and-boundaries/buffer-boundaries.description.md)
-->


A <dfn>Buffer Boundary</dfn> is an *Atom* that matches the start or the end of the input. This differs slightly from `^` and `$` which can be affected by [RegExp flags] like `m`.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/buffer-boundaries.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/boost.regex/features/buffer-boundaries.md)
-->


- `` \` `` &mdash; Matches the start of the input.
- `\'` &mdash; Matches the end of the input.
- `\A` &mdash; Matches the start of the input.
- `\z` &mdash; Matches the end of the input.
- `\Z` &mdash; A zero-width assertion consisting of an optional sequence of newlines at the end of the buffer. Equivalent to `(?=\n*\z)`.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/word-boundaries.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/word-boundaries.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/word-boundaries.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/word-boundaries.md)
-->


<!--
'description' sources:
  - [](../../src/features/anchors-and-boundaries/word-boundaries.description.md)
-->


A <dfn>Word Boundary</dfn> is an *Atom* that matches the start or the end of a word.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/word-boundaries.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/boost.regex/features/word-boundaries.md)
-->


- `` \` `` &mdash; Matches the start of the input.
- `\'` &mdash; Matches the end of the input.
- `\A` &mdash; Matches the start of the input.
- `\z` &mdash; Matches the end of the input.
- `\Z` &mdash; A zero-width assertion consisting of an optional sequence of newlines at the end of the buffer. Equivalent to `(?=\n*\z)`.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/text-segment-boundaries.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/text-segment-boundaries.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/text-segment-boundaries.description.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/boost.regex/features/text-segment-boundaries.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/features/anchors-and-boundaries/text-segment-boundaries.description.md)
-->


A <dfn>Text Segment Boundary</dfn> is an *Atom* that matches the start or the end of a text segment.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/continuation-escape.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/continuation-escape.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/anchors-and-boundaries/continuation-escape.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/continuation-escape.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/alternatives.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/alternatives.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/alternatives.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/alternatives.md)
-->


<!--
'description' sources:
  - [](../../src/features/alternatives/alternatives.description.md)
-->


An <dfn>Alternative</dfn> represents two or more branches in a pattern. If first branch of a pattern fails to match, each alternative is attempted from left to right until a match is found.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/alternatives.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/boost.regex/features/alternatives.md)
-->


- `|` &mdash; Matches the pattern to the left of the `|`. If that fails, matches the pattern to the right of `|`.

> NOTE: In `Boost.Regex`, empty alternatives are not allowed, so `|abc` is invalid. You can specify an explicit empty alternative by using `(?:)`, for example: `(?:)|abc`.

## Feature: Wildcard

<!--
'name' sources:
  - [](../../src/features/wildcard.yml)
-->

<sup>[Main article][article:Wildcard] \| [Reference][reference:Wildcard] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/wildcard.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/wildcard.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/wildcard.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/wildcard.md)
-->


<!--
'description' sources:
  - [](../../src/features/wildcard.description.md)
-->


A <dfn>Wildcard</dfn> matches a single, non-newline character.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/wildcard.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/wildcard.syntax.md)
-->


- `.` &mdash; Matches any character except newline characters. If the `s` (single-line) [flag] is set then this matches any character.

## Feature: Character Classes

<!--
'name' sources:
  - [](../../src/features/character-classes/character-classes.md)
-->

<sup>[Main article][article:Character Classes] \| [Reference][reference:Character Classes] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/character-classes.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/character-classes.md)
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
- <a id="character-class-range"></a><code>[*a*-*z*]</code> &mdash; Where *a* and *z* are single characters or character escapes. Matches any character in the range between *a* and *z* (inclusive). Example: `[a-c]` matches `a`, `b`, or `c`, but not `d`.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/posix-character-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/posix-character-classes.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/posix-character-classes.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/negated-posix-character-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/negated-posix-character-classes.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/boost.regex/features/negated-posix-character-classes.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/engines/boost.regex/features/negated-posix-character-classes.md)
-->


A <dfn>Negated Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of excluded characters.

> NOTE: Some engines support negated posix character classes using <code>\[\[:^*name*:\]\]</code>, however this does not seem to be supported per the documentation. Instead, you must use a [Negated Character Class] with a [Posix Character Class]: <code>\[^\[:*name*:\]\]</code>.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/collating-elements.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/collating-elements.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/collating-elements.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/collating-elements.md)
-->


A <dfn>Collating Element</dfn> is one or more characters that collate as a single unit.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/collating-elements.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/character-classes/collating-elements.md)
-->


- <code>\[\[.*col*.\]\]</code> &mdash; Matches the collating element *col* if *col* is treated as a single collating unit in the current locale. Example: `[[.ae.]-c]` matches a single character in the range "ae"-"c". *col* may also be specified by a symbolic name.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/equivalence-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/equivalence-classes.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/equivalence-classes.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/equivalence-classes.md)
-->


An <dfn>Equivalence Class</dfn> matches any character or collating element with the same primary sort key as the provided collating element.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/equivalence-classes.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/character-classes/equivalence-classes.md)
-->


- <code>\[\[=*col*=\]\]</code> &mdash; Matches any character with the same primary sort key as *col*. Example: `[[=a=]]` matches `a`, `À`, `Á`, `Â`, `Ã`, `Ä`, `Å`, `A`, `à`, `á`, `â`, etc.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-escapes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/character-class-escapes.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/character-class-escapes.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/character-class-escapes.md)
-->


A <dfn>Character Class Escape</dfn> is a single character escape that represents an entire character class. They can be used as an element of a [Character Class] or as an *Atom*. It is often the case that a lower-case escape character is the inclusive set, while an upper-case variant of the same character excludes that set.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/character-class-escapes.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/boost.regex/features/character-class-escapes.md)
-->


- `\d` &mdash; A decimal digit character in the range 0-9. Equivalent to `[0-9]`.
- `\D` &mdash; Any character not in the range 0-9. Equivalent to `[^0-9]`.
- `\w` &mdash; Any "word" character. Equivalent to `[a-zA-Z0-9_]`.
- `\W` &mdash; Any non-"word" character. Equivalent to `[^a-zA-Z0-9_]`.
- `\s` &mdash; Any whitespace character.
- `\S` &mdash; Any non-whitespace character.
- `\l` &mdash; Any lower-case character.
- `\L` &mdash; Any non-lower-case character.
- `\u` &mdash; Any upper-case character.
- `\U` &mdash; Any non-upper-case character.
- `\h` &mdash; Any horizontal whitespace character.
- `\H` &mdash; Any non-horizontal whitespace character.
- `\v` &mdash; Any vertical whitespace character.
- `\V` &mdash; Any non-vertical whitespace character.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/line-endings-escape.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/line-endings-escape.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/line-endings-escape.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-property-escapes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/character-property-escapes.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/character-property-escapes.md)
-->


<!--
'description' sources:
  - [](../../src/features/character-classes/character-property-escapes.md)
-->


A <dfn>Character Property Escape</dfn> is an escape sequence used to match a character with a specific character property.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-property-escapes.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/character-classes/character-property-escapes.md)
-->


- <code>\\p*X*</code> &mdash; Where *X* is a single character. Matches a character that has the property *X*.
- <code>\\p{*name*}</code> &mdash; Where *name* is a predefined property name. Matches a character that has the property *name*.
- <code>\\P*X*</code> &mdash; Where *X* is a single character. Matches a character that does not have the property *X*.
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-nested-set.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/character-class-nested-set.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/boost.regex/features/character-class-nested-set.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/features/character-classes/character-class-nested-set.md)
-->


A <dfn>Character Class Nested Set</dfn> allows you to to define a nested [character class] inside of a [character class].

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-intersection.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/character-class-intersection.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/boost.regex/features/character-class-intersection.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/features/character-classes/character-class-intersection.md)
-->


<dfn>Character Class Intersection</dfn> allows you to indicate that only characters that are in both [character classes] should match.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/character-classes/character-class-subtraction.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/character-class-subtraction.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/boost.regex/features/character-class-subtraction.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/features/character-classes/character-class-subtraction.md)
-->


<dfn>Character Class Subtraction</dfn> allows you to exclude a class of characters from another class of characters in a [character class].

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quoted-characters.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/quoted-characters.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/quoted-characters.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/quoted-characters.md)
-->


<!--
'description' sources:
  - [](../../src/features/quoted-characters.description.md)
-->


<dfn>Quoted Characters</dfn> are a sequence of characters treated as literal characters rather than RegExp characters.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/quoted-characters.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/quoted-characters.syntax.md)
-->


- `\Q … \E` &mdash; All characters following `\Q` and preceding the next `\E` are treated as literal characters. Example: `\Q.+\E` matches `.+` but not `aa`.
- `\Q … ` &mdash; If there is no trailing `\E`,  all characters until the end of the pattern are treated as literal characters.

## Feature: Quantifiers

<!--
'name' sources:
  - [](../../src/features/quantifiers/quantifiers.yml)
-->

<sup>[Main article][article:Quantifiers] \| [Reference][reference:Quantifiers] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/quantifiers.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/quantifiers.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/quantifiers.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/quantifiers.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/lazy-quantifiers.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/lazy-quantifiers.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/lazy-quantifiers.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/lazy-quantifiers.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/possessive-quantifiers.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/possessive-quantifiers.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/quantifiers/possessive-quantifiers.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/possessive-quantifiers.md)
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
  - [](../../src/features/groups-and-backtracking/capturing-groups.yml)
-->

<sup>[Main article][article:Capturing Groups] \| [Reference][reference:Capturing Groups] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/capturing-groups.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/capturing-groups.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/capturing-groups.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/capturing-groups.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/capturing-groups.description.md)
-->


A <dfn>Capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by index. A Capturing Group can be captured and returned by the matching algorithm.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/capturing-groups.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/groups-and-backtracking/capturing-groups.syntax.md)
-->


- `(…)` &mdash; Groups the subexpression as a single *Atom*. The result is captured and returned by the matching algorithm.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/capturing-groups.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/groups-and-backtracking/capturing-groups.yml)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/named-capturing-groups.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/named-capturing-groups.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/named-capturing-groups.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/named-capturing-groups.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-capturing-groups.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/non-capturing-groups.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-capturing-groups.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/non-capturing-groups.md)
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
  - [](../../src/features/groups-and-backtracking/backreferences.yml)
-->

<sup>[Main article][article:Backreferences] \| [Reference][reference:Backreferences] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/backreferences.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/backreferences.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/backreferences.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/backreferences.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/backreferences.md)
-->


<dfn>Backreferences</dfn> allow a pattern to re-match a previously matched capture group<sup>[1][Capturing Groups] [2][Named Capturing Groups]</sup> either by number (_n_) or by _name_.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/backreferences.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/boost.regex/features/backreferences.md)
-->


- <code>\\*n*</code> &mdash; Where *n* is in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\\g*n*</code> &mdash; Where *n* is in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\\g-*n*</code> &mdash; Where *n* is in the range 1-9. Matches the *n*th previous [capture group].
- <code>\\g{*n*}</code> &mdash; Where *n* is an integer >= 0. Matches the same string as the [capture group] *n*.
- <code>\\g{-*n*}</code> &mdash; Where *n* is an integer >= 0. Matches the *n*th previous [capture group].
- <code>\\g{*name*}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\\k\<*name*\></code> &mdash; Matches the [named capture group] with the name *name*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/backreferences.yml)</sup>

<!--
'see_also' sources:
  - [](../../src/features/groups-and-backtracking/backreferences.yml)
-->


- [Capturing Groups]
- [Named Capturing Groups]

## Feature: Comments

<!--
'name' sources:
  - [](../../src/features/comments/comments.yml)
-->

<sup>[Main article][article:Comments] \| [Reference][reference:Comments] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/comments.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/comments.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/comments.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/comments.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/line-comments.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/line-comments.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/comments/line-comments.description.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/boost.regex/features/line-comments.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/modifiers.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/modifiers.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/modifiers.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/modifiers.md)
-->


<!--
'description' sources:
  - [](../../src/features/flags-and-modifiers/modifiers.description.md)
-->


<dfn>Modifiers</dfn> allow you to change the currently active [RegExp flags] within a subexpression.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/flags-and-modifiers/modifiers.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/flags-and-modifiers/modifiers.syntax.md)
-->


- `(?imsx-imsx)` - Sets or unsets (using `-`) the specified [RegExp flags] starting at the current position until the next closing `)` or the end of the pattern. Example: `(?-i)A(?i)B(?-i)C` matches `ABC`, `AbC`.
- `(?imsx-imsx:…)` - Sets or unsets (using `-`) the specified [RegExp flags] for the subexpression. Example: `(?-i:A(?i:B)C)` matches `ABC`, `AbC`.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/branch-reset.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/branch-reset.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/branch-reset.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/branch-reset.md)
-->


<!--
'description' sources:
  - [](../../src/features/alternatives/branch-reset.description.md)
-->


A <dfn>Branch Reset</dfn> resets the subexpression count at the start of each [Alternative] (`|`), which affects numbering for [Backreferences] and captured results returned from the matching algorithm.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/branch-reset.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/alternatives/branch-reset.syntax.md)
-->


- `(?|…)` &mdash; Resets the subexpression count at the start of each [Alternative].

## Feature: Lookahead

<!--
'name' sources:
  - [](../../src/features/lookaround/lookahead.yml)
-->

<sup>[Main article][article:Lookahead] \| [Reference][reference:Lookahead] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookahead.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/lookahead.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookahead.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/lookahead.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookbehind.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/lookbehind.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/lookaround/lookbehind.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/lookbehind.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-backtracking-expressions.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/non-backtracking-expression.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/non-backtracking-expressions.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/non-backtracking-expression.md)
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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/recursion.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/recursion.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/recursion.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/recursion.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/recursion.description.md)
-->


A <dfn>Recursive Expression</dfn> provides a mechanism for re-evaluating a [capture group] inside of itself, to handle cases such as matching balanced parenthesis or brackets, etc.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/recursion.md)</sup>

<!--
'syntax' sources:
  - [](../../src/engines/boost.regex/features/recursion.md)
-->


- <code>(?R)</code> &mdash; Reevaluates the entire pattern starting at the current position.
- <code>(?0)</code> &mdash; Reevaluates the entire pattern starting at the current position.
- <code>(?*n*)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is *n*.
- <code>(?-*n*)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*. Example: `(?-1)` would revaluate the last declared [capture group].
- <code>(?+*n*)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*. Example: `(?+1)` would evaluate the next declared [capture group].
- <code>(?&*name*)</code> &mdash; Re-evaluates the [named capture group] with the provided *name*.

## Feature: Conditional Expressions

<!--
'name' sources:
  - [](../../src/features/alternatives/conditional-expressions.yml)
-->

<sup>[Main article][article:Conditional Expressions] \| [Reference][reference:Conditional Expressions] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/conditional-expressions.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/conditional-expressions.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/conditional-expressions.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/conditional-expressions.md)
-->


<!--
'description' sources:
  - [](../../src/features/alternatives/conditional-expressions.description.md)
-->


A <dfn>Conditional Expression</dfn> checks a condition and evaluates its first alternative if the condition is **true**; otherwise, it evaluates its second alternative.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/alternatives/conditional-expressions.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/alternatives/conditional-expressions.syntax.md)
-->


- <code>(?(*condition*)*yes-pattern*|*no-pattern*)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches *no-pattern*.
- <code>(?(*condition*)*yes-pattern*)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches the empty string.

#### Conditions

The following conditions are supported:

- <code>(?(?=*test-pattern*) … )</code> &mdash; Evaluates to **true** if a [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(?!*test-pattern*) … )</code> &mdash; Evaluates to **true** if a negative [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(*n*) … )</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?(\<*name*\>) … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?('*name*') … )</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?(R) … )</code> &mdash; Evaluates to **true** if inside a [recursive expression]; Otherwise, evaluates to **false**.
- <code>(?(R*n*) … )</code> &mdash; Evaluates to **true** if inside a [recursive expression] for the [capture group] at offset *n*; Otherwise, evaluates to **false**.
- <code>(?(R&*name*) … )</code> &mdash; Evaluates to **true** if inside a [recursive expression] for the [named capture group] with the name *name*; Otherwise, evaluates to **false**.
- <a name="define-condition"></a><code>(?(DEFINE) … )</code> &mdash; Always evaluates to **false**. This allows you to define [Subroutines].

## Feature: Subroutines

<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/subroutines.yml)
-->

<sup>[Main article][article:Subroutines] \| [Reference][reference:Subroutines] \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/subroutines.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/subroutines.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/subroutines.description.md)</sup>


<!--
'name' sources:
  - [](../../src/engines/boost.regex/features/subroutines.md)
-->


<!--
'description' sources:
  - [](../../src/features/groups-and-backtracking/subroutines.description.md)
-->


A <dfn>Subroutine</dfn> is a pre-defined [capture group] or [named capture group] that can be reused in multiple places within the pattern to re-evaluate the subexpression from the group.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/features/groups-and-backtracking/subroutines.syntax.md)</sup>

<!--
'syntax' sources:
  - [](../../src/features/groups-and-backtracking/subroutines.syntax.md)
-->


- `(?(DEFINE) … )` &mdash; Defines a set of reusable [capture groups] that can be referenced elsewhere in the pattern.
- <code>(?*n*)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>(?-*n*)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*. Example: `(?-1)` would revaluate the last declared [capture group].
- <code>(?+*n*)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*. Example: `(?+1)` would evaluate the next declared [capture group].
- <code>(?&*name*)</code> &mdash; Evaluates the [named capture group] with the provided *name*.

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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/features/callouts.yml), [2](https://github.com/rbuckton/regexp-features/edit/main/src/engines/boost.regex/features/callouts.md), [3](https://github.com/rbuckton/regexp-features/edit/main/src/features/callouts.description.md)</sup>



<!--
'supported' sources:
  - [](../../src/engines/boost.regex/features/callouts.md)
-->

> ❌ This feature is not supported.


<!--
'description' sources:
  - [](../../src/features/callouts.description.md)
-->


A <dfn>Callout</dfn> is a user-defined function that can be evaluated while matching.


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

[Reference]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/index.html
[reference:Flags]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.modifiers
[reference:Anchors]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.anchors
[reference:Buffer Boundaries]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.buffer_boundaries
[reference:Word Boundaries]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.word_boundaries
[reference:Text Segment Boundaries]: #not-supported-features
[reference:Continuation Escape]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.continuation_escape
[reference:Alternatives]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.alternation
[reference:Wildcard]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.wildcard
[reference:Character Classes]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.character_sets
[reference:Posix Character Classes]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.character_classes
[reference:Negated Posix Character Classes]: #not-supported-features
[reference:Collating Elements]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.collating_elements
[reference:Equivalence Classes]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.equivalence_classes
[reference:Character Class Escapes]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.single_character_character_class
[reference:Line Endings Escape]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.matching_line_endings
[reference:Character Property Escapes]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.character_properties
[reference:Character Class Nested Set]: #not-supported-features
[reference:Character Class Intersection]: #not-supported-features
[reference:Character Class Subtraction]: #not-supported-features
[reference:Quoted Characters]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.quoting_escape
[reference:Quantifiers]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.repeats
[reference:Lazy Quantifiers]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.non_greedy_repeats
[reference:Possessive Quantifiers]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.possessive_repeats
[reference:Capturing Groups]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.marked_sub_expressions
[reference:Named Capturing Groups]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.named_subexpressions
[reference:Non-Capturing Groups]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.non_marking_grouping
[reference:Backreferences]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.back_references
[reference:Comments]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.comments
[reference:Line Comments]: #not-supported-features
[reference:Modifiers]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.modifiers
[reference:Branch Reset]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.branch_reset
[reference:Lookahead]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.lookahead
[reference:Lookbehind]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.lookbehind
[reference:Non-Backtracking Expressions]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.independent_sub_expressions
[reference:Recursion]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.recursive_expressions
[reference:Conditional Expressions]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.conditional_expressions
[reference:Subroutines]: https://www.boost.org/doc/libs/1_76_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html#boost_regex.syntax.perl_syntax.recursive_expressions
[reference:Callouts]: #not-supported-features

[C++]: ../languages/cpp.md