import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/login/Index'
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Home from '@/components/Home'
// 用户
import AdminList from '@/components/backgroundAdmin/system-management/adminList'
// 用户
import infoStatic from '@/components/backgroundAdmin/system-management/infoStatic'
// 品牌
import BrandList from '@/components/backgroundAdmin/about-perfume/brand/brandList'
import ProductList from '@/components/backgroundAdmin/about-perfume/product/productList'
// 原料
import MaterialList from '@/components/backgroundAdmin/about-perfume/material/materialList'
import MaterialList2 from '@/components/backgroundAdmin/about-perfume/material/materialList2'
// 分类
import ClassifyList from '@/components/backgroundAdmin/about-perfume/classify/classifyList'
// 精彩文章
import ArticleList from '@/components/backgroundAdmin/system-management/article/articleList'
// 公告
import TodayList from '@/components/backgroundAdmin/system-management/today/todayList'
// 前台
import foreIndex from '@/components/foregroundPage/index'
import Main from '@/components/foregroundPage/main'
import Brand from '@/components/foregroundPage/brand'
import Top from '@/components/foregroundPage/top'
import Articles from '@/components/foregroundPage/articles'
import Product from '@/components/foregroundPage/product'
import MessageBoard from '@/components/foregroundPage/MessageBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'foreIndex',
      component: foreIndex,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Main',
          component: Main
        },
        {
          path: '/centre',
          name: 'Brand',
          component: Brand,
          children: [
            {
              path: '/A',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/B',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/C',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/D',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/E',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/F',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/G',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/H',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/I',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/J',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/K',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/L',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/M',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/N',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/O',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/P',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/Q',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/R',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/S',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/T',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/U',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/V',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/W',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/X',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/Y',
              name: 'Brand',
              component: Brand
            },
            {
              path: '/Z',
              name: 'Brand',
              component: Brand
            }
          ]
        },
        {
          path: '/top',
          name: 'Top',
          component: Top
        },
        {
          path: '/articles',
          name: 'Articles',
          component: Articles
        },
        {
          path: '/product',
          name: 'Product',
          component: Product
        },
        {
          path: '/message',
          name: 'MessageBoard',
          component: MessageBoard
        }
      ]
    },
    {
      path: '/background',
      name: 'Index',
      component: Index,
      redirect: '/login',
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
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
      redirect: '/infoStatic',
      children: [
        {
          path: '/infoStatic',
          name: 'infoStatic',
          component: infoStatic
        },
        {
          path: '/editBrand',
          name: 'BrandList',
          component: BrandList
        },
        {
          path: '/editProduct',
          name: 'ProductList',
          component: ProductList
        },
        {
          path: '/editMaterial',
          name: 'MaterialList',
          component: MaterialList
        },
        {
          path: '/editMaterial2',
          name: 'MaterialList2',
          component: MaterialList2
        },
        {
          path: '/editClassify',
          name: 'ClassifyList',
          component: ClassifyList
        },
        {
          path: '/AdminList',
          name: 'AdminList',
          component: AdminList
        },
        {
          path: '/editArticle',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: '/editToday',
          name: 'TodayList',
          component: TodayList
        }
      ]
    }
  ]
})
