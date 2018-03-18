import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/login/Index'
import Login from '@/components/login/Login'
import User from '@/components/login/User'
import Admin from '@/components/login/Admin'
import Register from '@/components/login/Register'
import Home from '@/components/Home'
import Settings from '@/components/settings/settings'
import AddShop from '@/components/addData/AddShop'
import AddGoods from '@/components/addData/AddGoods'
import ShopList from '@/components/dataManager/ShopList'
import GoodsList from '@/components/dataManager/GoodsList'
import UserList from '@/components/dataManager/UserList'
import Main from '@/components/Main'
import Description from '@/components/description/Description'
import EchartBrand from '@/components/EChart/tendency'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/user',
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login,
          children: [
            {
              path: '/user',
              name: 'User',
              component: User
            },
            {
              path: '/admin',
              name: 'Admin',
              component: Admin
            }
          ]
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: 'Main',
          component: Main
        },
        {
          path: '/description',
          name: 'Description',
          component: Description
        },
        {
          path: '/echartBrand',
          name: 'EchartBrand',
          component: EchartBrand
        },
        {
          path: '/settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: '/addShop',
          name: 'AddShop',
          component: AddShop
        },
        {
          path: '/addGoods',
          name: 'AddGoods',
          component: AddGoods
        },
        {
          path: '/ShopList',
          name: 'ShopList',
          component: ShopList
        },
        {
          path: '/GoodsList',
          name: 'GoodsList',
          component: GoodsList
        },
        {
          path: '/UserList',
          name: 'UserList',
          component: UserList
        }
      ]
    }
  ]
})
