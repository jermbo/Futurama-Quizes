import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/",
    name: "Quiz",
    component: () => import(/* webpackChunkName: "about" */ "../views/Quiz.vue")
  },
  {
    path: "/",
    name: "Summary",
    component: () => import(/* webpackChunkName: "about" */ "../views/Summary.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
