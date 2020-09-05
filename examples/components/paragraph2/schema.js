const image = require("./demo.png");
export default {
  componentName: "d-paragraph2",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "2、业务流程",
    },
    list: {
      "schema-type": "array",
      "schema-title": "内容列表",
      "schema-value": [
        {
          "schema-type": "text",
          "schema-title": "内容",
          "schema-value": "用户使用商户的APP客户端，在商户商城发起签约申请",
        },
        {
          "schema-type": "text",
          "schema-title": "内容",
          "schema-value": "商户将签约信息按照接口文档组包后提交至API平台",
        },
        {
          "schema-type": "text",
          "schema-title": "内容",
          "schema-value": "平台完成准入及商户认证操作后，将交易报文转EPAY处理",
        },
        {
          "schema-type": "text",
          "schema-title": "内容",
          "schema-value": "EPAY校验交易合法性后，展现签约页面",
        },
        {
          "schema-type": "text",
          "schema-title": "内容",
          "schema-value": "客户在银行的签约页面上完成免密协议签订",
        },
        {
          "schema-type": "text",
          "schema-title": "内容",
          "schema-value": "签约完毕后银行为客户展现交易结果页",
        },
        {
          "schema-type": "text",
          "schema-title": "内容",
          "schema-value": "银行异步将签约交易结果通知推送给商户",
        },
      ],
    },
  },
};
