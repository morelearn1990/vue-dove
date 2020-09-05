const image = require("./demo.png");
const icon1 = require("./1.png");
const icon2 = require("./2.png");
const icon3 = require("./3.png");
const icon4 = require("./4.png");
export default {
  componentName: "d-list3",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "我们的优势",
    },
    list: {
      "schema-type": "array",
      "schema-title": "列表",
      "schema-show": "title",
      "schema-max": 4,
      "schema-value": [
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "多媒体呈现",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸124*124，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon1,
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "可发送1.85M以内的超大容量内容\n约30s视频/10张高清图片/百万字",
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "高效触达",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸124*124，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon2,
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "使用门槛低，无需按安装APP\n覆盖面广，触达率高",
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "转化率高",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸124*124，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon3,
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "内容和形式有机组合\n吸引客户点击，实现更高转化",
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "多运营商覆盖",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸124*124，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon4,
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "支持三网发送，多通道支持\n全国范围覆盖，终端适配率高",
          },
        },
      ],
    },
  },
};
