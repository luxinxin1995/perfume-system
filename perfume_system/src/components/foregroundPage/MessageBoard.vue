<template>
    <div class="knowledge">
        <div class="info" v-for="(item,index) in message" :key="index">
            <div class="user">
                <img :src="item.avatar" onerror="javascript:this.src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=373715905,1462484251&fm=27&gp=0.jpg';" alt="">
                <p>{{item.username}}</p>
            </div>
            <div class="content">
                <p>{{item.message}}</p>
                <p class="date">{{item.MessageDate}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "../../Api/api";
export default {
    data() {
        return {
            message: '',
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            // 获取所有用户信息
            axios.getAllUser(res => {
                if (res.code == "success") {
                    var data = res.data
                    this.message = data.filter(function(item) {
                        return item.message !== ''
                    })
                    for (var i = 0; i < this.message.length; i++) {
                        var element = this.message[i].MessageDate;
                        var date = new Date(element)
                        date = date.toLocaleString()
                        this.message[i].MessageDate = date
                    }                  
                }
            });
        },
    }
};
</script>
<style scoped>
.knowledge {
    padding: 0 400px;
    height: 100%;
}

.info {
    height: 120px;
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 20px;
    margin-top: 40px;
    position: relative;
}

.user img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.user:nth-child(2n) {
    float: left;
}

.content {
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
.date{
    position: absolute;
    bottom: 30px;
    color: gray;
    font-size: 12px;
}
</style>

