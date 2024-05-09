import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Emitters from "../views/Emitters.vue";
import Posts from "../views/Posts.vue";
import PostsDetail from "../views/PostsDetail.vue";
import Watchers from "../views/Watchers.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/posts", name: "Posts", component: Posts },
  { path: "/postDetail/:id", name: "PostsDetail", component: PostsDetail },
  { path: "/emitters", name: "Emitters", component: Emitters },
  { path: "/watchers", name: "Watchers", component: Watchers },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
