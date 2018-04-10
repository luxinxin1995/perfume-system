<template>
    <div>
        <el-form :model="formObj" ref="formObj" label-width="120px" class="demo-formObj">
            <el-form-item label="香型" prop="odortype">
                <el-input v-model="formObj.odortype" placeholder="请输入香型"></el-input>
            </el-form-item>
            <el-form-item label="味道" prop="flavour">
                <el-input v-model="formObj.flavour" placeholder="请输入味道"></el-input>
            </el-form-item>
            <el-form-item label="浓度" prop="concentration">
                <el-input v-model="formObj.concentration" placeholder="请输入浓度"></el-input>
            </el-form-item>
            <el-form-item label="等级" prop="rank">
                <el-input v-model="formObj.rank" placeholder="请输入等级"></el-input>
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
            formObj: this.form,
            // 1表示新增,2表示修改
            addOrEditFlag: null
            
        };
    },
    mounted() {
        if (this.formObj.hasOwnProperty('odortype')) {
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
.form_header {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
}
</style>
