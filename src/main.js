import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import VueBootstrap from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(VueBootstrap)
  .mount("#app");
