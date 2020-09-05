/**
 * 组件库入口
 * */

// 段落
import Title from "./title";
import Paragraph1 from "./paragraph1";
import Paragraph2 from "./paragraph2";
import Paragraph3 from "./paragraph3";
import Paragraph4 from "./paragraph4";

// 列表
import List1 from "./list1";
import List2 from "./list2";
import List3 from "./list3";
import List4 from "./list4";
import List5 from "./list5";
import List6 from "./list6";

// 图文
import Imagetext1 from "./imagetext1";
import Imagetext2 from "./imagetext2";

// tab
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";

// 功能组件

// 业务组件

// 所有组件列表
const components = [Tab3, Tab2, Tab1, Title, Paragraph1, Paragraph2, Paragraph3, Paragraph4, Imagetext1, Imagetext2, List1, List2, List3, List4, List5, List6];
const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  components.map((component) => Vue.component(component.name, component));
};

export default { install };
