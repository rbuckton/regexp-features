---
### YamlMime:Feature
feature: quoted-characters
syntax: *content
---
- `\Q … \E` &mdash; All characters following `\Q` and preceding the next `\E` are treated as literal characters. Example: `\Q.+\E` matches `.+` but not `aa`.
- `\Q … ` &mdash; If there is no trailing `\E`,  all characters until the end of the pattern are treated as literal characters.