---
to: src/engines/<%=engine.id%>/features/character-class-escapes.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("character-class-escapes")
    if (!Feature) throw new Error("character-class-escapes")
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
