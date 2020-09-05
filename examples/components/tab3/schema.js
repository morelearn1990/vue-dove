const image = require("./demo.png");
const image1 = require("./1.png");
const image2 = require("./2.png");
const image3 = require("./3.png");
const image4 = require("./4.png");
export default {
  componentName: "d-tab3",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "场景方案和优势",
    },
    list: {
      "schema-type": "array",
      "schema-show": "title",
      "schema-title": "内容列表",
      "schema-value": [
        {
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "注册登录",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "描述",
            "schema-value":
              "在完美支持国内短信的同时，支持国际短信，助力企业拓展海外市场，覆盖217个国家和地区，1000+网关，支持全球语言，直连海外运营商，验证码短信5S内到达，目前云片已经在美国部署服务器，并通过专线服务链接，解决高延迟丢包问题，保证短信服务的稳定。",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸1000*500",
            "schema-title": "图片",
            "schema-value": image1,
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "会员营销",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "描述",
            "schema-value": "面向全球客户发送会员营销短信，提升客户复购率和客户粘性",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸1000*500",
            "schema-title": "图片",
            "schema-value": image2,
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "国际短信群发",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "描述",
            "schema-value": "利用自动化营销，自动区分国内号码和国际号码，轻松批量导入会员号码，一键发送，全球覆盖，通道直达，可设置定时任务，在合适的时间触达客户。",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸1000*500",
            "schema-title": "图片",
            "schema-value": image3,
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "会员通知",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "描述",
            "schema-value": "向会员发送订单通知、物流提醒、资金变动提醒、后台操作提醒等通知类短信，提升客户体验。",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸1000*500",
            "schema-title": "图片",
            "schema-value": image4,
          },
        },
      ],
    },
  },
};
