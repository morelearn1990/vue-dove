import SchemaArray from "./array";
import SchemaBoolean from "./boolean";
import SchemaCascade from "./cascade";
import SchemaColor from "./color";
import SchemaEnum from "./enum";
import SchemaRadio from "./radio";
import SchemaFile from "./file";
import SchemaImage from "./image";
import SchemaObject from "./object";
import SchemaRichText from "./richtext";
import SchemaText from "./text";
import SchemaTextarea from "./textarea";
import SchemaUrl from "./url";

const components = [SchemaArray, SchemaBoolean, SchemaCascade, SchemaColor, SchemaEnum, SchemaRadio, SchemaFile, SchemaImage, SchemaObject, SchemaRichText, SchemaText, SchemaTextarea, SchemaUrl];
// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;
  // 遍历注册所有组件
  components.map((component) => Vue.component(component.name, component));
};
let register_components = {};
components.forEach((item) => {
  register_components[item.name] = item;
});

export { install, register_components };
