<template>
    <div>
        <el-row style="margin-top: 20px;">
            <el-col :span="12" :offset="4">
                <header class="form_header">添加香水分类</header>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="香型" prop="odortype">
                        <el-input v-model="ruleForm.odortype"></el-input>
                    </el-form-item>
                    <el-form-item label="味道" prop="flavour">
                        <el-input v-model="ruleForm.flavour"></el-input>
                    </el-form-item>
                    <el-form-item label="浓度" prop="concentration">
                        <el-input v-model="ruleForm.concentration"></el-input>
                    </el-form-item>
                    <el-form-item label="等级" prop="rank">
                        <el-input v-model="ruleForm.rank"></el-input>
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
                odortype: '',
                flavour: '',
                concentration: '',
                rank: ''
            },
            brand: [],
            rules: {
                odortype: [
                    { required: true, message: '请输入香水香型', trigger: 'blur' }
                ],
                flavour: [
                    { required: true, message: '请输入香水味道', trigger: 'blur' }
                ],
                concentration: [
                    { required: true, message: '请输入香水浓度', trigger: 'blur' }
                ],
                rank: [
                    { required: true, message: '请输入香水等级', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.postclassifyAdd(this.ruleForm, res => {
                        console.log(res)
                        if (res.code == 'success') {
                            this.$message.success('添加香水分类成功')
                            this.form = []
                            this.$router.push({ name: 'ClassifyList' })
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
.form_header {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
}
</style>
