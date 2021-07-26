---
to: src/engines/<%=engine.id%>/features/non-backtracking-expressions.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("non-backtracking-expressions")
    if (!Feature) throw new Error("non-backtracking-expressions")
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
