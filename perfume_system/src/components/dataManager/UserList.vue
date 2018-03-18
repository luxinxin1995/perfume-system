<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column prop="username" label="用户名" width="180">
                </el-table-column>
                <el-table-column prop="gender" label="性别" width="220">
                </el-table-column>
                <el-table-column prop="email" label="邮箱" width="180">
                </el-table-column>
                <el-table-column prop="phone" label="手机号码">
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
import axios from '../../Api/api'
export default {
    data() {
        return {
            tableData: [],
            pageCount: "",
            pageIndex: 1,
            pageSize: 5,
            total: 0
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            var id = sessionStorage.getItem('id');
            console.log('id', id)
            axios.getAll(id, this.pageIndex,this.pageSize,res => {
                console.log(res)
                this.pageCount = res.pageCount //总页数
                this.total = res.length //总数
                if (res.code == 'success') {
                    this.tableData = res.data
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


