<template>
  <div>
    <h4>
      {{data.name}}
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
    </h4>
    <span>{{data.alias}}</span>
    <br />
    <span>
      <i data-v-3cab31ba class="iconfont iconlocation"></i>{{data.address}}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Object,
      default: {
        seat_infos: {}
      }
    }
  },
};
</script>

<style lang="less" scoped>
div {
  > h4 {
    font-size: 24px;
    i {
      color: orange;
      &:first-child {
        margin-left: 10px;
      }
    }
  }
}
</style>

