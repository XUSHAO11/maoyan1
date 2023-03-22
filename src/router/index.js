import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '@/views/HomeView.vue'
import home from '@/components/ShopShow.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: "/*",
    // 重定向
    redirect: '/'
  },
  {
    path: '/home1',
    name: 'home1',
 
  },
  {
    path: '/home2',
    name: 'home2',
  
  },
  {
    path: '/home3',
    name: 'home3',
  
  },
  
]

const router = new VueRouter({
  routes
})

export default router
