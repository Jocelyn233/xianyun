<template>
  <div class="container">
    <el-row type="flex" justify="space-between" class="content-top">
      <div class="content-top-left">推荐攻略</div>
      <div>
        <el-button type="primary">写游记</el-button>
      </div>
    </el-row>
    <div class="content-bottom">
      <!-- 底部文章部分 -->
      <!-- 当图片大于三张时显示的内容 -->
      <div class="content-bottom-item1">
        <div class="title">塞班贵？一定是你的打开方式不对！6000块玩转塞班</div>
        <div
          class="content"
        >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。1.怎样订机票+酒店性价比最高？机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</div>
        <div class="content-img">
          <el-row type="flex">
            <el-col :span="8">
              <div>
                <img
                  src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                  alt
                />
              </div>
            </el-col>

            <el-col :span="8">
              <div>
                <img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt />
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <img
                  src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                  alt
                />
              </div>
            </el-col>
          </el-row>
        </div>
        <el-row type="flex" justify="space-between">
          <div class="content-ico">
            <span>北京市</span>
            <span>by</span>
            <span>地球发动机</span>
            <span>3063</span>
          </div>
          <div class="content-ico-right">30 赞</div>
        </el-row>
      </div>

      <!-- 图片小于三张时显示的内容 -->
      <div class="content-bottom-item2">
        <el-row type="flex" justify="space-between">
          <div class="content-bottom-left">
            <img
              src="https://p3-q.mafengwo.net/s13/M00/41/C4/wKgEaVyaOs2AA9IKAAj8Lg2YzaU64.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
              alt
            />
          </div>
          <div class="content-bottom-right">
            <div class="title">远东行：用好奇心打量这座城 —— 最值得收藏的海参崴出行攻略</div>
            <div
              class="content"
            >想象一下一个距离 北京 只有2.5小时飞行距离的城市：身处 亚洲 却能感受到十足的欧陆风情——欧式建筑和街道，金发碧眼的路人，正宗的西餐外加只有国内一半售价的帝王蟹可以敞开吃——更难能可贵的是，这里对国人（实质）免签，有直飞航班，低廉的物价，且尚未有太多的游客涉足还保留着原汁原味的传统风情！</div>
           <el-row type="flex" justify="space-between">
          <div class="content-ico">
            <span>北京市</span>
            <span>by</span>
            <span>地球发动机</span>
            <span>3063</span>
          </div>
          <div class="content-ico-right">30 赞</div>
        </el-row>
          </div>
        </el-row>
      </div>
    </div>
    <!-- 分页部分 -->
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted(){
    //  获取文章分类
    this.$axios({
        url:'/postkinds'
    })
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
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
      height: 348px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      //   background-color: cadetblue;
      .title {
        font-size: 19px;
        padding: 20px 0;
      }
      .content {
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
    }
    // 图片小于三张
    .content-bottom-item2 {
      height: 190px;
      padding: 20px 0;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
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
          font-size: 19px;
          height: 26px;
          margin: 6px 0 22px 0;
          overflow: hidden;
        }
        .content {
          height: 56px;
          font-size: 14px;
          color: #666;
          overflow: hidden;
        }
        .content-ico {
          margin-top: 18px;
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
  .pagination {
    padding: 12px 0 18px 16px;
  }
}
</style>
