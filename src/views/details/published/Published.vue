<template>
  <div>
    <table cellspacing=0; cellpadding=15px>
      <thead>
        <tr>
          <th >#</th>
          <th>标题</th>
          <th>作者</th>
          <th>类目</th>
          <th>来源</th>
          <th>重要性</th>
          <th>发布时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in arr" :key="item.id">
          <td>{{index+1}}</td>
          <td>{{item.title}}</td>
          <td>{{item.author}}</td>
          <td>{{item.category}}</td>
          <td>
              <el-button plain>{{item.source}}</el-button>
          </td>
          <td>
            <el-rate v-model='item.star' disabled show-score text-color="#ff9900"></el-rate>
          </td>
          <td>{{item.date}}</td>
          <td>
          <el-button type="primary" @click="editor(item)">编辑</el-button>
           <el-button type="danger" @click="del(item)">删除</el-button>
           <el-button type="success" @click="view(item)" >查看</el-button>
          </td>           
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  props:{},
  data () {
    return {
      arr:[],
      arr1:[],
      obj:''
    }
  },
  components: {},
  methods: {
    getData(){
      axios.get('/api/article/allArticle').then(res=>{
        res.data.data.map(item=>{
          item.star = Number(item.star)
        })
        this.arr=res.data.data
      })
    },
    
    del(item){
      axios.post('/api/article/delete',{
        _id:item._id
      }).then(res=>{
        if(res.data.code===200){
           this.getData()
          this.$message.success('删除成功')
        }
      })    
    },
    editor(item){
      this.obj=item
      this.$router.push({
        name:'article',
        query: {
          obj:JSON.stringify(this.obj)
        }
      })
    },
    view(item){
       axios.post('/api/article/article',{
         _id:item._id
       }).then(res=>{
        this.arr1= res.data.data;
       this.$router.push({
           name: 'see',
           query: {
             arr:JSON.stringify(this.arr1)
           }
         })
       }).catch(err=>{
         console.log(err);
       })
      
    }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
table{
  width: 100%;
  border:1px solid #F1F3F8;
  th{
    font-weight: 400;
  }
  td{
    text-align: center;
    border: 1px solid  #F1F3F8;
  }
}
</style>