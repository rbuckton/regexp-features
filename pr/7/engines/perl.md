# Engine: Perl <a id="top"></a>
<sup>[Home](../index.md)</sup>
<sup> \| </sup>
<sup>[Engines](index.md)</sup>
<sup> \| </sup>
<sup>[Reference]</sup>
<sup> \| </sup>
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/engine.md "source for: name, reference")</sup>


<!--
'name' sources:
  - [](../../src/engines/perl/engine.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/engine.md)
-->



## Languages
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/engine.md "source for: languages")</sup>

- [Perl]

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
- ✔ [Negated Posix Character Classes]
- ✔ [Character Class Escapes]
- ✔ [Line Endings Escape]
- ✔ [Character Property Escapes]
- ✔ [Character Class Nested Set]
- ✔ [Character Class Intersection]
- ✔ [Character Class Union]
- ✔ [Character Class Subtraction]
- ✔ [Character Class Symmetric Difference]
- ✔ [Character Class Complement]
- ✔ [Quoted Characters]
- ✔ [Quantifiers]
- ✔ [Lazy Quantifiers]
- ✔ [Possessive Quantifiers]
- ✔ [Capturing Groups]
- ✔ [Named Capturing Groups]
- ✔ [Non-Capturing Groups]
- ✔ [Backreferences]
- ✔ [Comments]
- ✔ [Line Comments]
- ✔ [Modifiers]
- ✔ [Branch Reset]
- ✔ [Lookahead]
- ✔ [Lookbehind]
- ✔ [Non-Backtracking Expressions]
- ✔ [Recursion]
- ✔ [Conditional Expressions]
- ✔ [Subroutines]
- ✔ [Callouts]
- ✔ [Backtracking Control Verbs]

<a id="not-supported-features"></a>The following features are *not* supported:

- ❌ [Text Segment Boundaries]
- ❌ [Collating Elements]
- ❌ [Equivalence Classes]

## Feature: Flags
<sup>[Main article][article:Flags]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Flags]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/flags-and-modifiers/flags.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/flags.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/flags-and-modifiers/flags.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/flags.md)
-->

<dfn>Flags</dfn> control certain aspects of the matching behavior of a pattern.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/flags.md "source for: syntax")</sup>


The following flags are supported:
- `i` &mdash; Ignore Case. Matches [character classes] using a case-insensitive comparison.
- `m` &mdash; Multiline. Causes the [anchors] `^` and `$` to match the start and end of each line (respectively), rather than the start and end of the input.
- `s` &mdash; Singleline. Causes the [wildcard] `.` to match newline characters.
- `x`, `xx` &mdash; Extended Mode. Ignores whitespace in a pattern. Spaces must instead be represented by `\s` or `\ ` (an escaped space).
- `a`, `aa`, `d`, `l`, `u` &mdash; Character Set Modifiers. Affect which character-set rules are used.
- `n` &mdash; Explicit Capture. Prevents non-named capture groups from capturing.
- `c` &mdash; Keep the current position during repeated matching.
- `g` &mdash; Global. Globally match the pattern repeatedly in the string.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/flags-and-modifiers/flags.md "source for: see_also")</sup>


- [Modifiers]

## Feature: Anchors
<sup>[Main article][article:Anchors]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Anchors]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/anchors.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/anchors.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/anchors.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/anchors.md)
-->

<dfn>Anchors</dfn> match the start or end of a line.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/anchors.md "source for: syntax")</sup>


- `^` &mdash; Matches the start of a line when the `m` (multiline) [flag] is set. Otherwise, matches the start of the input.
- `$` &mdash; Matches the end of a line when the `m` (multiline) [flag] is set. Otherwise, matches the end of the input.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/anchors.md "source for: see_also")</sup>


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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/buffer-boundaries.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/buffer-boundaries.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/buffer-boundaries.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/buffer-boundaries.md)
-->

A <dfn>Buffer Boundary</dfn> is an *Atom* that matches the start or the end of the input. This differs slightly from `^` and `$` which can be affected by [RegExp flags] like `m`.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/buffer-boundaries.md "source for: syntax")</sup>


- `\A` &mdash; Matches the start of the input.
- `\z` &mdash; Matches the end of the input.
- `\Z` &mdash; A zero-width assertion consisting of an optional newline at the end of the buffer. Equivalent to `(?=\n?\z)`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/buffer-boundaries.md "source for: see_also")</sup>


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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/word-boundaries.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/word-boundaries.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/word-boundaries.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/word-boundaries.md)
-->

A <dfn>Word Boundary</dfn> is an *Atom* that matches the start or the end of a word.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/word-boundaries.md "source for: syntax")</sup>


- `\b` &mdash; Matches the start or the end of a word.
- `\B` &mdash; Matches when *not* at the start or the end of a word.
- <code>\b{<em>name</em>}</code> &mdash; Matches the start or the end of a unicode boundary specified by *name*.
- <code>\B{<em>name</em>}</code> &mdash; Matches when *not* at the start or the end of a unicode boundary specified by *name*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/word-boundaries.md "source for: see_also")</sup>


- [Anchors]
- [Buffer Boundaries]
- [Text Segment Boundaries]
- [Continuation Escape]

## Feature: Text Segment Boundaries
<sup>[Main article][article:Text Segment Boundaries]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/text-segment-boundaries.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/text-segment-boundaries.md "source for: supported")</sup>


<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/text-segment-boundaries.md)
-->

> ❌ This feature is not supported.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/text-segment-boundaries.md "source for: see_also")</sup>


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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/continuation-escape.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/continuation-escape.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/anchors-and-boundaries/continuation-escape.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/continuation-escape.md)
-->

A <dfn>Continuation Escape</dfn> is a zero-width assertion that matches either the start of the input or the start of the last match.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/continuation-escape.md "source for: syntax")</sup>


- `\G` &mdash; Matches either the start of the input or the start of the last match.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/anchors-and-boundaries/continuation-escape.md "source for: see_also")</sup>


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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/alternatives/alternatives.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/alternatives.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/alternatives/alternatives.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/alternatives.md)
-->

An <dfn>Alternative</dfn> represents two or more branches in a pattern. If first branch of a pattern fails to match, each alternative is attempted from left to right until a match is found.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/alternatives/alternatives.md "source for: syntax")</sup>


- `…|…` &mdash; Matches the pattern to the left of the `|`. If that fails, matches the pattern to the right of `|`.

## Feature: Wildcard
<sup>[Main article][article:Wildcard]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Wildcard]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/wildcard.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/wildcard.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/wildcard.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/wildcard.md)
-->

A <dfn>Wildcard</dfn> matches a single, non-newline character.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/wildcard.md "source for: syntax")</sup>


- `.` &mdash; Matches any character except newline characters. If the `s` (single-line) [flag] is set then this matches any character.

## Feature: Character Classes
<sup>[Main article][article:Character Classes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Classes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-classes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-classes.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-classes.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/character-classes.md)
-->

A <dfn>Character Class</dfn> is an *Atom* that specifies a set of characters to match a single character in the set.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-classes.md "source for: syntax")</sup>


- `[…]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `^` at the start and `-` between two entries in the set. Matches a character in the set. Example: `[abc]` matches `a`, `b`, or `c`.
- <a id="negated-character-class"></a>`[^…]` &mdash; Where `…` is one or more single characters or character class escapes, excluding `-` between two entries in the set. Matches any character not in the set. Example: `[^abc]` matches `d`, `e`, or `f`, etc., but not `a`, `b`, or `c`.
- <a id="character-class-range"></a><code>[<em>a</em>-<em>z</em>]</code> &mdash; Where *a* and *z* are single characters or character escapes. Matches any character in the range between *a* and *z* (inclusive). Example: `[a-c]` matches `a`, `b`, or `c`, but not `d`.
- `(?[…])` &mdash; Extended Bracketed Character Class, permit the following features:
  - [Character Class Intersection]
  - [Character Class Subtraction]
  - [Character Class Nested Set]
  - [Character Class Union]
  - [Character Class Symmetric Difference]
  - [Character Class Complement]

#### Extended Bracketed Character Class

Inside of `(?[…])`, only meta characters are permitted and whitespace is ignored. Individual characters (like `a`, `1`, etc.) must be enclosed in a [Character Class Nested Set].

In addition, expressions within the bracketed character class may be grouped using `(` and `)`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-classes.md "source for: see_also")</sup>


- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Posix Character Classes
<sup>[Main article][article:Posix Character Classes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Posix Character Classes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/posix-character-classes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/posix-character-classes.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/posix-character-classes.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/posix-character-classes.md)
-->

A <dfn>Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of characters.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/posix-character-classes.md "source for: syntax")</sup>


- <code>[[:<em>name</em>:]]</code> &mdash; Where *name* is in a set of predefined names. Matches any character in the set.
- <code>(?[[:<em>name</em>:]])</code> &mdash; Where *name* is in a set of predefined names. Matches any character in the set.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/posix-character-classes.md "source for: see_also")</sup>


- [Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Negated Posix Character Classes
<sup>[Main article][article:Negated Posix Character Classes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Negated Posix Character Classes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/negated-posix-character-classes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/negated-posix-character-classes.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/negated-posix-character-classes.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/negated-posix-character-classes.md)
-->

A <dfn>Negated Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of excluded characters.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/negated-posix-character-classes.md "source for: syntax")</sup>


- <code>[[:^<em>name</em>:]]</code> &mdash; Where *name* is in a set of predefined names. Matches any character not in the set.
- <code>(?[[:^<em>name</em>:]])</code> &mdash; Where *name* is in a set of predefined names. Matches any character not in the set.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/negated-posix-character-classes.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Collating Elements
<sup>[Main article][article:Collating Elements]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/collating-elements.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/collating-elements.md "source for: supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/collating-elements.md)
-->

> ❌ This feature is not supported.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/collating-elements.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Equivalence Classes
<sup>[Main article][article:Equivalence Classes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/equivalence-classes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/equivalence-classes.md "source for: supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/equivalence-classes.md)
-->

> ❌ This feature is not supported.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/equivalence-classes.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Character Class Escapes
<sup>[Main article][article:Character Class Escapes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Escapes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-escapes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-escapes.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-escapes.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/character-class-escapes.md)
-->

A <dfn>Character Class Escape</dfn> is a single character escape that represents an entire character class. They can be used as an element of a [Character Class] or as an *Atom*. It is often the case that a lower-case escape character is the inclusive set, while an upper-case variant of the same character excludes that set.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-escapes.md "source for: syntax")</sup>


- `\d` &mdash; A decimal digit character in the range 0-9. Equivalent to `[0-9]`.
- `\D` &mdash; Any character not in the range 0-9. Equivalent to `[^0-9]`.
- `\w` &mdash; Any "word" character. Equivalent to `[a-zA-Z0-9_]`.
- `\W` &mdash; Any non-"word" character. Equivalent to `[^a-zA-Z0-9_]`.
- `\s` &mdash; Any whitespace character.
- `\S` &mdash; Any non-whitespace character.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-escapes.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Line Endings Escape
<sup>[Main article][article:Line Endings Escape]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Line Endings Escape]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/line-endings-escape.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/line-endings-escape.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/line-endings-escape.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/line-endings-escape.md)
-->

A <dfn>Line Endings Escape</dfn> is an *Atom* that matches any line ending character sequence.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/line-endings-escape.md "source for: syntax")</sup>


- `\R` &mdash; Equivalent to `(?>\r\n?|[\x0A-\x0C\x85\u{2028}\u{2029}])`

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/line-endings-escape.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Character Property Escapes
<sup>[Main article][article:Character Property Escapes]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Property Escapes]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-property-escapes.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-property-escapes.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-property-escapes.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/character-property-escapes.md)
-->

A <dfn>Character Property Escape</dfn> is an escape sequence used to match a character with a specific character property.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-property-escapes.md "source for: syntax")</sup>


- <code>\p<em>X</em></code> &mdash; Where *X* is a single character. Matches a character that has the property *X*.
- <code>\p{<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that has the property *name*.
- <code>\P<em>X</em></code> &mdash; Where *X* is a single character. Matches a character that does not have the property *X*.
- <code>\P{<em>name</em>}</code> &mdash; Where *name* is a predefined property name. Matches a character that does not have the property *name*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-property-escapes.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Class Nested Set]
- [Character Class Intersection]
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Character Class Nested Set
<sup>[Main article][article:Character Class Nested Set]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Nested Set]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-nested-set.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-nested-set.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-nested-set.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/character-class-nested-set.md)
-->

A <dfn>Character Class Nested Set</dfn> allows you to to define a nested [character class] inside of a [character class].

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-nested-set.md "source for: syntax")</sup>


- `(?[ […] ])` &mdash; Where `…` includes any contents allowed in a normal [character class].

### Example
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-nested-set.md "source for: example")</sup>


```
(?[[a-z]&[^d-q]])
```

Is equivalent to:

```re
[a-cr-z]
```

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-nested-set.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Intersection]
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Character Class Intersection
<sup>[Main article][article:Character Class Intersection]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Intersection]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-intersection.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-intersection.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-intersection.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/character-class-intersection.md)
-->

<dfn>Character Class Intersection</dfn> allows you to indicate that only characters that are in both [character classes] should match.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-intersection.md "source for: syntax")</sup>


- <code>(?[ <em>a</em> & <em>b</em> ])</code> &mdash; Where *a* and *b* are metacharacters or other *Class Atoms*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-intersection.md "source for: see_also")</sup>


- [Character Classes]
- [Posix Character Classes]
- [Negated Posix Character Classes]
- [Collating Elements]
- [Equivalence Classes]
- [Character Class Escapes]
- [Line Endings Escape]
- [Character Property Escapes]
- [Character Class Nested Set]
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Character Class Union
<sup>[Main article][article:Character Class Union]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Union]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-union.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-union.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-union.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/character-class-union.md)
-->

<dfn>Character Class Union</dfn> allows you include multiple classes of characters within a [character class].

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-union.md "source for: syntax")</sup>


- <code>(?[ <em>a</em> + <em>b</em> ])</code> &mdash; Where *a* and *b* are metacharacters or other *Class Atoms*.
- <code>(?[ <em>a</em> | <em>b</em> ])</code> &mdash; Where *a* and *b* are metacharacters or other *Class Atoms*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-union.md "source for: see_also")</sup>


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
- [Character Class Subtraction]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Character Class Subtraction
<sup>[Main article][article:Character Class Subtraction]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Subtraction]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-subtraction.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-subtraction.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-subtraction.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/character-class-subtraction.md)
-->

<dfn>Character Class Subtraction</dfn> allows you to exclude a class of characters from another class of characters in a [character class].

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-subtraction.md "source for: syntax")</sup>


- <code>(?[ <em>a</em> - <em>b</em> ])</code> &mdash; Where *a* and *b* are metacharacters or other *Class Atoms*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-subtraction.md "source for: see_also")</sup>


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
- [Character Class Union]
- [Character Class Symmetric Difference]
- [Character Class Complement]

## Feature: Character Class Symmetric Difference
<sup>[Main article][article:Character Class Symmetric Difference]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Symmetric Difference]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-symmetric-difference.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-symmetric-difference.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-symmetric-difference.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/character-class-symmetric-difference.md)
-->

<dfn>Character Class Symmetric Difference</dfn> allows you include characters that match either, but not both, of two [character classes].

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-symmetric-difference.md "source for: syntax")</sup>


- <code>(?[ <em>a</em> ^ <em>b</em> ])</code> &mdash; Where *a* and *b* are metacharacters or other *Class Atoms*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-symmetric-difference.md "source for: see_also")</sup>


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
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Complement]

## Feature: Character Class Complement
<sup>[Main article][article:Character Class Complement]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Character Class Complement]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-complement.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-complement.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/character-classes/character-class-complement.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/character-class-complement.md)
-->

<dfn>Character Class Complement</dfn> allows you to negate a [character class] inside of another [character class].

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/character-class-complement.md "source for: syntax")</sup>


- <code>(?[ !<em>a</em> ])</code> &mdash; Where *a* is a metacharacter or other *Class Atom*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/character-classes/character-class-complement.md "source for: see_also")</sup>


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
- [Character Class Union]
- [Character Class Subtraction]
- [Character Class Symmetric Difference]

## Feature: Quoted Characters
<sup>[Main article][article:Quoted Characters]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Quoted Characters]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/quoted-characters.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/quoted-characters.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/quoted-characters.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/quoted-characters.md)
-->

<dfn>Quoted Characters</dfn> are a sequence of characters treated as literal characters rather than RegExp characters.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/quoted-characters.md "source for: syntax")</sup>


- `\Q…\E` &mdash; All characters following `\Q` and preceding the next `\E` are treated as literal characters. Example: `\Q.+\E` matches `.+` but not `aa`.
- `\Q…` &mdash; If there is no trailing `\E`, all characters until the end of the pattern are treated as literal characters.

## Feature: Quantifiers
<sup>[Main article][article:Quantifiers]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Quantifiers]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/quantifiers/quantifiers.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/quantifiers.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/quantifiers/quantifiers.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/quantifiers.md)
-->

<dfn>Quantifiers</dfn> specify repetition of an *Atom*. By default, quantifiers are "greedy" in that they attempt to match as many instances of the preceding *Atom* as possible to satisfy the pattern before backtracking.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/quantifiers.md "source for: syntax")</sup>


- `*` &mdash; Matches the preceding *Atom* zero or more times. Example: `a*b` matches `b`, `ab`, `aab`, `aaab`, etc.
- `+` &mdash; Matches the preceding *Atom* one or more times. Example: `a+b` matches `ab`, `aab`, `aaab`, etc., but not `b`.
- `?` &mdash; Matches the preceding *Atom* zero or one times. Example: `a?b` matches `b`, `ab`.
- <code>{<em>n</em>}</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times. Example: `a{2}` matches `aa` but not `a` or `aaa`.
- <code>{<em>n</em>,}</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times. Example: `a{2,}` matches `aa`, `aaa`, `aaaa`, etc., but not `a`.
- <code>{,<em>n</em>}</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-most *n* times. Example: `a{,2}` matches ``, `a`, `aa`, but not `aaa`, `aaaa`, etc.
- <code>{<em>n</em>,<em>m</em>}</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times. Example: `a{2,3}` matches `aa`, `aaa`, `aaaa`, etc., but not `a` or `aaaa`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/quantifiers/quantifiers.md "source for: see_also")</sup>


- [Lazy Quantifiers]
- [Possessive Quantifiers]

## Feature: Lazy Quantifiers
<sup>[Main article][article:Lazy Quantifiers]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Lazy Quantifiers]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/quantifiers/lazy-quantifiers.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/lazy-quantifiers.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/quantifiers/lazy-quantifiers.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/lazy-quantifiers.md)
-->

<dfn>Lazy Quantifiers</dfn> specify repetition of an *Atom*, but attempt to match as few instances of the preceding *Atom* as possible to satisfy the pattern before advancing.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/lazy-quantifiers.md "source for: syntax")</sup>


- `*?` &mdash; Matches the preceding *Atom* zero or more times.
- `+?` &mdash; Matches the preceding *Atom* one or more times.
- `??` &mdash; Matches the preceding *Atom* zero or one times.
- <code>{<em>n</em>}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times.
- <code>{<em>n</em>,}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times.
- <code>{,<em>n</em>}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-most *n* times.
- <code>{<em>n</em>,<em>m</em>}?</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/quantifiers/lazy-quantifiers.md "source for: see_also")</sup>


- [Quantifiers]
- [Possessive Quantifiers]

## Feature: Possessive Quantifiers
<sup>[Main article][article:Possessive Quantifiers]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Possessive Quantifiers]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/quantifiers/possessive-quantifiers.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/possessive-quantifiers.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/quantifiers/possessive-quantifiers.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/possessive-quantifiers.md)
-->

<dfn>Possessive Quantifiers</dfn> are like greedy (i.e., regular) [quantifiers], except that backtracking is not performed.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/possessive-quantifiers.md "source for: syntax")</sup>


- `*+` &mdash; Match zero or more characters without backtracking.
- `++` &mdash; Match one or more characters without backtracking.
- `?+` &mdash; Match zero or one characters without backtracking.
- <code>{<em>n</em>}+</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* exactly *n* times without backtracking (redundant).
- <code>{<em>n</em>,}+</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-least *n* times without backtracking.
- <code>{,<em>n</em>}?</code> &mdash; Where *n* is an integer. Matches the preceding *Atom* at-most *n* times without backtracking.
- <code>{<em>n</em>,<em>m</em>}+</code> &mdash; Where *n* and *m* are integers, and *m* >= *n*. Matches the preceding *Atom* at-least *n* times and at-most *m* times without backtracking.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/quantifiers/possessive-quantifiers.md "source for: see_also")</sup>


- [Quantifiers]
- [Lazy Quantifiers]

## Feature: Capturing Groups
<sup>[Main article][article:Capturing Groups]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Capturing Groups]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/capturing-groups.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/capturing-groups.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/capturing-groups.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/capturing-groups.md)
-->

A <dfn>Capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by index. A Capturing Group can be captured and returned by the matching algorithm.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/capturing-groups.md "source for: syntax")</sup>


- `(…)` &mdash; Groups the subexpression as a single *Atom*. The result is captured and returned by the matching algorithm.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/capturing-groups.md "source for: see_also")</sup>


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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/named-capturing-groups.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/named-capturing-groups.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/named-capturing-groups.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/named-capturing-groups.md)
-->

A <dfn>Named Capturing Group</dfn> is a subexpression that can be captured and returned by the matching algorithm. A Named Capturing Group is also an *Atom* and can be repeated using [Quantifiers] and referenced using [Backreferences] by name.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/named-capturing-groups.md "source for: syntax")</sup>


- <code>(?&lt;<em>name</em>&gt;…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.
- <code>(?'<em>name</em>'…)</code> &mdash; Groups the subexpression as a single *Atom* associated with the provided *name*. The result is captured and returned by the matching algorithm.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/named-capturing-groups.md "source for: see_also")</sup>


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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/non-capturing-groups.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/non-capturing-groups.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/non-capturing-groups.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/non-capturing-groups.md)
-->

A <dfn>Non-capturing Group</dfn> is a subexpression that can be treated as an *Atom* and can be repeated using [Quantifiers] but cannot be referenced using [Backreferences]. A Non-capturing Group is not captured by the matching algorithm.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/non-capturing-groups.md "source for: syntax")</sup>


- `(?:…)` &mdash; Groups the subexpression as a single *Atom*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/non-capturing-groups.md "source for: see_also")</sup>


- [Capturing Groups]
- [Named Capturing Groups]

## Feature: Backreferences
<sup>[Main article][article:Backreferences]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Backreferences]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/backreferences.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/backreferences.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/backreferences.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/backreferences.md)
-->

<dfn>Backreferences</dfn> allow a pattern to re-match a previously matched capture group<sup>[1][Capturing Groups] [2][Named Capturing Groups]</sup> either by number (_n_) or by _name_.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/backreferences.md "source for: syntax")</sup>


- <code>&#x5c;<em>n</em></code> &mdash; Where *n* is a decimal digit in the range 1-9. Matches the same string as the [capture group] *n*.
- <code>\k&lt;<em>name</em>&gt;</code> &mdash; Matches the same string as the [named capture group] with the name *name*.

- <code>\g<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
- <code>\g-<em>n</em></code> &mdash; Where *n* is an integer >= 1. Matches the *n*th previous [capture group].
- <code>\g{<em>n</em>}</code> &mdash; Where *n* is an integer >= 1. Matches the same string as the [capture group] *n*.
- <code>\g{-<em>n</em>}</code> &mdash; Where *n* is an integer >= 1. Matches the *n*th previous [capture group].
- <code>\g{<em>name</em>}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k{<em>name</em>}</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k&lt;<em>name</em>&gt;</code> &mdash; Matches the [named capture group] with the name *name*.
- <code>\k'<em>name</em>'</code> &mdash; Matches the [named capture group] with the name *name*.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/backreferences.md "source for: see_also")</sup>


- [Capturing Groups]
- [Named Capturing Groups]

## Feature: Comments
<sup>[Main article][article:Comments]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Comments]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/comments/comments.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/comments.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/comments/comments.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/comments.md)
-->

A <dfn>Comment</dfn> is a sequence of characters that is ignored by pattern matching and can be used to document a pattern.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/comments/comments.md "source for: syntax")</sup>


- `(?#…)` &mdash; The entire expression is removed from the pattern. A comment may not contain other `(` or `)` characters.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/comments/comments.md "source for: see_also")</sup>


- [Line Comments]

## Feature: Line Comments
<sup>[Main article][article:Line Comments]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Line Comments]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/comments/line-comments.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/line-comments.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/comments/line-comments.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/line-comments.md)
-->

A <dfn>Line Comment</dfn> is a sequence of characters starting with `#` and ending with `\n` (or the end of the pattern) that is ignored by pattern matching and can be used to document a pattern.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/comments/line-comments.md "source for: syntax")</sup>


- <code>#…<strong>\n</strong></code> &mdash; The rest of the line starting from `#` is removed from the pattern. Only supported when the `x` (extended mode) [RegExp flag] is set.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/comments/line-comments.md "source for: see_also")</sup>


- [Comments]

## Feature: Modifiers
<sup>[Main article][article:Modifiers]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Modifiers]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/flags-and-modifiers/modifiers.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/modifiers.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/flags-and-modifiers/modifiers.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/modifiers.md)
-->

<dfn>Modifiers</dfn> allow you to change the currently active [RegExp flags] within a subexpression.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/modifiers.md "source for: syntax")</sup>


- `(?adlupimnsx-imnsx)` - Sets or unsets (using `-`) the specified [RegExp flags] starting at the current position until the next closing `)` or the end of the pattern. Example: `(?-i)A(?i)B(?-i)C` matches `ABC`, `AbC`.
- `(?adlupimnsx-imnsx:…)` - Sets or unsets (using `-`) the specified [RegExp flags] for the subexpression. Example: `(?-i:A(?i:B)C)` matches `ABC`, `AbC`.
- `(?^alupimnsx)` - The `^` is a shorthand for `d-imnsx`. Flags other than `d` may follow the caret to override, but `-` is not permitted.
- `(?^alupimnsx:…)` - The `^` is a shorthand for `d-imnsx`. Flags other than `d` may follow the caret to override, but `-` is not permitted.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/flags-and-modifiers/modifiers.md "source for: see_also")</sup>


- [Flags]

## Feature: Branch Reset
<sup>[Main article][article:Branch Reset]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Branch Reset]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/alternatives/branch-reset.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/branch-reset.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/alternatives/branch-reset.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/branch-reset.md)
-->

A <dfn>Branch Reset</dfn> resets the subexpression count at the start of each [Alternative] (`|`), which affects numbering for [Backreferences] and captured results returned from the matching algorithm.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/alternatives/branch-reset.md "source for: syntax")</sup>


- `(?|…)` &mdash; Resets the subexpression count at the start of each [Alternative].

## Feature: Lookahead
<sup>[Main article][article:Lookahead]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Lookahead]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/lookaround/lookahead.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/lookahead.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/lookaround/lookahead.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/lookahead.md)
-->

A <dfn>Lookahead</dfn> is a zero-width assertion that matches if the provided pattern would match the characters to the right of the current position.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/lookahead.md "source for: syntax")</sup>


- <a id="positive-lookahead"></a>`(?=…)` &mdash; Positive Lookahead. Matches if the provided pattern would match but does not advance the current position.
- `(*pla:…)` &mdash; Positive Lookahead. Has the same behavior as `(?=…)`.
- `(*positive_lookahead:…)` &mdash; Positive Lookahead. Has the same behavior as `(?=…)`.
- <a id="negative-lookahead"></a>`(?!…)` &mdash; Negative Lookahead. Matches if the provided pattern would not match, but does not advance the current position.
- `(*nla:…)` &mdash; Negative Lookahead. Has the same behavior as `(?!…)`.
- `(*negative_lookahead:…)` &mdash; Negative Lookahead. Has the same behavior as `(?!…)`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/lookaround/lookahead.md "source for: see_also")</sup>


- [Lookbehind]

## Feature: Lookbehind
<sup>[Main article][article:Lookbehind]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Lookbehind]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/lookaround/lookbehind.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/lookbehind.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/lookaround/lookbehind.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/lookbehind.md)
-->

A <dfn>Lookbehind</dfn> is a zero-width assertion that matches if the provided pattern would match the characters to the left of the current position.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/lookbehind.md "source for: syntax")</sup>


- <a id="positive-lookbehind"></a>`(?<=…)` &mdash; Positive Lookbehind. Matches if the provided pattern would match the preceding characters, but does not advance the current position. The pattern must have a fixed length (unbounded [quantifiers] are not permitted).
- `(*plb:…)` &mdash; Positive Lookbehind. Has the same behavior as `(?<=…)`.
- `(*positive_lookbehind:…)` &mdash; Positive Lookbehind. Has the same behavior as `(?<=…)`.
- <a id="negative-lookbehind"></a>`(?<!…)` &mdash; Negative Lookbehind. Matches if the provided pattern would not match the preceding characters, but does not advance the current position. The pattern must have a fixed length (unbounded [quantifiers] are not permitted).
- `(*nlb:…)` &mdash; Negative Lookbehind. Has the same behavior as `(?<!…)`.
- `(*negative_lookbehind:…)` &mdash; Negative Lookbehind. Has the same behavior as `(?<!…)`.

### See Also
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/lookaround/lookbehind.md "source for: see_also")</sup>


- [Lookahead]

## Feature: Non-Backtracking Expressions
<sup>[Main article][article:Non-Backtracking Expressions]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Non-Backtracking Expressions]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/non-backtracking-expressions.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/non-backtracking-expressions.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/non-backtracking-expressions.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/non-backtracking-expressions.md)
-->

A <dfn>Non-Backtracking Expression</dfn> is matched independent of neighboring patterns, and will not backtrack in the event of a failed match. This is often used to improve performance.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/non-backtracking-expressions.md "source for: syntax")</sup>


- `(?>…)` &mdash; Matches the provided pattern, but no backtracking is performed if the match fails.
- `(*atomic:…)` &mdash; Matches the provided pattern, but no backtracking is performed if the match fails.

## Feature: Recursion
<sup>[Main article][article:Recursion]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Recursion]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/recursion.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/recursion.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/recursion.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/recursion.md)
-->

A <dfn>Recursive Expression</dfn> provides a mechanism for re-evaluating a [capture group] inside of itself, to handle cases such as matching balanced parenthesis or brackets, etc.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/recursion.md "source for: syntax")</sup>


- <code>(?R)</code> &mdash; Reevaluates the entire pattern starting at the current position.
- <code>(?0)</code> &mdash; Reevaluates the entire pattern starting at the current position.
- <code>(?<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is *n*.
- <code>(?-<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*. Example: `(?-1)` would revaluate the last declared [capture group].
- <code>(?+<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Re-evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*. Example: `(?+1)` would evaluate the next declared [capture group].
- <code>(?&<em>name</em>)</code> &mdash; Re-evaluates the [named capture group] with the provided *name*.
- <code>(?P><em>name</em>)</code> &mdash; Re-evaluates the [named capture group] with the provided *name*.

## Feature: Conditional Expressions
<sup>[Main article][article:Conditional Expressions]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Conditional Expressions]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/alternatives/conditional-expressions.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/conditional-expressions.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/alternatives/conditional-expressions.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/conditional-expressions.md)
-->

A <dfn>Conditional Expression</dfn> checks a condition and evaluates its first alternative if the condition is **true**; otherwise, it evaluates its second alternative.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/conditional-expressions.md "source for: syntax")</sup>


- <code>(?(<em>condition</em>)<em>yes-pattern</em>|<em>no-pattern</em>)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches *no-pattern*.
- <code>(?(<em>condition</em>)<em>yes-pattern</em>)</code> &mdash; Matches *yes-pattern* if *condition* is **true**; otherwise, matches the empty string.

#### Conditions

The following conditions are supported:

- <code>(?(?=<em>test-pattern</em>)…)</code> &mdash; Evaluates to **true** if a [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(?!<em>test-pattern</em>)…)</code> &mdash; Evaluates to **true** if a negative [lookahead] for *test-pattern* matches; Otherwise, evaluates to **false**.
- <code>(?(<em>n</em>)…)</code> &mdash; Evaluates to **true** if the [capture group] at offset *n* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?(&lt;<em>name</em>&gt;)…)</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?('<em>name</em>')…)</code> &mdash; Evaluates to **true** if the [named capture group] with the name *name* was successfully matched; Otherwise, evaluates to **false**.
- <code>(?{<em>code</em>}…)</code> &mdash; Evaluates embedded Perl code whose result is either **true** or **false**.
- <code>(?(R)…)</code> &mdash; Evaluates to **true** if inside a [recursive expression]; Otherwise, evaluates to **false**.
- <code>(?(R<em>n</em>)…)</code> &mdash; Evaluates to **true** if inside a [recursive expression] for the [capture group] at offset *n*; Otherwise, evaluates to **false**.
- <code>(?(R&<em>name</em>)…)</code> &mdash; Evaluates to **true** if inside a [recursive expression] for the [named capture group] with the name *name*; Otherwise, evaluates to **false**.
- <a name="define-condition"></a><code>(?(DEFINE)…)</code> &mdash; Always evaluates to **false**. This allows you to define [Subroutines].

## Feature: Subroutines
<sup>[Main article][article:Subroutines]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Subroutines]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/subroutines.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/subroutines.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/subroutines.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/subroutines.md)
-->

A <dfn>Subroutine</dfn> is a pre-defined [capture group] or [named capture group] that can be reused in multiple places within the pattern to re-evaluate the subexpression from the group.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/subroutines.md "source for: syntax")</sup>


- `(?(DEFINE)…)` &mdash; Defines a set of reusable [capture groups] that can be referenced elsewhere in the pattern.
- <code>(?<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is *n*.
- <code>(?-<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the left of the current *Atom*. Example: `(?-1)` would revaluate the last declared [capture group].
- <code>(?+<em>n</em>)</code> &mdash; Where *n* is an integer >= 1. Evaluates the [capture group] whose offset is the *n*th [capture group] declared to the right of the current *Atom*. Example: `(?+1)` would evaluate the next declared [capture group].
- <code>(?&<em>name</em>)</code> &mdash; Evaluates the [named capture group] with the provided *name*.

### Example
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/subroutines.md "source for: example")</sup>


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
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/callouts.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/callouts.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/callouts.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/callouts.md)
-->

A <dfn>Callout</dfn> is a user-defined function that can be evaluated while matching.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/callouts.md "source for: syntax")</sup>


- <code>(?{<em>code</em>})</code> &mdash; - Zero-width assertion that executes embedded Perl code.
- <code>(??{<em>code</em>})</code> &mdash; - Zero-width assertion that executes embedded Perl code. The return value of the embedded code is interpreted as a pattern to be matched at this position.

## Feature: Backtracking Control Verbs
<sup>[Main article][article:Backtracking Control Verbs]</sup>
<sup> \| </sup>
<sup>[Reference][reference:Backtracking Control Verbs]</sup>
<sup> \| </sup>
<sup>[Back to top](#top)</sup>
<sup> \| </sup>
<sup>Improve this section: [1](https://github.com/rbuckton/regexp-features/edit/perl/src/features/groups-and-backtracking/backtracking-control-verbs.md "source for: name, description"), [2](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/backtracking-control-verbs.md "source for: reference, supported")</sup>


<!--
'name' sources:
  - [](../../src/features/groups-and-backtracking/backtracking-control-verbs.md)
-->


<!--
'reference' sources:
  - [](../../src/engines/perl/features/backtracking-control-verbs.md)
-->

A <dfn>Backtracking Control Verb</dfn> is a special pattern usually in the form of <code>(*<em>VERB</em>)</code> or <code>(*<em>VERB</em>:<em>arg</em>)</code> that performs some special behavior with respect to backtracking.

### Syntax
<sup>[Improve this section](https://github.com/rbuckton/regexp-features/edit/perl/src/engines/perl/features/backtracking-control-verbs.md "source for: syntax")</sup>


- `(*PRUNE)`, <code>(*PRUNE:<em>name</em>)</code> &mdash; Prunes the backtracking tree.
- `(*SKIP)`, <code>(*SKIP:<em>name</em>)</code> &mdash; Prunes the backtracking tree and preceding text cannot be part of any match of the pattern.
- <code>(*MARK:<em>name</em>)</code>, <code>(*:<em>name</em>)</code> &mdash; Marks a point in the string where a certain part of the pattern has been matched.
- `(*THEN)`, <code>(*THEN:<em>name</em>)</code> &mdash; When backtracked into on failure causes the engine to attempt the next alternative in the innermost enclosing group with alternatives.
- `(*COMMIT)`, <code>(*COMMIT:<em>arg</em>)</code> &mdash; When backtracked into on failure causes the match to fail outright.
- `(*FAIL)`, `(*F)`, <code>(*FAIL:<em>arg</em>)</code> &mdash; Matches nothing and always fails. Equivalent to `(?!)`.
- `(*ACCEPT)`, <code>(*ACCEPT:<em>arg</em>)</code> &mdash; Causes the end of successful matching at the point where the verb was encountered.




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
[Character Class Union]: #feature-character-class-union
[Character Class Unions]: #feature-character-class-union
[Character Class Subtraction]: #feature-character-class-subtraction
[Character Class Symmetric Difference]: #feature-character-class-symmetric-difference
[Character Class Symmetric Differences]: #feature-character-class-symmetric-difference
[Character Class Complement]: #feature-character-class-complement
[Character Class Complements]: #feature-character-class-complement
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
[Backtracking Control Verbs]: #feature-backtracking-control-verbs
[Backtracking Control Verb]: #feature-backtracking-control-verbs


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
[article:Character Class Union]: ../features/character-class-union.md
[article:Character Class Subtraction]: ../features/character-class-subtraction.md
[article:Character Class Symmetric Difference]: ../features/character-class-symmetric-difference.md
[article:Character Class Complement]: ../features/character-class-complement.md
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
[article:Backtracking Control Verbs]: ../features/backtracking-control-verbs.md
[article:Flags]: ../features/flags.md

[Reference]: https://perldoc.perl.org/perlre

[reference:Flags]: https://perldoc.perl.org/perlre#Modifiers
[reference:Anchors]: https://perldoc.perl.org/perlre#Metacharacters
[reference:Buffer Boundaries]: https://perldoc.perl.org/perlre#Assertions
[reference:Word Boundaries]: https://perldoc.perl.org/perlre#Assertions
[reference:Text Segment Boundaries]: #not-supported-features
[reference:Continuation Escape]: https://perldoc.perl.org/perlre#Assertions
[reference:Alternatives]: https://perldoc.perl.org/perlre#Metacharacters
[reference:Wildcard]: https://perldoc.perl.org/perlre#Metacharacters
[reference:Character Classes]: https://perldoc.perl.org/perlre#Character-Classes-and-other-Special-Escapes
[reference:Posix Character Classes]: https://perldoc.perl.org/perlrecharclass#POSIX-Character-Classes
[reference:Negated Posix Character Classes]: https://perldoc.perl.org/perlrecharclass#POSIX-Character-Classes
[reference:Collating Elements]: #not-supported-features
[reference:Equivalence Classes]: #not-supported-features
[reference:Character Class Escapes]: https://perldoc.perl.org/perlre#Character-Classes-and-other-Special-Escapes
[reference:Line Endings Escape]: https://perldoc.perl.org/perlre#Character-Classes-and-other-Special-Escapes
[reference:Character Property Escapes]: https://perldoc.perl.org/perlre#Character-Classes-and-other-Special-Escapes
[reference:Character Class Nested Set]: https://perldoc.perl.org/perlrecharclass#Extended-Bracketed-Character-Classes
[reference:Character Class Intersection]: https://perldoc.perl.org/perlrecharclass#Extended-Bracketed-Character-Classes
[reference:Character Class Union]: https://perldoc.perl.org/perlrecharclass#Extended-Bracketed-Character-Classes
[reference:Character Class Subtraction]: https://perldoc.perl.org/perlrecharclass#Extended-Bracketed-Character-Classes
[reference:Character Class Symmetric Difference]: https://perldoc.perl.org/perlrecharclass#Extended-Bracketed-Character-Classes
[reference:Character Class Complement]: https://perldoc.perl.org/perlrecharclass#Extended-Bracketed-Character-Classes
[reference:Quoted Characters]: https://perldoc.perl.org/perlre#Escape-sequences
[reference:Quantifiers]: https://perldoc.perl.org/perlre#Quantifiers
[reference:Lazy Quantifiers]: https://perldoc.perl.org/perlre#Quantifiers
[reference:Possessive Quantifiers]: https://perldoc.perl.org/perlre#Quantifiers
[reference:Capturing Groups]: https://perldoc.perl.org/perlre#Capture-groups
[reference:Named Capturing Groups]: https://perldoc.perl.org/perlre#Capture-groups
[reference:Non-Capturing Groups]: https://perldoc.perl.org/perlre#Capture-groups
[reference:Backreferences]: https://perldoc.perl.org/perlre#Capture-groups
[reference:Comments]: https://perldoc.perl.org/perlre#Extended-Patterns
[reference:Line Comments]: https://perldoc.perl.org/perlre#Metacharacters
[reference:Modifiers]: yhttps://perldoc.perl.org/perlre#Modifiers
[reference:Branch Reset]: https://perldoc.perl.org/perlre#(?%7Cpattern)
[reference:Lookahead]: https://perldoc.perl.org/perlre#Lookaround-Assertions
[reference:Lookbehind]: https://perldoc.perl.org/perlre#Lookaround-Assertions
[reference:Non-Backtracking Expressions]: https://perldoc.perl.org/perlre#(?%3Epattern)
[reference:Recursion]: https://perldoc.perl.org/perlre#(?PARNO)-(?-PARNO)-(?+PARNO)-(?R)-(?0)
[reference:Conditional Expressions]: https://perldoc.perl.org/perlre#(?(condition)yes-pattern%7Cno-pattern)
[reference:Subroutines]: https://perldoc.perl.org/perlre#(?&amp;amp;NAME)
[reference:Callouts]: https://perldoc.perl.org/perlre#(?%7B-code-%7D)
[reference:Backtracking Control Verbs]: https://perldoc.perl.org/perlre#Special-Backtracking-Control-Verbs

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