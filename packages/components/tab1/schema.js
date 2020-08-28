const image = require("./demo.png");
const image1 = require("./1.jpg");
const image2 = require("./2.jpg");
const image3 = require("./3.jpg");
export default {
  componentName: "d-tab1",
  image,
  schema: {
    "schema-type": "object",
    title: {
      "schema-type": "text",
      "schema-title": "标题",
      "schema-value": "应用场景",
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
            "schema-value": "区域信控优化",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value":
              "通过掌握城市交通历史通行规律，并实时感知机动车、非机动车、行人交通情况，采用AI图引擎技术、路口自适应训练算法、干线协调算法、场景化子区优化策略算法等，实现点-线-面信号配时优化，提升交通效率，保障通行",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸760*500",
            "schema-title": "图片",
            "schema-value": image1,
          },
          list: {
            "schema-type": "array",
            "schema-title": "内容列表",
            "schema-value": [
              {
                "schema-type": "textarea",
                "schema-title": "内容",
                "schema-value": "区域联动优化：从单路口信号灯控制、干线协调优化，到区域内多个相邻路口协同优化，覆盖点-线-面，实现区域内通行能力全局最优",
              },
              {
                "schema-type": "textarea",
                "schema-title": "内容",
                "schema-value": "精细化时段划分：基于早晚高峰和平峰期不同时间段交通特点划分时段，提供差异化信号配时，7*24小时全天候运行",
              },
              {
                "schema-type": "textarea",
                "schema-title": "内容",
                "schema-value": "智能实时信控：AI智能实时信控，分钟级自动优化和下发信号配时方案，全面兼容主流交通信号控制系统",
              },
            ],
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "内容",
            "schema-value": "拥堵诊断分析",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "基于多源数据融合，构建出长期的完整的道路健康档案，通过指标、时间特征、控制信息和人、车、非机动车的轨迹，从时间、空间和时空配给等多种维度量化分析诊断出拥堵成因",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸760*500",
            "schema-title": "图片",
            "schema-value": image2,
          },
          list: {
            "schema-type": "array",
            "schema-title": "内容列表",
            "schema-value": [
              {
                "schema-type": "textarea",
                "schema-title": "内容",
                "schema-value": "降本增效：AI辅助人工发现道路拥堵成因，降低现场人工勘测工作量，提升治堵效率",
              },
              {
                "schema-type": "textarea",
                "schema-title": "内容",
                "schema-value": "科学诊断：全息数据+AI算法+行业专家经验，给出科学全面的定量诊断，不再单一依赖人工经验",
              },
            ],
          },
        },
        {
          title: {
            "schema-type": "text",
            "schema-title": "内容",
            "schema-value": "交通事件检测",
          },
          des: {
            "schema-type": "textarea",
            "schema-title": "内容",
            "schema-value": "基于人工智能的交通事件检测，可以自动识别交通异常事件，引导交通出行，缓解突发性拥堵",
          },
          image: {
            "schema-type": "image",
            "schema-description": "建议尺寸760*500",
            "schema-title": "图片",
            "schema-value": image3,
          },
          list: {
            "schema-type": "array",
            "schema-title": "内容列表",
            "schema-value": [
              {
                "schema-type": "textarea",
                "schema-title": "内容",
                "schema-value": "信控联动，快速闭环：对诊断出的交通异常事件，触发信号灯AI自动优化以疏导交通，并实时告警",
              },
              {
                "schema-type": "textarea",
                "schema-title": "内容",
                "schema-value": "实时检测，秒级上报：基于视频实时检测交通异常事件，秒级上报告警，更快解决突发拥堵",
              },
            ],
          },
        },
      ],
    },
  },
};
