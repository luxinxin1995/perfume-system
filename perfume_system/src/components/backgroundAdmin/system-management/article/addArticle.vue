<template>
    <div>
        <el-form :model="formObj" enctype="multipart/form-data" :rules="rules" ref="formObj" label-width="120px" class="demo-formObj">
            <el-form-item label="文章标题" prop="title">
                <el-input v-model="formObj.title" placeholder="请输入文章标题"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
                <el-input v-model="formObj.author" placeholder="请输入作者名称"></el-input>
            </el-form-item>
            <el-form-item label="发表日期" prop="date">
                <el-date-picker v-model="formObj.date" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="文章内容" prop="detail">
                <el-input type="textarea" v-model="formObj.detail" placeholder="请输入文章内容"></el-input>
            </el-form-item>
            <el-form-item label="文章相关图片" prop="photo">
                <el-upload class="avatar-uploader" :action="url" :show-file-list="false" :on-change="changeFile" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="img" :src="img" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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
                title: [
                    { required: true, message: '请输入文章标题', trigger: 'blur' },
                    { min: 2, max: 40, message: '长度在 2 到 40 个字符', trigger: 'blur' }
                ],
                detail: [
                    { required: true, message: '请输入文章内容', trigger: 'blur' }
                ]
            },
            img: ''
        };
    },
    mounted() {
        if (this.formObj.hasOwnProperty('title')) {
            this.addOrEditFlag = '修改'
        } else {
            this.addOrEditFlag = '新增'
        }
    },
    methods: {
        changeFile(file, fileList) {
            var This = this;
            //this.imageUrl = URL.createObjectURL(file.raw);
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e) {
                this.result // 这个就是base64编码了
                This.img = this.result;
                This.formObj.photo = This.img
            }
        },
        handleAvatarSuccess(res, file) {
            // this.img = URL.createObjectURL(file.raw);
            // this.formObj.photo = this.img
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!');
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

.form_header {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
}
</style>
