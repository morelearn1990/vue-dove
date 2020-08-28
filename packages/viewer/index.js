// 导入组件，组件必须声明 name
import Viewer from "./viewer.vue";

import "../styles/global.less";

// 为组件添加 install 方法，用于按需引入
Viewer.install = function (Vue) {
  Vue.component(Viewer.name, Viewer);
};

export default Viewer;