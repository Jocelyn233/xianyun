<template>
    <div class="box">
         <span>相关攻略</span>
     <el-row class="about" v-for="(v,i) in recommend"
     :key="i"
     >
         <el-row class="aboutItem" type="flex">
             <el-col>
                 <img :src="v.images[0]" alt="" style="width:100px;height:100px"
                 @click='goAboutDetil(v.id)'
                 >
             </el-col>
             <el-col>
                 <div class="tittle">
                     {{v.title}}
                 </div>
                 <div><span>阅读:{{v.watch}}</span></div>
             </el-col>
         </el-row>
     </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            recommend:[]
        }
    },
    mounted(){
        this.$axios({
            url:'/posts/recommend'
        }).then(res=>{
            console.log("================");
            console.log(res);
            this.recommend=res.data.data;
            console.log(this.recommend);
        })
    },
    methods:{
        goAboutDetil(id){
            this.$axios({
        url: "/posts",
        params: {
          id,
        }
      }).then(res => {
        console.log("=======");
        console.log(res);
      });   
    //   replace是不会发生跳转 只是改变了参数
            this.$router.replace(`/post/detail?id=${id}`)
            console.log(id);
        }
    }
}
</script>
<style lang="less" scoped>
.about{
    border-top: 1px solid #cccc;
    margin-top: 10px;
    padding: 10px
}
.tittle{
    margin-bottom: 50px;
}
</style>
