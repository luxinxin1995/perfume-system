<template>
  <div class="bg-container">
    <h1></h1>
    <router-view></router-view>
    <div class="footer">©2018 ▪ 品牌香水管理系统 ▪ ALL RIGHTS RESERVED ▪ 福建省宁德师范学院 ▪ 14级 ▪ 计算机科学与技术（师范） ▪ Lxx</div>
  </div>
</template>
<style scoped>
  .bg-container{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    background-image: url('../../assets/bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  h1{
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto 10px auto;
    background-image: url('../../assets/logo.jpg');
    background-size: 100% 100%;
    border-radius: 50%;
  }
  .footer{
    position: fixed;
    left: 500px;
    bottom: 20px;
    font-size: 12px;
    color: white;
  }
</style>
