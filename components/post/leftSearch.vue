<template>
  <div>
    <div class="container">
      <el-row type="flex" justify="space-between" class="searchItem">
        <span>热门城市</span>
        <span class="icon">></span>
        <!-- 显示的具体介绍部分 -->
        <el-row type="flex" justify="space-between" class="recommend-city">
          <div>
            <span class="num">1</span>
            <span class="city">城市</span>
            <span clas="description">介绍</span>
          </div>
          <div>
            <span class="num">1</span>
            <span class="city">城市</span>
            <span clas="description">介绍</span>
          </div>
          <div>
            <span class="num">1</span>
            <span class="city">城市</span>
            <span clas="description">介绍</span>
          </div>
          <div>
            <span class="num">1</span>
            <span class="city">城市</span>
            <span clas="description">介绍</span>
          </div>
          <div>
            <span class="num">1</span>
            <span class="city">城市</span>
            <span clas="description">介绍</span>
          </div>
        </el-row>
      </el-row>
      <el-row type="flex" justify="space-between" class="searchItem">
        <span>热门城市</span>
        <span class="icon">></span>
      </el-row>
      <el-row type="flex" justify="space-between" class="searchItem">
        <span>热门城市</span>
        <span class="icon">></span>
      </el-row>
      <el-row type="flex" justify="space-between" class="searchItem">
        <span>热门城市</span>
        <span class="icon">></span>
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
  .searchItem {
    height: 40px;
    line-height: 40px;
    width: 258px;
    padding: 0 18px;
    border: 1px solid #ccc;
    font-size: 15px;
    //   background-color: cadetblue
    border-top: none;
    position: relative;
    &:hover {
      span{
      color: #ffa500;
      }
      .recommend-city{
         display: block;
      }
    }
    .recommend-city {
      display: none;
      width: 350px;
      height: 200px;
      box-sizing: border-box;
      background-color: #fff;
      position: absolute;
      left: 256px;
      top: -1px;
      z-index: 2;
      flex-direction: column;
      border: 1px solid #ccc;
      div {
        line-height: 36px;
        .num {
          font-size: 24px;
          font-style: italic;
          color: orange;
          padding: 0 14px 0 20px;
        }
        .city {
          font-size: 15px;
          color: orange;
          padding-right: 6px;
        }
        .description {
          font-size: 15px;
          color: #ccc;
        }
      }
    }
    &:first-child {
      border-top: 1px solid #ccc;
    }
    .icon {
      font-family: cursive;
      color: #9e9e9e;
    }
  }
}
</style>
