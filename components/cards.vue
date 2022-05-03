<template>
  <div>
    <!-- {{ Movie }} -->
    <div
      class="max-w-xs rounded-lg overflow-hidden shadow-lg m-16 bg-white w-96 h-[40rem] transition hover:scale-110 duration-300 ease-in-out"
    >
      <div
        class="h-72 bg-cover hover:bg-gray relative"
        :style="{
          backgroundImage: `url(${Movie.poster_path}`,
        }"
      >
        <div
          class="absolute top-0 left-0 bg-black text-white px-4 py-2 rounded-br-lg"
        >
          {{ Movie.Rating }}
        </div>
      </div>

      <div class="mx-6 my-4 border-b border-gray-light">
        <div class="flex justify-between items-start gap-10">
          <div
            v-if="!isEditing"
            class="font-medium text-base text-gray-darker mb-4"
          >
            {{ Movie.Name }}
          </div>

          <div v-else-if="isEditing">test</div>

          <button
            v-if="isEditing"
            @click="editMovie"
            class="w-auto bg-gray-600 py-1 px-2 rounded-md text-sm text-white font-light"
          >
            Edit
          </button>
        </div>
        <p class="font-normal text-gray-dark text-sm mb-2">
          Genre : {{ Movie.movie_genre_fk[0].genre_name }}
        </p>
        <p class="font-normal text-gray-dark text-sm mb-4">
          Date : {{ Movie.Release_Date }}
        </p>

        <p class="font-normal text-gray-dark text-sm mb-4">
          Author : {{ Movie.Author }}
        </p>
      </div>
      <div class="mx-6 my-4 flex">
        <div class="flex-grow h-52 overflow-auto">
          <p class="">
            {{ Movie.Description }}
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
    isEditing: Boolean,
    // User: Object,
  },

  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    editMovie() {
      this.isEditing = true;
      console.log(this.isEditing);
    },
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
