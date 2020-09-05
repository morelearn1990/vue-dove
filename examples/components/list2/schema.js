const image = require("./demo.png");
const icon1 = require("./1.png");
const icon2 = require("./2.png");
const icon3 = require("./3.png");
const icon4 = require("./4.png");
const icon5 = require("./5.png");
const icon6 = require("./6.png");
export default {
  componentName: "d-list2",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "为什么选择我们",
    },
    list: {
      "schema-type": "array",
      "schema-title": "列表",
      "schema-show": "title",
      "schema-value": [
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "安全防护",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸124*124，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon1,
          },
          list: {
            "schema-type": "array",
            "schema-title": "文字列表",
            "schema-value": [
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "公安部三级等保认证",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "银行级数据加密技术",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "256位秘钥证书、HTTPS加密",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "访问权限控住，用户数据隔离",
              },
            ],
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "稳定性高",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸124*124，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon2,
          },
          list: {
            "schema-type": "array",
            "schema-title": "文字列表",
            "schema-value": [
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "自研监控系统，数据自动分流",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "支持故障无缝对接",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "分布式部署，稳如磐石",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "业内领先技术保障",
              },
            ],
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "专业服务",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸124*124，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon3,
          },
          list: {
            "schema-type": "array",
            "schema-title": "文字列表",
            "schema-value": [
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "7*24小时服务",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "4s内急速响应",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "1分钟完成注册认证",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "VIP客户，1v1专属服务",
              },
            ],
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "接入方便",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸124*124，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon4,
          },
          list: {
            "schema-type": "array",
            "schema-title": "文字列表",
            "schema-value": [
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "一切服务皆为API",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "服务接入零难度",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "支持5种语言的SDK下载",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "部署简单，操作便捷",
              },
            ],
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "快速达到",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸124*124，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon5,
          },
          list: {
            "schema-type": "array",
            "schema-title": "文字列表",
            "schema-value": [
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "到达率99.9%，5s內可达",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "网关提交小于2s",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "高并发，下发速度大于10w条/秒",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "三网合一，百线直连通道",
              },
            ],
          },
        },
        {
          "schema-type": "object",
          title: {
            "schema-type": "text",
            "schema-title": "标题",
            "schema-value": "数据追踪",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸124*124，纯色透明背景",
            "schema-title": "图片",
            "schema-value": icon6,
          },
          list: {
            "schema-type": "array",
            "schema-title": "文字列表",
            "schema-value": [
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "短信状态真实呈现",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "发送记录实时查看",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "短链精准追踪发送效果",
              },
              {
                "schema-type": "text",
                "schema-title": "内容",
                "schema-value": "可视报表一目了然",
              },
            ],
          },
        },
      ],
    },
  },
};
