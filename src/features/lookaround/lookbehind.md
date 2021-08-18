---
### YamlMime:Feature
feature: lookbehind
name: Lookbehind
see_also:
- lookahead
links:
- name: Positive Lookbehind
  href: '#positive-lookbehind'
- name: Negative Lookbehind
  href: '#negative-lookbehind'
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Lookbehind</dfn> is a zero-width assertion that matches if the provided pattern would match the characters to the left of the current position.

# syntax
- <a id="positive-lookbehind"></a>`(?<=…)` &mdash; Positive Lookbehind. Matches if the provided pattern would match the preceding characters, but does not advance the current position. The pattern must have a fixed length (unbounded [quantifiers] are not permitted).
- <a id="negative-lookbehind"></a>`(?<!…)` &mdash; Negative Lookbehind. Matches if the provided pattern would not match the preceding characters, but does not advance the current position. The pattern must have a fixed length (unbounded [quantifiers] are not permitted).