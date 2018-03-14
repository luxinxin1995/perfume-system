<template>
  <div>
      <el-form id="user" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户账号" prop="name">
            <el-input placeholder="请输入用户名" prefix-icon="el-icon-edit" size="medium" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="pass">
            <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass" prefix-icon="el-icon-edit-outline" size="medium" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;" size="medium">登录</el-button>
          </el-form-item>
          <el-button style="width:100%;background:none;border:none;text-align:right;padding-right:0;" size="small"><router-link :to="{name:'Register'}">还没有账号,免费注册 ▶</router-link></el-button>
        </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    register () {
      this.$router.push('/register')
    },
    forget () {
      this.$router.push('/forget')
    }
  }
}
</script>
<style scoped>
  .demo-ruleForm{
    margin-top: 20px;
  }
  a{
    text-decoration: none;
    color: red;
  }
</style>
