import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue-3';
import VueDebounce from 'vue-debounce';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App).use(store).use(router);
app.use(BootstrapVue);
app.use(VueDebounce);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.config.globalProperties.axios.defaults.baseURL = 'https://degt-rs.ru';

app.mount('#app');
