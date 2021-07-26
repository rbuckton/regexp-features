---
to: src/engines/<%=engine.id%>/features/character-class-nested-set.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("character-class-nested-set")
    if (!Feature) throw new Error("character-class-nested-set")
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
