/*
createTime:2022/11/21 10:41
path:src/components/button
proName:myUI
fileName:index
author:俞棵
remark:
*/

import type { App } from "vue";

import YkButton from "./src/index.vue";
YkButton.install = function (app: App) {
  app.component(YkButton.name, YkButton);
  return app;
};

export default YkButton;
