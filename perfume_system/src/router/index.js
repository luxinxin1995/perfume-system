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
      children: [
        {
          path: '/settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: '/addShop',
          name: 'AddShop',
          component: AddShop
        }
      ]
    }
  ]
})
