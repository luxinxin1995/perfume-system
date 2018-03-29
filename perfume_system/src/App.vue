<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote，th,
td {
  margin: 0;
  padding: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

fieldset,
img {
  border: 0;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

capation,
th {
  text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

q:before,
q:after {
  content: ' '
}

abbr,
acronym {
  border: 0;
}

html,
body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100%;
  overflow-x: hidden;
  /*margin-top: 60px;*/
}



/*登录表单label*/


/*.el-form-item__label{
  color: white!important;
}*/

.el-table .cell {
  text-align: center!important;
}
.el-table thead{
  color: black;
  font-weight: 700
}
.el-upload {
  border: 1px dashed #d9d9d9!important;
}

.el-radio {
  color: white;
}

.el-form-item__content {
  text-align: left;
}
.el-aside, .el-main{
  overflow: visible;
}
.ft-size{
  font-size: 20px;
  margin-right: 10px;
  color: white!important;
}
.ft-btn{
  font-size: 12px;
}
</style>
