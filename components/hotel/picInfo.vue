<template>
  <div class="pic-box">
    <div class="show-box">
      <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
    </div>
    <div class="pic-list">
      <span><img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt=""></span>
      <span><img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt=""></span>
      <span><img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt=""></span>
      <span><img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt=""></span>
      <span><img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt=""></span>
      <span><img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt=""></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.pic-box {
  display: flex;
  width: 100%;
  height: 380px;
  padding: 20px 0;

  .show-box {
    flex: 6;
    height: 100%;
    margin-right: 20px;

    > img {
      width: 100%;
      height: 100%;
    }
  }

  .pic-list {
    flex: 4;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

     
    span {
      width: 48%;
      height: 31%;
      margin-bottom:10px;

      >img{
       width: 100%;
       height:100%;
     }

      &:nth-last-child(-n+2){
        margin:0;
      }
    }
  }
}
</style>
