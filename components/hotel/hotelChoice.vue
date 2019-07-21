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
          <el-slider v-model="value1" :max="4000"></el-slider>
        </div>
      </el-row>
    </el-col>
    <!-- 住宿等级 -->
    <el-col :span="6" class="filter-col" style="padding:0 20px">
      <el-row class="filter-title">住宿等级</el-row>
      <el-row class="filter-wrapper">
        <el-popover trigger="hover" style="width:100%; font-size:14px">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            style="border-bottom:1px solid #f5f5f5; padding:10px "
          >
            <div class="options">
              <li v-for="(item,index) in options" :key="index">
                <i class="iconfont iconcircle"></i>
                {{item.label}}
              </li>
            </div>
          </el-row>

          <el-row slot="reference">
            <span type="flex">
              <el-col :span="20">
                <span class="dropdown-link-text">1星</span>
              </el-col>
              <el-col :span="4">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-col>
            </span>
          </el-row>
        </el-popover>
      </el-row>
    </el-col>
    <!-- 住宿类型 -->
    <el-col :span="6" class="filter-col" style="padding:0 20px">
      <el-row class="filter-title">住宿类型</el-row>
      <el-row class="filter-wrapper">
        <el-popover trigger="hover" style="width:100%; font-size:14px">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            style="border-bottom:1px solid #f5f5f5; padding:10px "
          >
            <div class="options">
              <li v-for="(item,index) in options" :key="index">
                <i class="iconfont iconcircle"></i>
                {{item.label}}
              </li>
            </div>
          </el-row>

          <el-row slot="reference">
            <span type="flex">
              <el-col :span="20">
                <span class="dropdown-link-text">1星</span>
              </el-col>
              <el-col :span="4">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-col>
            </span>
          </el-row>
        </el-popover>
      </el-row>
    </el-col>
    <!-- 酒店设施 -->
    <el-col :span="6" class="filter-col" style="padding:0 20px">
      <el-row class="filter-title">酒店设施</el-row>
      <el-row class="filter-wrapper">
        <el-popover trigger="hover" style="width:100%; font-size:14px">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            style="border-bottom:1px solid #f5f5f5; padding:10px "
          >
            <div class="options">
              <li v-for="(item,index) in options" :key="index">
                <i class="iconfont iconcircle"></i>
                {{item.label}}
              </li>
            </div>
          </el-row>

          <el-row slot="reference">
            <span type="flex">
              <el-col :span="20">
                <span class="dropdown-link-text">1星</span>
              </el-col>
              <el-col :span="4">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-col>
            </span>
          </el-row>
        </el-popover>
      </el-row>
    </el-col>
    <!-- 酒店品牌 -->
    <el-col :span="6" class="filter-col" style="padding:0 20px">
      <el-row class="filter-title">酒店品牌</el-row>
      <el-row class="filter-wrapper">
        <el-popover trigger="hover" style="width:100%; font-size:14px">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            style="border-bottom:1px solid #f5f5f5; padding:10px "
          >
            <div class="options">
              <li v-for="(item,index) in options" :key="index">
                <i class="iconfont iconcircle"></i>
                {{item.label}}
              </li>
            </div>
          </el-row>

          <el-row slot="reference">
            <span type="flex">
              <el-col :span="20">
                <span class="dropdown-link-text">1星</span>
              </el-col>
              <el-col :span="4">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-col>
            </span>
          </el-row>
        </el-popover>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: [],
      child: "",
      value1: 4000
    };
  }
};
</script>
<style lang="less" scoped>
.filter-title {
  font-size: 14px;
}
.filter-wrapper {
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
