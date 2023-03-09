import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import App from "./App";
import router from "./router";
import "./index.css";
import "element-plus/dist/index.css";

const app = createApp(App);


app.use(router);

app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");
