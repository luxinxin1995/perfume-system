<template>
    <div class="centre">
        <div class="head">
            <router-link to="/centre" active-class="active-nav">
                <span @click="All()">所有品牌</span>
            </router-link>
            <router-link :to="item" v-for="item in link" :key="item" active-class="active-nav">
                <span @click="Search(item)">{{item}}</span>
            </router-link>
        </div>
        <div class="brand">
            <div class="info" v-for="(item,index) in brand" :key="index">
                <div class="img">
                    <img :src="item.logo" alt="">
                </div>
                <div class="name">
                    <p>{{item.ChineseName}}</p>
                    <p class="EnglishName">{{item.EnglishName}}</p>
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
            pageSize: 100,
            link: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        }
    },
    created() {
        this.All();
    },
    methods: {
        All() {
            // 获取香水品牌
            axios.getbrandAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.brand = res.data;
                }
            });
        },
        Search(charters) {
            axios.getbrandAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    var data = res.data
                    this.brand = data.filter(function(item) {
                        var ele = item.EnglishName
                        return ele.toLowerCase().indexOf(charters.toLowerCase()) == 0
                    })
                    console.log(this.brand)
                }
            });

        }
    }
}
</script>
<style scoped>
.centre {
    padding: 0 200px;
}

.head {
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.head a {
    text-decoration: none;
    color: gray;
}

.head span {
    cursor: pointer;
    display: inline-block;
    padding: 0 10px;
    font-family: "楷体"!important;
}

.brand {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.brand .info {
    width: 200px;
    height: 150px;
    margin-top: 30px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
}
.brand .info .img{
    width: 200px;
    height: 100px;
    display:flex;/*Flex布局*/
    align-items:center;/*指定垂直居中*/
    justify-content: center;
}
.brand .info .name {
    text-align: center;
}

.brand .info img {
    width: 150px;
    max-height: 100px;
}

.EnglishName {
    color: lightgray;
    font-size: 14px;
}

.active-nav {
    background-color: pink;
    color: white!important;
}
</style>
