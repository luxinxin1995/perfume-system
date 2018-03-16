<template>
    <div class="container">
        <el-container>
            <el-header>
                <el-col :span="2">
                    <el-switch v-model="isCollapse">
                    </el-switch>
                </el-col>
                <el-col :span="22" style="text-align:left;">
                    <span style="font-size:24px;">欢迎登录香水销售系统</span>
                    <el-dropdown trigger="click" @command="handleCommand" style="float:right;padding-right:40px;padding-top:25px;color:white;">
                        <span class="el-dropdown-link">
                            <span>{{petname}}</span>
                            <img src="../assets/logo.jpg" alt="">
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
                            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-header>
            <el-dialog title="修改密码" :visible.sync="dialogPasswordVisible" class="passwordBox">
                <el-form :label-position="labelPosition" label-width="80px" ref="changePasswordForm" :rules="rules" :model="changePasswordForm" class="changePasswordForm">
                    <el-form-item label="旧密码" prop="password">
                        <el-input type="password" v-model="changePasswordForm.password" placeholder="请输入旧密码"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPassword">
                        <el-input type="password" v-model="changePasswordForm.newPassword" placeholder="请输入新密码"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="rePassword">
                        <el-input type="password" v-model="changePasswordForm.rePassword" placeholder="请重新确认密码"></el-input>
                    </el-form-item>
                    <el-form-item size="large">
                        <el-button type="primary" @click="onSubmit" style="width:100%;">确认修改</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
            <el-container>
                <el-menu default-active="1" background-color="#2f4050" text-color="#fff" active-text-color="#ffd04b" style="height:100%;text-align:left" :router="true" @open="handleOpen" @close="handleClose" :collapse="!isCollapse">
                    <el-menu-item index="/home">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-tickets"></i>
                            <span>数据管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/userList">用户列表</el-menu-item>
                            <el-menu-item index="/shopList">商家列表</el-menu-item>
                            <el-menu-item index="/goodsList">商品列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-edit"></i>
                            <span>添加数据</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/addShop">添加商家</el-menu-item>
                            <el-menu-item index="/addGoods">添加商品</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-picture"></i>
                            <span>图表说明</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/echartBrand">香水品牌</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>设置</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/settings">管理员设置</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-info"></i>
                            <span>说明</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/description">系统说明</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
                <el-container>
                    <el-main>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                        </el-breadcrumb>
                        <!--<el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
                        </el-breadcrumb>-->
                        <router-view></router-view>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isCollapse: true,
            isLogo: true,
            dialogPasswordVisible: false,
            changePasswordForm: {
                password: "",
                newPassword: "",
                rePassword: ""
            },
            password: "",
            labelPosition: "right",
            petname: "",
            rules: {
                newPassword: [{
                    required: true,
                    message: "请输入新密码",
                    trigger: "blur"
                },
                {
                    min: 4,
                    max: 16,
                    message: "长度在4到16个字符之间",
                    trigger: "blur"
                }
                ],
                rePassword: [{
                    required: true,
                    message: "请输入新密码",
                    trigger: "blur"
                },
                {
                    min: 4,
                    max: 16,
                    message: "长度在4到16个字符之间",
                    trigger: "blur"
                }
                ]
            }
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
                this.$confirm("您确定要退出登录?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                    .then(() => {
                        this.$message({
                            type: "success",
                            message: "退出登录成功!"
                        });
                        this.$router.push({
                            name: "Login"
                        });
                    })
                    .catch(() => {

                    });
            }

            if (command == "changePassword") {
                this.dialogPasswordVisible = true;
            }
        },
        getPassword() {
            var _this = this;
            Ajax.getId(sessionStorage.getItem("petname"), res => {
                //获取表中id
                console.log(res);
                _this.id = res.id;
                sessionStorage.setItem('id', res.id);
                Ajax.getInfo(res.id, data => {
                    //获取个人信息
                    var result = data.data;
                    sessionStorage.setItem("userInfo", JSON.stringify(result));
                    _this.password = result.password;
                });
            });
        },
        onSubmit() {
            if (this.changePasswordForm.password != this.password) {
                this.$message({
                    type: "error",
                    message: "旧密码输入错误"
                });
            } else {
                if (
                    this.changePasswordForm.newPassword !=
                    this.changePasswordForm.rePassword
                ) {
                    this.$message({
                        type: "error",
                        message: "两次输入的密码不一致"
                    });
                } else {
                    Ajax.postChangePassword(
                        this.id, {
                            password: this.changePasswordForm.newPassword
                        },
                        res => {
                            if (res.code == "success") {
                                this.$refs["changePasswordForm"].resetFields(); //重置表单
                                this.dialogPasswordVisible = false;
                                this.$message({
                                    type: "success",
                                    message: "修改密码成功"
                                });
                                this.getPassword();
                            }
                        }
                    );
                }
            }
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
        },
        $route: function() {
            this.getPassword();
        }
    },
    created() {
        this.petname = decodeURI(sessionStorage.getItem('petname'));
        this.getPassword();
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
.el-breadcrumb{
    height: 30px;
    line-height: 30px;
    background-color: lightgray;
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

footer {
    border-top: 1px solid black;
    line-height: 60px;
}
</style>
