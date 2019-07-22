export const state = () => {
    return {
        // 总的文章列表
        articleList: [],
        // 渲染到单个页面的列表
        dataList: [],
        total: 0,
    }
}

export const mutations = {
    changeDataList(state, data) {
        // console.log(data);
        state.total = data.total
        state.articleList = data.data
        // 遍历文章列表数据 如果图片长度大于3 则等于3 否则等于1
        state.articleList.forEach((v,i)=>{
            // console.log(v);
            if(v.images.length>=3){
              v.images.length=3
            }else{
              v.images.length=1
            }
        });
        state.dataList = state.articleList.slice(0, 3)
    },
    setdataList(state,data){
        state.total = data.total
        state.dataList = data.data
    }
}

export const actions = {
    // 获取文章列表
    getArticleInfo(store, date) {
        this.$axios({
            url: "/posts",
            params: {
                city: date
            }
        })
            .then(res => {
                // console.log(res);
                store.commit("changeDataList", res.data)
                console.log(store.state.dataList);
            })
    }
}