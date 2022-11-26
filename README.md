# myUI

## 项目初始化

```sh
npm install
```

### 项目启动

```sh
npm run dev
```

### 项目打包

```sh
npm run build
```

### 运行单元测试 [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before
deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 引入

```typescript
import MyUI from "@/packages";
const app = createApp(App).use(MyUI).mount("#app");
```

### Button 按钮

```vue
<template>
  <YkButton>确认</YkButton>
</template>
```

### Input 输入框

```vue

<script setup lang="ts">
import { ref } from "vue";

const text = ref("")
</script>
<template>
  <YkInput v-model="text" prefix="金额" suffix="元"></YkInput>
</template>
```
