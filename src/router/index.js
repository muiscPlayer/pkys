import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import Singer from '@/components/singer'
import Ranking from '@/components/Ranking'
import Grabble from '@/components/grabble'
import regist from '@/components/regist'
import login from '@/components/delv'
import xiangq from '@/components/xiangq'
Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'/',
      component:login
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/regist',
      component:regist
    },
    {
      path: '/homePage',
      component: homePage,
      children:[
        {
          path:'xiangq:id',
          component:xiangq
        }
      ]
    },
    // {
    //   path:'/xiangq:id',
    //   component:xiangq
    // },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/Ranking',
      component: Ranking
    },
    {
      path: '/grabble',
      component: Grabble
    },
  ]
  // routes: [
  //   {
  //     path: '/a',
  //     component: A
  //   },
  //   {
  //     path: '/b',
  //     component: B
  //   },
  //   {
  //   	path: '/',
  //   	redirect: {
  //   		path: '/a'
  //   	}
  //   }
  // ]
})
