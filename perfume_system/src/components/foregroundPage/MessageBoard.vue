<template>
    <div class="knowledge">
        <div class="info" v-for="(item,index) in message" :key="index">
            <div class="user">
                <img :src="item.avatar" alt="">
                <p>用户名:
                    <span>{{item.username}}</span>
                </p>
            </div>
            <div class="content">
                <p>留言内容:
                    <span>{{item.message}}</span>
                </p>
                <p>{{item.MessageDate}}</p>
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
            message: '',
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            // 获取所有用户信息
            axios.getAll(this.pageIndex, this.pageSize, res => {
                if (res.code == "success") {
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
                        var time = [ h, m, s].join(':')
                        element = date1 + ' ' + time
                        this.message[i].MessageDate = element
                    }
                }
            });
        },
    },
    watch: {
        $route: function() {
            this.getData();
        }
    }
};
</script>
<style scoped>
.knowledge {
    padding: 0 400px;
}

.info {
    height: 120px;
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 20px;
    margin-top: 40px;
}

.user img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.user:nth-child(2n) {
    float: left;
}
.content{
    text-align: left;
}
.content:nth-child(2n) {
    float: right;
}

.user:nth-child(2n+1) {
    float: right;
}

.content:nth-child(2n) {
    float: left;
}
</style>

