<template>
  <div class="ravelDetails">
    <el-row type="flex" :gutter="20">
      <el-col :span="18">
        <RavelDetailInfo :pinglun="commentsObj" />
        <Release />
        <Comments v-for="(v,i) in commentArr.slice((pagenum-1)*pageSize,pagenum*pageSize)" :key="i" :comment="v" />
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagenum-0"
          :page-sizes="[2, 4, 6, 8]"
          :page-size="pageSize-0"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total-0"
        ></el-pagination>
      </el-col>
      <el-col :span="8">
        <Aboutdetails/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import RavelDetailInfo from "./ravelDetailInfo";
import Aboutdetails from "./aboutdetails";
import Release from "./release";
import Comments from "./comments";
export default {
  data() {
    return {
      commentsObj: {},
      commentArr: [],
      commentForm: {
        _sort: "",
        _limit: "",
        _start: "0"
      },
      // 当前条数
      pageSize: "2",
      // 总条数
      total: "",
      // 当前页码
      pagenum: "1"
    };
  },
  // 当路由参数发生变化的时候，replace重定向只是改变了参数变化，所以可以监听到，但是push的话是要重新刷新才有效果
    watch:{
     '$route'(){
        this.id = this.$route.query.id
        this.getPingLun()
      }
  },
  // beforeRouteUpdata(to,from,next){
  //   next()
  //   this.getPingLun()
  // },
  components: {
    RavelDetailInfo,
    Release,
    Comments,
    Aboutdetails
  },
  methods: {
    // 显示每页记录数
    handleSizeChange(val) {
      console.log(val);
      this.pageSize = val;
    },
    // 切换当前页码切换
    handleCurrentChange(val) {
      console.log(val);
      this.pagenum=val;
    },
    // 获取评论数据
    getPingLun() {
      const { id } = this.$route.query;
      console.log(id);
      this.$axios({
        url: "/posts/comments",
        params: {
          post: id,
          _limit: this.commentForm.total,
          _start: this.commentForm._start
        }
      }).then(res => {
        console.log("------");
        console.log(res);
        this.commentsObj = res.data;
        this.commentArr = res.data.data;
        this.total = res.data.total;

      });
    }
  },
  // 页面加载时获取评论数据
  mounted() {
    this.getPingLun()
  }
};
</script>
<style lang="less" scoped>
.ravelDetails {
  width: 1000px;
  margin: 0px auto;
}
</style>
