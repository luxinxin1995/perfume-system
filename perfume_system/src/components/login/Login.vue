<template>
  <div>
      <div class="admin-form">
      <h2 class="title">
        <router-link :to="{name:'User'}" active-class="active">用户登录</router-link>
        <span>|</span>
        <router-link :to="{name:'Admin'}" active-class="active">管理员登录</router-link>
      </h2>
      <div class="form-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .title{
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    display: flex;
    color: white;
    justify-content: space-around;
  }
  .title a{
    display: inline-block;
    height: 30px;
    text-decoration: none;
    color: white;
  }
  .admin-form{
    width: 300px;
    margin: 10px auto 0 auto;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 5px;
  }
  .demo-ruleForm{
    margin-top: 20px;
  }
  .active{
    border-bottom: 3px solid lightskyblue;
  }

</style>
