import schemaImagetext1 from "../components/imagetext1/schema";
import schemaList1 from "../components/list1/schema";
import schemaList2 from "../components/list2/schema";
import schemaList5 from "../components/list5/schema";

import { uuid } from "packages/utils";
import image from "./solution.png";

const template = {
  image: image,
  schema: [
    {
      ...schemaImagetext1,
      id: uuid(8, 16),
    },
    { ...schemaList1, id: uuid(8, 16) },
    { ...schemaList2, id: uuid(8, 16) },
    { ...schemaList5, id: uuid(8, 16) },
  ],
};
export default template;
