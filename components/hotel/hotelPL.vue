<template>
  <div class="pinlun" >
    <div v-for="(v,i) in commentList" :key="i">
      <div>11</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commentList:[]
    }
  },
  name: "pinlun",
  mounted() {
    this.$axios({
      url: "hotels/comments"
    }).then(res => {
      console.log(res, 66);
      this.commentList=res.data.data
      console.log(this.commentList)
    });
  }
};
</script>

<style lang="less" scoped>
</style>

