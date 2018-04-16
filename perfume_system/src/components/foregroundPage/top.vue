<template>
    <div class="centre">
        <div class="title">
            <el-carousel :interval="4000" arrow="always" height="200px">
                <el-carousel-item v-for="(item,index) in imgURL" :key="index">
                    <h1 class="Number">NO.{{index+1}}</h1>
                    <img :src="item.src" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="info">
            <div class="NO" v-for="(item,index) in brand" :key="index">
                <div class="text">
                    <p class="ChineseName">{{item.ChineseName}}</p>
                    <p class="EnglishName">{{item.EnglishName}}</p>
                    <p class="info">公元前三千年左右，埃及就开始使用香料，这远远比埃及其它的文明更早。</p>
                </div>
                <div class="img">
                    <img :src="item.logo" alt="">
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
                { src: require("../../assets/c1.jpg") },
                { src: require("../../assets/c2.jpg") },
                { src: require("../../assets/c3.jpg") },
                { src: require("../../assets/c4.png") },
                { src: require("../../assets/c4.jpg") },
                { src: require("../../assets/c1.jpg") },
                { src: require("../../assets/c2.jpg") },
                { src: require("../../assets/c3.jpg") },
                { src: require("../../assets/c4.png") },
                { src: require("../../assets/c5.jpg") }
            ]
        }
    },
    created() {
        this.getData();
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
.el-carousel {
    overflow: unset;
}

.Number {
    position: absolute;
    top: 90px;
    left: 300px;
    color: lightgray;
    font-size: 30px;
}

.el-carousel__item img {
    width: 100%;
    height: 100%;
}

.carousel {
    width: 100%;
}

.carousel img {
    width: 100%;
    height: 100%;
}
.info{
    
}
</style>
