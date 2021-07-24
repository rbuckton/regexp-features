# Contributing to the documentation

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/)
or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

There are several ways to contribute to this project:

1. [Filing issues](#filing-issues)
1. [Adding new languages](#adding-new-languages)
1. [Adding new features](#adding-new-features)
1. [Adding new engines](#adding-new-engines)
1. [Improving the documentation](#improving-the-documentation)
1. [Changing documentation templates](#changing-documentation-templates)

# Filing Issues

Issues can be filed via the [GitHub Issues](https://github.com/rbuckton/regexp-features/issues) tab.

# Adding New Languages

To add a new language:

1. Copy `src/languages/.template.md` to a new file named `src/languages/<language-id>.md`, where *language-id* is a unique [*language identifier*](#language-identifier).
1. Edit `src/languages/<language-id>.md` and change the following fields in the YAML frontmatter:
    > NOTE: The `### YamlMime:Language` comment at the top of the frontmatter is required for validation and inclusion.

    > NOTE: The YAML schema for a language can be found in [scripts/schemas/yaml.json](scripts/schemas/yaml.json) (under `definitions/Language`).
    1. <a id="language-identifier"><a>`language` &mdash; (required) A unique identifier for the language. This should consist of lowercase alpha-numeric characters and `.` or `-` separators.
    1. `name` &mdash; (required) The human readable name of the language.
    1. `reference` &mdash; (required) A URL linking to more information about the language (such as an official documentation page).
    1. `description` &mdash; (optional) A markdown description for the language. To make it easier to use markdown formatting, you can use a [YAML alias](https://yaml.org/spec/1.2/spec.html#id2765878) to point to markdown content:
        - `*content` &mdash; An alias to the entire markdown document (excluding frontmatter).
        - `*content.description` &mdash; An alias to the first `# description` header in the markdown document.
    1. `see_also` &mdash; (optional) Either a markdown string or a list of link definitions pointing to other content:
        ```yml
        see_also:
        - c                            # A link to another language by its identifier
        - name: C++                    # A link to another programming language by its expanded form
          language: cpp
        - name: Oniguruma              # A link to an engine
          engine: oniguruma
        - name: Wildcards              # A link to a feature
          feature: wildcard
        - name: External Link          # A link to an external source
          href: https://example.com
        ```
    1. `links` &mdash; (optional) Markdown link references to add to the end of the document to make repeated `[Link Name]` references easier in markdown:
        ```yml
        - name: Foo                    # Use in markdown as [Foo] or [Foo][]
          href: https://example.com
        ```
    1. `content` &mdash; (optional) Overrides the generated content for the language and uses the supplied markdown instead. This isn't recommended unless specific custom rendering is required.
1. Edit `src/languages/language-toc.yml` and add an entry for the new [*language identifier*](#language-identifier) to the list.

# Adding New Features

To add a new feature:

1. Copy `src/features/.template.md` to a new file named `src/features/<feature-id>.md`, where *feature-id* is a unique [*feature identifier*](#feature-identifier).
1. Edit `src/features/<feature-id>.md` and change the following fields in the YAML frontmatter:
    > NOTE: The `### YamlMime:Feature` comment at the top of the frontmatter is required for validation and inclusion.

    > NOTE: The YAML schema for a feature can be found in [scripts/schemas/yaml.json](scripts/schemas/yaml.json) (under `definitions/Feature`).
    1. <a id="feature-identifier"><a>`feature` &mdash; (required) A unique identifier for the feature. This should consist of lowercase alpha-numeric characters and `.` or `-` separators.
    1. `name` &mdash; (required) The human readable name of the feature.
    1. `reference` &mdash; (required) A URL linking to more information about the feature (such as an official documentation page).
    1. `aliases` &mdash; (optional) A list of other names by which this feature is known. These are added as link references at the bottom of the markdown document to make repeated `[Link Name]` references easier in markdown. For example:
        ```yml
        name: Character Classes
        aliases:
        - Character Class
        ```
    1. `description` &mdash; (optional) A markdown description for the feature. To make it easier to use markdown formatting, you can use a [YAML alias](https://yaml.org/spec/1.2/spec.html#id2765878) to point to markdown content:
        - `*content` &mdash; An alias to the entire markdown document (excluding frontmatter).
        - `*content.description` &mdash; An alias to the first `# description` header in the markdown document.
    1. `syntax` &mdash; (optional) A markdown string describing a common or well-known syntax of the feature across multiple engines. To make it easier to use markdown formatting, you can use a [YAML alias](https://yaml.org/spec/1.2/spec.html#id2765878) to point to markdown content:
        - `*content` &mdash; An alias to the entire markdown document (excluding frontmatter).
        - `*content.syntax` &mdash; An alias to the first `# syntax` header in the markdown document.
    1. `example` &mdash; (optional) A markdown string describing an example usage of the feature across multiple engines. To make it easier to use markdown formatting, you can use a [YAML alias](https://yaml.org/spec/1.2/spec.html#id2765878) to point to markdown content:
        - `*content` &mdash; An alias to the entire markdown document (excluding frontmatter).
        - `*content.example` &mdash; An alias to the first `# example` header in the markdown document.
    1. `see_also` &mdash; (optional) Either a markdown string or a list of link definitions pointing to other content:
        ```yml
        see_also:
        - character-classes            # A link to another feature by its identifier
        - name: Wildcards              # A link to another feature by its expanded form
          feature: wildcard
        - name: C++                    # A link to a programming language
          language: cpp
        - name: Oniguruma              # A link to an engine
          engine: oniguruma
        - name: External Link          # A link to an external source
          href: https://example.com
        ```
    1. `links` &mdash; (optional) Markdown link references to add to the end of the document to make repeated `[Link Name]` references easier in markdown:
        ```yml
        - name: Foo                    # Use in markdown as [Foo] or [Foo][]
          href: https://example.com
        ```
    1. `content` &mdash; (optional) Overrides the generated content for the feature and uses the supplied markdown instead. This isn't recommended unless specific custom rendering is required.
1. Copy `src/engines/default/features/.template.md` to a new file named `src/engines/default/features/<feature-id>.md` where *feature-id* matches the [*feature identifer*](#feature-identifier) above.
    > NOTE: The `default` engine is used to define general-purpose fallback values for features in actual engines.
1. Edit `src/engines/default/features/<feature-id>.md` and change the following fields in the YAML frontmatter:
    > NOTE: The `### YamlMime:EngineFeature` comment at the top of the frontmatter is required for validation and inclusion.

    > NOTE: The YAML schema for a feature can be found in [scripts/schemas/yaml.json](scripts/schemas/yaml.json) (under `definitions/EngineFeature`).
    1. `feature` &mdash; (required) This much match the [*feature identifier*](#feature-identifier) above.
    1. `supported` &mdash; (optional) Set to `true` if this feature is generally supported across.
    1. `description`, `syntax`, `example` &mdash; (optional) These provide overrides for the same fields above, but can be used as the default value for the feature when referenced by an engine.
1. Edit `src/features/feature-toc.yml` and add an entry for the new [*feature identifier*](#feature-identifier) to the list.

# Adding New Engines

To add a new engine:

1. Copy the `src/engines/.template` directory to a folder named `src/engines/<engine-id>`, where *engine-id* is unique [*engine identifier*](#engine-identifier).
1. In the new engine folder:
    1. Edit `engine.md` and change the following fields in the YAML frontmatter:
        > NOTE: The `### YamlMime:Engine` comment at the top of the frontmatter is required for validation and inclusion.

        > NOTE: The YAML schema for an engine can be found in [scripts/schemas/yaml.json](scripts/schemas/yaml.json) (under `definitions/Engine`).
        1. <a id="engine-identifier"></a>`engine` &mdash; (required) A unique identifier for the engine. This should consist of lowercase alpha-numeric characters and `.` or `-` separators.
        1. `name` &mdash; (required) The human readable name of the engine.
        1. `reference` &mdash; (required) A URL linking to more information about the engine (such as an official documentation page).
        1. `languages` &mdash; (optional) An array of languages where the engine can generally be used. Each entry should be a *language identifier*.
        1. `description` &mdash; (optional) A markdown description for the engine. To make it easier to use markdown formatting, you can use a [YAML alias](https://yaml.org/spec/1.2/spec.html#id2765878) to point to markdown content:
            - `*content` &mdash; An alias to the entire markdown document (excluding frontmatter).
            - `*content.description` &mdash; An alias to the first `# description` header in the markdown document.
        1. `see_also` &mdash; (optional) Either a markdown string or a list of link definitions pointing to other content:
            ```yml
            see_also:
            - pcre                         # A link to another engine by its identifier
            - name: Oniguruma              # A link to another engine by its expanded form
              engine: oniguruma
            - name: Wildcards              # A link to a feature
              feature: wildcard
            - name: C++                    # A link to a programming language
              language: cpp
            - name: External Link          # A link to an external source
              href: https://example.com
            ```
        1. `links` &mdash; (optional) Markdown link references to add to the end of the document to make repeated `[Link Name]` references easier in markdown:
            ```yml
            - name: Foo                    # Use in markdown as [Foo] or [Foo][]
              href: https://example.com
            ```
        1. `content` &mdash; (optional) Overrides the generated content for the engine and uses the supplied markdown instead. This isn't recommended unless specific custom rendering is required.
    1. In the `features` subfolder, edit each feature markdown file to specify feature support for the engine:
        > NOTE: The `### YamlMime:EngineFeature` comment at the top of the frontmatter is required for validation and inclusion.

        > NOTE: The YAML schema for an engine feature can be found in [scripts/schemas/yaml.json](scripts/schemas/yaml.json) (under `definitions/EngineFeature`).
        1. `engine` &mdash; (required) A unique identifier for the engine. This should consist of lowercase alpha-numeric characters and `.` or `-` separators and should match the [engine identifier](#engine-identifier) of the supported engine.
        1. `feature` &mdash; (required) A unique identifier for the feature. This should consist of lowercase alpha-numeric characters and `.` or `-` separators and should match the [feature identifier](#feature-identifier) of the supported feature.
        1. `reference` &mdash; (required) A URL linking to more information about the feature (such as an official documentation page).
        1. `supported` &mdash; (required) Either `true` to indicate the feature is supported, or `false` to indicat the feature is not supported.
        1. `description` &mdash; (optional) A markdown description for the engine. If not supplied, a fallback `description` is used (either from `src/engines/default/<feature>.md` or from `src/features/<feature>.md`). To make it easier to use markdown formatting, you can use a [YAML alias](https://yaml.org/spec/1.2/spec.html#id2765878) to point to markdown content:
           - `*content` &mdash; An alias to the entire markdown document (excluding frontmatter).
           - `*content.description` &mdash; An alias to the first `# description` header in the markdown document.
        1. `syntax` &mdash; (optional) A markdown string describing the syntax of the feature for the engine. If not supplied, a fallback `syntax` is used (either from `src/engines/default/<feature>.md` or from `src/features/<feature>.md`). To make it easier to use markdown formatting, you can use a [YAML alias](https://yaml.org/spec/1.2/spec.html#id2765878) to point to markdown content:
           - `*content` &mdash; An alias to the entire markdown document (excluding frontmatter).
           - `*content.syntax` &mdash; An alias to the first `# syntax` header in the markdown document.
        1. `example` &mdash; (optional) A markdown string describing an example usage of the feature for the engine. If not supplied, a fallback `example` is used (either from `src/engines/default/<feature>.md` or from `src/features/<feature>.md`). To make it easier to use markdown formatting, you can use a [YAML alias](https://yaml.org/spec/1.2/spec.html#id2765878) to point to markdown content:
           - `*content` &mdash; An alias to the entire markdown document (excluding frontmatter).
           - `*content.example` &mdash; An alias to the first `# example` header in the markdown document.
        1. `see_also` &mdash; (optional) Either a markdown string or a list of link definitions pointing to other content:
            ```yml
            see_also:
            - pcre                         # A link to another engine by its identifier
            - name: Oniguruma              # A link to another engine by its expanded form
              engine: oniguruma
            - name: Wildcards              # A link to a feature
              feature: wildcard
            - name: C++                    # A link to a programming language
              language: cpp
            - name: External Link          # A link to an external source
              href: https://example.com
            ```
        1. `links` &mdash; (optional) Markdown link references to add to the end of the document to make repeated `[Link Name]` references easier in markdown:
            ```yml
            - name: Foo                    # Use in markdown as [Foo] or [Foo][]
              href: https://example.com
            ```
        1. `content` &mdash; (optional) Overrides the generated content for the engine and uses the supplied markdown instead. This isn't recommended unless specific custom rendering is required.
1. Edit `src/engines/engine-toc.yml` and add an entry for the new [*engine identifier*](#engine-identifier) to the list.

# Improving the Documentation

While browsing the generated documentation at https://rbuckton.github.io/regexp-features/, you will often see links to "Improve this Article" or "Improve this Section".
Clicking on one of those links will take you to a file edit page on https://github.com/rbuckton/regexp-features allowing you to make changes and easily create a PR.

# Changing Documentation Templates

This project uses [handlebars.js](https://handlebarsjs.com/) to generate documentation. The template files used to generate the documentation can be found in [scripts/templates](scripts/temlates).
