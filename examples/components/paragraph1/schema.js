const image = require("./demo.png");
export default {
  componentName: "d-paragraph1",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "1、功能介绍",
    },
    content: {
      "schema-type": "richtext",
      "schema-title": "内容",
      "schema-value":
        "免密支付由我行提供的客户、商户、银行三方签订的免密扣款协议。协议签订后，客户可以在签约商户消费时，按照协议约定的免密限额、免密交易次数享受免密支付。实现客户一次签约无需重复操作。",
    },
  },
};
