import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Emitters from "../views/Emitters.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/emitters", name: "Emitters", component: Emitters },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
