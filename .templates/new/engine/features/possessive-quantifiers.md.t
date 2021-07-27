---
to: src/engines/<%=engine.id%>/features/possessive-quantifiers.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("possessive-quantifiers")
    if (!Feature) throw new Error("possessive-quantifiers")
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
