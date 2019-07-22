<template>
  <div>
    <div class="container">
      <el-row type="flex" justify="space-between" class="searchItem">
          <span>热门城市</span>
          <span>></span>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.container {
  width: 300px;
  height: 186px;
  box-sizing: border-box;
  //   background-color:lightsteelblue;
  .searchItem{
      height: 40px;
      line-height: 40px;
      width: 258px;
      padding: 0 18px;
      border: 1px solid #ccc;
    //   background-color: cadetblue
  }
}
</style>
