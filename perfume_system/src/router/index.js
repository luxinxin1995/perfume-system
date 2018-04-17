import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/login/Index'
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Home from '@/components/Home'
// 用户
import AdminList from '@/components/backgroundAdmin/system-management/adminList'
// 品牌
import BrandList from '@/components/backgroundAdmin/about-perfume/brand/brandList'
import ProductList from '@/components/backgroundAdmin/about-perfume/product/productList'
// 原料
import MaterialList from '@/components/backgroundAdmin/about-perfume/material/materialList'
import MaterialList2 from '@/components/backgroundAdmin/about-perfume/material/materialList2'
// 分类
import ClassifyList from '@/components/backgroundAdmin/about-perfume/classify/classifyList'
// 书籍
import BookList from '@/components/backgroundAdmin/about-perfume/book/bookList'
// 电影
import MovieList from '@/components/backgroundAdmin/about-perfume/movie/movieList'
// 精彩文章
import ArticleList from '@/components/backgroundAdmin/system-management/article/articleList'
// 公告
import TodayList from '@/components/backgroundAdmin/system-management/today/todayList'
// 前台
import foreIndex from '@/components/foregroundPage/index'
import Main from '@/components/foregroundPage/main'
import Centre from '@/components/foregroundPage/centre'
import Top from '@/components/foregroundPage/top'
import Knowledge from '@/components/foregroundPage/knowledge'
import Advisory from '@/components/foregroundPage/advisory'
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
          name: 'Centre',
          component: Centre,
          children: [
            {
              path: '/A',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/B',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/C',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/D',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/E',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/F',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/G',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/H',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/I',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/J',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/K',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/L',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/M',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/N',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/O',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/P',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/Q',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/R',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/S',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/T',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/U',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/V',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/W',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/X',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/Y',
              name: 'Centre',
              component: Centre
            },
            {
              path: '/Z',
              name: 'Centre',
              component: Centre
            }
          ]
        },
        {
          path: '/top',
          name: 'Top',
          component: Top
        },
        {
          path: '/knowledge',
          name: 'Knowledge',
          component: Knowledge
        },
        {
          path: '/advisory',
          name: 'Advisory',
          component: Advisory
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
      redirect: '/AdminList',
      children: [
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
          path: '/editBook',
          name: 'BookList',
          component: BookList
        },
        {
          path: '/editMovie',
          name: 'MovieList',
          component: MovieList
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
