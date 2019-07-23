<template>
  <section class="container">
    <el-row type="flex" justify="space-between">
      <!-- 发表新攻略部分 -->
      <el-col :span="20" class="create-content">
        <el-form>
          <h2>发表新攻略</h2>
          <h5>分享你的个人游记,让更多人看得到哦!</h5>
          <el-form-item class="content-title">
            <el-input v-model="form.biaoti" style="width:100%" placeholder="请输入标题"></el-input>
          </el-form-item>
          <!-- 富文本框组件 -->
          <el-form-item class="content-editor">
            <div id="app">
              <VueEditor :config="config" ref="vueEditor" v-model="form.nei" />
            </div>
          </el-form-item>

          <el-form-item label="选择城市">
            <el-autocomplete
              v-model="form.destCity"
              :fetch-suggestions="queryDestSearch"
              placeholder="请搜索游玩城市"
              @select="handleDestSelect"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit" size="small">发布</el-button>
            <span @click="handleSave">
              或者
              <a href="javascript:;">保存到草稿</a>
            </span>
          </el-form-item>
        </el-form>
      </el-col>
      <!-- 草稿箱部分 -->
      <el-col :span="4" class="content-aside">
        <div class="box">
          <h2>草稿箱( {{num}})</h2>
          <el-row v-for="(item,index) in listConner" :key="index" class="item">
            <div class="contet draft-post-title" @click="recover(item)">{{item.title}}</div>
            <p>{{item.date}}</p>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
// 引入富文本框
import "quill/dist/quill.snow.css";
let VueEditor;

if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}
export default {
  name: "app",
  data() {
    return {
      // 草稿箱数据
      listConner: [],
      // 输入框内容列表
      num:0,
      form: {
        destCity: "",
        biaoti: "",
        nei: "",
        time: ""
      },
      isShow: false,
      // 富文本框插件配置
      config: {
        modules: {
          // 工具栏
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["image", "video"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }] // text direction
          ]
        },
        // 主题
        theme: "snow",
        uploadImage: {
          // url: "http://localhost:1337/upload",
          url: "http://157.122.54.189:9095/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://157.122.54.189:9095" + res.data[0].url);
          },
          uploadError() {},
          showProgress: true
        },

        uploadVideo: {
          url: "http://157.122.54.189:9095/upload",
          // url: "http://localhost:1337/upload",
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
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShow = true;
      // 把以前存在vuex的草稿拿出来
      this.listConner = [...this.$store.state.post.posts];
      // 如果草稿条数大于五条，规定只显示五条
      if (this.listConner.length > 5) {
        this.listConner.length = 5;
      }
    }, 1);
  },
  methods: {
    // 搜索游玩城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    async queryDestSearch(value, cb) {
      const res = await this.findCity(value);
      if (res.length > 0) {
        // 默认选中第一个城市
        this.form.destCity = res[0].value;
      }
      cb(res);
    },
    findCity(destCity) {
      return new Promise((revoled, reject) => {
        if (destCity.trim().length == 0) {
          revoled([]);
          return;
        }
        this.$axios({
          url: "/cities",
          params: {
            name: destCity
          }
        }).then(res => {
          const { data } = res.data;
          // console.log(res.data);
          const newData = data.map(v => {
            v.value = v.name.replace("市", "");
            return v;
          });
          revoled(newData);
        });
      });
    },
    handleDestSelect(item) {
      this.form.destCity = item.value;
    },
    // 草稿箱内容点击编辑
    handleSave() {
      // 获取文本框内容
      this.form.nei = this.$refs.vueEditor.editor.root.innerHTML;
      // 获取系统时间
      let data = new Date();
      // 将时间转换成YYYY-MM-DD格式
      this.form.time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
      let obj = { ...this.form };
      // 拿到存进vuex的数组
      this.listConner.unshift(obj);
      this.num=this.listConner;
      this.$store.commit("post/setPostInfo", this.listConner);
      // 添加到草稿箱后
      if (this.listConner.length > 5) {
        this.listConner.length = 5;
      }
      // 清空输入框
      this.form = {
        destCity: "",
        biaoti: "",
        time: ""
      };
      //  清空 富文本框
      this.$refs.vueEditor.editor.root.innerHTML = "";
    },
    // <!-- 点击草稿箱内容重新编辑方法 -->
    recover(value) {
      let { nei } = { ...value };
      this.form = { ...value };
      this.$refs.vueEditor.editor.root.innerHTML = nei;
    },
    // 发布方法
    handleSubmit() {
      this.form.nei = this.$refs.vueEditor.editor.root.innerHTML;
      const token = this.$store.state.user.userInfo.token;
      let vilde = true;
      this.form.nei = this.$refs.vueEditor.editor.root.innerHTML;
      if (this.form.nei === "<p><br></p>") {
        this.$message.warning("请输入内容!");
        return;
      }
      const rules = [
        {
          message: "请输入标题",
          rule: this.form.biaoti
        },
        {
          message: "请输入文本框内容",
          rule: this.form.nei
        },
        {
          message: "请输入搜索游玩城市",
          rule: this.form.destCity
        }
      ];
      rules.map(v => {
        if (v.rule.length == 0) {
          vilde = false;
          return setTimeout(() => {
            this.$message.warning(v.message);
          }, 100);
        }
      });
      // 如果为false时需要转化为true 让他进入if return 停止
      if (!vilde) return;
      let form = {
        content: this.form.nei,
        title: this.form.biaoti,
        city: this.form.destCity
      };

      this.$axios({
        baseURL: "http://157.122.54.189:9095",
        url: "/posts",
        method: "POST",
        data: form,
        headers: {
          Authorization: `Bearer ${token || `NO TOKEN`}`
        }
      }).then(res => {
        console.log(res);
        if (res.data.message == "新增成功") {
          this.$message({
            message: "发布成功",
            type: "success"
          });
          this.$router.push({
            path: "/post/detail"
          });
        }
      });
    }
  },
  components: {
    VueEditor
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 15px auto;

  .create-content {
    width: 750px;
  }
  .content-aside {
    margin-left: 40px;
    margin-top: 10px;
  }

  /deep/ #editor {
    height: 420px;
  }
  .content-editor {
    width: 100%;
  }
  h2 {
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  h5 {
    color: #999;
    margin-bottom: 12px;
    font-weight: normal;
  }

  span {
    cursor: pointer;
    > a {
      color: orange;
    }
  }
  .box {
    width: 200px;
    padding: 10px;
    border: 1px solid #f5f5f5;
    h2 {
      font-size: 18px;
      color: #666;
      font-weight: normal;
    }
    .item {
      margin: 10px 0;
      font-size: 14px;
    }
    .contet {
      font-size: 14px;
      cursor: pointer;
      color: #000;
      &:hover {
        color: orange;
        text-decoration: underline;
      }
    }
    p {
      font-size: 1px;
      color: #999;
    }
  }
}
</style>
