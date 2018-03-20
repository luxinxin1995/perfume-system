<template>
    <div class="container">
        <el-container>
            <el-header>
                <el-col :span="2">
                    <el-switch v-model="isCollapse">
                    </el-switch>
                </el-col>
                <el-col :span="22" style="text-align:left;">
                    <span style="font-size:24px;">欢迎登录香水管理系统</span>
                    <el-dropdown trigger="click" @command="handleCommand" style="float:right;padding-right:40px;padding-top:25px;color:white;">
                        <span class="el-dropdown-link">
                            <span>{{username}}</span>
                            <img src="../assets/logo.jpg" alt="">
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-header>
            <el-container>
                <el-menu default-active="1" background-color="#2f4050" text-color="#fff" active-text-color="#ffd04b" style="height:100%;text-align:left" :router="true" @open="handleOpen" @close="handleClose" :collapse="!isCollapse">
                    <el-menu-item index="/">
                        <i class="el-icon-location"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-service"></i>
                            <span>系统管理员</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/AdminList">用户列表</el-menu-item>
                            <el-menu-item index="/changePassword">修改密码</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>香水品牌管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/addBrand">添加香水品牌</el-menu-item>
                            <el-menu-item index="/editBrand">香水品牌列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-goods"></i>
                            <span>香水系列管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/addSeries">添加香水系列</el-menu-item>
                            <el-menu-item index="/editSeries">香水系列列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-star-on"></i>
                            <span>香水原料管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/addMaterial">添加香水原料</el-menu-item>
                            <el-menu-item index="/editMaterial">香水原料列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-edit-outline"></i>
                            <span>香水分类管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/addClassify">添加香水分类</el-menu-item>
                            <el-menu-item index="/editClassify">香水分类列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-tickets"></i>
                            <span>香水书籍管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/addBook">添加香水书籍</el-menu-item>
                            <el-menu-item index="/editBook">香水书籍列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="8">
                        <template slot="title">
                            <i class="el-icon-picture"></i>
                            <span>香水电影管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/addMovie">添加香水电影</el-menu-item>
                            <el-menu-item index="/editMovie">香水电影列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="9">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>系统管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-submenu index="9-1">
                                <template slot="title">热门话题管理</template>
                                <el-menu-item index="/addTopic">添加热门话题</el-menu-item>
                                <el-menu-item index="/editTopic">热门话题列表</el-menu-item>
                            </el-submenu>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-submenu index="9-2">
                                <template slot="title">精彩文章管理</template>
                                <el-menu-item index="/addArticle">添加精彩文章</el-menu-item>
                                <el-menu-item index="/editArticle">精彩文章列表</el-menu-item>
                            </el-submenu>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-submenu index="9-3">
                                <template slot="title">今日之香管理</template>
                                <el-menu-item index="/addToday">添加今日之香</el-menu-item>
                                <el-menu-item index="/editToday">今日之香列表</el-menu-item>
                            </el-submenu>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import axios from '../Api/api'
export default {
    data() {
        return {
            isCollapse: true,
            password: '',
            username: '',
            isLogo: true
        }
    },

    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleCommand(command) {
            if (command == 'loginOut') {
                this.$confirm('您确定要退出登录?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '退出登录成功!'
                    });
                    sessionStorage.removeItem('username');
                    sessionStorage.removeItem('userInfo');
                    this.$router.push({
                        name: 'foreIndex'
                    });
                })
            }
        },
        getData() {
            var self = this;
            axios.getId(sessionStorage.getItem('username'), res => {
                //获取表中id
                self.id = res.id;
                sessionStorage.setItem('id', res.id);
                axios.getInfo(res.id, data => {
                    //获取个人信息
                    var result = data.data;
                    sessionStorage.setItem("userInfo", JSON.stringify(result));
                    self.username = result.username;
                });
            });
        }
    },
    watch: {
        isCollapse: function(p) {
            console.log(p)
            if (!p) {
                this.isLogo = false;
            } else {
                this.isLogo = true;
            }
        }
    },
    created() {
        this.username = decodeURI(sessionStorage.getItem('username'));
    }
}

</script>
<style scoped>
.container {
    width: 100%;
    height: 100%;
}

.el-dropdown {
    height: 50px !important;
}

.el-header {
    background-color: lightslategrey;
    color: white;
    text-align: center;
    line-height: 80px;
    height: 80px !important;
    padding: 0 !important;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: white;
    color: #333;
    text-align: center;
    padding: 0 !important;
}

.el-breadcrumb {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
}

.el-container {
    height: 100%;
    width: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 210px;
}

.el-menu {
    border-right: 0px !important;
}

.el-dropdown-link {
    display: inline-block;
    height: 30px;
    min-width: 60px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.el-dropdown-link span {
    margin-right: 10px;
}

.el-dropdown-link img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.title_text {
    font-size: 13px;
    color: gray;
    position: relative;
    top: 3px;
}

.logo_box {
    max-height: 130px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #273a4a !important;
}

.logo_box img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0;
}

.logo_close {
    width: 30px !important;
    height: 30px !important;
    border-radius: 50% !important;
    margin: 0;
}

.red_text .cell {
    color: red !important;
}
</style>
