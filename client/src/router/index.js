import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProductDetailPage from "../pages/ProductDetailPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import MainLayout from "../layouts/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomePage,
        },
        {
          path: "product/:id",
          name: "product-detail",
          component: ProductDetailPage,
        },
        {
          path: "login",
          name: "login",
          component: LoginPage,
        },
        {
          path: "register",
          name: "register",
          component: RegisterPage,
        },
      ],
    },
  ],
});

export default router;