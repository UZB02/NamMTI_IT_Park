import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CoursesLayout from "../layouts/CoursesLayout/CoursesLayout.vue";
import AppLayout from "../layouts/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: AppLayout,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/courses",
      name: "Courses",
      component: () => import("../views/Courses.vue"),
      meta: {
        layout: CoursesLayout,
      },
    },
    {
      path: "/courses/computer_literacy",
      name: "Computer Literacy",
      component: () => import("../views/CoursesIDView.vue"),
      meta: {
        layout: CoursesLayout,
      },
    },
    {
      path: "/courses/front_end",
      name: "Front End",
      component: () => import("../views/FrontEndID.vue"),
      meta: {
        layout: CoursesLayout,
      },
    },
    {
      path: "/courses/backend",
      name: "Backend",
      component: () => import("../views/BackendIDView.vue"),
      meta: {
        layout: CoursesLayout,
      },
    },
    {
      path: "/courses/react",
      name: "React",
      component: () => import("../views/RNTView.vue"),
      meta: {
        layout: CoursesLayout,
      },
    },
    {
      path: "/courses/tg_bot",
      name: "Telegram Bot",
      component: () => import("../views/TgBotView.vue"),
      meta: {
        layout: CoursesLayout,
      },
    },
    {
      path: "/404",
      name: "404",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ErrorPageView.vue"),
      meta: {
        layout: AppLayout,
      },
    },
  ],
});

export default router;
