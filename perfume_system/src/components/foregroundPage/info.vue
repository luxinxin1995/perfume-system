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
      <el-form-item label="头像" prop="avatar">
        <el-upload class="avatar-uploader" :action="url" :show-file-list="false" :on-change="changeFile" :before-upload="beforeAvatarUpload">
          <img v-if="img" :src="img" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input placeholder="请输入手机号码" name="phone" v-model="formObj.phone" prefix-icon="el-icon-mobile-phone" size="medium" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formObj')">确认</el-button>
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
    disabledInput: false,
    url: ''
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
      },
      img: ''
    };
  },
  methods: {
    changeFile(file, fileList) {
      var This = this;
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function(e) {
        console.log(this.result)
        this.result // 这个就是base64编码了
        This.img = this.result;
        This.formObj.avatar = This.img
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("submitHandle", this.formObj);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
