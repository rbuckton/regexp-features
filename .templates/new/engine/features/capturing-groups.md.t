---
to: src/engines/<%=engine.id%>/features/capturing-groups.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("capturing-groups")
    if (!Feature) throw new Error("capturing-groups")
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
