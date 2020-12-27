<template>
  <div>
  <!-- 用<el-card>包起来的外层会有一个阴影效果 -->
    <el-card>
      <el-button type="primary">主要按钮</el-button>
    </el-card>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog> 
    <!--表格需要传一个data属性 即:data="tableData" label代表表头-->
    <el-table
      :data="tableData"  
      style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      <!-- 对数据进行操作需要在这个位置书写 scope.row代表这一行数据-->
      <template slot-scope="scope">
        <el-button>{{scope.row.date}}</el-button>
      </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
      <!-- template与div类似但是不会生成实际的标签 -->
        <el-button type="success" plain @click="handle(scope.row)">编辑</el-button>
        <el-button type="danger" plain @click="handle1(scope.row)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
    <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
       dialogVisible: false,
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  components: {},
   methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(()=> {});
      },
      handle(row) {
        console.log(row);
      },
      handle1() {

      }
    },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>