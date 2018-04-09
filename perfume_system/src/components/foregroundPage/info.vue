<template>
    <div>
        <el-form id="user" :model="formObj" :rules="rules" ref="formObj" label-width="100px" class="demo-formObj">
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" :disabled="disabledInput" name="username" prefix-icon="el-icon-edit" size="medium" v-model="formObj.username"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-radio v-model="formObj.gender" value="true" name="gender" label="男">男</el-radio>
                <el-radio v-model="formObj.gender" value="false" name="gender" label="女">女</el-radio>
            </el-form-item>
            <el-form-item label="邮箱账号" prop="email" :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
                <el-input placeholder="请输入邮箱" name="email" v-model="formObj.email" prefix-icon="el-icon-message" size="medium" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="头像" prop="phone">
                <el-input placeholder="请输入图片URL地址" name="avatar" v-model="formObj.avatar" prefix-icon="fa fa-image" size="medium" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
                <el-input placeholder="请输入手机号码" name="phone" v-model="formObj.phone" prefix-icon="el-icon-mobile-phone" size="medium" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('formObj')">确认</el-button>
                <el-button @click="resetForm('formObj')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from "../../Api/api";
import { isvalidPhone } from "../../utils/validate";
var validPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入电话号码"));
  } else if (!isvalidPhone(value)) {
    callback(new Error("请输入正确的11位手机号码"));
  } else {
    callback();
  }
};
export default {
  props: {
    form: {
      type: Object,
      default: () => {
        return {};
      }
    },
    disabledInput: false
  },
  data() {
    return {
      dialogVisible: false,
      formObj: this.form,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        phone: [{ required: true, trigger: "blur", validator: validPhone }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("submitHandle", this.formObj);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
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

.form_header {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
}
</style>
