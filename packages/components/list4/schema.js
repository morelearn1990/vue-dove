const image = require("./demo.png");
const icon1 = require("./1.png");
const icon2 = require("./2.png");
const icon3 = require("./3.png");
export default {
  componentName: "d-list4",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "为你推荐",
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
            "schema-value": "自动化营销",
          },
          url: {
            "schema-type": "url",
            "schema-title": "链接",
            "schema-value": "",
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
            "schema-value": "3种自动营销类型，无需编程，让没有技术经验的运营人员快速完成自动化流程",
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "国内短信",
          },
          url: {
            "schema-type": "url",
            "schema-title": "链接",
            "schema-value": "",
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
            "schema-value": "简单易用，安全稳定的短信服务，验证码短信5s内可达，提升注册登录转化、客户留存",
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "行为验证",
          },
          url: {
            "schema-type": "url",
            "schema-title": "链接",
            "schema-value": "",
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
            "schema-value": "帮助网站和 APP 智能区分人机，在注册登录、短信防刷、互动等环节防止恶意攻击",
          },
        },
      ],
    },
  },
};
