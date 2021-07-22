---
### YamlMime:Feature
feature: buffer-boundaries
syntax: *content
---
- `\A` &mdash; Matches the start of the input.
- `\z` &mdash; Matches the end of the input.
- `\Z` &mdash; A zero-width assertion consisting of an optional newline at the end of the buffer. Equivalent to `(?=\n?\z)`.