import { createRouter, createWebHistory } from "vue-router";
import App from "../views/App.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: App,
    },
    {
      path: "/index",
      name: "landing_page",
      component: () => import("../views/LandingPage.vue"),
    },
    {
      path: "/titulos",
      name: "titulos",
      component: () => import("../views/CthulhuTitulos.vue"),
    },
    {
      path: "/privacidad",
      name: "privacidad",
      component: () => import("../views/PrivacyPolicy.vue"),
    },
    // {
    //   path: "/about",
    //   name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
