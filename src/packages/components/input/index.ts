/*
createTime:2022/11/23 9:23
path:src/packages/components/input
proName:myUI
fileName:index
author:俞棵
remark:
*/

import type { App } from "vue";

import YkInput from "./src/index.vue";
YkInput.install = function (app: App) {
  app.component(YkInput.name, YkInput);
  return app;
};

export default YkInput;
