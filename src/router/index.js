import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Maidi from '@/views/maidi'
import Kebi from '@/views/kebi'
import Juesha from '@/views/juesha'
import Wechat from '@/views/wechat'
import News from '@/views/news'
import Message from '@/views/message'

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
      component : Maidi,
      children : [
        {
          path : 'message',
          name : 'message',
          component : Message
        },
        {
          path: 'wechat',
          name: 'wechat',
          component : Wechat
        },
        {
          path: 'news',
          name: 'news',
          component : News
        }
      ]
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
