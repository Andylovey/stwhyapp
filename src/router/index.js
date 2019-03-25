import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Maidi from '@/views/maidi'
import Kebi from '@/views/kebi'
import Juesha from '@/views/juesha'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/maidi',
      name: 'maidi',
      component : Maidi
    },
    {
      path: '/kebi',
      name : 'kebi',
      component : Kebi
    },
    {
      path: '/juesha',
      name: 'juesha',
      component : Juesha
    }
  ]
})
