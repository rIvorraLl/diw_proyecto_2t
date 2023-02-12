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
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminPage.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../views/EditBook.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../views/CreateBook.vue"),
    },
    {
      path: "/delete/:id",
      name: "delete",
      component: () => import("../views/DeleteBook.vue"),
    },
  ],
});

export default router;
