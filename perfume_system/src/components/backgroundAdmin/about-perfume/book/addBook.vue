<template>
    <div>
        <el-form :model="formObj" :rules="rules" ref="formObj" label-width="120px" class="demo-formObj">
            <el-form-item label="书名" prop="name">
                <el-input v-model="formObj.name"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
                <el-input v-model="formObj.author"></el-input>
            </el-form-item>
            <el-form-item label="内容简介" prop="desc">
                <el-input type="textarea" v-model="formObj.desc"></el-input>
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
            brand: [],
            // 1表示新增,2表示修改
            addOrEditFlag: null,
            rules: {
                name: [
                    { required: true, message: '请输入书籍名称', trigger: 'blur' }
                ],
                author: [
                    { required: true, message: '请输入作者', trigger: 'blur' },
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
