<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/infoStatic' }">系统首页</el-breadcrumb-item>
                <el-breadcrumb-item>精彩文章管理</el-breadcrumb-item>
                <el-breadcrumb-item>精彩文章列表</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="add">
                <el-button size="mini" type="primary" @click="addArticle()" icon="el-icon-plus">新增</el-button>
            </div>
            <el-col :span="10">
                <el-form>
                    <el-form-item label="标题/作者" label-width="200px">
                        <el-input size="large" placeholder="请输入要查询内容" v-model="search" suffix-icon="el-icon-search"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-table border :data="tableData1" style="width: 100%;" height="470px">
                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column prop="title" label="文章标题">
                </el-table-column>
                <el-table-column prop="author" label="作者">
                </el-table-column>
                <el-table-column prop="date" label="发表日期">
                </el-table-column>
                <el-table-column prop="detail" label="文章内容">
                </el-table-column>
                <el-table-column prop="photo" label="文章相关图片">
                    <template slot-scope="scope">
                        <img :src="scope.row.photo" class="img" width="120" />
                    </template>
                </el-table-column>
                <el-table-column label="操作" header-align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" class="fa fa-edit ft-btn" @click="handleEdit(scope.$index, scope.row)">&#x3000;编辑</el-button>
                        <el-button size="mini" type="danger" class="fa fa-trash ft-btn" @click="handleDelete(scope.$index, scope.row)">&#x3000;删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination background layout="prev, pager, next,jumper" :current-page="pageIndex" :page-count="pageCount||1" @current-change="pageChange">
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
import projcetAddOrEdit from './addArticle'
export default {
    components: {
        projcetAddOrEdit
    },
    data() {
        return {
            tableData: [],
            pageCount: '',
            urlaction: 'http://localhost:3000/article/add',
            pageIndex: 1,
            pageSize: 5,
            total: 0,
            titleText: '',
            dialogTableVisible: false,
            projcetAddOrEditShow: false,
            formObj: null,
            img: '',
            search: ''
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
                if (item.title.toLowerCase().indexOf(search) !== -1 || item.author.toLowerCase().indexOf(search) !== -1) {
                    return item;
                }
            })
            this.pageCount = arr.length
            return arr;
        }
    },
    methods: {
        // 获取所有文章
        getData() {
            axios.getarticleAll(this.pageIndex, this.pageSize, res => {
                this.pageCount = res.pageCount //总页数
                this.total = res.length //总数
                if (res.code == 'success') {
                    this.tableData = res.data
                    for (var i = 0; i < this.tableData.length; i++) {
                        var element = new Date(this.tableData[i].date);
                        this.tableData[i].date = element.toLocaleDateString()
                    }
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
            this.img = row.photo
            this.urlaction = `http://localhost:3000/article/editor/${row._id}`
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
        handleDelete(index, row) {
            this.img = row.photo
            var id = row._id
            axios.postarticleDelete(id, res => {
                if (res.code == 'success') {
                    this.$message.success('删除成功')
                    this.$router.push({
                        name: 'ArticleList'
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
                axios.postarticleEditor(obj._id, obj, res => {
                    if (res.code == 'success') {
                        this.$message.success('修改文章成功')
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