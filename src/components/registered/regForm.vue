<template>
  <div>
    <el-form :model='model' :rules='rules' ref="form">
      <el-form-item label="请输入用户名:" prop="username" class="form">
        <el-input placeholder="请输入用户名" v-model="model.username" class="user"></el-input>
      </el-form-item>
      <el-form-item label="请输入密码:" prop="password" class="form">
        <el-input placeholder="请输入密码" v-model="model.password" type="password" class="pwd ps"></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" round class="fl" @click="submit">立即注册</el-button>
        <el-button type="primary" round class="fr" @click="handle">立即登录</el-button>
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
        let validatePass = (rule, value, callback) => {
        if(value.length!==6){
          callback(new Error('密码是六位'))
        }else{
          callback()
        }
      }
    return {
      model:{
        username:'',
        password:''
      },
      rules:{
        username:[
          {
            required:true,
            message:'用户名不能为空',
            trigger:'blur'
          }
        ],
        password:[{
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
    submit(){
      this.$refs.form.validate(valid=>{
        if(valid){
          this.$message.success('注册成功')
          this.getData()
          this.$router.push('/login')
        }else{
          this.$message.error('填写有误，请检查')
          return
        }
      })
    },
    handle(){
      this.$router.push('/login')
    },
    getData() {
      axios.post('/api/user/register',{
        username:this.model.username,
        password:this.model.password
      }).then(res=>{
        console.log(res.data);
      })
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.form{
  margin: 30px 0 0 20px
}
.pwd,
.user {
  width: 400px;
}
.ps{
  margin-left: 15px
}
.btn {
  margin: 50px auto;
  width: 400px;
}
</style>