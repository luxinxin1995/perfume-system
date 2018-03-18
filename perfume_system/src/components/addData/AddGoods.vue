<template>
    <div>
        <el-row style="margin-top: 20px;">
            <el-col :span="12" :offset="4">
                <header class="form_header">添加商品</header>
                <el-form :model="foodForm" :rules="foodrules" ref="foodForm" label-width="110px" class="form food_form">
                    <el-form-item label="商品名称" prop="name">
                        <el-input v-model="foodForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品容量" prop="capacity">
                        <el-input v-model="foodForm.capacity"></el-input>
                    </el-form-item>
                    <el-form-item label="商品价格" prop="price">
                        <el-input-number v-model="foodForm.price" :min="0" :max="10000"></el-input-number>
                    </el-form-item>
                    <el-form-item label="原产地" prop="country">
                        <el-input v-model="foodForm.country"></el-input>
                    </el-form-item>
                    <el-form-item label="保质期" prop="expiration">
                        <el-input v-model="foodForm.expiration"></el-input>
                    </el-form-item>
                    <el-form-item label="商品详情" prop="description">
                        <el-input v-model="foodForm.description"></el-input>
                    </el-form-item>
                    <el-form-item label="商品图片" prop="shopPhoto">
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" limit="3" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addFood('foodForm')">确认添加商品</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            foodForm: {
                name: '',
                capacity: '',
                price: '',
                country: '',
                description: '',
                price: '',
                expiration: '',
                shopPhoto: ''

            },
            foodrules: {
                name: [
                    { required: true, message: '请输入商品名称', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
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
