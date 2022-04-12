<template>
  <div
    class="w-screen h-auto bg-gradient-to-b from-[#002138] to-[#001B2E] min-w-min max-w-screen-3xl"
  >
    <div
      class="flex flex-col gap-4 justify-center items-start py-32 text-white px-64"
    >
      <h1
        class="font-extrabold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#7BC79A] to-[#00AFD2]"
      >
        Nuxt Movie
      </h1>

      <p class="tracking-wider text-5xl">
        See your favourite movies show <br />
        in a glance!
      </p>

      <button class="">
        <span
          class="decoration-dotted decoration-1 hover:no-underline underline underline- text-2xl text-white link link-underline link-underline-black"
        >
          See Movies
        </span>
      </button>
    </div>

    <!-- <div class="flex justify-center items-center">
      <div
        class="text-2xl text-white flex flex-col justify-center items-center"
      >
        <h1 class="">Movies</h1>
        <p>{{ Movies.length }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    Movie: Object,
  },

  computed: {
    Movies() {
      return this.$store.state.Movie;
    },

    getLength() {},
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
