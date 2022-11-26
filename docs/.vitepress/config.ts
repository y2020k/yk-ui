/*
createTime:2022/11/26 8:49
path:docs/.vitepress
proName:myUI
fileName:config
author:俞棵
remark:
*/

import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/docs",
  // 网站标题
  title: "Yk UI",
  // 网站描述
  description: "yk-ui with vitePress",
  // 打包目录
  outDir: "./dist",
  lang: "en-CN",
  titleTemplate: "文档",
  head: [
    // 添加图标
    // ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    // 导航栏配置
    nav: [
      {
        text: "指南",
        link: "/guide/base/",
        activeMatch: "/guide/",
      },
      {
        text: "组件",
        link: "/components/base/button/",
        activeMatch: "/components/",
      },
      {
        text: "GitHub",
        link: "https://github.com/y2020k/yk-ui",
      },
    ],
    // 左侧导航栏配置
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [{ text: "导航", link: "/guide/base/" }],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            { text: "按钮", link: "/components/base/button/" },
            { text: "输入框", link: "/components/form/input/" },
          ],
        },
      ],
    },
    footer: {
      message: "Just try to build this.",
      copyright:
        'Copyright © 2019-present <a target="_blank" href="https://github.com/y2020k">Yu Ke</a>',
    },
  },
});
