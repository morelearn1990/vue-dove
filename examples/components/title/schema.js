const image = require("./demo.png");
export default {
  componentName: "d-title",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "这是标题",
    },
    titleStyle: {
      "schema-type": "radio",
      "schema-title": "样式",
      "schema-option": [
        { value: "h1", label: "h1" },
        { value: "h2", label: "h2" },
        { value: "h3", label: "h3" },
        { value: "h4", label: "h4" },
        { value: "h5", label: "h5" },
      ],
      "schema-value": "h1",
    },
    position: {
      "schema-type": "radio",
      "schema-title": "位置",
      "schema-option": [
        { value: "flex-start", label: "左", icon: "" },
        { value: "center", label: "中", icon: "" },
        { value: "flex-end", label: "右", icon: "" },
      ],
      "schema-value": "center",
    },
    decorate: {
      "schema-type": "radio",
      "schema-title": "样式",
      "schema-option": [
        { value: "decorate1", label: "无" },
        { value: "decorate3", label: "实心" },
        { value: "decorate4", label: "圆" },
        { value: "decorate5", label: "双横粗" },
        { value: "decorate6", label: "双横细" },
        { value: "decorate2", label: "竖" },
        { value: "decorate7", label: "双竖" },
      ],
      "schema-value": "decorate1",
    },
  },
};
