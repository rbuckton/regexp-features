---
to: src/engines/<%=engine.id%>/features/wildcard.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("wildcard")
    if (!Feature) throw new Error("wildcard")
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
