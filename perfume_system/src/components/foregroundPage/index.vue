<template>
  <div class="container">
    <el-container>
      <el-header>
        <div class="head">
          <span class="user">
            <el-dropdown trigger="click" @command="handleCommand" v-show="isLogin" style="color:white;">
              <span class="el-dropdown-link">
                <span>{{username}}</span>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="out">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <router-link to="/login" v-show="loginOut">登录</router-link>
            <router-link to="/register" v-show="loginOut">注册</router-link>
          </span>
          <span class="brand">
            <router-link to="/showBrand">品牌</router-link>
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
          <div class="carousel">
            <el-carousel :interval="4000" arrow="always" height="350px">
              <el-carousel-item v-for="(item,index) in imgURL" :key="index">
                <img :src="item.src" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <!--今日之香-->
          <div class="today">
            <p class="title">今日之香</p>
            <img src="../../assets/today.jpg" alt="">
            <p class="smallTitle">打啊打</p>
            <p class="detail">&#x3000;&#x3000;阿达是放松放松放松放松放松放松放松放松放松放松放松舒服舒服所多多多多多多多多多多多</p>
          </div>
        </el-container>
      </el-main>
      <el-footer>Footer</el-footer>
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
      loginOut: true,
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
    },
    getData() {
      var self = this;
      axios.getId(sessionStorage.getItem('username'), res => {
        if (res.code == 'success') {
          //获取表中id
          self.id = res.id;
          sessionStorage.setItem('id', res.id);
          axios.getInfo(res.id, data => {
            //获取个人信息
            var result = data.data;
            console.log(result)
            sessionStorage.setItem("userInfo", JSON.stringify(result));
            self.username = result.username;
            self.loginOut = false;
            self.isLogin = true;
          });
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
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  width: 65%;
  margin: 10px auto;
  padding: 0;
}

.el-main .el-container {
  position: relative;
}

.carousel {
  width: 50%;
  float: left;
  margin-right: 160px;
}

.carousel img {
  width: 100%;
  height: 100%;
}

.today {
  width: 300px;
  border: 1px dotted gray;
  float: right;
  padding: 15px 15px 5px 15px;
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
</style>

