<template>
    <div>
        <el-form :model="formObj" :rules="rules" ref="formObj" label-width="120px" class="demo-formObj">
            <el-form-item label="香水名称" prop="productName">
                <el-input v-model="formObj.productName" placeholder="请输入香水名称"></el-input>
            </el-form-item>
            <el-form-item label="香水品牌" prop="brand">
                <el-select v-model="formObj.brand" placeholder="请选择品牌">
                    <el-option v-for="item in formObj.brandTypes" :key="item.ChineseName" :label="item.ChineseName" :value="item.ChineseName">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="香调" prop="fragrance">
                <el-input v-model="formObj.fragrance" placeholder="请输入香水香调"></el-input>
            </el-form-item>
            <el-form-item label="前调" prop="topNotes">
                <el-input v-model="formObj.topNotes" placeholder="请输入香水前调"></el-input>
            </el-form-item>
            <el-form-item label="中调" prop="middleNotes">
                <el-input v-model="formObj.middleNotes" placeholder="请输入香水中调"></el-input>
            </el-form-item>
            <el-form-item label="尾调" prop="lowNote">
                <el-input v-model="formObj.lowNote" placeholder="请输入香水尾调"></el-input>
            </el-form-item>
            <el-form-item label="属性" prop="property">
                <el-input v-model="formObj.property" placeholder="请输入香水属性（男香/女香/中性香）"></el-input>
            </el-form-item>
            <el-form-item label="调香师" prop="flavorist">
                <el-input v-model="formObj.flavorist" placeholder="请输入调香师"></el-input>
            </el-form-item>
            <el-form-item label="香水图片" prop="photo">
                <el-upload class="avatar-uploader" :action="url" :show-file-list="false" :on-change="changeFile" :before-upload="beforeAvatarUpload">
                    <img v-if="img" :src="img" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="香水简介" prop="desc">
                <el-input type="textarea" :rows="2" placeholder="请输入品牌介绍" v-model="formObj.desc">
                </el-input>
            </el-form-item>
            <el-form-item style="display:flex;">
                <el-button type="primary" @click="submitForm('formObj')">确认</el-button>
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
        },
        url: '',
        img: ''
    },
    data() {
        return {
            formObj: this.form,
            // 1表示新增,2表示修改
            addOrEditFlag: null,
            rules: {
                productName: [
                    { required: true, message: '请输入香水名称', trigger: 'blur' }
                ]
            },
            img: ''
        };
    },
    mounted() {
        if (this.formObj.hasOwnProperty('productName')) {
            this.addOrEditFlag = '修改'
        } else {
            this.addOrEditFlag = '新增'
        }
    },
    methods: {
        changeFile(file, fileList) {
            var This = this;
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e) {
                this.result // 这个就是base64编码了
                This.img = this.result;
                This.formObj.photo = This.img
            }
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('submitHandle', this.formObj, this.addOrEditFlag)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
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
</style>
