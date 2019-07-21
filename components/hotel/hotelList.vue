<template>
  <el-row type="flex" class="hotel-item">
    <el-col :span="8">
      <img
        src="http://qcloud.dpfile.com/pc/5vHvunDc4TW8MyDnMdxbIKQ-FRH_5zJrk2xtU7pRSgHR8v5LRZwEsm6Ko5Hra2Ev3dWYFEM5hoslgWXTJDjSPA.jpg"
        alt
        style="width:320px ;height:210px"
      />
    </el-col>
    <el-col :span="10" style="padding-left: 10px; padding-right: 10px;">
      <h4 class="hotel-cn-name">
        <a href="/hotel/199.html" class>北京西路民国别墅</a>
      </h4>
      <div class="hotel-en-name">
        <span>bei jing xi lu min guo bie shu</span>
        <span title="2星级">
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
        </span>
        <span>度假村</span>
      </div>
      <el-row type="flex" style="margin-left: -5px; margin-right: -5px;">
        <el-col :span="10" style="padding-left: 5px; padding-right: 5px;">
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
        </el-col>
        <el-col :span="7" style="padding-left: 5px; padding-right: 5px;">
          <span class="height-light">28</span> 条评价
        </el-col>
        <el-col :span="7" style="padding-left: 5px; padding-right: 5px;">
          <span class="height-light">28</span> 条评价
        </el-col>
      </el-row>
      <div class="location-row">
        <i data-v-0a769ebc class="iconfont iconlocation"></i>位于: 北京西路(省委)
      </div>
    </el-col>
    <el-col :span="6" style="padding-left: 10px; padding-right: 10px;" class="price-col">
      <el-row class="sidehref">
        <el-col :span="16">携程</el-col>
        <el-col :span="8">
          ￥
          <span>432</span>起
        </el-col>
      </el-row>
      <el-row class="sidehref">
        <el-col :span="16">艺龙</el-col>
        <el-col :span="8">
          ￥
          <span>432</span>起
        </el-col>
      </el-row>
      <el-row class="sidehref">
        <el-col :span="16">Hotels.com</el-col>
        <el-col :span="8">
          ￥
          <span>432</span>起
        </el-col>
      </el-row>
      <el-row class="sidehref"></el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      value: 3.7
    };
  }
};
</script>

<style lang="less" scoped>
.hotel-item {
  padding: 25px 0;
  border-bottom: 1px solid #eee;

  .location-row {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
  }
  .sidehref {
    cursor: pointer;
    color: #606266;
    padding: 12px 0;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    &:last-child {
      border-bottom: none;
    }
    span {
      color: orange;
    }
  }
  .hotel-cn-name {
    font-weight: 400;
    font-size: x-large;
    margin-bottom: 5px;
  }
  .hotel-en-name {
    color: #999;
    margin-bottom: 15px;
  }
  .price-col {
    margin-top: 20px;
  }
}
</style>
