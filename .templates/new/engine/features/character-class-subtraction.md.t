---
to: src/engines/<%=engine.id%>/features/character-class-subtraction.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("character-class-subtraction")
    if (!Feature) throw new Error("character-class-subtraction")
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
