// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";

// const routes: Array<RouteRecordRaw> = [
const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
