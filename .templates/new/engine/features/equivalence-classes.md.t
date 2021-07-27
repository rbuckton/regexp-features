---
to: src/engines/<%=engine.id%>/features/equivalence-classes.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("equivalence-classes")
    if (!Feature) throw new Error("equivalence-classes")
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
