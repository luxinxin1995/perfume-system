<template>
    <div class="header">
        <div class="head">
            <span class="logo">
                <router-link to="/"><img src="../../assets/logo.jpg" alt="" width="100px;"></router-link>
            </span>
            <span class="nav">
                <router-link to="/index" active-class="active-nav">首页</router-link>
                <router-link to="/centre" active-class="active-nav">品牌中心</router-link>
                <router-link to="/top" active-class="active-nav">品牌排行榜</router-link>
                <router-link to="/knowledge" active-class="active-nav">入门知识</router-link>
                <router-link to="/advisory" active-class="active-nav">产品中心</router-link>
                <router-link to="/message" active-class="active-nav">留言板</router-link>
            </span>
            <span class="user">
                <el-dropdown trigger="click" @command="handleCommand" v-show="isLogin" style="color:white;">
                    <span class="el-dropdown-link" style="display:flex;align-items:center;justify-content:space-between;width:100px;">
                        <span>{{username}}</span>
                        <img :src="avatar" alt="" onerror="javascript:this.src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=373715905,1462484251&fm=27&gp=0.jpg';" style="width:50px;height:50px;border-radius:50%">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <template slot-scope="scope">
                            <el-dropdown-item command="back" v-show="admin">返回系统</el-dropdown-item>
                            <el-dropdown-item command="info">个人资料</el-dropdown-item>
                            <el-dropdown-item command="password">修改密码</el-dropdown-item>
                            <el-dropdown-item command="message" v-show="adminNo">留言</el-dropdown-item>
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
            <info v-if="infoShow" :form='formObj' @submitHandle='submitHandle' :url="urlaction" :disabledInput='show'>
            </info>
        </el-dialog>
        <!--修改密码-->
        <el-dialog title="修改密码" modal center :visible.sync="passShow">
            <pass v-if="passShow" :form='formObj' @submitpassHandle='submitpassHandle'>
            </pass>
        </el-dialog>
        <!--修改密码-->
        <el-dialog title="留言板" modal center :visible.sync="messageShow">
            <message v-if="messageShow" :form='formObj' @submitmessageHandle='submitmessageHandle'>
            </message>
        </el-dialog>
    </div>
</template>
<script>
import axios from "../../Api/api";
import info from "./info";
import pass from "./changePassword";
import message from './message';
export default {
    components: {
        info,
        pass,
        message
    },
    data() {
        return {
            isCollapse: true,
            infoShow: false,
            show: false,
            urlaction: '',
            passShow: false,
            messageShow: false,
            dialogTableVisible: false,
            formObj: null,
            isLogin: false,
            username: "",
            avatar: "",
            admin: false,
            adminNo: false,
            loginOut: true
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
            if (command == "message") {
                this.messageShow = true;
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
                    if (this.formObj.avatar == '') {
                        this.avatar = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=373715905,1462484251&fm=27&gp=0.jpg'
                    } else {
                        this.avatar = this.formObj.avatar;
                    }
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
        submitmessageHandle(obj, date) {
            axios.postEditorInfo(obj._id, obj, res => {
                if (res.code == "success") {
                    this.$message({
                        type: "success",
                        message: "留言成功"
                    });
                    this.formObj = obj;
                    this.$router.push({
                        name: "MessageBoard"
                    });
                    this.getData()
                }
            });
        },
        getData() {
            // 获取个人用户信息
            axios.getId(sessionStorage.getItem("username"), res => {
                if (res.code == "success") {
                    this.urlaction = `http://localhost:3000/users/editorInfo/${res.id}`
                    sessionStorage.setItem("id", res.id);
                    axios.getInfo(res.id, data => {
                        //获取个人信息
                        var result = data.data;
                        this.formObj = result;
                        if (this.formObj.username == "admin") {
                            this.show = true;
                        }
                        if (this.formObj.avatar == '') {
                            this.avatar = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=373715905,1462484251&fm=27&gp=0.jpg'
                        } else {
                            this.avatar = this.formObj.avatar;
                        }
                        sessionStorage.setItem("userInfo", JSON.stringify(result));
                        this.username = this.formObj.username;

                        this.loginOut = false;
                        this.isLogin = true;
                        if (this.username == "admin") {
                            this.admin = true;
                            this.adminNo = false
                        } else {
                            this.admin = false;
                            this.adminNo = true
                        }
                    });
                }
            });
        }
    }
}
</script>
<style scoped>
.header{
    position:fixed;
    top:0;
    left:0;
    background-color: #fff;
    margin-bottom: 100px;
    z-index: 1000;
    height: 100px;
    width: 99%;
    /*border-bottom: 2px solid #eee;*/
    box-shadow: 0px 2px 2px #eee;
}
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

.el-dropdown {
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
.head .logo img{
    margin-left: 50px;
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