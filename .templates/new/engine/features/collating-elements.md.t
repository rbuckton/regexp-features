---
to: src/engines/<%=engine.id%>/features/collating-elements.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("collating-elements")
    if (!Feature) throw new Error("collating-elements")
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
