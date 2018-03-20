<template>
    <div>
        <el-row style="margin-top: 20px;">
            <el-col :span="12" :offset="4">
                <header class="form_header">添加关于的香水电影</header>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="电影名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="国家" prop="country">
                        <el-input v-model="ruleForm.country"></el-input>
                    </el-form-item>
                    <el-form-item label="上映时间" prop="showtime">
                        <el-input v-model="ruleForm.showtime"></el-input>
                    </el-form-item>
                    <el-form-item label="分类" prop="classify">
                        <el-input v-model="ruleForm.classify"></el-input>
                    </el-form-item>
                    <el-form-item label="主演" prop="protagonist">
                        <el-input v-model="ruleForm.protagonist"></el-input>
                    </el-form-item>
                    <el-form-item label="导演" prop="director">
                        <el-input v-model="ruleForm.director"></el-input>
                    </el-form-item>
                    <el-form-item label="剧情简介" prop="desc">
                        <el-input type="textarea" autosize v-model="ruleForm.desc"></el-input>
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
                name: '',
                country: '',
                showtime: '',
                classify: '',
                protagonist: '',
                director: '',
                desc: ''
            },
            brand: [],
            rules: {
                name: [
                    { required: true, message: '请输入电影名称', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.postmovieAdd(this.ruleForm, res => {
                        console.log(res)
                        if (res.code == 'success') {
                            this.$message.success('添加电影成功')
                            this.form = []
                            this.$router.push({ name: 'MovieList' })
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
