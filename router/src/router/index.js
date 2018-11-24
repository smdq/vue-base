import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import M1 from '@/components/M1'
import M2 from '@/components/M2'
import Params from '@/components/Params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default:HelloWorld,
        left:M1,
        right:M2
      }
    },
    {
     path:'/gohome',
     redirect:'/'//点击gohome是地址栏显示的地址和点击path:'/'一样
    },
    {
    path:'/goparams/:newsId/:newsTitle',
    redirect:'/params/:newsId/:newsTitle'
    },
    {
      path:'/smdq',
      name:'Hello',
      components:{
        default:HelloWorld,
        left:M2,
        right:M1
      }
    },
    {
      path:'/params/:newsId/:newsTitle',
      component:Params
    },
    {
      path:'/hi',
      name:'Hi',//有子路由 这里的name是没有用的
      component:Hi,
      alias:'/smdqRomeo',
      children:[
        {path:'/',name:'hi',component:Hi},
        {path:'hi1',name:'hi1',component:Hi1},
        {path:'hi2',name:'hi2',component:Hi2},
      ]
    }
  ]
})
