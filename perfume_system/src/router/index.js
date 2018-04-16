import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/login/Index'
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Home from '@/components/Home'
// 用户
import AdminList from '@/components/backgroundAdmin/system-management/adminList'
// 品牌
// import AddBrand from '@/components/backgroundAdmin/about-perfume/brand/addBrand'
import BrandList from '@/components/backgroundAdmin/about-perfume/brand/brandList'
// 原料
import MaterialList from '@/components/backgroundAdmin/about-perfume/material/materialList'
import MaterialList2 from '@/components/backgroundAdmin/about-perfume/material/materialList2'
// 分类
import ClassifyList from '@/components/backgroundAdmin/about-perfume/classify/classifyList'
// 书籍
import BookList from '@/components/backgroundAdmin/about-perfume/book/bookList'
// 电影
import MovieList from '@/components/backgroundAdmin/about-perfume/movie/movieList'
// 热门话题
import TopicList from '@/components/backgroundAdmin/system-management/topic/topicList'
// 精彩文章
import ArticleList from '@/components/backgroundAdmin/system-management/article/articleList'
// 今日之香
import TodayList from '@/components/backgroundAdmin/system-management/today/todayList'
// 前台
import foreIndex from '@/components/foregroundPage/index'
import Main from '@/components/foregroundPage/main'
import Centre from '@/components/foregroundPage/centre'
import Top from '@/components/foregroundPage/top'

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
          component: Centre
        },
        {
          path: '/top',
          name: 'Top',
          component: Top
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
          path: '/editTopic',
          name: 'TopicList',
          component: TopicList
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
