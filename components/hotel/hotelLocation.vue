<template>
  <el-row class="options">
    <el-row class="option-row">
      <el-col :span="4">区域:</el-col>
      <el-col :span="20" class="locationInfos">
        <div class="scenics-box">
          <a href="javascript:;">全部</a>
        </div>
        <a href="javascript:;">
          <i class="el-icon-d-arrow-right" style="color:orange;transform: rotate(90deg);"></i>
          等43个地区
        </a>
      </el-col>
    </el-row>
    <el-row class="option-row">
      <el-col :span="4">攻略:</el-col>
      <el-col :span="20">
        <p>北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</p>
      </el-col>
    </el-row>
    <el-row class="option-row">
      <el-col :span="4">
        均价
        <el-tooltip
          class="question-mark"
          effect="dark"
          content="等级均价由平日价格计算得出，节假日价格会有上浮。"
          placement="top-start"
        >
          <span>?</span>
        </el-tooltip>
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="6">
            <el-tooltip effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="top-start">
              <span>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <span class="price-budget">¥332</span>
              </span>
            </el-tooltip>
          </el-col>
          <el-col :span="6">
            <el-tooltip effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="top-start">
              <span>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <span class="price-budget">¥532</span>
              </span>
            </el-tooltip>
          </el-col>
          <el-col :span="12">
            <el-tooltip effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="top-start">
              <span>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <span class="price-budget">¥1000</span>
              </span>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.options {
  .option-row {
    margin-bottom: 20px;
    color: #666;
    font-size: 14px;

    .locationInfos {
      .scenics-box {
        .location-budget {
          margin-right: 1em;
          padding: 0 2px;
          border-radius: 4px;
          display: inline-block;
          cursor: pointer;
        }
        .active {
          background: #eee;
          cursor: auto;
          text-decoration: none;
          color: #999;
        }
      }
    }
    .question-mark {
      background-color: #ccc;
      color: #fff;
      display: inline-block;
      width: 1.2em;
      height: 1.2em;
      text-align: center;
      border-radius: 100%;
    }
    .iconhuangguan {
      color: orange;
    }
  }
}
</style>
