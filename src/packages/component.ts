/*
createTime:2022/11/21 11:17
path:src/components
proName:myUI
fileName:component
author:俞棵
remark:
*/

import YkButton from "@/packages/components/button";
import YkInput from "@/packages/components/input";

const modulesFiles: Record<string, typeof YkButton> = import.meta.glob(
  "./components/**/src/index.vue",
  {
    import: "default",
    eager: true,
  }
);

export default modulesFiles;

export { YkButton, YkInput };
