<template>
  <div class="main">
    <el-carousel :interval="4000" arrow="always" height="635px">
      <el-carousel-item v-for="(item,index) in imgURL" :key="index">
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="topic">
      <div class="content" v-for="(item,index) in articles" :key="index">
        <p class="title">{{item.title}}</p>
        <img src="../../assets/blank.png" alt="" style="margin:20px;">
        <div class="detail">
          <img :src="item.photo" alt="" width="300px;">
          <div>{{item.detail}}</div>
        </div>
      </div>
    </div>
    <div class="div">
      <div class="news">
        <p class="title">公告
          <span class="gray">Notice</span>
        </p>
        <p class="detail" v-for="(item,index) in news" :key="index">{{item.title}}
          <span class="date">{{item.date}}</span>
        </p>
      </div>
      <div class="about">
        <p class="title">关于我们
          <span class="gray">About Us</span>
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

export default {
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
      axios.getarticleAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          var data = res.data
          this.articles = data.filter(function(item) {
            return item.title !== ''
          })
        }
      })
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

.content {
  padding: 30px 0;
}

.topic .title {
  color: #2c2049;
  font-size: 22px;
}

.detail {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.content:nth-child(2n) .detail {
  flex-direction: row-reverse;
}

.detail div {
  width: 50%;
  text-align: justify;
  color: gray;
  font-size: 14px;
  text-indent: 2em;
  line-height: 30px;
}

.detail img {
  box-shadow: 5px 5px 5px #eee;
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

