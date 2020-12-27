<template>
  <div>
    <div id="app">
       <button class="btn" @click="toggleShow">上传图片</button>
       <my-upload  
       @crop-success="cropSuccess" 
       @crop-upload-success="cropUploadSuccess"
       @crop-upload-fail="cropUploadFail"
       v-model="show" 
       :width="200" 
       :height="200" 
       img-format="png" 
       :size="size"
       langType='zh'
       :noRotate='false'
       field="Avatar1"
       url="/api/upload"></my-upload>
       <img :src="imgDataUrl">
     </div>
  </div>
</template>

<script>
import 'babel-polyfill'; // es6 shim
import myUpload from 'vue-image-crop-upload';
export default {
  name: '',
  props:{},
  data () {
    return {
        imgDataUrl: "",
        show: false,
        size:2.1
    }
  },
  components: {"my-upload": myUpload},
  methods: {
     toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------',imgDataUrl, field);
        },
         cropUploadSuccess(jsonData, field){
            console.log('-------- upload success --------');
            this.imgDataUrl = jsonData.files.Avatar1;
            console.log(jsonData);
            console.log('field: ' + field);
        },
         cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log('上传失败状态'+ status);
            console.log('field: ' + field);
        }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.btn{
  padding: 10px 15px;
  margin: 20px;
  border: none;
  background: #409EFF;
  color: white;
}
</style>