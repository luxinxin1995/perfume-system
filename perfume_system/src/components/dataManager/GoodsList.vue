<template>
    <div class="container">
        <el-table :data="tableData5" style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="商品名称">
                            <span>{{ props.row.shop }}</span>
                        </el-form-item>
                        <el-form-item label="商店名称">
                            <span>{{ props.row.shop }}</span>
                        </el-form-item>
                        <el-form-item label="商品地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="商品介绍">
                            <span>{{ props.row.desc }}</span>
                        </el-form-item>
                        <el-form-item label="商店 ID">
                            <span>{{ props.row.shopId }}</span>
                        </el-form-item>
                        <el-form-item label="商品 ID">
                            <span>{{ props.row.shopId }}</span>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="商品分类">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>

                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="商品名称" prop="name">
            </el-table-column>
            <el-table-column label="商品介绍" prop="desc">
            </el-table-column>
            <el-table-column label="商品分类" prop="category">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="300">
                <template slot-scope="scope">
                    <el-button type="default" size="mini" @click="dialogFormVisible = true">编辑</el-button>
                    <el-button type="danger" size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--对话框-->
        <el-dialog title="修改商品信息" :visible.sync="dialogFormVisible">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="商品介绍" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item label="商品图片" prop="shopPhoto">
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" limit="2" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20" layout="total, prev, pager, next" :total="100">
        </el-pagination>
    </div>
</template>

<style scoped>
.el-pagination{
    text-align: left;
    margin-top: 20px;
    padding-left: 20px;
}
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
    text-align: left;
}

.el-table th {
    text-align: center;
    color: black;
    background-color: #eee
}
</style>

<script>
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
            dialogFormVisible: false,
            // currentPage1: 5,
            ruleForm: {
                name: '',
                address: '',
                type: [],
                phone: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入商品名称', trigger: 'blur' },
                    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '请输入商品地址', trigger: 'blur' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个经营类别', trigger: 'change' }
                ],
                phone: [
                    { required: true, trigger: 'blur', validator: validPhone }
                ],
                desc: [
                    { required: true, message: '请填写商品介绍', trigger: 'blur' }
                ]
            },
            formLabelWidth: '120px',
            tableData5: [{
                id: '12987122',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }, {
                id: '12987123',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }, {
                id: '12987125',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }, {
                id: '12987126',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }]
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>