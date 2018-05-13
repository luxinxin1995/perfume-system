<template>
  <div class="container">
    <el-col :span="24" style="margin:30px 0;">
      <el-form>
        <el-form-item style="padding:0 600px;">
          <el-input size="large" placeholder="请输入要搜索内容（产品名称 品牌 属性）" v-model="search" suffix-icon="el-icon-search" width="200px"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <div class="product" v-for="(item,index) in product1" :key="index">
      <div class="number">{{index+1}}</div>
      <div class="intro">
        <p class="title">{{item.productName}}</p>
        <div class="content">
          <div class="img">
            <img :src="item.photo" alt="" width="150px" height="200px">
          </div>
          <div class="detail">
            <p>品牌：{{item.brand}}</p>
            <p>香调：{{item.fragrance}}</p>
            <p>前调：{{item.topNotes}}</p>
            <p>中调：{{item.middleNotes}}</p>
            <p>尾调：{{item.lowNote}}</p>
            <p>属性：{{item.property}}</p>
            <p>调香师：{{item.flavorist}}</p>
          </div>
        </div>
      </div>
      <div class="desc">
        <p>香水简介<br>
          <span>{{item.desc}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../../Api/api";
export default {
  data() {
    return {
      product: '',
      formObj: '',
      search: ''
    }
  },
  computed: {
    product1: function() {
      var arr = this.product,
        search = this.search;
      if (!search) {
        return arr;
      }
      search = search.trim().toLowerCase();
      arr = arr.filter(function(item) {
        if (item.productName.toLowerCase().indexOf(search) !== -1 || item.brand.toLowerCase().indexOf(search) !== -1 || item.property.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      })
      return arr;
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      // 获取所有产品
      axios.getAllproduct(res => {
        if (res.code == 'success') {
          var data = res.data
          this.product = data.filter(function(item) {
            return item.flavour !== '' || item.odortype !== '' || item.concentration !== '' || item.rank !== ''
          })
        }
      })
    },
  }
}
</script>
<style scoped>
.container {
  margin-top: -70px!important;
}

.product {
  padding: 0 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  margin-bottom: 20px;
}

.number {
  background-color: #eee;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  color: white;
  font-family: "楷体"
}

.detail {
  margin-top: 20px;
  line-height: 30px;
  font-size: 14px;
  color: #362c4f;
  margin-top: 30px;
}

.intro {
  border: 1px dotted #eee;
  width: 400px;
  height: 350px;
  padding: 20px;
}

.img {
  height: 200px;
}

.comment {
  width: 86.5%;
  border: 1px dotted #eee;
  padding: 20px;
  margin-top: 20px;
}

.content {
  display: flex;
  justify-content: space-around;
}

.intro img {
  float: left;
  margin-top: 20px;
}

.title {
  color: #372074;
  font-size: 20px;
}

.desc {
  width: 400px;
  border: 1px dotted #eee;
  padding: 20px;
  line-height: 20px;
  text-align: justify;
  min-height: 350px;
  font-size: 20px;
  /*overflow: hidden;*/
}

.desc span {
  color: gray;
  font-size: 12px;
  text-indent: 2em;
  display: block;
  margin-top: 10px;
}
</style>

