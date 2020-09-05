const image = require("./demo.png");
const image1 = require("./1.png");
const icon1 = require("./icon1.png");
const icon2 = require("./icon2.png");
const icon3 = require("./icon3.png");
export default {
  componentName: "d-tab2",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "蚂蚁金融云提供专业的服务",
    },
    des: {
      "schema-type": "text",
      "schema-title": "描述",
      "schema-value": "基于阿里云计算强大的基础资源",
    },
    list: {
      "schema-type": "array",
      "schema-show": "title",
      "schema-title": "内容列表",
      "schema-value": [
        {
          title: {
            "schema-type": "text",
            "schema-title": "内容",
            "schema-value": "手机",
          },
          icon: {
            "schema-type": "image",
            "schema-description": "建议尺寸100*100，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon1,
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸884*796",
            "schema-title": "图片",
            "schema-value": image1,
          },
          list: {
            "schema-type": "array",
            "schema-title": "内容列表",
            "schema-value": [
              {
                title: {
                  "schema-type": "text",
                  "schema-title": "内容",
                  "schema-value": "技术",
                },
                des: {
                  "schema-type": "textarea",
                  "schema-title": "内容",
                  "schema-value": "丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。-线-面，实现区域内通行能力全局最优",
                },
              },
              {
                title: {
                  "schema-type": "text",
                  "schema-title": "内容",
                  "schema-value": "融合",
                },
                des: {
                  "schema-type": "textarea",
                  "schema-title": "内容",
                  "schema-value": "解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。-线-面，实现区域内通行能力全局最优",
                },
              },
              {
                title: {
                  "schema-type": "text",
                  "schema-title": "内容",
                  "schema-value": "开放",
                },
                des: {
                  "schema-type": "textarea",
                  "schema-title": "内容",
                  "schema-value": "符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。-线-面，实现区域内通行能力全局最优",
                },
              },
            ],
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "内容",
            "schema-value": "平板",
          },
          icon: {
            "schema-type": "image",
            "schema-description": "建议尺寸100*100，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon2,
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸884*796",
            "schema-title": "图片",
            "schema-value": image1,
          },
          list: {
            "schema-type": "array",
            "schema-title": "内容列表",
            "schema-value": [
              {
                title: {
                  "schema-type": "text",
                  "schema-title": "内容",
                  "schema-value": "技术",
                },
                des: {
                  "schema-type": "textarea",
                  "schema-title": "内容",
                  "schema-value": "丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。-线-面，实现区域内通行能力全局最优",
                },
              },
              {
                title: {
                  "schema-type": "text",
                  "schema-title": "内容",
                  "schema-value": "融合",
                },
                des: {
                  "schema-type": "textarea",
                  "schema-title": "内容",
                  "schema-value": "解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。-线-面，实现区域内通行能力全局最优",
                },
              },
              {
                title: {
                  "schema-type": "text",
                  "schema-title": "内容",
                  "schema-value": "开放",
                },
                des: {
                  "schema-type": "textarea",
                  "schema-title": "内容",
                  "schema-value": "符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。-线-面，实现区域内通行能力全局最优",
                },
              },
            ],
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "内容",
            "schema-value": "电脑",
          },
          icon: {
            "schema-type": "image",
            "schema-description": "建议尺寸100*100，纯色透明背景",
            "schema-title": "图标",
            "schema-value": icon3,
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸884*796",
            "schema-title": "图片",
            "schema-value": image1,
          },
          list: {
            "schema-type": "array",
            "schema-title": "内容列表",
            "schema-value": [
              {
                title: {
                  "schema-type": "text",
                  "schema-title": "内容",
                  "schema-value": "技术",
                },
                des: {
                  "schema-type": "textarea",
                  "schema-title": "内容",
                  "schema-value": "丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。-线-面，实现区域内通行能力全局最优",
                },
              },
              {
                title: {
                  "schema-type": "text",
                  "schema-title": "内容",
                  "schema-value": "融合",
                },
                des: {
                  "schema-type": "textarea",
                  "schema-title": "内容",
                  "schema-value": "解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。-线-面，实现区域内通行能力全局最优",
                },
              },
              {
                title: {
                  "schema-type": "text",
                  "schema-title": "内容",
                  "schema-value": "开放",
                },
                des: {
                  "schema-type": "textarea",
                  "schema-title": "内容",
                  "schema-value": "符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。-线-面，实现区域内通行能力全局最优",
                },
              },
            ],
          },
        },
      ],
    },
  },
};
