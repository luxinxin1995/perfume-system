<template>
    <div>
        <el-form id="user" :model="formObj" :rules="rules" ref="formObj" label-width="100px" class="demo-formObj">
            <el-form-item label="留言内容" prop="message">
                <el-input type="textarea" v-model="formObj.message"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('formObj')">确认</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from '../../Api/api'
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
            formObj: this.form,
            rules: {
                message: [
                    { required: true, message: '请输入留言内容', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('submitmessageHandle', this.formObj)
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
.form_header {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
}
</style>
