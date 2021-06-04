import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: () => ({
    name: 'jo-blue',
    hasFetched: false,
    dogs: [],
    breed: {
      name: '',
      dogs: []
    },
    subBreed: {
      name: '',
      dogs: []
    },
    breedList: [],
  }),
  mutations: {
    SET_NAME(state, payload){
      state.name = payload
    },
    SET_HAS_FETCHED(state, payload){
      state.hasFetched = payload
    },
    SET_DOG_LIST(state, payload){
      state.dogs = payload
    },
    SET_STATE(state, payload){
      const { key } = payload
      delete payload.key
      state[key] = payload
    },
    SET_BREED_LIST(state, payload){
      state.breedList = payload
    },
    
  },
  actions: {
    saveName({ commit }, data){
      commit('SET_NAME', data)
    },
    fetchDogs({ commit }, data){
      return new Promise((resolve, reject) => {
        axios.get('https://dog.ceo/api/breeds/image/random/100/alt').then(response => {
          commit('SET_DOG_LIST', response.data.message)
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      })
    },
    fetchBreed({ commit }, data){
      return new Promise((resolve, reject) => {
        axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
          commit('SET_BREED_LIST', response.data.message)
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      })
    },
    fetchByBreed({ commit, state }, data){
      return new Promise((resolve, reject) => {
        axios.get(`https://dog.ceo/api/breed/${data.breed}/images/random/${data.length}/alt`).then(response => {
          commit('SET_STATE', {
            key: 'breed',
            name: data.breed,
            dogs: response.data.message
          })
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      })
    },
    fetchBySubBreed({ commit, state }, data){
      return new Promise((resolve, reject) => {
        axios.get(`https://dog.ceo/api/breed/${data.breed}/${data.subBreed}/images/random/100/alt`).then(response => {
          commit('SET_STATE', {
            key: 'subBreed',
            name: data.subBreed,
            dogs: response.data.message
          })
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      })
    },
  },
  modules: {
  },
});