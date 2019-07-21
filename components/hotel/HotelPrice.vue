<template>
  <div class="priceInfo">
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>价格来源</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <span>低价房型</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>最低价格/每晚</span>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>携程</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <span>高级大床房A</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>
            ￥143起
            <i data-v-3cab31ba class="el-icon-arrow-right height-light"></i>
          </span>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>携程</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <span>高级大床房A</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>
            ￥143起
            <i data-v-3cab31ba class="el-icon-arrow-right height-light"></i>
          </span>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>携程</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <span>高级大床房A</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>
            ￥143起
            <i data-v-3cab31ba class="el-icon-arrow-right height-light"></i>
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="less" scoped>
.priceInfo {
  width: 100%;

  .el-row {
    padding: 10px 0;
    color: #606266;
    border-bottom: 1px solid #eee;

    &:nth-last-child(-n + 3):hover {
      background-color: #eee;
    }
  }
}
</style>
