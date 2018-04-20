<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>香水品牌管理</el-breadcrumb-item>
                <el-breadcrumb-item>香水品牌列表</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="add">
                <el-button size="mini" type="primary" @click="addBrand()" icon="el-icon-plus">新增</el-button>
            </div>
            <el-col :span="10">
                <el-form>
                    <el-form-item label="品牌名称" label-width="200px">
                        <el-input size="large" placeholder="请输入要查询内容" v-model="search" suffix-icon="el-icon-search"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-table :data="tableData1" style="width: 100%;">
                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column prop="ChineseName" label="品牌中文名称" width="120">
                </el-table-column>
                <el-table-column prop="EnglishName" label="品牌英文名称" width="120">
                </el-table-column>
                <el-table-column prop="logo" label="品牌logo" width="120">
                    <template slot-scope="scope">
                        <img :src="scope.row.logo" class="img" />
                    </template>
                </el-table-column>
                <el-table-column prop="desc" label="品牌介绍">
                </el-table-column>
                <el-table-column label="操作" header-align="center" width="200">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" class="fa fa-edit ft-btn" @click="handleEdit(scope.$index, scope.row)">&#x3000;编辑</el-button>
                        <el-button size="mini" type="danger" class="fa fa-trash ft-btn" @click="handleDelete(scope.$index, scope.row)">&#x3000;删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination layout="prev, pager, next,jumper" :current-page="pageIndex" :page-count="pageCount||1" @current-change="pageChange">
                </el-pagination>
            </div>
            <!--对话框(新增/编辑)-->
            <el-dialog :title="titleText" modal center :visible.sync="projcetAddOrEditShow">
                <projcetAddOrEdit v-if="projcetAddOrEditShow" :img="img" :form='formObj' :url="urlaction" @cancleHandle='cancleHandle' @submitHandle='submitHandle'>
                </projcetAddOrEdit>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import axios from '../../../../Api/api'
import projcetAddOrEdit from './addBrand'
export default {
    components: {
        projcetAddOrEdit
    },
    data() {
        return {
            tableData: [],
            urlaction: 'http://localhost:3000/brand/add',
            pageCount: '',
            pageIndex: 1,
            pageSize: 5,
            total: 0,
            titleText: '',
            dialogTableVisible: false,
            projcetAddOrEditShow: false,
            formObj: null,
            img: '',
            search: ''//搜索框的初始值
        }
    },
    created() {
        this.getData()
    },
    computed: {
        tableData1: function() {
            var arr = this.tableData,
                search = this.search;
            if (!search) {
                return arr;
            }
            search = search.trim().toLowerCase();
            arr = arr.filter(function(item) {
                if (item.EnglishName.toLowerCase().indexOf(search) !== -1 || item.ChineseName.indexOf(search) !== -1) {
                    return item;
                }
            })
            return arr;
        }
    },
    methods: {
        // 获取所有品牌
        getData() {
            axios.getbrandAll(this.pageIndex, this.pageSize, res => {
                this.pageCount = res.pageCount //总页数
                this.total = res.length //总数
                if (res.code == 'success') {
                    this.tableData = res.data
                }
            })
        },
        // 新增品牌
        addBrand() {
            var obj = {}
            this.formObj = obj
            this.projcetAddOrEditShow = true
            this.titleText = '新增品牌'
        },
        // 编辑品牌
        handleEdit(index, row) {
            this.img = row.logo
            this.urlaction = `http://localhost:3000/brand/editor/${row._id}`
            var obj = {}
            for (var key in row) {
                if (row.hasOwnProperty(key)) {
                    obj[key] = row[key];
                }
            }
            this.formObj = obj
            this.projcetAddOrEditShow = true
            this.titleText = '编辑品牌'
        },
        // 删除品牌
        handleDelete(index, row) {
            var id = row._id
            axios.postbrandDelete(id, res => {
                if (res.code == 'success') {
                    this.$message.success('删除成功')
                    this.$router.push({
                        name: 'BrandList'
                    })
                    this.getData();
                } else {
                    this.$message.error('删除失败')
                }
            })
        },
        // 修改,新增的取消
        cancleHandle() {
            this.projcetAddOrEditShow = false
        },
        // 提交(新增/修改)
        submitHandle(obj, flag) {
            this.projcetAddOrEditShow = false
            if (flag === '修改') {
                axios.postbrandEditor(obj._id, obj, res => {
                    if (res.code == 'success') {
                        this.$message.success('修改品牌成功')
                        this.formObj = obj
                        this.getData();
                    }
                })
            } else {
                axios.postbrandAdd(obj, res => {
                    if (res.code == 'success') {
                        this.$message.success('添加品牌成功')
                        this.$router.push({
                            name: 'BrandList'
                        })
                        this.getData();
                    }
                })
            }
        },
        // 分页
        pageChange(page) {
            this.pageIndex = page;
            this.getData();
        }
    },
    watch: {
        $route: function() {
            this.getData()
        }
    }
}
</script>

<style scoped>
.table_container {
    padding: 20px;
}

.img {
    width: 100px;
}

.add {
    float: left;
}
</style>
