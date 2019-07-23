<template>
  <div class="comment">
    <h1>10条真实用户评论</h1>
    <div class="comment-info">
      <div class="comment-num">
        <span>总好评：1</span>
        <span>好评数：1</span>
        <span>差评数：1</span>
      </div>
      <div class="star-level">
        <span>
          <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"></i>
          <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"></i>
          <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"></i>
          <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"></i>
          <span>3.5分</span>
          <em>推荐</em>
        </span>
      </div>
      <div class="grade">
        <span>
          <el-progress type="circle" show-text :width="70" :percentage="data.environment"></el-progress>
        </span>
        <i>
          环境
          <br />
          {{data.environment/10}}分
        </i>
        <span>
          <el-progress type="circle" show-text :width="70" :percentage="data.product"></el-progress>
        </span>
        <i>
          产品
          <br />
          {{data.product/10}}分
        </i>
        <span>
          <el-progress type="circle" show-text :width="70" :percentage="data.service"></el-progress>
        </span>
        <i>
          服务
          <br />
          {{data.service/10}}分
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //    num:10,
  //    num2:20,
  //    num3:30
  //   }
  // },
  props: {
    data:{
      type:Object,
      default:{
      } 
    }

  },
  // watch: {
  //   data:{}
  // }
};
</script>

<style lang="less" scoped>
h1 {
  font-size: 16px;
  margin-bottom: 20px;
}
.comment-info {
  height: 64px;

  .comment-num {
    float: left;
    height: 100%;
    padding-right: 50px;
    span {
      display: block;
    }
  }

  .star-level {
    float: left;
    height: 100%;
    position: relative;
    margin: 0 50px;

    > span {
      display: block;
      margin-top: 16%;

      span {
        color: orange;
      }

      em {
        position: absolute;
        left: 0px;
        top: 0px;
        border: 2px solid #fa3;
        text-align: center;
        width: 70px;
        height: 70px;
        line-height: 70px;
        border-radius: 50%;
        opacity: 0.35;
        transform: rotate(-30deg);
        color: #fa3;
        font-size: 22px;
      }
    }
  }

  .grade {
    float: left;
    position: relative;

    i {
      text-align: center;
      color: #fa3;
    }
    i:nth-child(2) {
      position: absolute;
      left: 15px;
      top: 12px;
      background-color: #fff;
    }
    i:nth-child(4) {
      position: absolute;
      left: 92px;
      top: 12px;
      background-color: #fff;
    }
    i:nth-child(6) {
      position: absolute;
      left: 168px;
      top: 12px;
      background-color: #fff;
    }
  }
}
</style>

