export const state = () => {
    return {
        keywords: ''
    }
}

export const mutations = {
    setKeyWord(state, data) {
        state.keywords = data
        // console.log(state.keywords);
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
               console.log(res);
            })
    }
}