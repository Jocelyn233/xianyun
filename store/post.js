export const state = () => {
    return {
        // 总的文章列表
        articleList: [],
        // 渲染到单个页面的列表
        dataList: [],
        total: 0,
        // 当前页码和分页的默认值
        currentPage: 1,
        pageSize: 3,
        // 草稿箱数据
        draft:{},
        postInfo:[]
    }
}

export const mutations = {
    changeDataList(state, data) {
        // console.log(data);
        state.total = data.total
        state.articleList = data.data
        // 遍历文章列表数据 如果图片长度大于3 则等于3 否则等于1
        state.articleList.forEach((v, i) => {
            // console.log(v);
            if (v.images.length >= 3) {
                v.images.length = 3
            } else {
                v.images.length = 1
            }
        });
        state.dataList = state.articleList.slice(
            (state.currentPage - 1) * state.pageSize,
            state.pageSize * state.currentPage)
        // console.log(state.dataList.length);
    },
    setdataList(state, data) {
        state.total = data.total
        state.dataList = data.el-icon-s-data
    },
    // 改变页码数时触发
    changePageSize(state, data) {
        state.pageSize = data
        // console.log(state.currentPage, state.pageSize);
        state.dataList = state.articleList.slice(
            (state.currentPage - 1) * state.pageSize,
            state.pageSize * state.currentPage
        );
    },
    // 改变当前页时触发
    changeCurrentPage(state, data) {
        state.currentPage = data
        // console.log(state.currentPage, state.pageSize);
        state.dataList = state.articleList.slice(
            (state.currentPage - 1) * state.pageSize,
            state.pageSize * state.currentPage
        );
    },
    updateDraft(state, data){
      state.draft = data
    },
     // 登录数据存储
     setpostInfo(state,val){
        state.postInfo = [...val]
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
                // console.log(store.state.dataList);
            })
    }
}