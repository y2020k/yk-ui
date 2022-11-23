/*
createTime:2022/11/21 10:41
path:src/components/button
proName:myUI
fileName:index
author:俞棵
remark:
*/

import type { App } from "vue";

import MyButton from "./src/index.vue";
MyButton.install = function (app: App) {
  app.component(MyButton.name, MyButton);
  return app;
};

export default MyButton;
