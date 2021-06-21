import Vue from 'vue'
import Router from 'vue-router'
const _import = file => () => import('@/pages/' + file + '.vue')
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: _import("home")
    },
    {
      path: '/technology',
      name: 'technology',
      component: _import("technology")
    },
    {
      path: '/cases',
      name: 'cases',
      component: _import("cases")
    }
  ]
})