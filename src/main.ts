import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueBridgeGateway from "vue-bridge-gateway";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);

app.use(VueBridgeGateway, { debug: true, delay: 200 });
app.use(Vue3Toastify, {
  autoClose: 1000,
  theme: "colored",
} as ToastContainerOptions);
app.use(router);
app.mount("#app");
