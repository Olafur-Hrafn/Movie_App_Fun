import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: 'óli',
    prefix: 'Mr.',
    popularMovies:undefined,
  },
  mutations: {
    SET_PREFIX(state, payload){
      console.log(payload);
      state.prefix = payload.prefix;
    },
    SET_POPULAR_MOVIES(state, payload) {
      state.popularMovies = payload.movies;
    }
  },
  actions: {
    getPopularMovies(context) {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ab2e597f47ca644230e1c2a0edf47c26&language=en-US&page=1').then(data => {
        console.log(data);
        context.commit('SET_POPULAR_MOVIES',{movies: data.data});
      })
    }
  },
  getters: {
    user(state) {
      return state.prefix + ' ' + state.user;
    },

    popularMovies(state){
      if(state.popularMovies.data.results.vote_average > 7)
      return state.popularMovies;
    }
  }
})
