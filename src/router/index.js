import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/approche",
    name: "Approche",
    component: () => import("../views/Approche.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/conseils",
    name: "Conseils",
    component: () => import("../views/Conseils.vue"),
  },
  {
    path: "/digital",
    name: "Digital",
    component: () => import("../views/Digital.vue"),
  },
  {
    path: "/innovations",
    name: "Innovations",
    component: () => import("../views/Innovations.vue"),
  },
  {
    path: "/clients",
    name: "Clients",
    component: () => import("../views/Clients.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const scrollBehavior = (to, from, savedPosition) => {
  return savedPosition || { top: 0, left: 0 }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
});

export default router;
