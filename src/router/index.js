import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-top',
    component: Home
  },
  {
    path: '/:section',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/connect',
    name: 'connect',
    component: () => import(/* webpackChunkName: "plans" */ '@/views/Connect.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/ContactUs.vue')
  },
  {
    path: '/covid',
    name: 'covid',
    component: () => import(/* webpackChunkName: "covid" */ '@/views/COVID19.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
