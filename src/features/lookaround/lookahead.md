---
### YamlMime:Feature
feature: lookahead
name: Lookahead
see_also:
- lookbehind
links:
- name: Positive Lookahead
  href: '#positive-lookahead'
- name: Negative Lookahead
  href: '#negative-lookahead'
description: *content.description
syntax: *content.syntax
---
# description
A <dfn>Lookahead</dfn> is a zero-width assertion that matches if the provided pattern would match the characters to the right of the current position.

# syntax
- <a id="positive-lookahead"></a>`(?=…)` &mdash; Positive Lookahead. Matches if the provided pattern would match but does not advance the current position.
- <a id="negative-lookahead"></a>`(?!…)` &mdash; Negative Lookahead. Matches if the provided pattern would not match, but does not advance the current position.