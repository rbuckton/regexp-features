---
to: src/engines/<%=engine.id%>/features/text-segment-boundaries.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("text-segment-boundaries")
    if (!Feature) throw new Error("text-segment-boundaries")
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