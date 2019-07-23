<template>
  <div class="map">
    <div id="container" style=" height:350px;"></div>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="options">
      <el-tab-pane label="风景" name="first">
        <h6 v-for="(v,i) in sceneryList" :key="i">
          <span>{{v.name}}</span>
          <span>0.9公里</span>
          </h6>
      </el-tab-pane>
      <el-tab-pane label="交通" name="second">
        <h6 v-for="(v,i) in platformList" :key="i">
          <span>{{v.name}}</span>
          <span>0.9公里</span>
          </h6>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markerArr: [],
      activeName:'',
      sceneryList:[],
      platformList:[]
    };
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  watch: {
    data(nv, ov) {}
  },
  methods: {
    handleClick(tab,event){
        // console.log(tab,event)
    },
    getSceneryAddress(){
      this.$axios({
        url:'https://restapi.amap.com/v3/place/text?keywords=&city=%E5%8D%97%E4%BA%AC&location=118.871811,31.328468&types=%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C&output=json&page=1&offset=10&key=79041dfa1c752f49599e2b507c64da42',
      }).then(res=>{
        // console.log(res)
        this.sceneryList=res.data.pois
        // console.log(res.data.pois);
      })
    },
    getPlatformAddress(){
      this.$axios({
        url:'https://restapi.amap.com/v3/place/text?keywords=&city=%E5%8D%97%E4%BA%AC&location=118.922375,32.101576&types=%E4%BA%A4%E9%80%9A%E8%AE%BE%E6%96%BD%E6%9C%8D%E5%8A%A1&output=json&page=1&offset=10&key=79041dfa1c752f49599e2b507c64da42',
      }).then(res=>{
        // console.log(res)
        this.platformList=res.data.pois
        // console.log(res.data.pois);
      })
    },
    init() {
      // 生成地图.container是显示地图的div的id
      var map = new AMap.Map("container", {
        zoom: 15, //放大级别
        center: [this.data.location.longitude, this.data.location.latitude], //中心点坐标，经纬度
        viewMode: "3D" //使用3D视图
      });
      if (!this.data) {
        if (marker) {
          marker.setMap(null);
          marker = null;
        }
        return;
      }
      console.log(this.data.location.longitude, this.data.location.latitude);
      var marker = new AMap.Marker({
        position: [this.data.location.longitude, this.data.location.latitude] //位置
      });
      map.add(marker); //添加到地图
    }
  },
  mounted() {
    this.getSceneryAddress()
    this.getPlatformAddress()
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

<style lang="less" scoped>
.map {
  width: 100%;
  display: flex;

  #container {
    flex: 6;
    margin-right: 20px;
  }

  .options {
    flex: 3;
    h6{
      margin:8px;
       display: flex;
    &:hover{
      background-color: #ccc;
    }
    }
    span {
      flex:1;
    }
  }
}
</style>

