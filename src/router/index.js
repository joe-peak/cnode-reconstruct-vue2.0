import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MainSec from '@/components/MainSec'
import Article from '@/components/ArticleDetail'
import SideBar from '@/components/SideBar'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    if(savedPosition)
    {
      return savedPosition
    }
    else
    {
      return {x:0,y:0};
    }
  },
  routes: [
    {
      path: '/',
      name: 'RootRoute',
      component: MainSec
    },
    {
      path:'/topic/:id',
      name:'ArticleRoute',
      components:{
        default:Article,
        side:SideBar
      }
    },
    {
      path:'/user/:username',
      name:'UserRoute',
      component:UserInfo
    }
  ]
})
