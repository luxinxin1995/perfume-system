<template>
    <div>
        <el-row style="margin-top: 20px;">
            <el-col :span="12" :offset="4">
                <header class="form_header">添加香水系列</header>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="系列名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="所属品牌" prop="brand">
                        <el-select v-model="ruleForm.brand" placeholder="请选择">
                            <el-option v-for="item in brand" :key="item.value" :label="item.label" :value="item.name">
                                <span style="color: #8492a6; font-size: 13px">{{item.name}}</span>
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="系列介绍" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="品牌logo" prop="shopPhoto">
                                                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                                                            <i class="el-icon-plus"></i>
                                                        </el-upload>
                                                        <el-dialog :visible.sync="dialogVisible">
                                                            <img width="100%" :src="dialogImageUrl" alt="">
                                                        </el-dialog>
                                                    </el-form-item>-->
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
                desc: '',
                brand: ''
            },
            brand: [],
            rules: {
                name: [
                    { required: true, message: '请输入系列名称', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.postseriesAdd(this.ruleForm, res => {
                        console.log(res)
                        if (res.code == 'success') {
                            this.$message.success('添加品牌系列成功')
                            this.form = []
                            this.$router.push({ name: 'SeriesList' })
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 获取所有品牌
        getData() {
            axios.getAllbrand(res => {
                console.log(res)
                if (res.code == 'success') {
                    this.brand = res.data
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    },
    watch: {
        $route: function() {
            this.getData();
        }
    },
    created() {
        this.getData()
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
