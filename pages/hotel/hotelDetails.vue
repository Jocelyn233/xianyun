<template>
  <div class="main">
    <!-- 这是面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mianbao">
      <el-breadcrumb-item :to="{ path: '/' }"><strong>酒店</strong></el-breadcrumb-item>
      <el-breadcrumb-item><strong>南京酒店</strong></el-breadcrumb-item>
      <el-breadcrumb-item>得月楼饭店</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 这是顶部的酒店初略介绍 -->
    <div class="recommend">
      <Recomend/>
    </div>
    <!-- 这是图片展示区 -->
    <div class="pic-info">
      <PicInfo/>
    </div>
    <!-- 这是酒店房间价格详情 -->
    <div class="hotel-price">
      <HotelPrice/>
    </div>
    <!-- 这是酒店详情信息部分 -->
    <div class="hotelInfo">
      <InfoData/>
    </div>
    <!-- 这是评论部分 -->
    <div class="hotel-comment">
      <HotelComment/>
    </div>
  </div>
</template>

<script>
import Recomend from "@/components/hotel/recomend";
import PicInfo from "@/components/hotel/picInfo";
import HotelPrice from "@/components/hotel/hotelPrice";
import InfoData from "@/components/hotel/infoData";
import HotelComment from "@/components/hotel/hotelComment";


export default {
  data() {
    return {};
  },
  components: {
    Recomend,
    PicInfo,
    HotelPrice,
    InfoData,
    HotelComment
  },
  mounted() {
    this.$axios({
      url: ""
    });
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 1000px;
  margin: 0 auto;

  .mianbao{
    margin-top:20px;
    font-size: 16px;
  }

  .recommend{
    margin-top:36px;
  }

  .pic-info{
    margin-top:50px;
  }

  .hotel-price{
    margin-top:50px;
  }

  .hotelInfo{
    margin-top:30px;
  }

  .hotel-comment{
    margin-top:30px;
    margin-bottom: 30px;
  }
}
</style>
