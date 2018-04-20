<template>
  <div class="main">
    <el-carousel :interval="4000" arrow="always" height="635px">
      <el-carousel-item v-for="(item,index) in imgURL" :key="index">
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
    <knowledge></knowledge>
    
    <div class="div">
      <div class="news">
        <p class="title">公告
          <i class="fa fa-bullhorn"></i>
        </p>
        <p class="detail" v-for="(item,index) in news" :key="index">{{item.title}}
          <span class="date">{{item.date}}</span>
        </p>
      </div>
      <div class="about">
        <p class="title">关于我们
          <i class="fa fa-user"></i>
        </p>
        <div style="float:left;">
          <p class="methods weibo gray">
            <i class="fa fa-weibo"></i>
            <a href="http://weibo.com/u/5327611403">官方微博</a>
          </p>
          <p class="methods weixin gray">
            <i class="fa fa-weixin"></i>微信公众号：大咖来说
            <span class="gray">punching-say</span>
          </p>
          <p class="methods QQ gray">
            <i class="fa fa-qq"></i>QQ号码：617916928</p>
          <p class="methods email gray">
            <i class="fa fa-envelope"></i>邮箱：617916928@qq.com</p>
        </div>
        <img src="../../assets/code.png" alt="" width="150px" style="float:right;">
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../../Api/api";
import knowledge from './knowledge'
export default {
  components: {
    knowledge
  },
  data() {
    return {
      imgURL: [
        { src: require("../../assets/c1.jpg") },
        { src: require("../../assets/c2.jpg") },
        { src: require("../../assets/c3.jpg") },
        { src: require("../../assets/c4.png") },
        { src: require("../../assets/c5.jpg") },
        { src: require("../../assets/c4.jpg") }
      ],
      articles: '',
      news: '',
      pageIndex: 1,
      pageSize: 100
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      axios.gettodayAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          var data = res.data
          this.news = data.filter(function(item) {
            return item.title !== ''
          })
          for (var i = 0; i < this.news.length; i++) {
            var element = this.news[i].date;
            element = new Date(element)
            console.log(element.toLocaleDateString())
            this.news[i].date = element.toLocaleDateString();
          }
        }
      })
    }
  }
}
</script>
<style scoped>
.el-carousel {
  overflow: unset;
}

.gray {
  color: gray;
  font-size: 14px;
}

.gray i {
  margin: 15px;
}

a {
  text-decoration: none;
  color: gray
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.carousel {
  width: 100%;
}

.carousel img {
  width: 100%;
  height: 100%;
}



.div {
  display: flex;
  justify-content: space-around;
}

.news,
.about {
  border: 1px solid #eeeeee;
  text-align: left;
  padding: 20px;
  margin-top: 20px;
}

.news .title {
  display: block;
  margin-bottom: 10px;
  color: #204f7a;
  font-size: 18px;
}
.about .title{
  display: block;
  margin-bottom: 10px;
  color: #204f7a;
  font-size: 18px;  
}
.news .detail {
  display: block;
  padding: 10px 0;
  font-size: 12px;
  border-bottom: 1px dotted #eee;
  color: gray;
}

.news .date {
  float: right;
}

.news {
  width: 32%;
}

.about {
  width: 32%;
}
</style>

