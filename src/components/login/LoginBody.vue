<template>
  <div>
    <el-form :model='model' :rules='rules' ref='form'>
        <el-form-item label='用户名:' prop='username' class="container">
          <el-input placeholder="请输入账号" v-model.trim='model.username' class="box fr"></el-input>
        </el-form-item>
       <el-form-item label='密码:' prop='password' class="container">
          <el-input placeholder="请输入密码" v-model.trim='model.password' type="password" class="box fr"></el-input>
        </el-form-item>
        <el-form-item label='验证码:' prop='verification' class="container">
          <el-input v-model.trim='model.verification' class="code"></el-input>
          <div class="right fr" @click="handle" v-html="news"></div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" round class="fl zhuce" @click="handle1">立即注册</el-button>
            <el-button type="primary" round class="fr denglu" @click="handle2">立即登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
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
            password: '',
            verification:''
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
          ],
          verification:[
               {
              required:true,
              message:'验证码不能为空',
              trigger:'blur'
            }
          ]
        },
        news:''
    }
  },
  components: {},
  methods: {
    handle2(){
      this.$refs.form.validate(valid=>{
        if(valid){
          this.login()
        }else{
          this.$message.error('密码错误，请重新输入')
          return
        }
      })
    },
    handle() {
        this.getData()
    },
    getData(){
        axios.get('/api/captcha').then(res=>{
            this.news=res.data
        })
    },
    handle1(){
        this.$router.push('/Registered')
    },
    login() {
      axios.post('/api/user/login',{
          username: this.model.username,
          password: this.model.password,
          code: this.model.verification
      }).then(res=>{
        if(res.data.code === 200){
           localStorage.setItem('name',JSON.stringify({
            name:this.model.username
          }))
          this.$message.success('登录成功')
          this.$router.push('/')
         
        }else if (res.data.message === '验证码不正确'){
          this.$message.error('验证码错误')
        }else{
          this.$message.error('密码或用户名错误')
        }
        console.log(res.data);
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
.box {
    width: 400px;
}
.container {
    margin: 20px auto;
    width: 470px;
}
.code {
    width: 120px;
}
.right {   
    height: 50px;
    width: 150px;
}
.zhuce{
    margin-left: 150px
}
.denglu{
    margin-right: 150px
}
</style>