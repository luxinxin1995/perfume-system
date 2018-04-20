<template>
  <div class="topic">
    <el-col :span="24" style="margin:50px 0 30px 0;">
      <el-form>
        <el-form-item style="padding:0 600px;">
          <el-input size="large" placeholder="请输入要搜索的文章标题" v-model="search" suffix-icon="el-icon-search" width="200px"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <div class="content" v-for="(item,index) in articles1" :key="index">
      <p class="title">{{item.title}}</p>
      <img src="../../assets/blank.png" alt="" style="margin:20px;">
      <div class="detail">
        <img :src="item.photo" alt="" width="300px;">
        <div>{{item.detail}}</div>
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
      articles: '',
      search: ''
    }
  },
  created() {
    this.getData()
  },
  computed: {
    articles1: function() {
      var arr = this.articles,
        search = this.search;
      if (!search) {
        return arr;
      }
      search = search.trim().toLowerCase();
      arr = arr.filter(function(item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      })
      return arr;
    }
  },
  methods: {
    getData() {
      axios.getarticleAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          var data = res.data
          this.articles = data.filter(function(item) {
            return item.title !== ''
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.content {
  padding: 30px 0;
}

.topic .title {
  color: #2c2049;
  font-size: 22px;
}

.detail {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.content:nth-child(2n) .detail {
  flex-direction: row-reverse;
}

.detail div {
  width: 50%;
  text-align: justify;
  color: gray;
  font-size: 14px;
  text-indent: 2em;
  line-height: 30px;
}

.detail img {
  box-shadow: 5px 5px 5px #eee;
}
</style>

