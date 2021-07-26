---
to: src/engines/<%=engine.id%>/features/conditional-expressions.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("conditional-expressions")
    if (!Feature) throw new Error("conditional-expressions")
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
