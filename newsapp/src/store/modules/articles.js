const state = {
    articles: [],
    loading: false,
};

const getters = {
    'articles': state => {
        return state.articles
    },
    'loading': state => {
        return state.loading
    }
};

const mutations = {
    'SET_ARTICLE': (state, payload) => {
      state.articles = payload;
    },
    'SET_LOADING': (state, payload) => {
        state.loading = payload
    }
};

const actions = {
};

export default {
    state,
    mutations,
    actions,
    getters
}