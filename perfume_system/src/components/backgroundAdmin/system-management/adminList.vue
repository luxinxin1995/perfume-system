<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column prop="username" label="用户名" width="180">
                </el-table-column>
                <el-table-column prop="jurisdiction" label="权限" width="220">
                </el-table-column>
                <el-table-column prop="registDate" label="注册时间" width="180">
                </el-table-column>
                <el-table-column label="操作" header-align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" v-show="deleteBtn" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination layout="prev, pager, next,jumper" :current-page="pageIndex" :page-count="pageCount||1" @current-change="pageChange">
                </el-pagination>
            </div>
            <!--<el-dialog title="删除该用户" :visible.sync="dialogVisible" width="30%">
                    <span>确定删除?</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="confirmDelete(scope.$index, scope.row)">确 定</el-button>
                    </span>
                </el-dialog>-->
        </div>
    </div>
</template>

<script>
import axios from '../../../Api/api'
export default {
    data() {
        return {
            tableData: [],
            pageCount: '',
            pageIndex: 1,
            pageSize: 5,
            total: 0,
            deleteBtn: true
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            // 获取所有用户信息
            axios.getAll(this.pageIndex, this.pageSize, res => {
                console.log('adminList', res.data)
                this.pageCount = res.pageCount //总页数
                this.total = res.length //总数
                if (res.code == 'success') {
                    for (let i = 0; i < res.data.length; i++) {
                        let element = res.data[i];
                        if (element.username == 'admin') {
                            element.jurisdiction = '超级管理员'
                            this.deleteBtn = false;
                        } else {
                            element.jurisdiction = '普通用户'
                        }
                        // 转化时间
                        element.registDate = global.getDate(element.registDate)
                    }
                    this.tableData = res.data
                }
            })
        },
        handleDelete(index, row) {
            axios.postUserDelete(row._id, res => {
                console.log('admin', res)
                if (res.code == "success") {
                    this.$message.success('删除用户成功!')
                    this.getData();
                    this.$router.push({
                        name: 'AdminList',
                        query: {
                            random: Math.random()
                        }
                    })
                } else {
                    this.dialogVisible = false;
                    this.$message.error('删除用户失败!')
                }
            })
            // console.log(JSON.parse(sessionStorage.getItem('username')))
            // let isAdmin = JSON.parse(sessionStorage.getItem('userInfo')).state == 0 ? true : false
            // if (isAdmin) {
            //     if (row.jurisdiction == "超级管理员") {
            //         this.$message.error("超级管理员无法删除!")
            //     } else {
            //         this.dialogVisible = true;
            //         this.deleteId = row._id;
            //     }
            // } else {
            //     this.$message.error('抱歉,您的权限不足!')
            //     this.dialogVisible = false;
            // }
        },
        // confirmDelete(index, row) {

        // },
        pageChange(page) {
            console.log('page', page)
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


