<template>
    <div class="fillcontain">
        <div class="table_container">
            <div class="add">
                <el-button size="mini" type="primary" @click="addArticle()" icon="el-icon-plus">新增</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column prop="title" label="文章标题" width="180">
                </el-table-column>
                <el-table-column prop="link" label="文章链接" width="180">
                </el-table-column>
                <el-table-column prop="detail" label="文章内容" width="180">
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
import projcetAddOrEdit from './addArticle'
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
        // 获取所有文章
        getData() {
            axios.getarticleAll(this.pageIndex, this.pageSize, res => {
                console.log(res)
                this.pageCount = res.pageCount //总页数
                this.total = res.length //总数
                if (res.code == 'success') {
                    this.tableData = res.data
                }
            })
        },
        // 新增文章
        addArticle() {
            var obj = {}
            this.formObj = obj
            this.projcetAddOrEditShow = true
            this.titleText = '新增文章'
        },
        // 编辑文章
        handleEdit(index, row) {
            var obj = {}
            for (var key in row) {
                if (row.hasOwnProperty(key)) {
                    obj[key] = row[key];
                }
            }
            this.formObj = obj
            this.projcetAddOrEditShow = true
            this.titleText = '编辑文章'
        },
        handleDelete(index,row) {
            console.log(row)
            var id = row._id
            axios.postarticleDelete(id, res => {
                console.log(res)
                if (res.code == 'success') {
                    this.$message.success('删除成功')
                    this.$router.push({
                        name: 'ArticleList'
                    })
                    this.getData();
                }else{
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
                axios.postarticleEditor(obj._id, obj, res => {
                    if (res.code == 'success') {
                        this.formObj = obj
                        this.getData();
                    }
                })
            } else {
                axios.postarticleAdd(obj, res => {
                    if (res.code == 'success') {
                        this.$message.success('添加文章成功')
                        this.$router.push({
                            name: 'ArticleList'
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