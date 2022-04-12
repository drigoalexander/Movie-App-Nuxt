import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export const store = () => {
  //   createPersistedState()(store);
  return new Vuex.Store({
    state: {
      Movie: [],
      searchMovie: [],
      genre: [],
    },

    actions: {
      fetchData(store) {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=1ca291cbb57f47026f3e03931e67c462&language=en-US&page=1"
          )
          .then((res) => {
            store.commit("SetMovie", res.data.results);
          });
      },

      fetchGenre(store) {
        axios
          .get(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=1ca291cbb57f47026f3e03931e67c462&language=en-US"
          )
          .then((res) => {
            store.commit("SetGenre", res.data.genres);
          });
      },

      fetchSearch(store, param) {
        let name = param.name;
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=1ca291cbb57f47026f3e03931e67c462&language=en-US&query=${name}`
          )
          .then((res) => {
            store.commit("SetSearch", res.data.results);
          });
      },
    },

    mutations: {
      SetMovie(state, value) {
        state.Movie = value;
      },
      SetSearch(state, params) {
        state.searchMovie = params;
      },
      SetGenre(state, params) {
        state.genre = params;
      },
    },
  });
};

export default store;
