<template>
  <div class="box">
    <div class="container">
      <p>支持拖拽</p>
      <div class="ele">Element UI自带上传组件</div>
      <upload></upload>     
      <p>支持裁剪</p>
      <div class="ele">vue-image-crop-upload</div>
      <cropupload></Cropupload>
    </div>
  </div>
</template>

<script>
import upload from '../../../components/upload/Upload'
import cropupload from '../../../components/upload/Cropupload'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {upload,cropupload},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box{
  position: absolute;
  width: calc(100% - 220px);
  height: calc(100% - 82px);
  padding: 10px;
  background: #ccc;
  .container{
    width: 100%;
    height: 100%;
   background: #fff;
   overflow: hidden;
   p{
     font-size: 25px;
     margin: 20px 0 25px 20px
   }
   .ele{
     width: 1200px;
     height: 70px;
     background: #eee;
     margin-left: 20px;
     line-height: 70px;
     font-size: 25px;
     padding-left: 20px;
   }
  }
}
</style>