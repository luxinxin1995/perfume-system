<template>
    <div>
        <el-row style="margin-top: 20px;">
            <el-col :span="12" :offset="4">
                <header class="form_header">添加香水系列</header>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="动物原料" prop="animal">
                        <el-input v-model="ruleForm.animal"></el-input>
                    </el-form-item>
                    <el-form-item label="动物原料介绍" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.animaldesc"></el-input>
                    </el-form-item>
                    <el-form-item label="植物原料" prop="plant">
                        <el-input v-model="ruleForm.plant"></el-input>
                    </el-form-item>
                    <el-form-item label="植物原料介绍" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.plantdesc"></el-input>
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
                animal: '',
                plant: '',
                animaldesc: '',
                plantdesc: ''
            },
            brand: [],
            rules: {
                animal: [
                    { required: true, message: '请输入动物原料', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
                ],
                plant: [
                    { required: true, message: '请输入植物原料', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.postmaterialAdd(this.ruleForm, res => {
                        console.log(res)
                        if (res.code == 'success') {
                            this.$message.success('添加香水原料成功')
                            this.form = []
                            this.$router.push({ name: 'MaterialList' })
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
