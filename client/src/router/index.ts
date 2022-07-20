import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/home/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homeComponent",
    component: HomeView,
  },
  {
    path: "/about",
    name: "aboutComponent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contactComponent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "contact" */ "../views/contact/ContactView.vue"
      ),
  },
  {
    path: "/article/pole-emploi-a-propos",
    name: "projectComponent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "project" */ "../views/project/ProjectView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
