const image = require("./demo.png");
export default {
  componentName: "d-paragraph3",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "3、常见问题",
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
            "schema-value": "关于客户订单",
          },
          content: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "支付的时候商户必须保证商户订单号在商户系统里是唯一的，否则可能会影响查询、退款、冲正功能，从而商户对账也会出现问题，请商户注意",
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "关于客户所使用银行卡对退款功能的影响",
          },
          content: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "当天只支持全部退款，部分退款不支持；隔日全部支持部分退款、全部退款",
          },
        },
      ],
    },
  },
};
