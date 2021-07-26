---
to: src/engines/<%=engine.id%>/features/lookbehind.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("lookbehind")
    if (!Feature) throw new Error("lookbehind")
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
