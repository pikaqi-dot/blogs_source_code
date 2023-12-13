import Vue from 'vue'
import VueRouter from './vue-router.js'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    //配置嵌套路由
    children: [
      {
        path: '/info',
        //这里就不单独写一个vue文件了，直接用渲染函数构造一个div
        component: { render(h) { return h('div', 'info page') } }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
