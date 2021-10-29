import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home/Home.vue'
import register from "@/router/views/home/auth/register";
import login from "@/router/views/home/auth/login";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'add_client',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
