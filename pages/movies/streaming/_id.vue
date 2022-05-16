<template>
  <div
    class="bg-[#081F34] w-screen h-full font-open max-w-[1920px] mx-auto relative"
  >
    <h1 class="text-white text-5xl">
      <!-- {{movie}} -->
    </h1>
    <div class="flex flex-col px-20 gap-20 h-full">
      <div class="flex flex-row items-center justify-between py-10">
        <h1 @click="redPage" class="text-white font-bold text-3xl">NUXTFLIX</h1>

        <div class="flex gap-20 items-center">
          <input
            type="text"
            class="rounded-lg px-4 py-1"
            placeholder="Search Movie..."
          />
          <h1 class="text-2xl font-bold text-white">DRIGO</h1>
        </div>
      </div>

      <div
        class="flex items-center justify-center gambarfilm w-full h-[40rem] pb-20 relative"
      >
        <div
          class="z-0 w-full h-full bg-cover bg-no-repeat relative gambarfilm2"
        >
          <div
            class="w-full h-full absolute z-10 bg-gradient-to-r from-black to-transparent top-0 left-0"
          >
            <div class="absolute z-20 w-full h-full top-0 left-0">
              <div
                class="relative flex flex-col justify-start items-start px-20 py-20 gap-10 text-white h-full"
              >
                <h1 class="text-white text-xl font-semibold">Genre | Rating</h1>
                <h1 class="text-white text-4xl font-bold w-1/2">
                  {{ movie_by_pk ? movie_by_pk.Name : "" }}
                </h1>
                <p class="text-white text-lg font-medium -mt-6">
                  {{ movie_by_pk ? movie_by_pk.Author : "" }}
                </p>
                <p class="text-white text-xl font-bold w-1/2">
                  {{ movie_by_pk ? movie_by_pk.Description : "" }}
                </p>
                <button
                  class="cursor-pointer hover:scale-110 duration-300 ease-in-out rounded-full font-bold w-auto px-10 py-2 bg-gradient-to-r from-[#00AFD2] via-[#55C0AB] to-[#7BC79A]"
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    movie_by_pk: {
      query: gql`
        query MyQuery($id: Int!) {
          movie_by_pk(id: $id) {
            Author
            Description
            Name
            Rating
            Release_Date
            genre_id
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
  methods: {
    redPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.gambarfilm .gambarfilm2 {
  background-image: url(../../../assets/endgame.jpg);
  /* background-size: 100% auto; */
}
</style>
