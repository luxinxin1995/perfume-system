<template>
  <div class="container">
    <el-container>
      <el-header>
        <div class="head">
          <span class="user">
            <el-dropdown trigger="click" @command="handleCommand" v-show="isLogin" style="color:white;">
              <span class="el-dropdown-link" style="display:flex;align-items:center;justify-content:space-between;width:100px;">
                <span>{{username}}</span>
                <img src="../../assets/bg.jpg" alt="" style="width:50px;height:50px;border-radius:50%">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="back" v-show="admin">返回系统</el-dropdown-item>
                <el-dropdown-item command="out">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <router-link to="/login" v-show="loginOut">登录</router-link>
            <router-link to="/register" v-show="loginOut">注册</router-link>
          </span>
        </div>
        <div class="text">
          <p>香水时代</p>
          <p>NOSETIME</p>
        </div>
      </el-header>
      <el-main>
        <!--幻灯片-->
        <el-container>
          <div class="left">
            <div class="carousel">
              <el-carousel :interval="4000" arrow="always" height="450px">
                <el-carousel-item v-for="(item,index) in imgURL" :key="index">
                  <img :src="item.src" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
            <!--香水品牌-->
            <div class="topic">
              <p class="title">香水品牌</p>
              <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;">
                <div class="detail" v-for="(item, index) in brand" :key="item.animal" style="width:150px;">
                  <p class="animal" style="display:flex;flex-direction:column;align-items:center;">
                    <img :src="item.logo" alt="" width="100px;">
                    <span>{{item.ChineseName}}</span>
                    <span style="float:right;">{{item.EnglishName}}</span>
                  </p>
                </div>
              </div>
            </div>
            <!--关于香水的电影-->
            <div class="topic">
              <p class="title">关于香水的电影</p>
              <div class="detail" v-for="(item,index) in movie" :key="index"style="display:flex;justify-content:space-between;">
                <img :src="item.logo" alt="" width="300px" height="400px;" style="margin-right:30px;">
                <div>
                  <p style="font-size:22px;color:black;">{{item.name}}
                    <span style="font-size:16px;color:black;">&#X3000;{{item.classify}}</span>
                  </p>
                  <p style="font-size:16px;display:block;margin:10px 0;color:black;">国家/地区：<span style="color:gray;">{{item.country}}</span></p>
                  <p style="font-size:16px;color:black;text-align:justify">剧情简介：<span style="font-size:14px;line-height:26px;color:gray;">{{item.desc}}</span></p>
                </div>
              </div>
            </div>
            <!--关于香水的书籍-->
            <div class="topic">
              <p class="title">关于香水的书籍</p>
              <div class="detail" v-for="(item,index) in book" :key="index"style="display:flex;justify-content:space-between;">
                <img :src="item.logo" alt="" width="200px;" style="margin-right:30px;">
                <div>
                  <p style="font-size:22px;color:black;">{{item.name}}</p>
                  <p style="font-size:16px;display:block;margin:10px 0;color:black;">作者：<span style="color:gray;">{{item.author}}</span></p>
                  <p style="font-size:16px;color:black;">剧情简介：<span style="font-size:14px;line-height:26px;color:gray;">{{item.desc}}</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <!--今日之香-->
            <div class="today">
              <p class="title">今日之香</p>
              <img :src="logo" alt="">
              <p class="smallTitle">{{title}}</p>
              <p class="detail">{{detail}}</p>
            </div>
            <!--香水分类-->
            <div class="topic">
              <p class="title">香水分类</p>
              <el-table :data="tableData">
                <el-table-column prop="odortype" label="香型">
                </el-table-column>
                <el-table-column prop="flavour" label="味道">
                </el-table-column>
                <el-table-column prop="concentration" label="浓度">
                </el-table-column>
                <el-table-column prop="rank" label="等级">
                </el-table-column>
              </el-table>
            </div>
            <!--香水原料-->
            <div class="topic">
              <p class="title">香水原料</p>
              <div class="detail" v-for="(item, index) in material" :key="item.animal">
                <p class="animal">{{item.animal}}
                  <span>：{{item.animaldesc}}</span>
                </p>
              </div>
              <div class="detail" v-for="(item, index) in material2" :key="item.plant">
                <p class="plant">{{item.plant}}
                  <span>：{{item.plantdesc}}</span>
                </p>
              </div>
            </div>

            <!--热门话题-->
            <div class="topic">
              <p class="title">热门话题</p>
              <div class="detail" v-for="(item,index) in topicTitle" :key="index">
                <p>{{item.title}}</p>
              </div>
            </div>
            <!--精彩文章-->
            <div class="topic">
              <p class="title">精彩文章</p>
              <div class="detail" v-for="(item,index) in article" :key="index">
                <p>{{item.title}}</p>
              </div>
            </div>
            <!--关注我们-->
            <div class="topic">
              <p class="title">关注我们</p>
              <div class="detail focus">
                <p>
                  <i class="fa fa-weibo ft-weibo"></i>&#x3000;官方微博：13328942916</p>
                <p>
                  <i class="fa fa-weixin ft-weixin"></i>&#x3000;微信公众号：punching-say</p>
                <p><img src="../../assets/code.png" alt=""></p>
              </div>
            </div>
          </div>
        </el-container>
      </el-main>
      <el-footer>
        <div>
          <p class="title">
            <span>关于</span>
            <span>微博</span>
            <span>微信</span>
            <span>网站</span>
          </p>
          <p>
            <i class="fa fa-weibo ft-weibo"></i>&#x3000;
            <i class="fa fa-weixin ft-weixin"></i>
          </p>
          <p>©2018 ▪ 最美香水 ▪ ALL RIGHTS RESERVED ▪ 福建省宁德师范学院 ▪ 14级 ▪ 计算机科学与技术师范班 ▪ 陆欣欣</p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from '../../Api/api'
export default {
  data() {
    return {
      isCollapse: true,
      isLogin: false,
      username: '',
      admin: false,
      loginOut: true,
      pageIndex: 1,
      pageSize: 40,
      logo: '',
      title: '',
      detail: '',
      article: [],
      topicTitle: [],
      brand: [],
      material: [],
      material2: [],
      tableData: [],
      movie: [],
      book: [],
      imgURL: [
        { src: require('../../assets/c1.jpg') },
        { src: require('../../assets/c2.jpg') },
        { src: require('../../assets/c3.jpg') },
        { src: require('../../assets/c4.png') },
        { src: require('../../assets/c5.jpg') },
        { src: require('../../assets/c6.jpg') },
      ]
    }
  },
  created() {
    this.getData()
  },
  watch: {
    $route: function() {
      this.getData();
    }
  },
  methods: {
    handleCommand(command) {
      if (command == 'out') {
        this.$confirm('您确定要退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出登录成功!'
          });
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('userInfo');
          this.loginOut = true;
          this.isLogin = false;
          this.$router.push({
            name: 'foreIndex'
          });
        })
      }
      if (command == 'back') {
        this.$router.push({ name: 'Home' })
      }
    },
    getData() {
      var self = this;
      // 获取个人用户信息
      axios.getId(sessionStorage.getItem('username'), res => {
        if (res.code == 'success') {
          //获取表中id
          self.id = res.id;
          sessionStorage.setItem('id', res.id);
          axios.getInfo(res.id, data => {
            //获取个人信息
            var result = data.data;
            sessionStorage.setItem("userInfo", JSON.stringify(result));
            self.username = result.username;
            self.loginOut = false;
            self.isLogin = true;
            if (self.username == 'admin') {
              this.admin = true
            } else {
              this.admin = false
            }
          });
        }
      });
      // 获取香水品牌
      axios.getbrandAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          this.brand = res.data
        }
      });
      // 获取香水动物原料
      axios.getmaterialAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          this.material = res.data
        }
      });
      // 获取香水植物原料
      axios.getmaterial2All(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          this.material2 = res.data
        }
      });
      // 获取香水分类
      axios.getclassifyAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          this.tableData = res.data
        }
      });
      // 获取今日之香
      axios.gettodayAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          this.title = res.data[0].title
          this.detail = res.data[0].detail
          this.logo = res.data[0].logo
        }
      });
      // 获取关于香水的电影
      axios.getmovieAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          console.log(res.data)
          this.movie = res.data
        }
      });
      // 获取关于香水的书籍
      axios.getbookAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          console.log(res.data)
          this.book = res.data
        }
      });
      // 获取热门话题
      axios.gettopicAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          this.topicTitle = res.data
        }
      });
      // 获取精彩文章
      axios.getarticleAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          this.article = res.data
        }
      });
    }
  }
}
</script>
<style scoped>
.el-header {
  height: 360px!important;
  background-image: url('../../assets/head.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 20px 150px 0 150px;
}

.el-header .head {
  word-spacing: 20px;
}

.el-header .head .brand {
  float: left;
}

.el-header .head .user {
  float: right
}

.el-header .text {
  display: block;
  margin-top: 150px;
  color: rgba(255, 255, 255, .3);
  font-family: '楷体';
  font-size: 30px;
}

.el-header a {
  text-decoration: none;
  color: white;
}

.el-header,
.el-footer {
  color: #333;
  text-align: center;
}

.el-main {
  /*background-color: #E9EEF3;*/
  color: #333;
  text-align: center;
  width: 84%;
  margin: 10px auto;
  padding: 0;
}

.el-main .el-container {
  position: relative;
  width: 100%;
}

.left {
  width: 70%;
  float: left;
  margin-right: 60px;
}

.carousel {
  width: 100%；
}

.carousel img {
  width: 100%;
  height: 100%;
}

.right {
  width: calc(100% - 70% - 60px);
  float: right;
}

.today {
  width: 300px;
  border: 1px dotted #ddd;
  padding: 15px 15px 5px 15px;
  border-radius: 10px;
}

.today .title {
  font-size: 20px;
  color: darkslateblue;
}

.today .smallTitle {
  color: lightslategrey;
}

.today .detail {
  text-align: left;
  font-size: 12px;
}

.today img {
  width: 200px;
  margin: 10px 0;
}

.topic {
  margin-top: 30px;
  text-align: left;
}

.topic .title {
  color: darkslateblue;
  font-size: 18px;
}

.topic .detail {
  width: 95%;
  margin: 30px 0 0 10px;
  text-align: left;
  color: gray;
  font-size: 12px;
}

.topic .detail p {
  border-bottom: 1px dotted #eee;
}

.ft-weibo {
  font-size: 30px;
  color: red;
}

.ft-weixin {
  font-size: 27px;
  color: #62b900;
}

.focus p {
  display: block;
  border-bottom: none!important;
}

.focus p:nth-child(2) {
  margin-top: 10px;
}

.focus img {
  width: 150px;
  margin-top: 10px;
}

.el-footer {
  height: 300px!important;
  background: -webkit-linear-gradient(white, lightblue);
  background: -o-linear-gradient(white, lightblue);
  background: -moz-linear-gradient(white, lightblue);
  background: -mos-linear-gradient(white, lightblue);
  background: linear-gradient(white, lightblue);
}

.el-footer div {
  margin-top: 150px;
  font-size: 16px;
  color: gray!important;
}

.el-footer div .title {
  display: block;
  width: 250px;
  margin: 15px auto;
  word-spacing: 20px;
  border-bottom: 1px solid gray;
}

.el-footer div i {
  color: black!important;
  font-size: 24px;
}

.el-footer p:nth-child(3) {
  display: block;
  margin-top: 15px;
  font-size: 12px;
}

.animal,
.plant {
  color: black;
  font-size: 16px;
  display: block;
  margin-bottom: 10px;
}

.animal span,
.plant span {
  color: gray;
  font-size: 12px;
}
</style>

