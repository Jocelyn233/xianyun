<template>
  <div class="detailInfo">
    <!-- 标题头部 -->
    <el-row class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item to="/">攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <h1>{{infoForm.title}}</h1>

    <!-- 内容 -->
    <div id="centerNew" v-html="infoForm.content"></div>
    <el-row type="flex" justify="space-around" class="pinglun">
      <div>
        <i data-v-741ea8d8 class="iconfont iconpinglun"></i>
        <p class="pL">评论({{pinglun.total}})</p>
      </div>
      <div>
        <i data-v-741ea8d8 class="iconfont iconstar1"></i>
        <p class="pL">收藏</p>
      </div>
      <div>
        <i data-v-741ea8d8 class="iconfont iconfenxiang"></i>
        <p class="pL">分享</p>
      </div>
      <div>
        <i data-v-741ea8d8 class="iconfont iconding"></i>
        <p class="pL">点赞({{infoForm.like}})</p>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    pinglun: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      infoForm: {}
    };
  },
  watch: {
    $route() {
      this.id = this.$route.query.id;
      this.getContent();
    }
  },
  methods: {
    getContent() {
      const { id } = this.$route.query;
      this.$axios({
        url: `/posts/`,
        params: {
          id
        }
      }).then(res => {
        this.infoForm = res.data.data[0];
        // console.log(this.infoForm);
      });
    }
  },
  mounted() {
    this.getContent();
 
  }
};
</script>
<style lang="less" scoped>
.header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  h1 {
    margin-top: 10px;
  }
}

#centerNew {
  /deep/img {
    width: 700px;
  }
  /deep/ p > img {
    width: 56px;
  }
}
.pinglun {
  width: 50%;
  margin: 10px auto;
  div {
    text-align: center;
    i {
      font-size: 28px;
      color: orange;
    }
    p {
      color: #666;
      font-size: 14px;
    }
  }
}
</style>
