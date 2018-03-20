<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-table :data="tableData" stripe border style="width: 100%">
                <el-table-column type="index" width="30">
                </el-table-column>
                <el-table-column prop="name" label="电影名称" width="140">
                </el-table-column>
                <el-table-column prop="country" label="国家" width="80">
                </el-table-column>
                <el-table-column prop="showtime" label="上映时间" width="120">
                </el-table-column>
                <el-table-column prop="classify" label="分类" width="100">
                </el-table-column>
                <el-table-column prop="protagonist" label="主演" width="100">
                </el-table-column>
                <el-table-column prop="director" label="导演" width="100">
                </el-table-column>
                <el-table-column prop="desc" label="剧情简介" width="300">
                </el-table-column>
                <el-table-column label="操作" header-align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination layout="prev, pager, next,jumper" :current-page="pageIndex" :page-count="pageCount||1" @current-change="pageChange">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../../../Api/api'
export default {
    data() {
        return {
            tableData: [],
            pageCount: '',
            pageIndex: 1,
            pageSize: 5,
            total: 0
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
        // 编辑电影
        handleEdit(index, row) {
            console.log(row)
            this.$router.push({
                name: 'AddMovie',
                params: {id: row._id}
            })
            this.tableData = row
        },
        handleDelete(index,row) {
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
                }else{
                    this.$message.error('删除失败')
                }
            })
        },
        pageChange(page) {
            this.pageIndex = page;
            this.getData();
        }
    },
    watch: {
        $route: function() {
            this.getData();
        }
    }
}
</script>

<style scoped>
.table_container {
    padding: 20px;
}
</style>