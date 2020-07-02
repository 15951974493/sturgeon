import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from 'element-ui'

Vue.use(Router)
Vue.use(ElementUi)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index')
    },
    {
      path:'/',
      name:'homepage',
      component: () => import('@/views/homepage/index')
    }
  ]
})
