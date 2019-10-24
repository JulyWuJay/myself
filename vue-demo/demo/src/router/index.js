import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import china from '@/page/china/china'
import beijing from '@/page/china/beijing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'china',
          name: 'china',
          component: china,
          children: [
            {
              path: 'beijing',
              name: 'beijing',
              component: beijing
            }
          ]
        }
      ]
    }
  ]
})
