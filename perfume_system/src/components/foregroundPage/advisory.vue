<template>
  <div class="container">
    <div class="product" v-for="(item,index) in product" :key="index">
      <div class="number">{{index+1}}</div>
      <div class="intro">
        <p class="title">{{item.productName}}</p>
        <img :src="item.photo" alt="" width="150px">
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
      pageIndex: 1,
      pageSize: 100,
      product: '',
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      // 获取所有分类
      axios.getproductAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          var data = res.data
          this.product = data.filter(function(item) {
            return item.flavour !== '' || item.odortype !== '' || item.concentration !== '' || item.rank !== ''
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.product {
  padding: 30px 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;
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
  height: fit-content;
  font-size: 20px;
}

.desc span {
  color: gray;
  font-size: 12px;
  text-indent: 2em;
  display: block;
  margin-top: 10px;
}
</style>

