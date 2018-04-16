<template>
    <div>
        <div class="head">
            <span class="logo">
                <span style="font-size:60px;">P</span>ERFUME</span>
            <span class="nav">
                <router-link to="/index" active-class="active-nav">首页</router-link>
                <router-link to="/centre" active-class="active-nav">品牌中心</router-link>
                <router-link to="/story" active-class="active-nav">品牌故事</router-link>
                <router-link to="/top" active-class="active-nav">品牌Top10</router-link>
                <router-link to="/news" active-class="active-nav">新闻资讯</router-link>
                <router-link to="/advisory" active-class="active-nav">时尚资讯</router-link>
            </span>
            <span class="user">
                <el-dropdown trigger="click" @command="handleCommand" v-show="isLogin" style="color:white;">
                    <span class="el-dropdown-link" style="display:flex;align-items:center;justify-content:space-between;width:100px;">
                        <span>{{username}}</span>
                        <img src="../../assets/bg.jpg" alt="" style="width:50px;height:50px;border-radius:50%">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <template slot-scope="scope">
                            <el-dropdown-item command="back" v-show="admin">返回系统</el-dropdown-item>
                            <el-dropdown-item command="info">个人资料</el-dropdown-item>
                            <el-dropdown-item command="password">修改密码</el-dropdown-item>
                            <el-dropdown-item command="out">退出登录</el-dropdown-item>
                        </template>
                    </el-dropdown-menu>
                </el-dropdown>
                <router-link to="/login" v-show="loginOut">登录</router-link>
                <router-link to="/register" v-show="loginOut">注册</router-link>
            </span>
        </div>
        <!--修改个人信息-->
        <el-dialog title="修改个人信息" modal center :visible.sync="infoShow">
            <info v-if="infoShow" :form='formObj' @submitHandle='submitHandle' :disabledInput='show'>
            </info>
        </el-dialog>
        <!--修改密码-->
        <el-dialog title="修改密码" modal center :visible.sync="passShow">
            <pass v-if="passShow" :form='formObj' @submitpassHandle='submitpassHandle'>
            </pass>
        </el-dialog>
    </div>
</template>
<script>
import axios from "../../Api/api";
import info from "./info";
import pass from "./changePassword";
export default {
    components: {
        info,
        pass
    },
    data() {
        return {
            isCollapse: true,
            infoShow: false,
            show: false,
            passShow: false,
            dialogTableVisible: false,
            formObj: null,
            isLogin: false,
            username: "",
            avatar: "",
            admin: false,
            loginOut: true,
            imgURL: [
                { src: require("../../assets/c1.jpg") },
                { src: require("../../assets/c2.jpg") },
                { src: require("../../assets/c3.jpg") },
                { src: require("../../assets/c4.png") },
                { src: require("../../assets/c5.jpg") },
                { src: require("../../assets/c4.jpg") }
            ]
        }
    },
    created() {
        this.getData();
    },
    watch: {
        $route: function() {
            this.submitHandle();
        }
    },
    methods: {
        handleCommand(command) {
            if (command == "out") {
                this.$confirm("您确定要退出登录?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.$message({
                        type: "success",
                        message: "退出登录成功!"
                    });
                    sessionStorage.removeItem("username");
                    sessionStorage.removeItem("userInfo");
                    this.loginOut = true;
                    this.isLogin = false;
                    this.$router.push({
                        name: "Login"
                    });
                });
            }
            if (command == "back") {
                this.$router.push({ name: "Home" });
            }
            if (command == "info") {
                this.infoShow = true;
            }
            if (command == "password") {
                this.passShow = true;
            }
        },
        // 提交(修改)
        submitHandle(obj) {
            this.infoShow = false;
            axios.postEditorInfo(obj._id, obj, res => {
                if (res.code == "success") {
                    this.$message({
                        type: "success",
                        message: "修改个人信息成功!"
                    });
                    this.formObj = obj;
                    this.username = this.formObj.username;
                    this.avatar = this.formObj.avatar;
                }
            });
        },
        submitpassHandle(obj) {
            this.passShow = false;
            axios.postChangePassword(obj._id, obj, res => {
                if (res.code == "success") {
                    this.formObj = obj;
                    this.$alert("修改密码成功，请重新登录！", "登录", {
                        confirmButtonText: "确定",
                        callback: action => {
                            this.$router.push({
                                path: "/login"
                            });
                        }
                    });
                }
            });
        },
        getData() {
            var self = this;
            // 获取个人用户信息
            axios.getId(sessionStorage.getItem("username"), res => {
                if (res.code == "success") {
                    //获取表中id
                    self.id = res.id;
                    sessionStorage.setItem("id", res.id);
                    axios.getInfo(res.id, data => {
                        //获取个人信息
                        var result = data.data;
                        self.formObj = result;
                        if (self.formObj.username == "admin") {
                            this.show = true;
                        }
                        sessionStorage.setItem("userInfo", JSON.stringify(result));
                        self.username = result.username;
                        self.avatar = result.avatar;
                        self.loginOut = false;
                        self.isLogin = true;
                        if (self.username == "admin") {
                            this.admin = true;
                        } else {
                            this.admin = false;
                        }
                    });
                }
            });
        }
    }
}
</script>
<style scoped>
.head {
    height: 100px !important;
    line-height: 100px;
    color: #333;
    text-align: center;
    padding: 0 20px;
}

.head .nav {
    display: inline-block;
    word-spacing: 40px;
}
.el-dropdown{
    color: black!important;
}
.head .nav a {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    min-width: 80px;
}

.head .nav a:hover {
    border-bottom: 2px solid black;
    color: red;
}

.head .logo {
    float: left;
    color: pink;
    font-size: 36px;
}

.head .user {
    float: right;
    word-spacing: 20px;
}

.head a {
    text-decoration: none;
    color: black;
}

.active-nav {
    border-bottom: 2px solid black;
}
</style>