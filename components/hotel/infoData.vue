<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">基本信息</div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">入住时间：14.00之后</div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">离店时间：12.00之前</div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">{{data.creation_time}}/{{data.renovat_time}}</div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">酒店规模：{{data.roomCount}}间客房</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">主要设施</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple" v-for="(item,index) in data.hotelassets" :key="index">
          <el-tag size="medium" type="info" class="tag">{{item.name}}</el-tag>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">停车服务</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple" v-if="data.parking">{{data.parking}}</div>
        <div v-else>-</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">品牌信息</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple" v-if="data.hotelbrand">{{data.hotelbrand.name}}</div>
        <div v-else>-</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: { }
    }
  },
  
};
</script>

<style lang="less" scoped>
.el-row {
  padding: 20px 10px;

  border-bottom: 1px solid #eee;

  .el-col {
    font-size: 14px;

    &:first-child {
      font-weight: 900;
      font-size: 18px;
    }

    > div {
      /deep/ .tag{
        float: left;
        margin-right:10px;
      }
    }
  }
}
</style>

