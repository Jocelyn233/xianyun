<template>
  <section class="container">
    <el-row class="section-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{city}}酒店预订</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row class="row-space">
      <!-- 酒店查询组件 -->
      <HotelSearch @changeCity="changeCity" />
    </el-row>
    <el-row class="row-space">
      <el-col :span="14" style="padding-left: 5px; padding-right: 5px;">
        <!-- 地区区域详情显示组件 -->
        <HotelLocation :data="scenic" />
      </el-col>
      <el-col :span="10">
        <div style="padding:0px 5px">
          <!-- 地图组件 -->
          <HotelMap :data="locationArr" />
        </div>
      </el-col>
    </el-row>
    <el-row class="row-space list-fliter">
      <!-- 酒店类型筛选组件 -->
      <HotelChoice @setDataList="setDataList" />
    </el-row>
    <el-row class="row-space">
      <!-- 酒店详情组件 -->
      <HotelList :data="data" />
      <!-- 分页组件 -->
    </el-row>
    <el-row>
      <el-col :span="8" :offset="14">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :pager-count="5"
          layout="prev, pager, next"
          :total="total"
        ></el-pagination>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import HotelSearch from "@/components/hotel/hotelSearch";
import HotelMap from "@/components/hotel/hotelMap";
import HotelLocation from "@/components/hotel/hotelLocation";
import HotelChoice from "@/components/hotel/hotelChoice";
import HotelList from "@/components/hotel/hotelList";
export default {
  data() {
    return {
      query: "",
      locationArr: [],
      data: [],
      scenic: [],
      city: "",
      total: 0,
      //分页
      pageSize: 10,
      pageIndex: 1
    };
  },
  components: {
    HotelSearch,
    HotelMap,
    HotelLocation,
    HotelChoice,
    HotelList
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios({
        url: "/hotels",
        params: {
          _limit: this.pageSize,
          _start: (this.pageIndex - 1) * this.pageSize,
          ...this.$route.query
        }
      })
        .then(res => {
          const { data, total } = res.data;
          this.data = data;
          this.total = total;
          this.pageIndex = 1;
          const arr = [];
          this.data.map(v => {
            arr.push(v.location);
          });
          //地图上需要展示的经纬度
          this.locationArr = arr;
          let next = data.length === 0 ? [] : data[0];
          return next;
        })
        .then(v => {
          if (v) {
            this.city = v.city.name;
            this.$axios({
              url: "/cities",
              params: {
                name: this.city
              }
            }).then(res => {
              const { data } = res.data;
              this.scenic = data[0].scenics;
            });
          }
        });
    },
    changeCity(value) {
      this.city = value.name;

      const query = { ...this.$route.query, city: value.id };
      // console.log(query)
      this.$router.replace({
        path: "/hotel",
        query
      });
    },
    setDataList(obj) {
      let query = { ...this.$route.query, ...obj };

      const { price_in, hotellevel, hoteltype, hotelasset, hotelbrand } = query;

      if (price_in == 0) {
        delete query.price_in;
      }
      if (!hotellevel) {
        delete query.hotellevel;
      }
      if (!hoteltype) {
        delete query.hoteltype;
      }
      if (!hotelasset) {
        delete query.hotelasset;
      }
      if (!hotelbrand) {
        delete query.hotelbrand;
      }

      this.$router.replace({
        url: "/hotels",
        query
      });
    },

    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.getData();
    },

    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.pageIndex = val;
      this.getData();
    }
  },
  watch: {
    $route() {
      setTimeout(() => {
        this.getData();
      }, 10);
    }
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
