<template>
  <section class="container">
    <el-row class="section-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>酒店</el-breadcrumb-item>
        <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row class="row-space">
      <!-- 酒店查询组件 -->
      <HotelSearch />
    </el-row>
    <el-row class="row-space">
      <el-col :span="14" style="padding-left: 5px; padding-right: 5px;">
        <!-- 地区区域详情显示组件 -->
        <HotelLocation />
      </el-col>
      <el-col :span="10">
        <div style="padding:0px 5px">
          <!-- 地图组件 -->
          <HotelMap />
        </div>
      </el-col>
    </el-row>
    <el-row class="row-space list-fliter">
      <!-- 酒店类型筛选组件 -->
      <HotelChoice />
    </el-row>
    <el-row class="row-space">
      <!-- 酒店详情组件 -->
      <HotelList/>
      <!-- 分页组件 -->
    </el-row>
  </section>
</template>
<script>
import HotelSearch from "@/components/hotel/hotelSearch";
import HotelMap from "@/components/hotel/hotelMap";
import HotelLocation from "@/components/hotel/hotelLocation";
import HotelChoice from "@/components/hotel/hotelChoice";
import HotelList from '@/components/hotel/hotelList'
export default {
  components: {
    HotelSearch,
    HotelMap,
    HotelLocation,
    HotelChoice,
    HotelList
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;

  .section-breadcrumb {
    padding: 20px 0;
    overflow: hidden;
  }
  .row-space {
    margin-bottom: 10px;
  }
  .list-fliter {
    border: 1px solid #ddd;
    padding: 5px 20px;
    color: #666;
  }
}
</style>
