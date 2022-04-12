<template>
  <div class="w-screen h-screen mx-auto">
    <Hero />

    <!-- <p class="text-white bg-black">
      {{ movies }}
    </p> -->
    <div
      class="bg-[#001B2E] flex flex-col justify-center items-center gap-6 pb-20"
    >
      <div
        class="px-44 pb-20 text-white flex flex-row flex-wrap gap-10 items-center justify-center"
      >
        <div v-for="(genre, index) in genres" :key="index">
          <button
            @click="showGenre(genre.id, index)"
            class="text-2xl text-white link link-underline link-underline-black"
          >
            {{ genre.name }}
          </button>
        </div>
      </div>
      <!-- :to="{ name: 'movies-movieid', params: { id: movie.id } -->
      <h1 class="text-white text-4xl">Search Your Movie</h1>
      <input
        type="text"
        class="w-96 px-4 py-2 rounded-md focus:scale-110 transition duration-300 ease-in-out"
        placeholder="Input Your Movie"
        v-model="movieName"
        @keyup.enter="getFilms"
      />
    </div>
    <div
      v-if="movieName == '' && isCategory == false"
      class="pb-10 flex flex-wrap justify-center items-center bg-[#001B2E]"
    >
      <div v-for="(mov, index) in Movie" :key="index" class="">
        <nuxt-link :to="{ name: 'movies-movieid', params: { id: mov.id } }">
          <cardsMovie :Movie="mov" />
        </nuxt-link>
      </div>
    </div>

    <div
      v-else-if="movieName == '' && isCategory == true"
      class="pb-10 flex flex-wrap justify-center items-center bg-[#001B2E]"
    >
      <div v-for="(cat, index) in category" :key="index" class="">
        <nuxt-link :to="{ name: 'movies-movieid', params: { id: cat.id } }">
          <cardsMovie :Movie="cat" />
        </nuxt-link>
      </div>
    </div>

    <div
      v-if="movieName != ''"
      class="pb-10 flex flex-wrap justify-center items-center bg-[#001B2E]"
    >
      <div v-for="(mov, index) in searchMovie" :key="index" class="">
        <nuxt-link :to="{ name: 'movies-movieid', params: { id: mov.id } }">
          <cardsMovie :Movie="mov" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import cardsMovie from "@/components/cards.vue";
export default {
  name: "IndexPage",
  components: {
    cardsMovie,
  },
  data() {
    return {
      movies: [],
      movieName: "",
      genre: [],
      category: [],
      isCategory: false,
    };
  },

  // async fetch() {
  //   await this.getMovies();
  // },

  computed: {
    Movie() {
      this.$store.state.Movie.forEach((element) => {
        this.movies.push(element);
      });
      // this.movies.push(this.$store.state.Movie);
      return this.$store.state.Movie;
    },

    searchMovie() {
      return this.$store.state.searchMovie;
      // movies
    },

    genres() {
      this.$store.state.genre.forEach((element) => {
        this.genre.push(element);
      });
      return this.$store.state.genre;
    },
  },

  methods: {
    getMovie() {
      this.$store.dispatch("fetchData");
      this.$store.dispatch("fetchGenre");
      // console.log("success");
    },

    getFilms() {
      this.$store.dispatch("fetchSearch", { name: this.movieName });
    },

    showGenre(idx) {
      this.isCategory = true;
      let id = idx;
      this.category = [];
      this.movies.forEach(() => {
        if (this.movies.hasOwnProperty(id)) {
          // this.category.push(this.movies);
          this.category = Object.assign({}, this.movies);
          console.log(this.category);
        }
      });
    },
    // async getMovies() {
    //   const data = axios.get(
    //     "https://api.themoviedb.org/3/movie/now_playing?api_key=1ca291cbb57f47026f3e03931e67c462&language=en-US&page=1"
    //   );
    //   const result = await data;
    //   result.data.results.forEach((movie) => {
    //     this.movies.push(movie);
    //   });
    //   console.log(this.movies.length);
    // },
  },

  mounted() {
    this.getMovie();
  },
};
</script>

<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 2px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#7bc79a, #7bc79a);
}

.link-underline:hover {
  background-size: 100% 2px;
  background-position: 0 100%;
}
</style>
