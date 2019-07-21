<template>
  <el-form :inline="true" class="demo-form-inline">
    <el-form-item>
      <el-autocomplete
        v-model="form.city"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
    </el-form-item>
    <el-form-item>
      <el-date-picker
        v-model="form.date"
        type="daterange"
        range-separator="至"
        start-placeholder="入住日期"
        end-placeholder="离店日期"
      ></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-popover placement="bottom" width="300" trigger="click">
        <el-row>
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            style="border-bottom:1px solid #f5f5f5; padding:10px "
          >
            <el-col :span="6">每间</el-col>
            <el-col :span="18">
              <el-select
                v-model="adult"
                placeholder="请选择"
                style="width:100px"
                @change="handleAdule"
              >
                <el-option
                  v-for="item in adults"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>

              <el-select
                v-model="child"
                placeholder="请选择"
                style="width:100px"
                @change="handleChild"
              >
                <el-option
                  v-for="item in childrens"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row style="padding:10px">
            <el-col :span="6" :offset="18">
              <el-button type="primary" size="small">确认</el-button>
            </el-col>
          </el-row>
        </el-row>
        <el-input placeholder="人数未定" v-model="form.personNum" slot="reference">
          <i slot="suffix" class="el-icon-user"></i>
        </el-input>
      </el-popover>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查看价格</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      adults: [
        { value: "1成人", label: "1" },
        { value: "2成人", label: "2" },
        { value: "3成人", label: "3" },
        { value: "4成人", label: "4" }
      ],
      childrens: [
        { value: "0儿童", label: "0" },
        { value: "1儿童", label: "1" },
        { value: "2儿童", label: "2" },
        { value: "3儿童", label: "3" }
      ],
      adult: "1成少说刷人",
      child: "value",
      form: {
        date: "",
        city: "",
        personNum: ""
      }
    };
  },
  methods: {
    querySearchAsync() {},
    handleSelect() {},
    onSubmit() {},
    handleAdule(item) {
      this.adult = item;
      console.log(this.adult);
      
    },
    handleChild(item) {
      this.child = item;
    }
  }
};
</script>
<style lang="less" scoped>
</style>
