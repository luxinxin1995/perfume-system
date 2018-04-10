<template>
    <div>
        <el-form :model="formObj" :rules="rules" ref="formObj" label-width="120px" class="demo-formObj">
            <el-form-item label="电影名称" prop="name">
                <el-input v-model="formObj.name" placeholder="请输入电影名称"></el-input>
            </el-form-item>
            <el-form-item label="国家" prop="country">
                <el-input v-model="formObj.country" placeholder="请输入国家"></el-input>
            </el-form-item>
            <el-form-item label="分类" prop="classify">
                <el-input v-model="formObj.classify" placeholder="请输入电影分类"></el-input>
            </el-form-item>
            <el-form-item label="图片" prop="logo">
                <el-input v-model="formObj.logo" placeholder="请输入图片URL地址，如:https://imgsrc.baidu.com/baike/pic/item/e7cd7b899e510fb3899c1684d533c895d1430c1f.jpg"></el-input>
            </el-form-item>
            <el-form-item label="剧情简介" prop="desc">
                <el-input type="textarea" autosize v-model="formObj.desc" placeholder="请输入剧情简介"></el-input>
            </el-form-item>
            <el-form-item style="display:flex;">
                <el-button type="primary" @click="submitForm('formObj')">确认</el-button>
                <el-button @click="resetForm('formObj')">重置</el-button>
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
        }
    },
    data() {
        return {
            dialogVisible: false,
            formObj: this.form,
            // 1表示新增,2表示修改
            addOrEditFlag: null,
            rules: {
                name: [
                    { required: true, message: '请输入电影名称', trigger: 'blur' }
                ]
            }
        };
    },
    mounted() {
        if (this.formObj.hasOwnProperty('name')) {
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
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
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
