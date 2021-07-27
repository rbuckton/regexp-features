---
to: src/engines/<%=engine.id%>/features/posix-character-classes.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("posix-character-classes")
    if (!Feature) throw new Error("posix-character-classes")
-%>
engine: <%=engine.id%>
feature: <%=Feature.feature.id%>
supported: <%=Feature.supported%>
<% if (Feature.supported && Feature.reference) { -%>
reference: <%=Feature.reference%>
<% } else { -%>
#reference: 
<% } -%>
#description: *content.description
#syntax: *content.syntax
#example: *content.example
---
