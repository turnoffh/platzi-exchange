import { createWebHistory, createRouter } from "vue-router";
// import Vue from "vue";
// import Router from "vue-router";

import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";

const history = createWebHistory();
// Vue.use(Router);

// export default new Router({
export default createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/about",
      name: "about",
      component: About,
    },

    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },

    {
      path: "/:catchAll(.*)",
      name: "error",
      component: Error,
    },
  ],
});
