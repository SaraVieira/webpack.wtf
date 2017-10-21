import Vue from 'vue'
import Router from 'vue-router'
import WebpackWTF from '@/components/WebpackWTF'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: WebpackWTF
    }
  ]
})
