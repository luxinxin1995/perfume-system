<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/infoStatic' }">系统首页</el-breadcrumb-item>
        <el-breadcrumb-item>香水原料管理</el-breadcrumb-item>
        <el-breadcrumb-item>植物原料列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="add">
        <el-button size="mini" type="primary" @click="addMaterial()" icon="el-icon-plus">新增</el-button>
      </div>
      <el-col :span="10">
        <el-form>
          <el-form-item label="原料名称" label-width="200px">
            <el-input size="large" placeholder="请输入要查询内容" v-model="search" suffix-icon="el-icon-search"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-table border :data="tableData1" style="width: 100%;" height="470px">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column prop="plant" label="植物原料" width="180">
        </el-table-column>
        <el-table-column prop="plantdesc" label="植物原料介绍">
        </el-table-column>
        <el-table-column label="操作" header-align="center" width="320">
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
        <projcetAddOrEdit v-if="projcetAddOrEditShow" :form='formObj' @cancleHandle='cancleHandle' @submitHandle='submitHandle'>
        </projcetAddOrEdit>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from "../../../../Api/api";
import projcetAddOrEdit from "./addMaterial2";
export default {
  components: {
    projcetAddOrEdit
  },
  data() {
    return {
      tableData: [],
      pageCount: "",
      pageIndex: 1,
      pageSize: 5,
      total: 0,
      titleText: "",
      dialogTableVisible: false,
      projcetAddOrEditShow: false,
      formObj: null,
      search: ''
    };
  },
  created() {
    this.getData();
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
        if (item.plant.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      })
      this.pageCount = Math.ceil(arr.length / 5)
      return arr;
    }
  },
  methods: {
    // 获取所有原料
    getData() {
      axios.getmaterial2All(this.pageIndex, this.pageSize, res => {
        console.log(res);
        this.pageCount = res.pageCount; //总页数
        this.total = res.length; //总数
        if (res.code == "success") {
          var data = res.data
          this.tableData = data.filter(function(item) {
            return item.plant !== ''
          })
        }
      });
    },
    // 新增品牌
    addMaterial() {
      var obj = {};
      this.formObj = obj;
      this.projcetAddOrEditShow = true;
      this.titleText = "新增香水原料";
    },
    // 编辑原料
    handleEdit(index, row) {
      var obj = {};
      for (var key in row) {
        if (row.hasOwnProperty(key)) {
          obj[key] = row[key];
        }
      }
      this.formObj = obj;
      this.projcetAddOrEditShow = true;
      this.titleText = "编辑香水原料";
    },
    handleDelete(index, row) {
      console.log(row);
      var id = row._id;
      axios.postmaterial2Delete(id, res => {
        console.log(res);
        if (res.code == "success") {
          this.$message.success("删除成功");
          this.$router.push({
            name: "MaterialList"
          });
          this.getData();
        } else {
          this.$message.error("删除失败");
        }
      });
    },
    // 修改,新增的取消
    cancleHandle() {
      this.projcetAddOrEditShow = false;
    },
    // 提交(新增/修改)
    submitHandle(obj, flag) {
      this.projcetAddOrEditShow = false;
      if (flag === "修改") {
        axios.postmaterial2Editor(obj._id, obj, res => {
          if (res.code == "success") {
            this.$message.success("修改原料成功");
            this.formObj = obj;
            this.getData();
          }
        });
      } else {
        axios.postmaterial2Add(obj, res => {
          if (res.code == "success") {
            this.$message.success("添加原料成功");
            this.$router.push({
              name: "MaterialList2"
            });
            this.getData();
          }
        });
      }
    },
    pageChange(page) {
      this.pageIndex = page;
      this.getData();
    }
  }
};
</script>

<style scoped>
.table_container {
  padding: 20px;
}

.add {
  float: left;
}
</style>