const image = require("./demo.png");
export default {
  componentName: "d-paragraph4",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "了解开放银行",
    },
    list: {
      "schema-type": "array",
      "schema-show": "title",
      "schema-title": "内容列表",
      "schema-value": [
        {
          "schema-type": "textarea",
          "schema-title": "内容",
          "schema-value": "云片自2013年成立以来，深耕云通讯领域，致力于革新企业与用户间的沟通方式，成为国内领先的云通讯服务商。",
        },
        {
          "schema-type": "textarea",
          "schema-title": "内容",
          "schema-value": "2019年云片开始构建客户增长平台，在助力企业与客户便捷沟通的基础上，为企业提供更多的营销产品及方案。",
        },
        {
          "schema-type": "textarea",
          "schema-title": "内容",
          "schema-value": "云片目前已支持短信、超级短信、营销云、身份认证等产品服务，帮助企业了解客户，获取客户，提升客户体验，为企业提供持续增长动力。",
        },
        {
          "schema-type": "textarea",
          "schema-title": "内容",
          "schema-value": "至今，云片已在全球拥有10个以上分支机构，覆盖电商、新零售、金融、O2O、教育等行业、拥有100000+的品牌客户。",
        },
      ],
    },
  },
};
