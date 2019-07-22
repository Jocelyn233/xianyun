<template>
  <div>
    <div class="container">
      <div class="input-box">
        <el-input placeholder="请输入想去的地方 比如：'广州'" v-model="keyword" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="hotwords">
        <span>推荐：</span>
        <span @click="handleChangeWord('广州')">广州</span>
        <span @click="handleChangeWord('上海')">上海</span>
        <span @click="handleChangeWord('北京')">北京</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      // 文章列表
      articleList:[],
    };
  },
  methods: {
    handleChangeWord(word) {
      this.keyword = word;
      // 调用仓库的方法 请求文章列表
    }
  },
  mounted(){
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 700px;
  height: 78px;
  // background-color:cadetblue;
  box-sizing: border-box;
  .input-box {
    border: 3px solid orange;
    box-sizing: border-box;
    overflow: hidden;
  }
  .hotwords {
    font-size: 12px;
    color: #666;
    margin-top: 10px;
    span {
      margin-left: 4px;
      &:hover {
        color: orange;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  /deep/ .el-input__inner {
    border: none;
  }
  /deep/ .el-input-group__append button.el-button,
  .el-input-group__append div.el-select .el-input__inner,
  .el-input-group__append div.el-select:hover .el-input__inner,
  .el-input-group__prepend button.el-button,
  .el-input-group__prepend div.el-select .el-input__inner,
  .el-input-group__prepend div.el-select:hover .el-input__inner {
    border-color: #fff;
    background-color: #fff;
    border: none;
    color: orange;
  }
  /deep/ .el-icon-search:before {
    font-size: 25px;
    font-weight: 700;
  }
}
</style>
