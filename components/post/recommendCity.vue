<template>
  <div>
    <div class="container">
      <div class="recommend-city">推荐城市</div>
      <div class="recommend-city-img">
        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  width: 300px;
  height: 229px;
  padding-right: 36px;
  //   background-color: darkgrey;
  box-sizing: border-box;
  .recommend-city {
    font-size: 19px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ccc;
  }
  .hr-line {
    background-color: #ccc;
  }
  .recommend-city-img {
    height: 174px;
    img {
      width: 100%;
      margin-top: 8px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
