import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    name: 'jo-blue'
  }),
  mutations: {
    SET_NAME(state, payload){
      state.name = payload
    }
  },
  actions: {
    saveName({ commit }, data){
      commit('SET_NAME', data)
    }
  },
  modules: {
  },
});