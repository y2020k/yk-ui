/*
createTime:2022/11/21 11:17
path:src/components
proName:myUI
fileName:component
author:俞棵
remark:
*/

import MyButton from "@/packages/components/button";

const modulesFiles: Record<string, typeof MyButton> = import.meta.glob(
  "./components/**/src/index.vue",
  {
    import: "default",
    eager: true,
  }
);

export default modulesFiles;

export { MyButton };
