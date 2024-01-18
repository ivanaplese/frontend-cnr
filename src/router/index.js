
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/pretraži',
    name: 'pretrazi',
    component: () => import(/* webpackChunkName: "pretraga" */ '../views/PretraziView.vue')
  },
  {
    path: '/dodaj',
    name: 'dodaj vožnju',
    component: () => import(/* webpackChunkName: "dodaj" */ '../views/DodajView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: "/register",
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
