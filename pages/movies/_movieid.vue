<template>
  <div
    class="single-movie bg-[#001B2E] w-screen h-screen mx-auto flex flex-col flex-1 justify-center items-center text-white px-64"
  >
    <NuxtLink
      class="self-start bg-gradient-to-r from-[#7BC79A] to-[#00AFD2] px-6 py-2 rounded-md"
      :to="{ name: 'index' }"
    >
      Back
    </NuxtLink>

    <div class="flex flex-row gap-10 pt-4">
      <div class="movie-img">
        <img
          class="w-full"
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-4 text-lg w-[55rem]">
        <h1>Title: {{ movie.title }}</h1>
        <p class="movie-fact tagline">
          <span>Tagline:</span> "{{ movie.tagline }}"
        </p>
        <p class="movie-fact">
          <span>Released:</span>
          {{ movie.release_date }}
        </p>
        <p class="movie-fact">
          <span>Duration:</span> {{ movie.runtime }} minutes
        </p>
        <p class="movie-fact">
          <span>Revenue:</span>
          {{ movie.revenue }}
        </p>
        <p class="movie-fact"><span>Overview:</span> {{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "singleMovie",

  head() {
    return {
      title: this.movie.title,
    };
  },
  data() {
    return {
      movie: [],
      movie1: [],
      id: "",
    };
  },

  computed: {
    Movie() {
      this.movie.push(this.$store.state.Movie);
      this.movie1 = this.movie[1];
      return this.$store.state.Movie;
    },
  },
  created() {
    this.id = this.$route.params.id;
  },

  methods: {
    getDetails() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=1ca291cbb57f47026f3e03931e67c462&language=en-US`
        )
        .then((res) => {
          this.movie = Object.assign({}, res.data);
        });
    },

    getMovie() {
      this.$store.dispatch("fetchData");
      this.$store.dispatch("fetchGenre");
      // console.log("success");
    },
  },

  mounted() {
    this.getDetails();
    this.getMovie();
  },
};
</script>
