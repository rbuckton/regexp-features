---
### YamlMime:EngineFeature
engine: boost.regex
feature: negated-posix-character-classes
supported: false
description: *content.description
---
# description

A <dfn>Negated Posix Character Class</dfn> is a member of a [Character Class] set that specifies a named, pre-defined set of excluded characters.

> NOTE: Some engines support negated posix character classes using <code>\[\[:^<em>name</em>:\]\]</code>, however this does not seem to be supported per the documentation. Instead, you must use a [Negated Character Class] with a [Posix Character Class]: <code>\[^\[:<em>name</em>:\]\]</code>.