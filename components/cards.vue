<template>
  <div class="">
    <!-- {{ Movie }} -->
    <div
      class="max-w-xs rounded-lg overflow-hidden shadow-lg m-16 bg-white w-96 h-[34rem] transition hover:scale-110 duration-300 ease-in-out"
    >
      <div
        class="h-64 bg-cover hover:bg-gray relative"
        :style="{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${Movie.poster_path})`,
        }"
      >
        <div
          class="absolute top-0 left-0 bg-black text-white px-4 py-2 rounded-br-lg"
        >
          {{ Movie.vote_average }}
        </div>
      </div>

      <div class="mx-6 my-4 border-b border-gray-light">
        <div class="font-medium text-base text-gray-darker mb-4">
          {{ Movie.title }}
        </div>
        <p class="font-normal text-gray-dark text-sm mb-2">
          Seen : {{ Math.round(Movie.popularity) }}
        </p>
        <p class="font-normal text-gray-dark text-sm mb-4">
          Date : {{ Movie.release_date }}
        </p>
      </div>
      <div class="mx-6 my-4 flex">
        <div class="flex-grow h-32 overflow-auto">
          <p class="">
            {{ Movie.overview }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Movie: Object,
  },
  computed: {
    roundedValue() {
      round(Movie.popularity);
    },
  },
  data() {
    return {
      image: ` https://image.tmdb.org/t/p/${this.Movie.poster_path})`,
    };
  },
};
</script>
