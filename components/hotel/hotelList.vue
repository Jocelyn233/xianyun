<template>
  <div>
    <el-row type="flex" class="hotel-item" v-for="(item,index) in data" :key="index">
      <el-col :span="8">
        <a :href="`/hotel/detail?id=${item.id}`" class="img-wrapper">
          <img :src="item.photos" style="width:100%"/>
        </a>
      </el-col>
      <el-col :span="10" style="padding-left: 10px; padding-right: 10px;">
        <h4 class="hotel-cn-name">
          <a :href="`/hotel/detail?id=${item.id}`" class>{{item.name}}</a>
        </h4>
        <div class="hotel-en-name">
          <span>{{item.alias}}</span>
          <span :title="`${item.hotellevel ? item.hotellevel.name+'级':'0星级'}`">
            <i class="iconfont iconhuangguan" v-for="(item,index) in (item.hotellevel?item.hotellevel.level:0)" :key="index"></i>
          </span>
          <span>{{item.hoteltype.name}}</span>
        </div>
        <el-row type="flex" style="margin-left: -5px; margin-right: -5px;">
          <el-col :span="10" style="padding-left: 5px; padding-right: 5px;">
            <el-rate
              v-model="item.stars"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}分"
            ></el-rate>
          </el-col>
          <el-col :span="7" style="padding-left: 5px; padding-right: 5px;">
            <span class="height-light">{{item.all_remarks}}</span> 条评价
          </el-col>
          <el-col :span="7" style="padding-left: 5px; padding-right: 5px;">
            <span class="height-light">{{item.all_remarks}}</span> 篇游记
          </el-col>
        </el-row>
        <div class="location-row">
          <i data-v-0a769ebc class="iconfont iconlocation"></i>位于: {{item.address}}
        </div>
      </el-col>
      <el-col :span="6" style="padding-left: 10px; padding-right: 10px;" class="price-col">
        <el-row class="sidehref" v-for="(item,index) in item.products" :key="index">
          <el-col :span="16">{{item.name}}</el-col>
          <el-col :span="8">
            ￥<span>{{item.price}}</span>起
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 3.7
    };
  },
  props: {
    data: {
      type: Array,
      default: () => {}
    }
  }
};
</script>

<style lang="less" scoped>
.hotel-item {
  padding: 25px 0;
  border-bottom: 1px solid #eee;

  .img-wrapper {
    display: block;
    background: #ccc;
    width: 320px;
    height: 210px;
    overflow: hidden;
  }
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
