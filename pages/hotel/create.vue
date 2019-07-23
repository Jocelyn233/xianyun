<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="19">
        <div class="left">
          <p id="publishNew">发表新攻略</p>
          <p id="share">分享你的个人游记，让更多人看到哦！</p>
          <input type="text" placeholder="请输入标题" id="title" v-model="info.title"/>
          <!-- 3、使用富文本框 参考https://github.com/hsian/vue-word-editor-->
          <div class="edit_container">
            <VueEditor :config="config" ref="vueEditor" v-model="info.content"/>
          </div>

          <div class="city">
            <span>选择城市</span>
            <input type="text" placeholder="请搜索游玩城市" id="searchCity" v-model="info.city"/>
          </div>
          <div class="publish">
            <el-button type="primary" @click="submitPublish">发布</el-button>
            <span id="or">或者</span>
            <nuxt-link to='/post/create' class='draft' @click="saveDraft">保存到草稿</nuxt-link>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="right">
          <p>草稿箱（0）</p>
          <!-- <span class='el-icon-edit'></span> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 1、添加判断，引入富文本框
import "quill/dist/quill.snow.css";
let VueEditor;

if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}

export default {
  // 2、注册
  components: {
    VueEditor
  },
  data() {
    return {
      // 4、添加配置
      config: {
        modules: {
          // 工具栏
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            [{ header: 1 }, { header: 2 }], // custom button values
            ["image", "video"]
          ]
        },
        // 主题
        theme: "snow",
        uploadImage: {
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {},
          showProgress: false
        },

        uploadVideo: {
          //url: "http://157.122.54.189:9095/upload",
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {}
        }
      },
      info:{
      title: "",
      content: "",
      city: ""
      }
    };
  },
  methods: {
    submitPublish() {
      // console.log(this.$refs.vueEditor.editor.root.innerHTML);
      this.$axios({
        url: "posts",  //来自接口文档-新增文章
        method: "POST",
        data:this.info,  //数据都保存在组件中，this指向此组件
        headers: {
          // 下面请求头信息不是通用的，针对当前的项目的（基于JWT token标准）
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res => {
        console.log(res);
      });
    },
    saveDraft(){
      this.$store.commit('post/updateDraft',this.info)
    }
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 1000px;
  height: 766px;
  margin: 0 auto;
  padding: 20px 0 20px 0;
  // background-color: lightblue;
  .left {
    width: 750px;
    margin-right: 50px;
    // background-color: orchid;
    #publishNew {
      font-size: 23px;
      margin-bottom: 12px;
    }
    #share {
      font-size: 12px;
      margin-bottom: 12px;
      color: #ccc;
    }
    input {
      border: 1px solid #ccc;
    }
    #title {
      width: 734px;
      padding: 12px 0 12px 14px;
    }
    .edit_container {
      margin: 22px 0;
    }
    /deep/ .ql-editor {
      height: 456px;
    }
    .city {
      margin: 20px 0 20px 0;
      #searchCity {
        width: 200px;
        padding: 12px 0 12px 14px;
        margin-left: 12px;
      }
    }
    .publish {
      #or {
        margin-left: 12px;
      }
      .draft {
        color: #ffa500;
        text-decoration: underline;
        & :hover {
          cursor: pointer;
        }
      }
    }
  }
  .right {
    width: 190px;
    height: 50px;
    border: 1px solid #ddd;
    line-height: 50px;
    text-align: center;
  }
}
</style>
