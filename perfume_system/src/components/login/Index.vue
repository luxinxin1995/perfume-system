<template>
  <div class="bg-container">
    <h1>香水销售管理系统</h1>
    <router-view></router-view>
  </div>
</template>
<style scoped>
  .bg-container{
    width: 100%;
    height: 100%;
    background-image: url('../../assets/bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  h1{
    color: white;
    font-size: 30px;
    padding: 50px 0;
  }
</style>
