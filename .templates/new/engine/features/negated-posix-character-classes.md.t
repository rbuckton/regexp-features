---
to: src/engines/<%=engine.id%>/features/negated-posix-character-classes.md
---
---
### YamlMime:EngineFeature
<%
    Feature = engine.features.get("negated-posix-character-classes")
    if (!Feature) throw new Error("negated-posix-character-classes")
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
