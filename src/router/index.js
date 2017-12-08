import Vue from 'vue'
import Router from 'vue-router'

/*路由加载方式采用es6的方式*/
/*
import Home from '@/pages/home/Home'
import WebsiteQuery from '@/pages/websiteQuery/WebsiteQuery'
import WebsiteMap from '@/pages/websiteQuery/WebsiteMap'
import BusinessHelper from '@/pages/businessHelper/BusinessHelper'
import Discovery from '@/pages/discovery/Discovery'
import Coupon from '@/pages/discovery/Coupon'
import UsedCoupon from '@/pages/discovery/UsedCoupon'
import NoUsedCoupon from '@/pages/discovery/NoUsedCoupon'
import ExpiredCoupon from '@/pages/discovery/ExpiredCoupon'
import PersonCenter from '@/pages/personCenter/PersonCenter'
import Login from '@/pages/login/Login'
import More from '@/pages/more/More'
*/


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component:resolve => require(['../pages/home/Home'],resolve),
      //component:Home,
      meta: {footerShow: true,headerShow:true,titleName:'首页'}  //footShow:是否显示Footer ,headerShow:是否显示Header
    },
    {
      path: '/websiteQuery',
      name: 'WebsiteQuery',
      component: resolve => require(['../pages/websiteQuery/WebsiteQuery'],resolve),
      //component: 'WebsiteQuery',
      meta: {footerShow: false,headerShow:true,titleName:'网点查询'}  //footShow:是否显示Footer ,headerShow:是否显示Header
    },
    {
      path: '/websiteMap',
      name: 'WebsiteMap',
      component: resolve => require(['../pages/websiteQuery/WebsiteMap'],resolve),
      //component: WebsiteMap,
      meta: {footerShow: false,headerShow:true,titleName:'网点地图'}  //footShow:是否显示Footer ,headerShow:是否显示Header
    },
    {
      path: '/discovery',
      name: 'Discovery',
      component: resolve => require(['../pages/discovery/Discovery'],resolve),
      //component:Discovery,
      meta: {footerShow: true,headerShow:false}
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: resolve => require(['../pages/discovery/Coupon'],resolve),
      //component: Coupon,
      redirect:'/used',
      children:[
        {
          path:'/used',
          name:'Used',
          component: resolve => require(['../pages/discovery/UsedCoupon'],resolve),
          //component:UsedCoupon,
          meta: {footerShow: false,headerShow:true,titleName:'已使用优惠卷'}
        },{
          path:'/noUse',
          name:'NoUse',
          component: resolve => require(['../pages/discovery/NoUsedCoupon'],resolve),
          //component:NoUsedCoupon,
          meta: {footerShow: false,headerShow:true,titleName:'未使用优惠卷'}
        },{
          path:'/expired',
          name:'Expired',
          component: resolve => require(['../pages/discovery/ExpiredCoupon'],resolve),
          //component:ExpiredCoupon,
          meta: {footerShow: false,headerShow:true,titleName:'已过期优惠卷'}
        }
        ]
    },


    {
      path: '/personCenter',
      name: 'PersonCenter',
      component: resolve => require(['../pages/personCenter/PersonCenter'],resolve),
      //component: PersonCenter,
      meta: {footerShow: true,headerShow:false}
    },
    {
      path: '/messageCenter',
      name: 'MessageCenter',
      component: resolve => require(['../pages/personCenter/MessageCenter'],resolve),
      //component: PersonCenter,
      meta: {footerShow: false,headerShow:true,titleName:'我的消息'}
    },
    {
      path: '/messageDetail',
      name: 'MessageDetail',
      component: resolve => require(['../pages/personCenter/MessageDetail'],resolve),
      //component: PersonCenter,
      meta: {footerShow: false,headerShow:true,titleName:'消息详情'}
    },
    {
      path: '/more',
      name: 'More',
      component: resolve => require(['../pages/more/More'],resolve),
      //component: More,
      meta: {footerShow: true,headerShow:true,titleName:'更多'}
    },
    {
      path: '/businessHelper',
      name: 'BusinessHelper',
      component: resolve => require(['../pages/businessHelper/BusinessHelper'],resolve),
      //component: BusinessHelper,
      meta: {footerShow: false,headerShow:true,titleName:'业务助手'}
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['../pages/login/Login'],resolve),
      //component: Login,
      meta: {footerShow: false,headerShow:false}
    }
  ]
})
