import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: () => ({
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
    SET_STATES(state, data){
      const { key, payload } = data
      state[key] = payload
      console.log(key, state[key])
    },
  },
  actions: {
    fetchDogs({ commit }, data){
      return new Promise((resolve, reject) => {
        axios.get('https://dog.ceo/api/breeds/image/random/100/alt').then(response => {
          commit('SET_STATES', {
            key: 'dogs',
            payload: response.data.message
          })
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      })
    },
    fetchBreed({ commit }, data){
      return new Promise((resolve, reject) => {
        axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
          commit('SET_STATES', {
            key: 'breedList',
            payload: response.data.message
          })
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      })
    },
    fetchByBreed({ commit, state }, data){
      return new Promise((resolve, reject) => {
        axios.get(`https://dog.ceo/api/breed/${data.breed}/images/random/${data.length}/alt`).then(response => {
          commit('SET_STATES', {
            key: 'breed',
            payload: {
              name: data.breed,
              dogs: response.data.message
            }
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
          commit('SET_STATES', {
            key: 'subBreed',
            payload: {
              name: data.subBreed,
              dogs: response.data.message
            }
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