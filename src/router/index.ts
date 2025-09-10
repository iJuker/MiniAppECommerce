import Home from "@/pages/home/Home.vue";
import NotFound from "@/pages/no-found/NotFound.vue";
import ProductDetail from "@/pages/product-detail/ProductDetail.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: ProductDetail },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, // catch-all
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
