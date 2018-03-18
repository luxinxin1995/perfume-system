<template>
    <div>
        <el-row style="margin-top: 20px;">
            <el-col :span="12" :offset="4">
                <header class="form_header">添加商店</header>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="商店名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商店地址" prop="address">
                        <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>
                    <el-form-item label="主营范围" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="护肤品" name="type"></el-checkbox>
                            <el-checkbox label="化妆品" name="type"></el-checkbox>
                            <el-checkbox label="服饰" name="type"></el-checkbox>
                            <el-checkbox label="鞋包" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="商店电话" prop="phone">
                        <el-input placeholder="请输入手机号码" name="phone" v-model="ruleForm.phone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商店介绍" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="商店图片" prop="shopPhoto">
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                    <el-form-item style="display:flex;">
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from '../../Api/api'
import { isvalidPhone } from '../../utils/validate'
var validPhone = (rule, value, callback) => {
    if (!value) {
        callback(new Error('请输入电话号码'))
    } else if (!isvalidPhone(value)) {
        callback(new Error('请输入正确的11位手机号码'))
    } else {
        callback()
    }
}
export default {
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            ruleForm: {
                name: '',
                address: '',
                type: [],
                phone: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入商店名称', trigger: 'blur' },
                    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '请输入商店地址', trigger: 'blur' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个经营类别', trigger: 'change' }
                ],
                phone: [
                    { required: true, trigger: 'blur', validator: validPhone }
                ],
                desc: [
                    { required: true, message: '请填写商店介绍', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.postshopAdd(this.ruleForm, res => {
                        console.log(res)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
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
