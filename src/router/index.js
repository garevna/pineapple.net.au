import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/plans',
    name: 'plans',
    component: () => import(/* webpackChunkName: "plans" */ '@/views/FibreInternetPlans.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/ContactUs.vue')
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
