<template>
 <div>
  <el-row>
    <el-col :span="4"><div class="grid-content bg-purple">基本信息</div></el-col>
    <el-col :span="5"><div class="grid-content bg-purple">入住时间：14.00之后</div></el-col>
    <el-col :span="5"><div class="grid-content bg-purple">离店时间：12.00之前</div></el-col>
    <el-col :span="5"><div class="grid-content bg-purple">2011年开业/2011年装修</div></el-col>
    <el-col :span="5"><div class="grid-content bg-purple">酒店规模：63间客房</div></el-col>
  </el-row>
   <el-row>
    <el-col :span="4"><div class="grid-content bg-purple">主要设施</div></el-col>
    <el-col :span="20"><div class="grid-content bg-purple"><el-tag size="medium" type="info">wifi</el-tag></div></el-col>
  </el-row>
    <el-row>
    <el-col :span="4"><div class="grid-content bg-purple">停车服务</div></el-col>
    <el-col :span="20"><div class="grid-content bg-purple">免费：提供停车位</div></el-col>
  </el-row>
    <el-row>
    <el-col :span="4"><div class="grid-content bg-purple">品牌信息</div></el-col>
    <el-col :span="20"><div class="grid-content bg-purple">希尔顿</div></el-col>
  </el-row>
 </div> 
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .el-row{
   padding:20px 10px;
   
   border-bottom:1px solid #eee;

  .el-col{
    font-size:14px;

     &:first-child{
     font-weight: 900;
     font-size:18px;
   }
  }
 }
</style>

