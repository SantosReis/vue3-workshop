import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Emitters from "../views/Emitters.vue";
import Posts from "../views/Posts.vue";
import PostsDetail from "../views/PostsDetail.vue";
import Watchers from "../views/Watchers.vue";
import LifecycleHooks from "../views/LifecycleHooks.vue";
import DynamicComponent from "../views/DynamicComponent.vue";
import Teleport from "../views/Teleport.vue";
import Slots from "../views/Slots.vue";
import Computed from "../views/Computed.vue";
import ComputedWatch from "../views/ComputedWatch.vue";
import Signals from "../views/Signals.vue";
import ArrayMethods from "../views/ArrayMethods.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/posts", name: "Posts", component: Posts },
  { path: "/postDetail/:id", name: "PostsDetail", component: PostsDetail },
  { path: "/emitters", name: "Emitters", component: Emitters },
  { path: "/watchers", name: "Watchers", component: Watchers },
  { path: "/teleport", name: "Teleport", component: Teleport },
  { path: "/slots", name: "Slots", component: Slots },
  { path: "/computed", name: "Computed", component: Computed },
  { path: "/computed-watch", name: "ComputedWatch", component: ComputedWatch },
  { path: "/signals", name: "Signals", component: Signals },
  { path: "/array-methods", name: "ArrayMethods", component: ArrayMethods },
  {
    path: "/dynamic-component",
    name: "DynamicComponent",
    component: DynamicComponent,
  },
  {
    path: "/lifecycle-hooks",
    name: "LifecycleHooks",
    component: LifecycleHooks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
