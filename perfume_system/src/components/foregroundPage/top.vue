<template>
    <div class="centre">
        <div class="info">
            <div class="NO" v-for="(item,index) in brand" :key="index">
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
    width: 200px;
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
