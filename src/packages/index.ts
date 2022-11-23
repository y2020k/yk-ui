/*
createTime:2022/11/21 11:20
path:src
proName:myUI
fileName:index
author:俞棵
remark:
*/

import type { App } from "vue";
import components from "./component";

export * from "./component";

const install = function (app: App) {
  Object.keys(components).forEach((name) => {
    let componentName = name.replace(/\.\/components\/([^/]*)\/.*\.vue$/, "$1");
    componentName =
      "My" + componentName.slice(0, 1).toUpperCase() + componentName.slice(1);
    const component = components[name];
    app.component(componentName, component);
  });
};

export default {
  install,
};
