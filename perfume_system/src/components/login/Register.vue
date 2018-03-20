<template>
  <div>
    <div class="admin-form">
      <h2 class="title">
        <p>欢迎注册</p>
      </h2>
      <div class="form-container">
        <el-form id="user" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input placeholder="请输入用户名" name="username" prefix-icon="el-icon-edit" size="medium" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="设置密码" prop="pass">
            <el-input type="password" id="password" name="password" placeholder="请输入密码" v-model="ruleForm.pass" prefix-icon="el-icon-edit-outline" size="medium" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" id="rePassword" name="checkPass" placeholder="请再次输入密码" v-model="ruleForm.checkPass" prefix-icon="el-icon-edit-outline" size="medium" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio v-model="ruleForm.gender" value="true" name="gender" label="男">男</el-radio>
            <el-radio v-model="ruleForm.gender" value="false" name="gender" label="女">女</el-radio>
          </el-form-item>
          <el-form-item label="邮箱账号" prop="email" :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
            <el-input placeholder="请输入邮箱" name="email" v-model="ruleForm.email" prefix-icon="el-icon-message" size="medium" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="phone">
            <el-input placeholder="请输入手机号码" name="phone" v-model="ruleForm.phone" prefix-icon="el-icon-mobile-phone" size="medium" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitRegister('ruleForm')" style="width:100%;" size="medium">注册</el-button>
          </el-form-item>
          <el-button style="width:100%;background:none;border:none;text-align:right;padding-right:0;" size="small"><router-link :to="{name:'Index'}">已有账号,直接登录 ▶</router-link></el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../Api/api'
// 序列化数据
var qs = require('qs')
import {isvalidPhone} from '../../utils/validate'
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
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerUrl: 'register',
      ruleForm: {
        username: '',
        pass: '',
        checkPass: '',
        gender: '',
        email: '',
        phone: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { required: true, trigger: 'blur', validator: validPhone }
        ]
      }
    }
  },
  methods: {
    submitRegister (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          var self = this
          var pass1 = $('#password').val()
          var pass2 = $('#rePassword').val()
          if (pass1 !== pass2) {
            self.$message.error('两次输入密码不一致!')
          } else {
            console.log(qs.stringify({data: this.ruleForm}))
            axios.postRegister(qs.stringify({data: this.ruleForm}), res => {
              console.log(res)
              if (res.code === 'success') {
                self.$alert('恭喜您注册成功,立即跳转登录界面?', '注册', {
                  confirmButtonText: '确定',
                  callback: action => {
                    self.$router.push({
                      path: '/login'
                    })
                  }
                })
                $('input').val('')
              } else {
                self.$alert(res.msg, '注册', {
                  confirmButtonText: '确定',
                  callback: action => {
                  }
                })
              }
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
  .title{
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    display: flex;
    color: white;
    justify-content: space-around;
    letter-spacing: 8px;
  }
  .title p{
    display: inline-block;
    height: 30px;
    width: 100%;
    text-decoration: none;
    color: white;
    border-bottom: 3px solid lightskyblue;
  }
  .admin-form{
    width: 300px;
    margin: 10px auto 0 auto;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 5px;
  }
  .demo-ruleForm{
    margin-top: 20px;
  }
  a{
    text-decoration: none;
    color: red;
  }
</style>
