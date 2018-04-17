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
        <p>©2018 ▪ 最美香水 ▪ ALL RIGHTS RESERVED ▪ 福建省宁德师范学院 ▪ 14级 ▪ 计算机科学与技术师范班 ▪ 陆欣欣</p>
       </div>
  </div>
</template>
<style scoped>
.container {
  color: #333;
  text-align: center;
  height: 300px !important;
  background: -webkit-linear-gradient(white, lightblue);
  background: -o-linear-gradient(white, lightblue);
  background: -moz-linear-gradient(white, lightblue);
  background: -mos-linear-gradient(white, lightblue);
  background: linear-gradient(white, lightblue);
  margin-top: 50px;
}

.container div {
  margin-top: 150px;
  font-size: 16px;
  color: gray !important;
}

.container div .title {
  display: block;
  width: 250px;
  margin: 15px auto;
  word-spacing: 20px;
  border-bottom: 1px solid gray;
}

.container div i {
  color: black !important;
  font-size: 24px;
}

.container p:nth-child(3) {
  display: block;
  margin-top: 15px;
  font-size: 12px;
}

</style>
