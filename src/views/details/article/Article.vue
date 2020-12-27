<template>
  <div class="container">
        <div class='box'>
            <div class="fr right">
                <button @click="handle1">查看</button>
                <button style="background:#409EFF" @click="handle">发表</button>
            </div>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="文章标题" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="文章摘要" prop="abstract">
                <el-input v-model="ruleForm.abstract"></el-input>
            </el-form-item>
        </el-form>
        <div class="details">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm" style="display:flex;">
                <el-form-item label="作者" prop="author" class="author">
                    <el-input v-model="ruleForm.author"></el-input>
                </el-form-item>
                <el-form-item label="类目" prop="value">
                    <el-select v-model="ruleForm.value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label="来源" prop="source">
                    <el-select v-model="ruleForm.source" placeholder="请选择">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="重要性" prop="importance">
                    <el-select v-model="ruleForm.importance" placeholder="请选择">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.label"></el-option>
                    </el-select>
                </el-form-item>
                <div class="block">
                    <span class="demonstration">发布时间</span>
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期时间"></el-date-picker>
                </div>
            </el-form>
        </div>
        <div class="foot">
          <mavon-editor v-model="value2" class="excel"/>
        </div>
        <button class="but" @click="modify">确认修改</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  props:{},
  data () {
    return {
        ruleForm: {
          title: '',
          abstract:'',
          value:'',
          author:'',
          source:'',
          importance:''
        },
         rules: {
          title: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },
            { min: 0, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          abstract: [
            { required: true, message: '请输入文章摘要', trigger: 'blur' },
            { min: 20, max: 120, message: '长度在 20 到 120 个字符', trigger: 'blur' }
          ],
          author: [
            { required: true, message: '请输入作者', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
           value: [
            { required: true, message: '请选择类目', trigger: 'change' }
          ],
          source: [
            { required: true, message: '请选择来源', trigger: 'change' }
          ],
          importance: [
            { required: true, message: '请选择重要性', trigger: 'change' }
          ],
         },
         options: [{
          value: '选项1',
          label: 'Vue'
        }, {
          value: '选项2',
          label: 'React'
        }, {
          value: '选项3',
          label: 'Node.js'
        }, {
          value: '选项4',
          label: '性能优化'
        }, {
          value: '选项5',
          label: 'JavaScript'
        }, {
          value: '选项6',
          label: '小程序'
        }, {
          value: '选项7',
          label: '工具箱'
        }, {
          value: '选项8',
          label: '其他'
        }],
        options1: [{
           value: '选项1',
          label: '原创'
        }, {
           value: '选项2',
          label: '转载'
        }, {
           value: '选项3',
          label: '与他人合作'
        }],
        options2: [{
           value: '选项1',
          label: '1'
        }, {
           value: '选项2',
          label: '2'
        }, {
           value: '选项3',
          label: '3'
        }, {
           value: '选项4',
          label: '4'
        }, {
           value: '选项5',
          label: '5'
        }],
        value: '',
        value1: '',
        value2: '',
        arr:[],
        obj:{}
    }
  },
  components: {},
  methods: {
    handle(){
      this. getData()
      this.$message.success('发表成功')
      this.$router.push('/Published')
    },
    handle1(){
    
    },
    getData(){
      axios.post('/api/article/create',{
        title: this.ruleForm.title,
        abstract:this.ruleForm.abstract,
        author: this.ruleForm.author,
        category:this.ruleForm.value,
        source: this.ruleForm.source,
        star: this.ruleForm.importance,
        text: this.value2,
        date: this.value1
      }).then(res=>{
        console.log(res.data);
      })
    },
    modify(){
      axios.post('/api/article/update',{
        title: this.ruleForm.title,
        abstract:this.ruleForm.abstract,
        author: this.ruleForm.author,
        category:this.ruleForm.value,
        source: this.ruleForm.source,
        star: this.ruleForm.importance,
        text: this.value2,
        date: this.value1
      }).then(res=>{
        if(res.status===200){
          this.$message.success('修改成功')
          this.$router.push('/Published')
        }        
      })
    }
  },
  mounted() { 
    this.obj = JSON.parse(this.$route.query.obj)
    console.log(this.obj);
     this.ruleForm.title=this.obj.title
     this.ruleForm.abstract=this.obj.abstract
     this.ruleForm.author=this.obj.author
     this.ruleForm.value=this.obj.category
     this.ruleForm.source=this.obj.source
     this.ruleForm.importance=this.obj.star
     this.value2=this.obj.text
     this.value1=this.obj.date
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.container{
    padding: 20px 20px 0;
    .box{
        height: 60px;
        background: #59A586;
        margin-bottom: 20px;
        .right{
            height: 50px;
            button {
                padding: 10px 15px;
                margin: 10px 15px 0 0;
                border-radius: 10px;
                border:none;
                background: #F56C6C;
                color: white;
            }
        }
    }
    .details{
        display: flex;
        justify-content: space-between;
        height: 50px;
        width: 100%;
        .author{
            width: 300px;
        }
    }
  .foot{
    position: relative;
    height: 400px;
    .excel{
      position: absolute;
      z-index: 2;
      width: 100%;
    }
  }
}
.but{
  padding: 10px 20px;
  border: none;
  background: #409EFF;
  color:white;
  border-radius: 10px;
}
</style>