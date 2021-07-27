---
to: src/engines/<%=engine.id%>/features/quoted-characters.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("quoted-characters")
    if (!Feature) throw new Error("quoted-characters")
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
