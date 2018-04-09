<template>
    <div class="fillcontain">
        <div class="table_container">
            <div class="add">
                <el-button size="mini" type="primary" @click="addMovie()" icon="el-icon-plus">新增</el-button>
            </div>
            <el-table :data="tableData" stripe border style="width: 100%">
                <el-table-column type="index" width="30">
                </el-table-column>
                <el-table-column prop="name" label="电影名称" width="140">
                </el-table-column>
                <el-table-column prop="country" label="国家" width="80">
                </el-table-column>
                <el-table-column prop="classify" label="分类" width="100">
                </el-table-column>
                <el-table-column prop="logo" label="图片">
                    <template slot-scope="scope">
                        <img :src="scope.row.logo" width="300" />
                    </template>
                </el-table-column>
                <el-table-column prop="desc" label="剧情简介" width="300">
                </el-table-column>
                <el-table-column label="操作" header-align="center">
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
                <projcetAddOrEdit v-if="projcetAddOrEditShow" :form='formObj' @cancleHandle='cancleHandle' @submitHandle='submitHandle'>
                </projcetAddOrEdit>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import axios from '../../../../Api/api'
import projcetAddOrEdit from './addMovie'
export default {
    components: {
        projcetAddOrEdit
    },
    data() {
        return {
            tableData: [],
            pageCount: '',
            pageIndex: 1,
            pageSize: 5,
            total: 0,
            titleText: '',
            dialogTableVisible: false,
            projcetAddOrEditShow: false,
            formObj: null
        }
    },
    created() {
        this.getData()
    },
    methods: {
        // 获取所有电影
        getData() {
            axios.getmovieAll(this.pageIndex, this.pageSize, res => {
                console.log(res.data)
                this.pageCount = res.pageCount //总页数
                this.total = res.length //总数
                if (res.code == 'success') {
                    this.tableData = res.data
                }
            })
        },
        // 新增品牌
        addMovie() {
            var obj = {}
            this.formObj = obj
            this.projcetAddOrEditShow = true
            this.titleText = '新增品牌'
        },
        // 编辑电影
        handleEdit(index, row) {
            var obj = {}
            for (var key in row) {
                if (row.hasOwnProperty(key)) {
                    obj[key] = row[key];
                }
            }
            this.formObj = obj
            this.projcetAddOrEditShow = true
            this.titleText = '编辑关于香水的电影'
        },
        handleDelete(index, row) {
            console.log(row)
            var id = row._id
            axios.postmovieDelete(id, res => {
                console.log(res)
                if (res.code == 'success') {
                    this.$message.success('删除成功')
                    this.$router.push({
                        name: 'MovieList'
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
                axios.postmovieEditor(obj._id, obj, res => {
                    if (res.code == 'success') {
                        this.$message.success('修改电影成功')
                        this.formObj = obj
                        this.getData();
                    }
                })
            } else {
                axios.postmovieAdd(obj, res => {
                    if (res.code == 'success') {
                        this.$message.success('添加电影成功')
                        this.$router.push({
                            name: 'MovieList'
                        })
                        this.getData();
                    }
                })
            }
        },
        pageChange(page) {
            this.pageIndex = page;
            this.getData();
        }
    }
}
</script>

<style scoped>
.table_container {
    padding: 20px;
}

.add {
    float: left;
}
</style>