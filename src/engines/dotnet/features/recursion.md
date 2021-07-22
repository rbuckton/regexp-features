---
### YamlMime:EngineFeature
engine: dotnet
feature: recursion
supported: true
reference: https://docs.microsoft.com/en-us/dotnet/standard/base-types/grouping-constructs-in-regular-expressions#balancing-group-definitions
description: *content.description
syntax: *content.syntax
example: *content.example
---
# description

.NET's `Regex` class supports limited recursion through balancing groups. A <dfn>Balancing Group</dfn> uses the name of a previously defined [named capture group] as a stack, storing the interval between the current position and the last instance of the [named capture group] in the current name. You can then use a [conditional expression] to fail the matching algorithm if the previously defined [named capture group]'s stack is not empty when the match completes.

# syntax

- <code>(?\<*name1*-*name2*\> … )</code> &mdash; Where *name1* as the current group name and *name2* is a previously defined group. Stores
  the interval between *name2* and the current position in *name1* and deletes *name2*. Deleting *name2* reveals the previous definition of 
  *name2* allowing it to be used as a stack for captures.
- <code>(?\<-*name2*\> … )</code> &mdash; Where *name2* is a previously defined group. Stores the interval between *name2* and the 
  current position as the current capture and deletes *name2*. Deleting *name2* reveals the previous definition of  *name2* allowing 
  it to be used as a stack for captures.
- <code>(?'*name1*-*name2*' … )</code> &mdash; Where *name1* as the current group name and *name2* is a previously defined group. Stores
  the interval between *name2* and the current position in *name1* and deletes *name2*. Deleting *name2* reveals the previous definition of 
  *name2* allowing it to be used as a stack for captures.
- <code>(?'-*name2*' … )</code> &mdash; Where *name2* is a previously defined group. Stores the interval between *name2* and the 
  current position as the current capture and deletes *name2*. Deleting *name2* reveals the previous definition of  *name2* allowing 
  it to be used as a stack for captures.

# example

The following shows an example of matching balanced `<` and `>` brackets (assuming `x` mode for a multiline regular expression):
```re
^                               # matches the beginning of the input

[^<>]*                          # matches any number of non <> characters
(
    ((?'Open'<)[^<>]*)+         # matches an opening < followed by any number of non <> characters

    ((?'Close-Open'>)[^<>]*)+   # matches a closing > followed by any number of non <> characters,
                                # deleting the last match for 'Open'

)*                              # matches the preceding expression zero or more times.

(?(Open)(?!))                   # condition that fails the match if there are any remaining 'Open' matches

$                               # matches the end of the input
```

On a single line, the expression looks like this:
```re
^[^<>]*(((?'Open'<)[^<>]*)+((?'Close-Open'>)[^<>]*)+)*(?(Open)(?!))$
```