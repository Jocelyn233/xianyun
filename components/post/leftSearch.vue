<template>
  <div>
    <div class="container">
      <el-row
        type="flex"
        justify="space-between"
        v-for="(item,index) in cityList"
        :key="index"
        class="searchItem"
      >
        <span>{{item.type}}</span>
        <span class="icon">></span>
        <!-- 显示的具体介绍部分 -->
        <el-row type="flex" justify="space-between" class="recommend-city">
          <div v-for="(v,i) in cityList[index].children" :key="i">
            <span class="num">{{i+1}}</span>
            <span @click="changKeyWord(v.city)" class="city">{{v.city}}</span>
            <span clas="description">{{v.desc}}</span>
          </div>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 城市列表
      cityList: [],
      // 详细介绍
      recommendCity: []
    };
  },
  methods: {
    changKeyWord(v){
      this.$store.commit('post/setKeyWord',v)
    }
  },
  mounted() {
    // 发送请求 获取城市菜单列表
    this.$axios({
      url: "/posts/cities"
    })
      .then(res => {
        // console.log(res);
        const { data } = res.data;
        // console.log(data);
        this.cityList = data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 300px;
  height: 186px;
  box-sizing: border-box;
  //   background-color:lightsteelblue;
  .searchItem {
    height: 40px;
    line-height: 40px;
    width: 258px;
    padding: 0 18px;
    border: 1px solid #ccc;
    font-size: 15px;
    //   background-color: cadetblue
    border-top: none;
    position: static;
    &:hover {
      > span {
        color: #ffa500;
      }
      .recommend-city {
        display: block;
      }
    }
    .recommend-city {
      display: none;
      width: 350px;
      height: 200px;
      box-sizing: border-box;
      background-color: #fff;
      flex-direction: column;
      border: 1px solid #ccc;
      div {
        line-height: 36px;
        .num {
          font-size: 24px;
          font-style: italic;
          color: orange;
          padding: 0 14px 0 20px;
        }
        .city {
          font-size: 15px;
          color: orange;
          padding-right: 6px;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
    &:first-child {
      border-top: 1px solid #ccc;
    }
    .icon {
      font-family: cursive;
      color: #9e9e9e;
    }
  }
}
.container .searchItem .recommend-city div[data-v-05f129f3] {
  color: #999;
}
.container {
  .recommend-city {
    position: absolute;
    left: 256px;
    top: 0;
    z-index: 2;
  }
}
</style>
