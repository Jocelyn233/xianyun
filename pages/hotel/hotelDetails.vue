<template>
  <div class="main">
    <!-- 这是面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mianbao">
      <el-breadcrumb-item :to="{ path: '/' }">
        <strong>酒店</strong>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <strong>南京酒店</strong>
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{hotelsInfo.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 这是顶部的酒店初略介绍 -->
    <div class="recommend">
      <Recomend :data="hotelsInfo" />
    </div>
    <!-- 这是图片展示区 -->
    <div class="pic-info">
      <PicInfo :data="hotelsInfo" />
    </div>
    <!-- 这是酒店房间价格详情 -->
    <div class="hotel-price">
      <HotelPrice :data="hotelsInfo" />
    </div>
    <!-- 这是酒店详情信息部分 -->
    <div class="hotelInfo">
      <InfoData :data="hotelsInfo" />
    </div>
    <!-- 这是评论部分 -->
    <div class="hotel-comment">
      <HotelComment :data='scores' />
    </div>
    <div class="pLun">
      <HotelPL />
    </div>
  </div>
</template>

<script>
import Recomend from "@/components/hotel/recomend";
import PicInfo from "@/components/hotel/picInfo";
import HotelPrice from "@/components/hotel/hotelPrice";
import InfoData from "@/components/hotel/infoData";
import HotelComment from "@/components/hotel/hotelComment";
import HotelPL from "@/components/hotel/hotelPL";

export default {
  data() {
    return {
      hotelsInfo: {
        hotelbrand: {
          name: ""
        },
        hotellevel: {
          level: ""
        }
      },
      scores: {
        environment: 1,
        product: 1,
        service: 1
      }
    };
  },
  components: {
    Recomend,
    PicInfo,
    HotelPrice,
    InfoData,
    HotelComment,
    HotelPL
  },
  mounted() {
    this.$axios({
      url: "/hotels?id=4"
      //  params:{
      //    id:1
      //  }
    }).then(res => {
      console.log(res);
      const { data } = res.data;
      this.hotelsInfo = data[0];
      this.scores.environment = data[0].scores.environment * 10;
      this.scores.product = data[0].scores.product * 10;
      this.scores.service = data[0].scores.service * 10;
    });
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 1000px;
  margin: 0 auto;

  .mianbao {
    margin-top: 20px;
    font-size: 16px;
  }

  .recommend {
    margin-top: 36px;
  }

  .pic-info {
    margin-top: 50px;
  }

  .hotel-price {
    margin-top: 50px;
  }

  .hotelInfo {
    margin-top: 30px;
  }

  .hotel-comment {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
