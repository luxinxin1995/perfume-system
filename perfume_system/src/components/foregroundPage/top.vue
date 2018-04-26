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
