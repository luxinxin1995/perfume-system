<template>
  <div class="container">
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
      <p>©2018 ▪ 品牌香水管理系统 ▪ ALL RIGHTS RESERVED ▪ 福建省宁德师范学院 ▪ 14级 ▪ 计算机科学与技术（师范） ▪ Lxx</p>
    </div>
  </div>
</template>
<style scoped>
.container {
  color: #333;
  text-align: center;
  height: 70px !important;
  width: 100%;
  background: -webkit-linear-gradient(white, lightblue);
  background: -o-linear-gradient(white, lightblue);
  background: -moz-linear-gradient(white, lightblue);
  background: -mos-linear-gradient(white, lightblue);
  background: linear-gradient(white, lightblue);
}

.container div {
  font-size: 16px;
  color: gray !important;
  margin-top: -20px;
}

.container div .title {
  display: block;
  width: 250px;
  margin: 0 auto;
  word-spacing: 20px;
  border-bottom: 1px solid gray;
}

.container div i {
  color: black !important;
  font-size: 24px;
}

.container p:nth-child(3) {
  display: block;
  font-size: 12px;
}
</style>
