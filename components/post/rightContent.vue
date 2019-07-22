<template>
  <div class="container">
    <el-row type="flex" justify="space-between" class="content-top">
      <div class="content-top-left">推荐攻略</div>
      <div>
        <el-button @click="goCreatPage" type="primary">
          <i class="el-icon-edit"></i> 写游记
        </el-button>
      </div>
    </el-row>
    <div class="content-bottom">
      <!-- 底部文章部分 -->
      <div class="content-bottom-item1" v-for="(item,index) in dataList" :key="index">
        <!-- 当图片大于三张时显示的内容 -->
        <div v-show="item.images.length>=3">
          <nuxt-link :to="'/post/detail?id='+item.id" class="title">{{item.title}}</nuxt-link>
          <nuxt-link :to="'/post/detail?id='+item.id" class="content" v-html="item.summary" />
          <div class="content-img">
            <el-row type="flex">
              <el-col :span="8" v-for="(v,i) in item.images" :key="i">
                <nuxt-link :to="'/post/detail?id='+item.id">
                  <img :src="v" alt />
                </nuxt-link>
              </el-col>
            </el-row>
          </div>
          <el-row type="flex" justify="space-between">
            <div class="content-ico">
              <span>
                <i class="el-icon-location-outline"></i>
                {{item.cityName}}
              </span>
              <span>by</span>
              <span class="name" @click="getPersonInfo">{{item.account.nickname}}</span>
              <span>
                <i class="el-icon-view"></i>
                {{item.watch}}
              </span>
            </div>
            <div class="content-ico-right">{{item.like||0}} 赞</div>
          </el-row>
        </div>
        <!-- 图片小于三张时显示的内容 -->
        <div class="content-bottom-item2" v-if="item.images.length<3">
          <el-row type="flex" justify="space-between">
            <nuxt-link
              v-for="(v,i) in item.images"
              :key="i"
              :to="'/post/detail?id='+item.id"
              class="content-bottom-left"
            >
              <img :src="v" alt />
            </nuxt-link>
            <div class="content-bottom-right">
              <nuxt-link :to="'/post/detail?id='+item.id" class="title">{{item.title}}</nuxt-link>
              <nuxt-link :to="'/post/detail?id='+item.id" class="content" v-html="item.summary" />
              <el-row type="flex" justify="space-between">
                <div class="content-ico">
                  <span>
                    <i class="el-icon-location-outline"></i>
                    {{item.cityName}}
                  </span>
                  <span>by</span>
                  <span class="name" @click="getPersonInfo">{{item.account.nickname}}</span>
                  <span>
                    <i class="el-icon-view"></i>
                    {{item.watch}}
                  </span>
                </div>
                <div class="content-ico-right">{{item.like||0}} 赞</div>
              </el-row>
            </div>
          </el-row>
        </div>
      </div>
    </div>

    <!-- 分页部分 -->
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3,5,10, 15]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前页码和分页的默认值
      currentPage: 1,
      pageSize: 3,
      total: 0,
      // 总的文章列表
      articleList: [],
      // 渲染到单个页面的列表
      dataList: []
      // 文章图片集合
      // imgList: []
    };
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize=val
      this.dataList=this.articleList.slice(
              (this.currentPage - 1) * this.pageSize,
              this.pageSize * this.currentPage
          );
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage=val
      this.dataList=this.articleList.slice(
              (this.currentPage - 1) * this.pageSize,
              this.pageSize * this.currentPage
          );
    },
    // 点击获取用户信息
    getPersonInfo() {
      this.$message.success("个人中心暂未开放...");
    },
    // 跳转到编辑页面
    goCreatPage(){
      this.$router.push('/post/create')
    }
  },
  mounted() {
    //  获取文章列表
    this.$axios({
      url: "/posts"
    })
      .then(res => {
        // console.log(res);
        const { data } = res.data;
        this.total = res.data.total;
        this.articleList = data;
        this.dataList =this.articleList.slice(0,3);
        // console.log(data);
        // 遍历文章列表数据 如果图片长度大于3 则等于3 否则等于1
        this.articleList.forEach((v,i)=>{
            console.log(v);
            if(v.images.length>=3){
              v.images.length=3
            }else{
              v.images.length=1
            }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.container {
  //   width: 700px;
  //   background-color: burlywood;
  box-sizing: border-box;
  .content-top {
    width: 700px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    .content-top-left {
      font-size: 22px;
      color: #ffa500;
      padding-bottom: 18px;
      border-bottom: 2px solid #ffa500;
    }
  }
  .content-bottom {
    width: 700px;
    //   图片大于3张
    .content-bottom-item1 {
      // height: 348px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      //   background-color: cadetblue;
      .title {
        display: block;
        font-size: 19px;
        padding: 20px 0;
         &:hover{
              color: #ffa500;
            }
      }
      .content {
        display: block;
        height: 58px;
        font-size: 14px;
        color: #666;
        overflow: hidden;
        margin-bottom: 18px;
      }
      .content-img {
        div {
          height: 152px;
          overflow: hidden;
          padding: 0 4px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .content-ico {
        font-size: 12px;
        color: #a6a6a6;
        padding: 20px 0 26px 0;
      }
      .content-ico-right {
        padding-top: 13px;
        font-size: 18px;
        color: #ffa500;
      }
      // 图片小于三张
      .content-bottom-item2 {
        height: 190px;
        padding: 20px 0;
        overflow: hidden;
        box-sizing: border-box;
        //   background-color: cadetblue;
        .content-bottom-left {
          width: 220px;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
        .content-bottom-right {
          width: 470px;
          overflow: hidden;
          .title {
            display: block;
            font-size: 19px;
            height: 10px;
            margin: -14px 0 6px 0;
            overflow: hidden;
            &:hover{
              color: #ffa500;
            }
          }
          .content {
            display: block;
            height: 58px;
            font-size: 14px;
            color: #666;
            overflow: hidden;
          }
          .content-ico {
            margin-top: -12px;
            font-size: 12px;
            color: #a6a6a6;
          }
          .content-ico-right {
            padding-top: 13px;
            font-size: 18px;
            color: #ffa500;
          }
        }
      }
    }
  }
  .pagination {
    padding: 12px 0 18px 16px;
  }
}
.name {
  color: #ffa500;
  margin-right: 3px;
  &:hover {
    cursor: pointer;
  }
}
</style>
