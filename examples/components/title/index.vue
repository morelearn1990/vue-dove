<script>
const styleMap = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6" };
const decorateMap = { decorate1: "decorate1", decorate2: "decorate2", decorate3: "decorate3", decorate4: "decorate4", decorate5: "decorate5", decorate6: "decorate6", decorate7: "decorate7" };
export default {
  name: "d-title",
  props: {
    title: { type: String },
    titleStyle: { type: String },
    decorate: { type: String },
    position: { type: String },
  },
  render(h) {
    const { title, titleStyle, decorate, position } = this;
    const titleEl = styleMap[titleStyle] || "h1";
    const decorateClass = decorateMap[decorate] || "decorate1";
    return h(
      "div",
      {
        class: ["d-title", decorateClass],
        style: { justifyContent: position },
      },
      [
        h(
          titleEl,
          {
            class: ["title"],
          },
          title
        ),
      ]
    );
  },
};
</script>
