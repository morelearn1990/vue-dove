const image = require("./demo.png");
export default {
  componentName: "d-list1",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "解决方案优势",
    },
    list: {
      "schema-type": "array",
      "schema-title": "列表",
      "schema-value": [
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "车企全链数据服务，助力业务增值",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "华为云AI全栈服务，提供高效的数据治理和AI模型开发工具，帮助用户围绕数据进行业务创新和数据增值变现，并提高市场效率，降低生产成本",
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "随需随用的云服务，助力仿真设计，缩短上市时间",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "标题",
            "schema-value": "华为云提供海量高性能计算和存储服务，让用户能够加快产品设计、工程仿真模拟工作，优化生产操作以缩短上市时间，提高发布效率，提升企业市场竞争力",
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "一站式微服务管理服务，助力车企新业务创新",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "标题",
            "schema-value": "华为云微服务+容器+安全的技术架构，全面优化高可用性、高安全性云平台，为用户快速拓展、全面布局新业务奠定坚实的基础，提升用户出行安全保障",
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "提供数字化平台，助力车企打造自身品牌",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "标题",
            "schema-value": "华为云提供数字化平台，不占有数据，秉着数据是属于车企、车企客户的原则，为用户提供技术手段，助力车企打造自身品牌",
          },
        },
      ],
    },
  },
};
