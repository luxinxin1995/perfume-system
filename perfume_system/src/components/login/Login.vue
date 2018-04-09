<template>
  <div>
    <div class="admin-form">
      <h2 class="title">欢迎登录</h2>
      <div class="form-container">
        <el-form id="user" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户账号" prop="username">
            <el-input placeholder="请输入用户名" prefix-icon="el-icon-edit" size="medium" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="pass">
            <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass" prefix-icon="el-icon-goods" size="medium" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;" size="medium">登录</el-button>
          </el-form-item>
          <el-button style="width:100%;background:none;border:none;text-align:right;padding-right:0;" size="small">
            <router-link :to="{name:'Register'}">还没有账号,免费注册 ▶</router-link>
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../Api/api'
var qs = require('qs')
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        pass: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this
          var username = qs.stringify({ username: this.ruleForm.username })
          axios.postLogin(qs.stringify({ data: this.ruleForm }), res => {
            if (res.code == 'success') {
              if (this.ruleForm.username == 'admin' && this.ruleForm.pass == 'luxinxin') {
                self.$message({
                  message: '欢迎登录香水管理系统！',
                  type: 'success'
                })
                sessionStorage.setItem('username', self.ruleForm.username)
                self.$router.push('/home')
              } else {
                self.$message({
                  message: '欢迎登录！',
                  type: 'success'
                })
                sessionStorage.setItem('username', self.ruleForm.username)
                self.$router.push('/')
              }
            } else {
              self.$message({
                message: res.msg,
                type: 'success'
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    register() {
      this.$router.push('/register')
    },
    forget() {
      this.$router.push('/forget')
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  color: white;
  border-bottom: 3px solid lightskyblue;
}

.admin-form {
  width: 300px;
  margin: 10px auto 0 auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 5px;
}

.demo-ruleForm {
  margin-top: 20px;
}

.active {
  border-bottom: 3px solid lightskyblue;
}

.demo-ruleForm {
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: red;
}
</style>
