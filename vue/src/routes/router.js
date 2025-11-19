import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../layouts/AuthLayout.vue";
import Landing from "../modules/landing/Landing.vue";
import SignIn from "../modules/sigin/SignIn.vue";
import SignUp from "../modules/signup/SignUp.vue";

import MainLayout from "../layouts/MainLayout.vue";
import Home from "../modules/home/Home.vue";

const routes = [
  {
    path: "/",
    component: Landing
  },
  {
    path: "/signin",
    component: AuthLayout,
    children: [
      {
        path: "",
        component: SignIn
      }
    ]
  },
  {
    path: "/signup",
    component: AuthLayout,
    children: [
      {
        path: "",
        component: SignUp
      }
    ]
  },
  {
    path: "/home",
    component: MainLayout,
    children: [
      {
        path: "",
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;