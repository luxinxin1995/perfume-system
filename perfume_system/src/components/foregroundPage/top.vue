<template>
    <div class="centre">
        <el-col :span="24" style="margin:30px 0 0 0;">
            <el-form>
                <el-form-item style="padding:0 600px;">
                    <el-input size="large" placeholder="请输入要搜索品牌名称" v-model="search" suffix-icon="el-icon-search" width="200px"></el-input>
                </el-form-item>
            </el-form>
        </el-col>
        <div class="info">
            <div class="NO" v-for="(item,index) in brand1" :key="index">
                <div class="blank">
                    <img src="../../assets/blank.png" alt="">
                </div>
                <div class="content">
                    <div class="index">{{index+1}}</div>
                    <div class="text">
                        <p class="ChineseName">{{item.ChineseName}}</p>
                        <p class="EnglishName">{{item.EnglishName}}</p>
                    </div>
                    <div class="img">
                        <img :src="item.logo" alt="">
                        <p class="info">{{item.desc}}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import axios from "../../Api/api";
export default {
    data() {
        return {
            brand: '',
            pageIndex: 1,
            pageSize: 10,
            imgURL: [
                { src: require("../../assets/CHANEL.jpg") },
                { src: require("../../assets/c2.jpg") },
                { src: require("../../assets/c3.jpg") },
                { src: require("../../assets/c4.png") },
                { src: require("../../assets/c4.jpg") },
                { src: require("../../assets/c1.jpg") },
                { src: require("../../assets/c2.jpg") },
                { src: require("../../assets/c3.jpg") },
                { src: require("../../assets/c4.png") },
                { src: require("../../assets/c5.jpg") }
            ],
            search: ''
        }
    },
    created() {
        this.getData();
    },
    computed: {
        brand1: function() {
            var arr = this.brand,
                search = this.search;
            if (!search) {
                return arr;
            }
            search = search.trim().toLowerCase();
            arr = arr.filter(function(item) {
                if (item.ChineseName.toLowerCase().indexOf(search) !== -1 || item.EnglishName.toLowerCase().indexOf(search) !== -1) {
                    return item;
                }
            })
            return arr;
        }
    },
    methods: {
        getData() {
            // 获取香水品牌
            axios.getbrandAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.brand = res.data;
                }
            });
            // 获取香水动物原料
            axios.getmaterialAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.material = res.data;
                }
            });
            // 获取香水植物原料
            axios.getmaterial2All(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.material2 = res.data;
                }
            });
            // 获取香水分类
            axios.getclassifyAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.tableData = res.data;
                }
            });
            // 获取今日之香
            axios.gettodayAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.title = res.data[0].title;
                    this.detail = res.data[0].detail;
                    this.logo = res.data[0].logo;
                }
            });
            // 获取关于香水的电影
            axios.getmovieAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.movie = res.data;
                }
            });
            // 获取关于香水的书籍
            axios.getbookAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.book = res.data;
                }
            });
            // 获取热门话题
            axios.gettopicAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.topicTitle = res.data;
                }
            });
            // 获取精彩文章
            axios.getarticleAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.article = res.data;
                }
            });
        }
    }
}
</script>
<style scoped>
.NO {
    margin-top: 40px;
    margin-top: 30px;
    text-align: justify;
    padding: 0 200px;
}

.content {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.blank {
    text-align: center;
}

.blank img {
    margin: 20px 0;
}

.img {
    width: 800px;
    line-height: 30px;
}

.ChineseName {
    font-size: 24px;
}

.EnglishName {
    font-size: 14px;
    color: lightgray;
    letter-spacing: 5px;
}

.img img {
    width: 400px;
    float: left;
    margin-bottom: 20px;
}

.img .info {
    font-size: 12px;
}

.index {
    color: gray;
    font-size: 40px;
    font-family: "隶书"
}
</style>
