---
to: src/engines/<%=engine.id%>/features/callouts.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("callouts")
    if (!Feature) throw new Error("callouts")
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
