import "./styles/normalize.css";
import "./styles/fonts/iconfont.css";
import "jodit/build/jodit.min.css";
import "../styles/global.less";

import Editor from "./editor.vue";
import AddPlaceholder from "./components/add-placeholder.vue";
import { install as schemaInstall } from "./components/schema-editor/index";

Editor.install = function (Vue) {
  schemaInstall(Vue);
  Vue.component(Editor.name, Editor);
  Vue.component(AddPlaceholder.name, AddPlaceholder);
};

export default Editor;
