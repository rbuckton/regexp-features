---
to: src/engines/<%=engine.id%>/features/branch-reset.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("branch-reset")
    if (!Feature) throw new Error("branch-reset")
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
