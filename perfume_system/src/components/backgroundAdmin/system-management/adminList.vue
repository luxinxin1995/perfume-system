<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/infoStatic' }">系统首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-col :span="10">
        <el-form>
          <el-form-item label="用户名/手机号/邮箱账号/性别" label-width="200px">
            <el-input size="large" placeholder="请输入要查询的用户" v-model="search" suffix-icon="el-icon-search"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-table border :data="tableData1" style="width: 100%;max-height:470px;">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="jurisdiction" label="权限" width="220">
        </el-table-column>
        <el-table-column prop="registDate" label="注册时间" width="180">
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="100">
        </el-table-column>
        <el-table-column prop="phone" label="手机号码" width="180">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column label="操作" header-align="center" width="200">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" class="fa fa-trash ft-btn" @click="handleDelete(scope.$index, scope.row)">&#x3000;删除</el-button>
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
import axios from "../../../Api/api";
export default {
  data() {
    return {
      tableData: [],
      pageCount: '',
      pageIndex: 1,
      pageSize: 5,
      total: 0,
      deleteBtn: true,
      search: ''//搜索框的初始值
    };
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
        if (item.username.toLowerCase().indexOf(search) !== -1 || item.gender.indexOf(search) !== -1 || item.email.toLowerCase().indexOf(search) !== -1 || item.phone.indexOf(search) !== -1) {
          return item;
        }
      })
      return arr;
    }
  },
  methods: {
    getData() {
      axios.getAll(this.pageIndex, this.pageSize, res => {
        this.pageCount = res.pageCount; //总页数
        this.total = res.length; //总数
        if (res.code == "success") {
          for (let i = 0; i < res.data.length; i++) {
            let element = res.data[i];
            if (element.username == "admin") {
              element.jurisdiction = "系统管理员";
            } else {
              element.jurisdiction = "普通用户";
            }
          }
          this.tableData = res.data;
          for (var i = 0; i < this.tableData.length; i++) {
            var element = this.tableData[i].registDate;
            element = new Date(element)
            this.tableData[i].registDate = element.toLocaleDateString();
          }
        }
      });
    },
    handleDelete(index, row) {
      if (row.jurisdiction == "系统管理员") {
        this.$message.error("系统管理员无法删除!");
      } else {
        axios.postUserDelete(row._id, res => {
          if (res.code == "success") {
            this.$message.success("删除用户成功!");
            this.getData();
            this.$router.push({
              name: "AdminList",
              query: {
                random: Math.random()
              }
            });
          } else {
            this.dialogVisible = false;
            this.$message.error("删除用户失败!");
          }
        });
      }
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
};
</script>

<style scoped>
.table_container {
  padding: 20px;
}

.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>


