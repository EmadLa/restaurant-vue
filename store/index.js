import Vuex from 'vuex';

const store = () => new Vuex.Store({
  state: {
    auth: {
      token: null,
    },
  },
  mutations: {
    setToken(state, token) {
      state.auth.token = token;
    },
  },
  actions: {
  },
});

export default store;
