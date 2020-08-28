const image = require("./demo.png");
const imageBig = require("./1.png");
const image2 = require("./2.png");
const image3 = require("./3.png");
export default {
  componentName: "d-imagetext2",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "蚂蚁金融云提供专业的服务",
    },
    image: {
      "schema-type": "image",
      "schema-title": "图片",
      "schema-value": imageBig,
    },
    direction: {
      "schema-type": "boolean",
      "schema-title": "方向",
      "schema-value": true,
    },
    des: {
      "schema-type": "textarea",
      "schema-title": "内容",
      "schema-value": "基于阿里云计算强大的基础资源",
    },
    list: {
      "schema-type": "array",
      "schema-title": "内容列表",
      "schema-show": "title",
      "schema-value": [
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "技术",
          },
          image: {
            "schema-type": "image",
            "schema-title": "图片",
            "schema-value": image2,
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。",
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "开发",
          },
          image: {
            "schema-type": "image",
            "schema-title": "图片",
            "schema-value": image3,
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。",
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "融合",
          },
          image: {
            "schema-type": "image",
            "schema-title": "图片",
            "schema-value": image2,
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。",
          },
        },
      ],
    },
  },
};
