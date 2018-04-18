<template>
    <div>
        <el-form :model="formObj" :rules="rules" ref="formObj" label-width="120px" class="demo-formObj">
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" name="username" prefix-icon="el-icon-edit" size="medium" v-model="formObj.username"></el-input>
            </el-form-item>
            <el-form-item label="设置密码" prop="pass">
                <el-input type="password" id="password" name="password" placeholder="请输入密码" v-model="formObj.pass" prefix-icon="el-icon-goods" size="medium" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" id="rePassword" name="checkPass" placeholder="请再次输入密码" v-model="formObj.checkPass" prefix-icon="el-icon-goods" size="medium" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-radio v-model="formObj.gender" value="true" name="gender" label="男">男</el-radio>
                <el-radio v-model="formObj.gender" value="false" name="gender" label="女">女</el-radio>
            </el-form-item>
            <el-form-item label="邮箱账号" prop="email" :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
                <el-input placeholder="请输入邮箱" name="email" v-model="formObj.email" prefix-icon="el-icon-message" size="medium" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
                <el-input placeholder="请输入手机号码" name="phone" v-model="formObj.phone" prefix-icon="el-icon-mobile-phone" size="medium" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item style="display:flex;">
                <el-button type="primary" @click="submitForm('formObj')">确认</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from "../../../Api/api";
import { isvalidPhone } from '../../../utils/validate'
var validPhone = (rule, value, callback) => {
    if (!value) {
        callback(new Error('请输入电话号码'))
    } else if (!isvalidPhone(value)) {
        callback(new Error('请输入正确的11位手机号码'))
    } else {
        callback()
    }
}
export default {
    props: {
        form: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.formObj.checkPass !== '') {
                    this.$refs.formObj.validateField('checkPass')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.formObj.pass) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            dialogVisible: false,
            formObj: this.form,
            // 1表示新增,2表示修改
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                pass: [
                    { required: true, validator: validatePass, trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, validator: validatePass2, trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                phone: [
                    { required: true, trigger: 'blur', validator: validPhone }
                ]
            }
        };
    },
    mounted() {
        if (this.formObj.hasOwnProperty('username')) {
            this.addOrEditFlag = '修改'
        } else {
            this.addOrEditFlag = '新增'
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('submitHandle', this.formObj, this.addOrEditFlag)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>
<style scoped>
.avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
