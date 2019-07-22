<template>
  <el-row type="flex" style="margin-left: -20px; margin-right: -20px; color:#666">
    <!-- 价格 -->
    <el-col :span="8" class="filter-col" style="padding:0 20px">
      <el-row type="flex" justify="space-between">
        <span>价格</span>
        <span>0-4000</span>
      </el-row>
      <el-row>
        <div class="block">
          <el-slider v-model="slider" @change='handleSlider'></el-slider>
        </div>
      </el-row>
    </el-col>
    <!-- 住宿等级 -->
    <el-col :span="6" class="filter-col" style="padding:0 20px">
      <el-row class="filter-title">住宿等级</el-row>
      <el-row class="filter-wrapper">
        <el-select
          v-model="ranksValue"
          clearable
          @clear="handleRankEmpty"
          collapse-tags
          placeholder="不限"
          @change="handleRank"
        >
          <el-option v-for="(item,index) in ranks" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-row>
    </el-col>
    <!-- 住宿类型 -->
    <el-col :span="6" class="filter-col" style="padding:0 20px">
      <el-row class="filter-title">住宿类型</el-row>
      <el-row class="filter-wrapper">
        <el-select
          v-model="typesValue"
          clearable
          @clear="handleTypesEmpty"
          collapse-tags
          @change="handleTypes"
          placeholder="不限"
        >
          <el-option v-for="(item,index) in types" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-row>
    </el-col>
    <!-- 酒店设施 -->
    <el-col :span="6" class="filter-col" style="padding:0 20px">
      <el-row class="filter-title">酒店设施</el-row>
      <el-row class="filter-wrapper">
        <el-select
          v-model="facilityValue"
          clearable
          @clear="handleFacilitysEmpty"
          collapse-tags
          @change="handleFacilitys"
          placeholder="不限"
        >
          <el-option
            v-for="(item,index) in facilitys"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-row>
    </el-col>
    <!-- 酒店品牌 -->
    <el-col :span="6" class="filter-col" style="padding:0 20px">
      <el-row class="filter-title">酒店品牌</el-row>
      <el-row class="filter-wrapper">
        <el-select
          v-model="brandValue"
          clearable
          @clear="handleBrandsEmpty"
          collapse-tags
          @change="handleBrands"
          placeholder="不限"
        >
          <el-option
            v-for="(item,index) in brands"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      ranks: [],
      types: [],
      facilitys: [],
      brands: [],
      value: [],
      child: "",
      slider: 4000, //滑块
      ranksValue: [],
      typesValue: [],
      facilityValue: [],
      brandValue: []
    };
  },
  methods: {
    //价格筛选
    handleSlider(value) {
      this.$emit("setDataList", { price_in: value });
    },
    //住宿等级
    handleRank(value) {
      this.$emit("setDataList", { hotellevel: value });
    },
    //清空住宿等级
    handleRankEmpty(value) {
      this.$emit("setDataList", {});
    },
    //住宿类型
    handleTypes(value) {

      this.$emit("setDataList", { hoteltype: value });
    },
    //清空住宿类型
    handleTypesEmpty() {
      this.$emit("setDataList", {});
    },
    //设施
    handleFacilitys(value) {
      this.$emit("setDataList", { hotelasset: value });
    },
    //清空设施
    handleFacilitysEmpty() {
      this.$emit("setDataList", {});
    },
    //酒店品牌
    handleBrands(value) {
      this.$emit("setDataList", { hotelbrand: value });
    },
    //清空品牌
    handleBrandsEmpty() {
      this.$emit("setDataList", {});
    }
  },
  mounted() {
    //获取酒店筛选条件
    this.$axios({
      url: "/hotels/options"
    }).then(res => {
      const { data } = res.data;
      // console.log(data)
      if (res.status == 200) {
        this.ranks = data.levels;
        this.types = data.types;
        this.facilitys = data.assets;
        this.brands = data.brands;
      }
    });
  }
};
</script>
<style lang="less" scoped>
.filter-title {
  font-size: 14px;
}
.filter-wrapper {
  margin-top: 10px;
  height: 38px;
  display: flex;
  align-items: center;
}
.filter-col {
  border-right: 1px solid #ddd;
  padding: 5px 0;
}
.options {
  max-width: 160px;
  li {
    width: 80%;
    display: inline-block;
    list-style: none;
    line-height: 36px;
    padding: 0 20px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: 0;
    &:hover {
      color: #ecf5ff;
      background: #66b1ff;
    }
  }
}
</style>
