import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/plans',
    name: 'plans',
    component: () => import(/* webpackChunkName: "plans" */ '@/views/FibreInternetPlans.vue')
  },
  {
    path: '/research',
    name: 'research',
    component: () => import(/* webpackChunkName: "research" */ '@/views/Research.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
