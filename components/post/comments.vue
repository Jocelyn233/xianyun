<template>
<div>
        <!-- 显示评论内容 -->
    <el-row class="showPingLun">
  <Comments class="comParent" v-if="comment.parent"  :comment="comment.parent"></Comments>
      <el-row class="showHead" type="flex" justify="space-between">
        <div><span>{{comment.account.nickname}}</span><span></span></div>
        <div>{{comment.level}}</div>
      </el-row>
      <el-row class="showContent">
          <img :src="`${comment.pics.name}`" alt="">
        <div>{{comment.content}}</div>
      </el-row>
    </el-row>
   
</div>
</template>
<script>
export default {
  // <img :src="`${comment.account.defaultAvatar}`" alt="">
  name:'Comments',
  props: {
    comment: {
      type: Object,
      default: {}
    }
  }
}
</script>
<style lang="less" scoped>
.showPingLun{
  width: 100%;
  border: 1px solid #333;
   padding: 0 10px;
   .comParent{
       padding: 2px;
       background-color: pink;
   }
  .showContent{
     text-indent: 1em;
     padding-top: 10px;
  }
}
</style>
