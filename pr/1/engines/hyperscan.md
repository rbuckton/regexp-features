# Engine: Hyperscan
<sup>[Home](../index.md)</sup>
<sup> \| [Engines](./index)</sup>
<sup> \| [Reference]</sup>
<sup> \| [Improve this article](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/engine.md)</sup>
<!--
'name' sources:
  - [](../src/engines/hyperscan/engine.md)
-->

<!--
'reference' sources:
  - [](../src/engines/hyperscan/engine.md)
-->


## Languages
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/engine.md)</sup>
<!--
'languages' sources:
  - [](../src/engines/hyperscan/engine.md)
-->

- [C++]

## Features

<a id="supported-features"></a>The following features are supported:

- *\<none\>*

<a id="not-supported-features"></a>The following features are *not* supported:

- ❌ [Flags]
- ❌ [Anchors]
- ❌ [Buffer Boundaries]
- ❌ [Word Boundaries]
- ❌ [Text Segment Boundaries]
- ❌ [Continuation Escape]
- ❌ [Alternatives]
- ❌ [Wildcard]
- ❌ [Character Classes]
- ❌ [Posix Character Classes]
- ❌ [Negated Posix Character Classes]
- ❌ [Collating Elements]
- ❌ [Equivalence Classes]
- ❌ [Character Class Escapes]
- ❌ [Line Endings Escape]
- ❌ [Character Property Escapes]
- ❌ [Character Class Nested Set]
- ❌ [Character Class Intersection]
- ❌ [Character Class Subtraction]
- ❌ [Quoted Characters]
- ❌ [Quantifiers]
- ❌ [Lazy Quantifiers]
- ❌ [Possessive Quantifiers]
- ❌ [Capturing Groups]
- ❌ [Named Capturing Groups]
- ❌ [Non-Capturing Groups]
- ❌ [Backreferences]
- ❌ [Comments]
- ❌ [Line Comments]
- ❌ [Modifiers]
- ❌ [Branch Reset]
- ❌ [Lookahead]
- ❌ [Lookbehind]
- ❌ [Non-Backtracking Expressions]
- ❌ [Recursion]
- ❌ [Conditional Expressions]
- ❌ [Subroutines]
- ❌ [Callouts]

## Feature: Flags
<sup>[Main article][article:Flags]</sup>
<sup> \| [Reference][reference:Flags]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/flags-and-modifiers/flags.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/flags.md)</sup>
<!--
'name' sources:
  - [](../src/features/flags-and-modifiers/flags.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/flags.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/flags-and-modifiers/flags.md)
-->

<dfn>Flags</dfn> control certain aspects of the matching behavior of a pattern.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/flags-and-modifiers/flags.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/flags-and-modifiers/flags.md)
-->


- [Modifiers]

## Feature: Anchors
<sup>[Main article][article:Anchors]</sup>
<sup> \| [Reference][reference:Anchors]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/anchors-and-boundaries/anchors.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/anchors.md)</sup>
<!--
'name' sources:
  - [](../src/features/anchors-and-boundaries/anchors.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/anchors.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/anchors-and-boundaries/anchors.md)
-->

<dfn>Anchors</dfn> match the start or end of a line.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/anchors-and-boundaries/anchors.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/anchors-and-boundaries/anchors.md)
-->


- [Buffer Boundaries]
- [Word Boundaries]
- [Text Segment Boundaries]
- [Continuation Escape]

## Feature: Buffer Boundaries
<sup>[Main article][article:Buffer Boundaries]</sup>
<sup> \| [Reference][reference:Buffer Boundaries]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/anchors-and-boundaries/buffer-boundaries.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/buffer-boundaries.md)</sup>
<!--
'name' sources:
  - [](../src/features/anchors-and-boundaries/buffer-boundaries.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/buffer-boundaries.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/anchors-and-boundaries/buffer-boundaries.md)
-->

A <dfn>Buffer Boundary</dfn> is an *Atom* that matches the start or the end of the input. This differs slightly from `^` and `$` which can be affected by [RegExp flags] like `m`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/anchors-and-boundaries/buffer-boundaries.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/anchors-and-boundaries/buffer-boundaries.md)
-->


- [Anchors]
- [Word Boundaries]
- [Text Segment Boundaries]
- [Continuation Escape]

## Feature: Word Boundaries
<sup>[Main article][article:Word Boundaries]</sup>
<sup> \| [Reference][reference:Word Boundaries]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/anchors-and-boundaries/word-boundaries.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/word-boundaries.md)</sup>
<!--
'name' sources:
  - [](../src/features/anchors-and-boundaries/word-boundaries.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/word-boundaries.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/anchors-and-boundaries/word-boundaries.md)
-->

A <dfn>Word Boundary</dfn> is an *Atom* that matches the start or the end of a word.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/anchors-and-boundaries/word-boundaries.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/anchors-and-boundaries/word-boundaries.md)
-->


- [Anchors]
- [Buffer Boundaries]
- [Text Segment Boundaries]
- [Continuation Escape]

## Feature: Text Segment Boundaries
<sup>[Main article][article:Text Segment Boundaries]</sup>
<sup> \| [Reference][reference:Text Segment Boundaries]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/anchors-and-boundaries/text-segment-boundaries.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/text-segment-boundaries.md)</sup>
<!--
'name' sources:
  - [](../src/features/anchors-and-boundaries/text-segment-boundaries.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/text-segment-boundaries.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/anchors-and-boundaries/text-segment-boundaries.md)
-->

A <dfn>Text Segment Boundary</dfn> is an *Atom* that matches the start or the end of a text segment.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/anchors-and-boundaries/text-segment-boundaries.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/anchors-and-boundaries/text-segment-boundaries.md)
-->


- [Anchors]
- [Buffer Boundaries]
- [Word Boundaries]
- [Continuation Escape]

## Feature: Continuation Escape
<sup>[Main article][article:Continuation Escape]</sup>
<sup> \| [Reference][reference:Continuation Escape]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/anchors-and-boundaries/continuation-escape.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/continuation-escape.md)</sup>
<!--
'name' sources:
  - [](../src/features/anchors-and-boundaries/continuation-escape.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/continuation-escape.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/anchors-and-boundaries/continuation-escape.md)
-->

A <dfn>Continuation Escape</dfn> is a zero-width assertion that matches either the start of the input or the start of the last match.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/anchors-and-boundaries/continuation-escape.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/anchors-and-boundaries/continuation-escape.md)
-->


- [Anchors]
- [Buffer Boundaries]
- [Word Boundaries]
- [Text Segment Boundaries]

## Feature: Alternatives
<sup>[Main article][article:Alternatives]</sup>
<sup> \| [Reference][reference:Alternatives]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/alternatives/alternatives.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/alternatives.md)</sup>
<!--
'name' sources:
  - [](../src/features/alternatives/alternatives.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/alternatives.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/alternatives/alternatives.md)
-->

An <dfn>Alternative</dfn> represents two or more branches in a pattern. If first branch of a pattern fails to match, each alternative is attempted from left to right until a match is found.

## Feature: Wildcard
<sup>[Main article][article:Wildcard]</sup>
<sup> \| [Reference][reference:Wildcard]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/wildcard.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/wildcard.md)</sup>
<!--
'name' sources:
  - [](../src/features/wildcard.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/wildcard.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/wildcard.md)
-->

A <dfn>Wildcard</dfn> matches a single, non-newline character.

## Feature: Character Classes
<sup>[Main article][article:Character Classes]</sup>
<sup> \| [Reference][reference:Character Classes]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/character-classes.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/character-classes.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/character-classes.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/character-classes.md)
-->

A <dfn>Character Class</dfn> is an *Atom* that specifies a set of characters to match a single character in the set.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-classes.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/character-classes.md)
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
<sup>[Main article][article:Posix Character Classes]</sup>
<sup> \| [Reference][reference:Posix Character Classes]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/posix-character-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/posix-character-classes.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/posix-character-classes.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/posix-character-classes.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/posix-character-classes.md)
-->

A <dfn>Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of characters.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/posix-character-classes.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/posix-character-classes.md)
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
<sup>[Main article][article:Negated Posix Character Classes]</sup>
<sup> \| [Reference][reference:Negated Posix Character Classes]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/negated-posix-character-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/negated-posix-character-classes.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/negated-posix-character-classes.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/negated-posix-character-classes.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/negated-posix-character-classes.md)
-->

A <dfn>Negated Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of excluded characters.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/negated-posix-character-classes.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/negated-posix-character-classes.md)
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
<sup>[Main article][article:Collating Elements]</sup>
<sup> \| [Reference][reference:Collating Elements]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/collating-elements.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/collating-elements.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/collating-elements.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/collating-elements.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/collating-elements.md)
-->

A <dfn>Collating Element</dfn> is one or more characters that collate as a single unit.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/collating-elements.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/collating-elements.md)
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
<sup>[Main article][article:Equivalence Classes]</sup>
<sup> \| [Reference][reference:Equivalence Classes]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/equivalence-classes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/equivalence-classes.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/equivalence-classes.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/equivalence-classes.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/equivalence-classes.md)
-->

An <dfn>Equivalence Class</dfn> matches any character or collating element with the same primary sort key as the provided collating element.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/equivalence-classes.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/equivalence-classes.md)
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
<sup>[Main article][article:Character Class Escapes]</sup>
<sup> \| [Reference][reference:Character Class Escapes]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-class-escapes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/character-class-escapes.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/character-class-escapes.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/character-class-escapes.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/character-class-escapes.md)
-->

A <dfn>Character Class Escape</dfn> is a single character escape that represents an entire character class. They can be used as an element of a [Character Class] or as an *Atom*. It is often the case that a lower-case escape character is the inclusive set, while an upper-case variant of the same character excludes that set.

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

## Feature: Line Endings Escape
<sup>[Main article][article:Line Endings Escape]</sup>
<sup> \| [Reference][reference:Line Endings Escape]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/line-endings-escape.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/line-endings-escape.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/line-endings-escape.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/line-endings-escape.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/line-endings-escape.md)
-->

A <dfn>Line Endings Escape</dfn> is an *Atom* that matches any line ending character sequence.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/line-endings-escape.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/line-endings-escape.md)
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
<sup>[Main article][article:Character Property Escapes]</sup>
<sup> \| [Reference][reference:Character Property Escapes]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-property-escapes.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/character-property-escapes.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/character-property-escapes.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/character-property-escapes.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/character-property-escapes.md)
-->

A <dfn>Character Property Escape</dfn> is an escape sequence used to match a character with a specific character property.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-property-escapes.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/character-property-escapes.md)
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
<sup>[Main article][article:Character Class Nested Set]</sup>
<sup> \| [Reference][reference:Character Class Nested Set]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-class-nested-set.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/character-class-nested-set.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/character-class-nested-set.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/character-class-nested-set.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/character-class-nested-set.md)
-->

A <dfn>Character Class Nested Set</dfn> allows you to to define a nested [character class] inside of a [character class].

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-class-nested-set.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/character-class-nested-set.md)
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
<sup>[Main article][article:Character Class Intersection]</sup>
<sup> \| [Reference][reference:Character Class Intersection]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-class-intersection.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/character-class-intersection.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/character-class-intersection.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/character-class-intersection.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/character-class-intersection.md)
-->

<dfn>Character Class Intersection</dfn> allows you to indicate that only characters that are in both [character classes] should match.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-class-intersection.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/character-class-intersection.md)
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
<sup>[Main article][article:Character Class Subtraction]</sup>
<sup> \| [Reference][reference:Character Class Subtraction]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-class-subtraction.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/character-class-subtraction.md)</sup>
<!--
'name' sources:
  - [](../src/features/character-classes/character-class-subtraction.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/character-class-subtraction.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/character-classes/character-class-subtraction.md)
-->

<dfn>Character Class Subtraction</dfn> allows you to exclude a class of characters from another class of characters in a [character class].

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/character-classes/character-class-subtraction.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/character-classes/character-class-subtraction.md)
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
<sup>[Main article][article:Quoted Characters]</sup>
<sup> \| [Reference][reference:Quoted Characters]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/quoted-characters.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/quoted-characters.md)</sup>
<!--
'name' sources:
  - [](../src/features/quoted-characters.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/quoted-characters.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/quoted-characters.md)
-->

<dfn>Quoted Characters</dfn> are a sequence of characters treated as literal characters rather than RegExp characters.

## Feature: Quantifiers
<sup>[Main article][article:Quantifiers]</sup>
<sup> \| [Reference][reference:Quantifiers]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/quantifiers/quantifiers.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/quantifiers.md)</sup>
<!--
'name' sources:
  - [](../src/features/quantifiers/quantifiers.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/quantifiers.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/quantifiers/quantifiers.md)
-->

<dfn>Quantifiers</dfn> specify repetition of an *Atom*. By default, quantifiers are "greedy" in that they attempt to match as many instances of the preceding *Atom* as possible to satisfy the pattern before backtracking.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/quantifiers/quantifiers.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/quantifiers/quantifiers.md)
-->


- [Lazy Quantifiers]
- [Possessive Quantifiers]

## Feature: Lazy Quantifiers
<sup>[Main article][article:Lazy Quantifiers]</sup>
<sup> \| [Reference][reference:Lazy Quantifiers]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/quantifiers/lazy-quantifiers.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/lazy-quantifiers.md)</sup>
<!--
'name' sources:
  - [](../src/features/quantifiers/lazy-quantifiers.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/lazy-quantifiers.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/quantifiers/lazy-quantifiers.md)
-->

<dfn>Lazy Quantifiers</dfn> specify repetition of an *Atom*, but attempt to match as few instances of the preceding *Atom* as possible to satisfy the pattern before advancing.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/quantifiers/lazy-quantifiers.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/quantifiers/lazy-quantifiers.md)
-->


- [Quantifiers]
- [Possessive Quantifiers]

## Feature: Possessive Quantifiers
<sup>[Main article][article:Possessive Quantifiers]</sup>
<sup> \| [Reference][reference:Possessive Quantifiers]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/quantifiers/possessive-quantifiers.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/possessive-quantifiers.md)</sup>
<!--
'name' sources:
  - [](../src/features/quantifiers/possessive-quantifiers.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/possessive-quantifiers.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/quantifiers/possessive-quantifiers.md)
-->

<dfn>Possessive Quantifiers</dfn> are like greedy (i.e., regular) [quantifiers], except that backtracking is not performed.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/quantifiers/possessive-quantifiers.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/quantifiers/possessive-quantifiers.md)
-->


- [Quantifiers]
- [Lazy Quantifiers]

## Feature: Capturing Groups
<sup>[Main article][article:Capturing Groups]</sup>
<sup> \| [Reference][reference:Capturing Groups]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/capturing-groups.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/capturing-groups.md)</sup>
<!--
'name' sources:
  - [](../src/features/groups-and-backtracking/capturing-groups.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/capturing-groups.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/groups-and-backtracking/capturing-groups.md)
-->

A <dfn>Capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by index. A Capturing Group can be captured and returned by the matching algorithm.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/capturing-groups.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/groups-and-backtracking/capturing-groups.md)
-->


- [Named Capturing Groups]
- [Non-Capturing Groups]
- [Backreferences]
- [Recursion]
- [Subroutines]

## Feature: Named Capturing Groups
<sup>[Main article][article:Named Capturing Groups]</sup>
<sup> \| [Reference][reference:Named Capturing Groups]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/named-capturing-groups.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/named-capturing-groups.md)</sup>
<!--
'name' sources:
  - [](../src/features/groups-and-backtracking/named-capturing-groups.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/named-capturing-groups.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/groups-and-backtracking/named-capturing-groups.md)
-->

A <dfn>Named Capturing Group</dfn> is a subexpression that can be captured and returned by the matching algorithm. A Named Capturing Group is also an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by name.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/named-capturing-groups.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/groups-and-backtracking/named-capturing-groups.md)
-->


- [Capturing Groups]
- [Non-Capturing Groups]
- [Backreferences]
- [Recursion]
- [Subroutines]

## Feature: Non-Capturing Groups
<sup>[Main article][article:Non-Capturing Groups]</sup>
<sup> \| [Reference][reference:Non-Capturing Groups]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/non-capturing-groups.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/non-capturing-groups.md)</sup>
<!--
'name' sources:
  - [](../src/features/groups-and-backtracking/non-capturing-groups.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/non-capturing-groups.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/groups-and-backtracking/non-capturing-groups.md)
-->

A <dfn>Non-capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] but cannot be referenced using [Backreferences]. A Non-capturing Group is not captured by the matching algorithm.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/non-capturing-groups.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/groups-and-backtracking/non-capturing-groups.md)
-->


- [Capturing Groups]
- [Named Capturing Groups]

## Feature: Backreferences
<sup>[Main article][article:Backreferences]</sup>
<sup> \| [Reference][reference:Backreferences]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/backreferences.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/backreferences.md)</sup>
<!--
'name' sources:
  - [](../src/features/groups-and-backtracking/backreferences.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/backreferences.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/groups-and-backtracking/backreferences.md)
-->

<dfn>Backreferences</dfn> allow a pattern to re-match a previously matched capture group<sup>[1][Capturing Groups] [2][Named Capturing Groups]</sup> either by number (_n_) or by _name_.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/backreferences.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/groups-and-backtracking/backreferences.md)
-->


- [Capturing Groups]
- [Named Capturing Groups]

## Feature: Comments
<sup>[Main article][article:Comments]</sup>
<sup> \| [Reference][reference:Comments]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/comments/comments.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/comments.md)</sup>
<!--
'name' sources:
  - [](../src/features/comments/comments.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/comments.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/comments/comments.md)
-->

A <dfn>Comment</dfn> is a sequence of characters that is ignored by pattern matching and can be used to document a pattern.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/comments/comments.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/comments/comments.md)
-->


- [Line Comments]

## Feature: Line Comments
<sup>[Main article][article:Line Comments]</sup>
<sup> \| [Reference][reference:Line Comments]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/comments/line-comments.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/line-comments.md)</sup>
<!--
'name' sources:
  - [](../src/features/comments/line-comments.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/line-comments.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/comments/line-comments.md)
-->

A <dfn>Line Comment</dfn> is a sequence of characters starting with `#` and ending with `\n` (or the end of the pattern) that is ignored by pattern matching and can be used to document a pattern.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/comments/line-comments.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/comments/line-comments.md)
-->


- [Comments]

## Feature: Modifiers
<sup>[Main article][article:Modifiers]</sup>
<sup> \| [Reference][reference:Modifiers]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/flags-and-modifiers/modifiers.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/modifiers.md)</sup>
<!--
'name' sources:
  - [](../src/features/flags-and-modifiers/modifiers.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/modifiers.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/flags-and-modifiers/modifiers.md)
-->

<dfn>Modifiers</dfn> allow you to change the currently active [RegExp flags] within a subexpression.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/flags-and-modifiers/modifiers.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/flags-and-modifiers/modifiers.md)
-->


- [Flags]

## Feature: Branch Reset
<sup>[Main article][article:Branch Reset]</sup>
<sup> \| [Reference][reference:Branch Reset]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/alternatives/branch-reset.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/branch-reset.md)</sup>
<!--
'name' sources:
  - [](../src/features/alternatives/branch-reset.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/branch-reset.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/alternatives/branch-reset.md)
-->

A <dfn>Branch Reset</dfn> resets the subexpression count at the start of each [Alternative] (`|`), which affects numbering for [Backreferences] and captured results returned from the matching algorithm.

## Feature: Lookahead
<sup>[Main article][article:Lookahead]</sup>
<sup> \| [Reference][reference:Lookahead]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/lookaround/lookahead.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/lookahead.md)</sup>
<!--
'name' sources:
  - [](../src/features/lookaround/lookahead.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/lookahead.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/lookaround/lookahead.md)
-->

A <dfn>Lookahead</dfn> is a zero-width assertion that matches if the provided pattern would match the characters to the right of the current position.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/lookaround/lookahead.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/lookaround/lookahead.md)
-->


- [Lookbehind]

## Feature: Lookbehind
<sup>[Main article][article:Lookbehind]</sup>
<sup> \| [Reference][reference:Lookbehind]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/lookaround/lookbehind.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/lookbehind.md)</sup>
<!--
'name' sources:
  - [](../src/features/lookaround/lookbehind.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/lookbehind.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/lookaround/lookbehind.md)
-->

A <dfn>Lookbehind</dfn> is a zero-width assertion that matches if the provided pattern would match the characters to the left of the current position.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/lookaround/lookbehind.md)</sup>
<!--
'see_also' sources:
  - [](../src/features/lookaround/lookbehind.md)
-->


- [Lookahead]

## Feature: Non-Backtracking Expressions
<sup>[Main article][article:Non-Backtracking Expressions]</sup>
<sup> \| [Reference][reference:Non-Backtracking Expressions]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/non-backtracking-expressions.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/non-backtracking-expressions.md)</sup>
<!--
'name' sources:
  - [](../src/features/groups-and-backtracking/non-backtracking-expressions.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/non-backtracking-expressions.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/groups-and-backtracking/non-backtracking-expressions.md)
-->

A <dfn>Non-Backtracking Expression</dfn> is matched independent of neighboring patterns, and will not backtrack in the event of a failed match. This is often used to improve performance.

## Feature: Recursion
<sup>[Main article][article:Recursion]</sup>
<sup> \| [Reference][reference:Recursion]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/recursion.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/recursion.md)</sup>
<!--
'name' sources:
  - [](../src/features/groups-and-backtracking/recursion.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/recursion.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/groups-and-backtracking/recursion.md)
-->

A <dfn>Recursive Expression</dfn> provides a mechanism for re-evaluating a [capture group] inside of itself, to handle cases such as matching balanced parenthesis or brackets, etc.

## Feature: Conditional Expressions
<sup>[Main article][article:Conditional Expressions]</sup>
<sup> \| [Reference][reference:Conditional Expressions]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/alternatives/conditional-expressions.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/conditional-expressions.md)</sup>
<!--
'name' sources:
  - [](../src/features/alternatives/conditional-expressions.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/conditional-expressions.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/alternatives/conditional-expressions.md)
-->

A <dfn>Conditional Expression</dfn> checks a condition and evaluates its first alternative if the condition is **true**; otherwise, it evaluates its second alternative.

## Feature: Subroutines
<sup>[Main article][article:Subroutines]</sup>
<sup> \| [Reference][reference:Subroutines]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/groups-and-backtracking/subroutines.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/subroutines.md)</sup>
<!--
'name' sources:
  - [](../src/features/groups-and-backtracking/subroutines.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/subroutines.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/groups-and-backtracking/subroutines.md)
-->

A <dfn>Subroutine</dfn> is a pre-defined [capture group] or [named capture group] that can be reused in multiple places within the pattern to re-evaluate the subexpression from the group.

## Feature: Callouts
<sup>[Main article][article:Callouts]</sup>
<sup> \| [Reference][reference:Callouts]</sup>
<sup> \| Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/main/src/src/features/callouts.md), [2](https://github.com/rbuckton/regexp-features/edit/main/src/src/engines/hyperscan/features/callouts.md)</sup>
<!--
'name' sources:
  - [](../src/features/callouts.md)
-->

<!--
'supported' sources:
  - [](../src/engines/hyperscan/features/callouts.md)
-->

> ❌ This feature is not supported.

<!--
'description' sources:
  - [](../src/features/callouts.md)
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

[Reference]: https://hyperscan.io

[reference:Flags]: #not-supported-features
[reference:Anchors]: #not-supported-features
[reference:Buffer Boundaries]: #not-supported-features
[reference:Word Boundaries]: #not-supported-features
[reference:Text Segment Boundaries]: #not-supported-features
[reference:Continuation Escape]: #not-supported-features
[reference:Alternatives]: #not-supported-features
[reference:Wildcard]: #not-supported-features
[reference:Character Classes]: #not-supported-features
[reference:Posix Character Classes]: #not-supported-features
[reference:Negated Posix Character Classes]: #not-supported-features
[reference:Collating Elements]: #not-supported-features
[reference:Equivalence Classes]: #not-supported-features
[reference:Character Class Escapes]: #not-supported-features
[reference:Line Endings Escape]: #not-supported-features
[reference:Character Property Escapes]: #not-supported-features
[reference:Character Class Nested Set]: #not-supported-features
[reference:Character Class Intersection]: #not-supported-features
[reference:Character Class Subtraction]: #not-supported-features
[reference:Quoted Characters]: #not-supported-features
[reference:Quantifiers]: #not-supported-features
[reference:Lazy Quantifiers]: #not-supported-features
[reference:Possessive Quantifiers]: #not-supported-features
[reference:Capturing Groups]: #not-supported-features
[reference:Named Capturing Groups]: #not-supported-features
[reference:Non-Capturing Groups]: #not-supported-features
[reference:Backreferences]: #not-supported-features
[reference:Comments]: #not-supported-features
[reference:Line Comments]: #not-supported-features
[reference:Modifiers]: #not-supported-features
[reference:Branch Reset]: #not-supported-features
[reference:Lookahead]: #not-supported-features
[reference:Lookbehind]: #not-supported-features
[reference:Non-Backtracking Expressions]: #not-supported-features
[reference:Recursion]: #not-supported-features
[reference:Conditional Expressions]: #not-supported-features
[reference:Subroutines]: #not-supported-features
[reference:Callouts]: #not-supported-features

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