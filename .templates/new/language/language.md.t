---
to: src/languages/<%=language.id%>/language.md
---
---
### YamlMime:Language
language: <%=language.id%>
name: <%=language.name%>
<% if (language.reference) { -%>
reference: <%=language.reference%>
<% } else { -%>
#reference:
<% } -%>
#description: *content.description
---