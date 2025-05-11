import { createRouter, createWebHistory } from "vue-router";
import Homeview from "@/views/Homeview.vue";
import JobViews from "@/views/JobsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homeview,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobViews,
    },
  ],
});

export default router;
