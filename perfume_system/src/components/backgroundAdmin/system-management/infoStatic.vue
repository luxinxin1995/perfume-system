<template>
    <div class="fillcontain">
        <div class="user table">
            <span class="name">系统用户数量统计</span>
            <span class="num">{{user}}</span>
        </div>
        <div class="brand table">
            <span class="name">香水品牌数量统计</span>
            <span class="num">{{brand}}</span>
        </div>
        <div class="product table">
            <span class="name">香水产品数量统计</span>
            <span class="num">{{product}}</span>
        </div>
        <div class="material table">
            <span class="name">香水动物原料数量统计</span>
            <span class="num">{{animal}}</span>
        </div>
        <div class="material table">
            <span class="name">香水植物原料数量统计</span>
            <span class="num">{{plant}}</span>
        </div>
        <div class="classify table">
            <span class="name">香水分类数量统计</span>
            <span class="num">{{classify}}</span>
        </div>
        <div class="article table">
            <span class="name">精选文章数量统计</span>
            <span class="num">{{article}}</span>
        </div>
        <div class="notice table">
            <span class="name">系统公告数量统计</span>
            <span class="num">{{notice}}</span>
        </div>
        <div class="message table">
            <p class="title">
                <span class="name">用户留言数量统计</span>
                <span class="num">{{message.length}}</span>
            </p>
            <div class="div" v-for="(item,index) in message" :key="index">
                <p>用户名：{{item.username}}</p>
                <p>留言内容：{{item.message}}
                    <span style="float:right">{{item.MessageDate}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../../../Api/api";
export default {
    data() {
        return {
            pageIndex: 1,
            pageSize: 100,
            user: '',
            message: [],
            brand: '',
            product: '',
            article: '',
            animal: '',
            plant: '',
            notice: '',
            classify: ''

        };
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            axios.getAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
                    this.user = res.length - 1
                    var data = res.data
                    this.message = data.filter(function(item) {
                        return item.message !== ''
                    })
                    for (var i = 0; i < this.message.length; i++) {
                        var element = this.message[i].MessageDate;
                        var date = new Date(element)
                        var year = date.getFullYear() + '年';
                        var month = date.getMonth() + 1 + '月';
                        var day = date.getDate() + '日';
                        var h = date.getHours()
                        var m = date.getMinutes()
                        var s = date.getSeconds()
                        var date1 = [year, month, day].join('/')
                        var time = [h, m, s].join(':')
                        element = date1 + ' ' + time
                        this.message[i].MessageDate = element
                    }
                }
            });
            axios.getmaterialAll(this.pageIndex, this.pageSize, res => {
                if (res.code == 'success') {
                    var data = res.data
                    data.filter(function(item) {
                        return item.animal !== ''
                    })
                    this.animal = data.length
                }
            })
            axios.getmaterial2All(this.pageIndex, this.pageSize, res => {
                if (res.code == 'success') {
                    var data = res.data
                    data.filter(function(item) {
                        return item.plant !== ''
                    })
                    console.log(data)

                    this.plant = data.length
                }
            })
            axios.getclassifyAll(this.pageIndex, this.pageSize, res => {
                if (res.code == 'success') {
                    this.classify = res.data.length
                }
            })
            axios.getbrandAll(this.pageIndex, this.pageSize, res => {
                if (res.code == 'success') {
                    this.brand = res.data.length
                }
            })
            axios.getproductAll(this.pageIndex, this.pageSize, res => {
                if (res.code == 'success') {
                    this.product = res.data.length
                }
            })
            axios.getarticleAll(this.pageIndex, this.pageSize, res => {
                if (res.code == 'success') {
                    this.article = res.data.length
                }
            })
            axios.gettodayAll(this.pageIndex, this.pageSize, res => {
                if (res.code == 'success') {
                    this.notice = res.data.length
                }
            })
        }
    },
    watch: {
        $route: function() {
            this.getData();
        }
    }
};
</script>

<style scoped>
.fillcontain {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.table {
    min-height: 50px;
    line-height: 50px;
    margin: 20px 50px;
    padding: 0 20px;
    width: 35%;
    background-color: #eee;
}

.name {
    float: left;
}

.num {
    float: right;
}
.title{
    display: block;
    height: 50px;
    border-bottom: 1px solid white;
}
.div{
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    border-bottom: 1px solid white;    
}
</style>


