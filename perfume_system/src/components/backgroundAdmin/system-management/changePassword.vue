<template>
    <div>
        <el-row style="margin-top: 20px;">
            <el-col :span="12" :offset="4">
                <header class="form_header">修改密码</header>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="密码" prop="title">
                        <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码密码" prop="title">
                        <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="详情" prop="detail">
                        <el-input type="textarea" v-model="ruleForm.detail"></el-input>
                    </el-form-item>
                    <el-form-item style="display:flex;">
                        <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from '../../../../Api/api'
export default {
    data() {
        return {
            dialogVisible: false,
            ruleForm: {
                title: '',
                detail: ''
            },
            brand: [],
            rules: {
                title: [
                    { required: true, message: '请输入标题', trigger: 'blur' },
                    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.posttopicAdd(this.ruleForm, res => {
                        console.log(res)
                        if (res.code == 'success') {
                            this.$message.success('添加话题成功')
                            this.form = []
                            this.$router.push({ name: 'TopicList' })
                        }
                    })
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
