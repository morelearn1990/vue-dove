const image = require("./demo.png");
export default {
  componentName: "d-list5",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "痛点",
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
            "schema-value": "缺乏有效触达渠道",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "客户注册之后不登录，登录之后不购买/充值，缺乏低成本触达客户的渠道",
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "客户激活的成本高",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "新注册用户成本高，想要低成本地去激活客户难",
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "效果无法衡量",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "帮助网站和 APP 发送短信之后无法统计点击、登录、激活转化地效果",
          },
        },
      ],
    },
  },
};
