import Vue from "vue";
import App from "./App.vue";

import { Editor, Components } from "../packages";

Vue.use(Editor);
Vue.use(Components);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
