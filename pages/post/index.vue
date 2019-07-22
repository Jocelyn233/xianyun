<template>
  <div>
    <!-- 版芯部分 -->
    <div class="container">
      <el-row type="flex" justify="space-between" class="el-row">
        <div class="left">
          <!-- 左侧搜索栏 -->
          <LeftSearch />
          <!-- 推荐城市 -->
          <RecommendCity />
        </div>
        <div class="right">
          <!-- 右侧搜索框 -->
          <RightSearch />
          <!-- 右侧显示内容部分 -->
          <RightContent />
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
// 引入各组件
import LeftSearch from "@/components/post/leftSearch";
import RightSearch from "@/components/post/rightSearch";
import RecommendCity from "@/components/post/recommendCity";
import RightContent from "@/components/post/rightContent";

export default {
  // 注册组件
  components: {
    LeftSearch,
    RightSearch,
    RecommendCity,
    RightContent
  }
  // mounted(){
  //   // 请求文章列表
  //   this.$axios({
  //     url:'/posts',
  //     params:{
  //       city:'北京'
  //     }
  //   })
  //   .then(res=>{
  //     console.log(res);
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  // }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  // height: 430px;
  padding-top: 20px;
  margin: 0 auto;
}
</style>
