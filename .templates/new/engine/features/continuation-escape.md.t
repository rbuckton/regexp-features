---
to: src/engines/<%=engine.id%>/features/continuation-escape.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("continuation-escape")
    if (!Feature) throw new Error("continuation-escape")
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
