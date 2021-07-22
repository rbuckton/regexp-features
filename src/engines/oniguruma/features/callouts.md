---
### YamlMime:EngineFeature
engine: oniguruma
feature: callouts
supported: true
reference: https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/RE#L322
#description: *content.description
syntax: *content.syntax
#example: *content.example
---
# description

A <dfn>Callout</dfn> is a user-defined function that can be evaluated while matching.

For more information on callouts, see the [Oniguruma Callouts API](https://github.com/kkos/oniguruma/blob/0bbd64dbfb7cd23646cc798470daa5223964cf5b/doc/CALLOUTS.API).

# syntax

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