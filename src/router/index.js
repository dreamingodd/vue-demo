import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'map',
      component: Map
    }
    // ,
    // {
    //   path: '/balance',
    //   name: 'balance',
    //   component: Balance
    // },
    // {
    //   path: '/transfer',
    //   name: 'transfer',
    //   component: Transfer
    // }
  ]
})
