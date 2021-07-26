---
to: src/engines/<%=engine.id%>/features/non-capturing-groups.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("non-capturing-groups")
    if (!Feature) throw new Error("non-capturing-groups")
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
