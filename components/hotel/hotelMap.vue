<template>
  <div style="width:420px;height:260px">
    <div id="container" style="width:420px; height:255px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markerArr: []
    };
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  watch: {
    data(nv,ov){
      
    }
  },
  methods: {
    init() {
      // 生成地图.container是显示地图的div的id
      var map = new AMap.Map("container", {
        zoom: 9, //放大级别
        center: [118.78, 32.07], //中心点坐标，经纬度
        viewMode: "3D" //使用3D视图
      });
      if (!this.data) {
        if (marker) {
          marker.setMap(null);
          marker = null;
        }
        return;
      }
      this.data.forEach(v => {
        var marker = new AMap.Marker({
          position: new AMap.LngLat(v.longitude, v.latitude), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9] longitude经度  latitude维度
          title: "北京"
        });
        map.add(marker);
      });
    }
  },
  mounted() {
    // 地图的链接
    var key = "	0ec7cd3ff1b5ac8f13a7a259755708d1";
    var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad`;
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);

    // 页面加加载之后执行
    window.onLoad = this.init;
  }
};
</script>

<style>
</style>
