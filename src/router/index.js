import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
    {
      path: "/autores",
      name: "autores",
      component: () => import("../views/CthulhuAutores.vue"),
    },
    {
      path: "/libro/:id",
      name: "libro",
      component: () => import("../views/CthulhuLibro.vue"),
    },
  ],
});

export default router;
