import Vue from "vue";
import App from "./App.vue";
import { Editor } from "../packages";
import Components from "./components";

import "./styles/index.less";

Vue.use(Editor);
Vue.use(Components);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
