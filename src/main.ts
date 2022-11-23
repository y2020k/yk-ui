import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import MyUI from "@/packages";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router).use(MyUI);

app.mount("#app");
