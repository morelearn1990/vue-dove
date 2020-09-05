import { uuid } from "packages/utils";
import image from "./api.png";
export default {
  image,
  schema: [
    {
      componentName: "d-paragraph1",
      id: uuid(8, 16),
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
          "schema-value": "用户可以通过该产品进行线上下单、支付、退款等操作。",
        },
      },
    },
    {
      componentName: "d-paragraph2",
      id: uuid(8, 16),
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
              "schema-value": "用户选择购买合作方产品，并下单成功。",
            },
            {
              "schema-type": "text",
              "schema-title": "内容",
              "schema-value": "调用合作方平台支付接口进行支付。",
            },
            {
              "schema-type": "text",
              "schema-title": "内容",
              "schema-value": "对于支付成功的可选择退款操作。",
            },
          ],
        },
      },
    },
    {
      componentName: "d-paragraph2",
      id: uuid(8, 16),
      schema: {
        "schema-type": "object",
        title: {
          "schema-type": "text",
          "schema-title": "标题",
          "schema-value": "3、快速接入",
        },
        list: {
          "schema-type": "array",
          "schema-title": "内容列表",
          "schema-value": [
            {
              "schema-type": "text",
              "schema-title": "内容",
              "schema-value": "合作方注册成我行开放平台开发者。",
            },
            {
              "schema-type": "text",
              "schema-title": "内容",
              "schema-value": "创建应用并配置密钥，回调地址等信息。",
            },
            {
              "schema-type": "text",
              "schema-title": "内容",
              "schema-value": "搭建配置开发环境后，进行沙箱接口调用测试。",
            },
            {
              "schema-type": "text",
              "schema-title": "内容",
              "schema-value": "测试通过即可上线。",
            },
          ],
        },
      },
    },
    {
      componentName: "d-paragraph1",
      id: uuid(8, 16),
      schema: {
        "schema-type": "object",
        title: {
          "schema-type": "text",
          "schema-title": "标题",
          "schema-value": "4、准入条件",
        },
        content: {
          "schema-type": "richtext",
          "schema-title": "内容",
          "schema-value": "合作方在我行开发平台注册并实名认证和签约。",
        },
      },
    },
    {
      componentName: "d-paragraph3",
      id: uuid(8, 16),
      schema: {
        "schema-type": "object",
        title: {
          "schema-type": "text",
          "schema-title": "标题",
          "schema-value": "5、常见问题",
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
                "schema-value":
                  "支付的时候商户必须保证商户订单号在商户系统里是唯一的，否则可能会影响查询、退款、冲正功能，从而商户对账也会出现问题，请商户注意",
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
    },
  ],
};
