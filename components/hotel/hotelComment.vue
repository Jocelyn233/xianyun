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
        <span><el-progress type="circle" show-text :width="70" :percentage="25"></el-progress></span>
        <span><el-progress type="circle" show-text :width="70" :percentage="25">产品</el-progress></span>
        <span><el-progress type="circle" show-text :width="70" :percentage="25">服务</el-progress></span>
      </div>
    </div>
    <div class="comment-content"></div>
  </div>
</template>

<script>
export default {};
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
    margin:0 50px;

    >span {
      display: block;
      margin-top:16%;

      span{
        color:orange;
      }

      em{
        position: absolute;
        left: 0px;
        top:0px;
        border:2px solid #fa3;
        text-align: center;
        width: 70px;
        height: 70px;
        line-height: 70px;
        border-radius: 50%;
        opacity: .35;
        transform: rotate(-30deg);
        color:#fa3;
        font-size: 22px;
      }
    }
  }
  
  .grade{
    float: left;


  }

}
</style>

