// 段落
import schemaTitle from "./title/schema";
import schemaParagraph1 from "./paragraph1/schema";
import schemaParagraph2 from "./paragraph2/schema";
import schemaParagraph3 from "./paragraph3/schema";
import schemaParagraph4 from "./paragraph4/schema";

// 列表
import schemaList1 from "./list1/schema";
import schemaList2 from "./list2/schema";
import schemaList3 from "./list3/schema";
import schemaList4 from "./list4/schema";
import schemaList5 from "./list5/schema";
import schemaList6 from "./list6/schema";

// banner
import schemaImagetext1 from "./imagetext1/schema";
import schemaImagetext2 from "./imagetext2/schema";

// tab
import schemaTab1 from "./tab1/schema";
import schemaTab2 from "./tab2/schema";
import schemaTab3 from "./tab3/schema";

export default {
  banner: {
    name: "横幅",
    children: [schemaImagetext1, schemaImagetext2],
  },
  list: {
    name: "列表",
    children: [schemaList1, schemaList2, schemaList3, schemaList4, schemaList5, schemaList6],
  },
  tab: {
    name: "标签",
    children: [schemaTab1, schemaTab2, schemaTab3],
  },
  // step: {
  //   name: "步骤",
  //   children: [],
  // },
  // button: {
  //   name: "按钮",
  //   children: [],
  // },
  paragraph: {
    name: "段落",
    children: [schemaTitle, schemaParagraph1, schemaParagraph2, schemaParagraph3, schemaParagraph4],
  },
  // FAQ: {
  //   name: "FAQ",
  //   children: [],
  // },
  // custom: {
  //   name: "自定义",
  //   children: [],
  // },
};
