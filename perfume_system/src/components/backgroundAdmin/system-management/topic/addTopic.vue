<template>
    <div>
        <el-form :model="formObj" :rules="rules" ref="formObj" label-width="120px" class="demo-formObj">
            <el-form-item label="标题" prop="title">
                <el-input v-model="formObj.title"></el-input>
            </el-form-item>
            <el-form-item label="详情" prop="detail">
                <el-input type="textarea" v-model="formObj.detail"></el-input>
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
                title: [
                    { required: true, message: '请输入标题', trigger: 'blur' },
                    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
                ]
            }
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
