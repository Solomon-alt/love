<template>
  <div>
    <!--:model表单对象对应v-model绑定的值 :rules验证规则-->
    <el-form :model='model' :rules='rules' ref='form'>
        <!--<el-form-item> 表单每一项-->
        <el-form-item label='用户名' prop='username'>
          <!-- 该表单添加验证需要加一个prop属性 验证哪一个需要为哪一个添加:model='model'属性-->
          <el-input placeholder="请输入账号" v-model='model.username'> </el-input>
        </el-form-item>
       <el-form-item label='密码' prop='password'>
          <el-input placeholder="请输入密码" v-model='model.password'> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submit">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    // 自定义验证规则
      let validatePass = (rule, value, callback) => {
        if(value.length!==6){
          callback(new Error('密码是六位'))
        }else{
          callback()
        }
      }
    return {
        model: {
            username:'',
            password: ''
        },
        rules:{
          username:[
            {
              required:true,
              message:'用户名不能为空',
              trigger:'blur'
            },{
              min:2,
              max:6,
              message:'用户名在2到六位之间',
              trigger:'blur'
            }
          ],
          password:[
            {
              required:true,
              message:'密码不能为空',
              trigger:'blur'
            },{
              validator:validatePass,
              trigger:'blur'
            }
          ]
        }
    }
  },
  components: {},
  methods: {
    //验证表单是否通过
    submit(){
      this.$refs.form.validate(valid=>{
        if(valid){
          //验证通过
          //发请求
          this.$message.success('登录成功')
        }else{
          this.$message.error('表单填写有误，请检查')
          return
        }
      })
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>