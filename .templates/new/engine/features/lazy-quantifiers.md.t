---
to: src/engines/<%=engine.id%>/features/lazy-quantifiers.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("lazy-quantifiers")
    if (!Feature) throw new Error("lazy-quantifiers")
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
