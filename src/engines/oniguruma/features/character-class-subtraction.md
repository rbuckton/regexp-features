---
### YamlMime:EngineFeature
engine: oniguruma
feature: character-class-subtraction
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L210-L212
description: *content.description
syntax: ''
example: *content.example
---
# description
<dfn>Character Class Subtraction</dfn> allows you to exclude a class of characters from another class of characters in a [character class].

> NOTE: Oniguruma does not support character class subtraction directly, instead you must use a combination of [character class intersections] and [character class nested sets]

# example

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