import Vue, { VNode } from "vue";

export declare class Input extends Vue {
  /**
   * schema 数据数组，可以使用 v-model 进行数据绑定
   * @default []
   */
  value: object[];
  /**
   * 组件集合，
   * @property {name} 组件的分类名称
   * @property {children} 组件的列表，里面是组件的 schema 格式数据
   * @example
   * {
   *    banner: {
   *      name: "横幅",
   *      children: [schemaImagetext1, schemaImagetext2],
   *    },
   *    list: {
   *      name: "列表",
   *      children: [schemaList1, schemaList2, schemaList3, schemaList4, schemaList5, schemaList6],
   *    },
   * }
   *
   */
  components: object;
  /**
   * 模板集合，同components
   * @property {name} 模板的分类名称
   * @property {children} 模板的列表，里面是模板的 schema 格式数据
   * @example
   * {
   *    default: {
   *      name: "默认",
   *      children: [template1, template2],
   *    },
   * }
   */
  templates: object;
  /**
   * 自定义请求处理，图片上传、文件上传等处理。
   * @default []
   */
  request: function;
  /**
   * 值改变事件
   */
  $emit(eventName: "on-change"): this;
  /**
   * 发布事件
   */
  $emit(eventName: "on-publish"): this;
  /**
   * 另存为模板事件
   */
  $emit(eventName: "on-saveTemplate"): this;
}
