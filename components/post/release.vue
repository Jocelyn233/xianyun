<template>
  <div class="comment">
    <!-- 文本框 -->
    <el-input type="textarea" row="2" placeholder="请输入内容" v-model="textarea"></el-input>
    <el-row class="uploadcontent" type="flex" justify="space-between">
      <!-- 图片上传 -->
      <el-upload
        class="upload-demo"
        action="http://157.122.54.189:9095/upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :on-success="handelSuccess"
        list-type="picture"
        :headers="getToken()"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>


    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: "",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: []
    };
  },
  methods: {
 
    getToken() {
      return {Authorization :`Bearer ${this.$store.state.user.userInfo.token}`}
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handelSuccess(respone,file,fileList) {
      console.log(123);
    }
  }
};
</script>
<style lang="less" scoped>
.uploadcontent {
  margin-top: 10px;
}
</style>
