<template>
    <div>
        <el-form :model="formObj" :rules="rules" ref="formObj" label-width="120px" class="demo-formObj">
            <el-form-item label="品牌中文名称" prop="ChineseName">
                <el-input v-model="formObj.ChineseName" placeholder="请输入品牌中文名称"></el-input>
            </el-form-item>
            <el-form-item label="品牌英文名称" prop="EnglishName">
                <el-input v-model="formObj.EnglishName" placeholder="请输入品牌英文名称"></el-input>
            </el-form-item>
            <el-form-item label="品牌图片" prop="logo">
                <el-upload class="avatar-uploader" :action="url" :show-file-list="false" :on-change="changeFile" :before-upload="beforeAvatarUpload">
                    <img v-if="img" :src="img" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="品牌官网链接" prop="link">
                <el-input v-model="formObj.link" placeholder="请输入品牌官网链接"></el-input>
            </el-form-item>
            <el-form-item label="品牌介绍" prop="desc">
                <el-input type="textarea" :rows="2" placeholder="请输入品牌介绍" v-model="formObj.desc">
                </el-input>
            </el-form-item>
            <el-form-item style="display:flex;">
                <el-button type="primary" @click="submitForm('formObj')">确认</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from '../../../../Api/api'
export default {
    props: {
        form: {
            type: Object,
            default: () => {
                return {}
            }
        },
        url: '',
        img: ''
    },
    data() {
        return {
            formObj: this.form,
            // 1表示新增,2表示修改
            addOrEditFlag: null,
            rules: {
                ChineseName: [
                    { required: true, message: '请输入品牌中文名称', trigger: 'blur' }
                ]
            },
            img: ''
        };
    },
    mounted() {
        if (this.formObj.hasOwnProperty('ChineseName')) {
            this.addOrEditFlag = '修改'
        } else {
            this.addOrEditFlag = '新增'
        }
    },
    methods: {
        changeFile(file, fileList) {
            var This = this;
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e) {
                this.result // 这个就是base64编码了
                This.img = this.result;
                This.formObj.logo = This.img
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
