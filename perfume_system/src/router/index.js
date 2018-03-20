import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/login/Index'
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Home from '@/components/Home'
// 用户
import AdminList from '@/components/backgroundAdmin/system-management/adminList'
// 品牌
import AddBrand from '@/components/backgroundAdmin/about-perfume/brand/addBrand'
import BrandList from '@/components/backgroundAdmin/about-perfume/brand/brandList'
// 系列
import AddSeries from '@/components/backgroundAdmin/about-perfume/series/addSeries'
import SeriesList from '@/components/backgroundAdmin/about-perfume/series/seriesList'
// 原料
import AddMaterial from '@/components/backgroundAdmin/about-perfume/material/addMaterial'
import MaterialList from '@/components/backgroundAdmin/about-perfume/material/materialList'
// 分类
import AddClassify from '@/components/backgroundAdmin/about-perfume/classify/addClassify'
import ClassifyList from '@/components/backgroundAdmin/about-perfume/classify/classifyList'
// 书籍
import AddBook from '@/components/backgroundAdmin/about-perfume/book/addbook'
import BookList from '@/components/backgroundAdmin/about-perfume/book/bookList'
// 电影
import AddMovie from '@/components/backgroundAdmin/about-perfume/movie/addMovie'
import MovieList from '@/components/backgroundAdmin/about-perfume/movie/movieList'
// 热门话题
import AddTopic from '@/components/backgroundAdmin/system-management/topic/addTopic'
import TopicList from '@/components/backgroundAdmin/system-management/topic/topicList'
// 精彩文章
import AddArticle from '@/components/backgroundAdmin/system-management/article/addArticle'
import ArticleList from '@/components/backgroundAdmin/system-management/article/articleList'
// 今日之香
import AddToday from '@/components/backgroundAdmin/system-management/today/addToday'
import TodayList from '@/components/backgroundAdmin/system-management/today/todayList'
// 前台
import foreIndex from '@/components/foregroundPage/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'foreIndex',
      component: foreIndex
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
      children: [
        {
          path: '/addBrand',
          name: 'AddBrand',
          component: AddBrand
        },
        {
          path: '/editBrand',
          name: 'BrandList',
          component: BrandList
        },
        {
          path: '/addSeries',
          name: 'AddSeries',
          component: AddSeries
        },
        {
          path: '/editSeries',
          name: 'SeriesList',
          component: SeriesList
        },
        {
          path: '/addMaterial',
          name: 'AddMaterial',
          component: AddMaterial
        },
        {
          path: '/editMaterial',
          name: 'MaterialList',
          component: MaterialList
        },
        {
          path: '/addClassify',
          name: 'AddClassify',
          component: AddClassify
        },
        {
          path: '/editClassify',
          name: 'ClassifyList',
          component: ClassifyList
        },
        {
          path: '/addBook',
          name: 'AddBook',
          component: AddBook
        },
        {
          path: '/editBook',
          name: 'BookList',
          component: BookList
        },
        {
          path: '/addMovie',
          name: 'AddMovie',
          component: AddMovie
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
          path: '/addTopic',
          name: 'AddTopic',
          component: AddTopic
        },
        {
          path: '/editTopic',
          name: 'TopicList',
          component: TopicList
        },
        {
          path: '/addArticle',
          name: 'AddArticle',
          component: AddArticle
        },
        {
          path: '/editArticle',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: '/addToday',
          name: 'AddToday',
          component: AddToday
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
