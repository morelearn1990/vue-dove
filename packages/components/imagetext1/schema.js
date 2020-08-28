const image = require("./demo.png");
const imageDefault = require("./1.png");
export default {
  componentName: "d-imagetext1",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "分布式中间件",
    },
    image: {
      "schema-type": "image",
      "schema-title": "图片",
      "schema-value": imageDefault,
    },
    direction: {
      "schema-type": "boolean",
      "schema-title": "方向",
      "schema-value": true,
    },
    des: {
      "schema-type": "textarea",
      "schema-title": "内容",
      "schema-value":
        "金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。",
    },
  },
};
