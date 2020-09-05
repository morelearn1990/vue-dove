const image = require("./demo.png");
const icon1 = require("./1.png");
const icon2 = require("./2.png");
const icon3 = require("./3.png");
export default {
  componentName: "d-list6",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "常见问题",
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
            "schema-value": "新手指南",
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
          list: {
            "schema-type": "array",
            "schema-title": "列表内容",
            "schema-value": [
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "域名注册规则?",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "域名解析的记录类型？",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "注册域名有什么限制？",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "域名和网址的区别？",
              },
            ],
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "产品帮助",
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
          list: {
            "schema-type": "array",
            "schema-title": "内容列表",
            "schema-value": [
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "域名购买流程",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "域名价格说明",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "域名实名认证",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "域名解析流程",
              },
            ],
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "常见问题",
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
          list: {
            "schema-type": "array",
            "schema-title": "内容列表",
            "schema-value": [
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "提示该域名后缀不支持备案?",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "什么是模板？",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "渔民转移过程中还能正常解析么？",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "怎样设置域名转发",
              },
            ],
          },
        },
      ],
    },
  },
};
