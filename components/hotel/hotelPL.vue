<template>
  <div class="nick-info">
    <div v-for="(item, index) in data" :key="index">
      <el-row>
        <el-col :span="2">
          <div class="nickname">
            <img
              :src="`https://n4-q.mafengwo.net/s11/M00/64/81/wKgBEFsmE0WAPbqnAAAOwSUlOKY63.jpeg?imageMogr2%2Fthumbnail%2F%2196x96r%2Fgravity%2FCenter%2Fcrop%2F%2196x96%2Fquality%2F90`"
              alt
            />
            <div>2019-7-7</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="infonimi">
            {{item.account.nickname}}
            <span>Lv8</span>
          </div>
        </el-col>
        <el-col :span="20">
          {{item.content}}
          <div class="nickvlik">
            <textarea
              class="kis"
              v-model="comments[item.id]"
              placeholder="请回复"
              @focus="handnick(index)"
              :class="{active:datashow==index}"
            />
            <el-button type="primary" size="mini" class="nick" v-if="datashow===index">回复</el-button>
          </div>
          <div style="marginLeft:40px">
            <aritic :data="item.followed" />
          </div>
        </el-col>
      </el-row>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "aritic",
  data() {
    return {
      // input: "",
      comments: {},
      datashow: null
    };
  },
  methods: {
    handnick(index) {
      console.log(index);
      // if (this.comments.index==index) {
      //   this.datashow = !this.datashow;
      // }
      this.datashow = index;
      console.log(this.datashow);
    }
    //
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.nickname {
  position: relative;
  margin-bottom: 40px;
  img {
    width: 40%;
    border-radius: 50%;
    border: 2px solid orange;
  }
}
.infonimi {
  color: orange;
}
.nickvlik {
  margin-bottom: 50px;
  .kis {
    // height: 35px;
    font-size: 16px;
    padding: 5px 0 0 0;
    width: 100%;
    border-radius: 5px 5px;
    border: 1px solid #ddd;
    resize: none;
  }
}
/deep/.nick {
  position: absolute;
  width: 10%;
  right: 0;
}
.active {
  display: block;
  height: 70px;
}

</style>
