<template>
  <div class="container">
     <el-table :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)" border style="width: 100%">
    <el-table-column prop="NAME" label="名称" width="380" align="center">
    </el-table-column>
    <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="180" align="center">
    </el-table-column>
    <el-table-column prop="ORI_PRICE" label="原价" width="180" align="center">
    </el-table-column>
    <el-table-column prop="PRESENT_PRICE" label="现价" width="180" align="center">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope" width="180" >
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
    </el-pagination>
    <!--<div class="btn">
      <el-button type="primary">导出EXCEL</el-button>
      <el-button type="danger">导出CSV</el-button>
    </div>-->


    <download-excel
    class="export-excel-wrapper"
    :data="tableData"
    :fields="json_fields"
    name="商城.xls">
    <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
     <el-button type="primary" size="small">导出EXCEL</el-button>
</download-excel>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      data:{
          type:Array,
          required:true
      }
  },
  data () {
    return {
         tableData: [],
         currpage: 1,
        pagesize: 10,



      json_fields: {
        "名称": "NAME",    //常规字段 
        "商品编号": "GOODS_SERIAL_NUMBER",    //常规字段 
        "原价": "ORI_PRICE",    //常规字段 
        "现价": "PRESENT_PRICE",    //常规字段 

      },
      
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ]
    }
  },
  components: {},
  methods: {
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index) {
        this.tableData.splice(index,1)
      },
      handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currpage = val;
    },
  },
  mounted() { 
      this.tableData=this.data
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.container{
    margin:  0 20px;
}
.btn{
  margin-top: 20px;
}
</style>