---
to: src/engines/<%=engine.id%>/engine.md
---
---
### YamlMime:Engine
engine: <%=engine.id%>
name: <%=engine.name%>
<% if (engine.reference) { -%>
reference: <%=engine.reference%>
<% } else { -%>
#reference:
<% } -%>
<% if (engine.languages) { -%>
languages:
<% for (const language of engine.languages) { -%>
- <%=language.id%>
<% } -%>
<% } else { -%>
#languages:
#- lang
<% } -%>
#description: *content.description
---