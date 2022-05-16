<template>

  <div
    class="bg-[#081F34] w-screen h-full font-open max-w-[1920px] mx-auto relative overflow-hidden"
  >

    <div class="flex flex-col px-20 gap-20 h-full">
      <div class="flex flex-row items-center justify-between py-10">
        <h1 class="text-white font-bold text-3xl">NUXTFLIX</h1>

        <div class="flex gap-20 items-center">
          <input
            type="text"
            class="rounded-lg px-4 py-1"
            placeholder="Search Movie..."
          />
          <h1 class="text-2xl font-bold text-white">DRIGO</h1>
        </div>
      </div>

      <div class="flex items-start gap-10 h-full pb-20">
        <div class="w-1/4">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-start gap-6">
              <p class="text-lg text-[#F5F5F5] font-medium">New Movies</p>
              <!-- <h1 class="text-white">{{sorted}}</h1> -->
              <ul class="w-full flex flex-col gap-6" v-for="(sor,idx) in movie" :key="idx">
                <li class="" v-if="idx <= 1">
                  <div
                    class=" w-full h-60 rounded-xl bg-cover bg-center bg-no-repeat relative overflow-hidden"
                    :style="{ backgroundImage: `url(${sor.poster_path}`,}"
                  >
                    <div
                      class="absolute bottom-0 left-0 w-full bg-[#d4d4d4] py-2 px-4 bg-opacity-20 backdrop-blur-lg"
                    >
                      <div class="flex items-center justify-evenly">
                        <img
                          class="hover:scale-110 transition duration-300 ease-in-out"
                          src="../assets/play.png"
                          alt=""
                        />
                        <div
                          class="flex flex-col items-start justify-center text-left"
                        >
                          <h1 class="text-white font-bold text-sm">
                            {{sor.Name}}
                          </h1>
                          <p class="text-[#E3E3E3] font-medium text-xs">
                            Marvel Cinematic Universe
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="w-full h-auto bg-[#0B253D] rounded-lg px-6 py-8">
              <div class="flex flex-col items-start gap-4">
                <h1 class="text-white font-semibold text-lg">
                  Search by genres...
                </h1>

                <ul class="flex flex-1 flex-wrap gap-4 font-semibold " >
                  <li v-for="(genres, idx) in genre" :key="idx"
                    class="text-sm lg:text-md hover:scale-110 duration-300 ease-in-out text-white px-4 py-2 rounded-full w-auto odd:bg-[#00AFD2] even:bg-[#7BC79A]"
                  >
                    <a :href="`#${genres.genre_name}`" >{{genres.genre_name}}</a> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="w-3/4 flex flex-col gap-10">
          <div class="flex flex-col w-full gap-8" v-for="(gen, idx) in genre" :key="idx">
            <div class="flex items-center justify-between" :id="gen.genre_name">

              <h1 class="text-[#F5F5F5] text-2xl">{{gen.genre_name}}</h1>

              <button
                class="text-[#AEAEAE] flex items-center justify-center gap-4"
              >
                See More
                <span>
                  <img src="../assets/arrow-2.png" alt="" />
                </span>
              </button>
            </div>
            <ul
           
              class="flex items-center justify-start overflow-x-auto  snap-x"
            >
              <li  class="snap-start pr-8"   v-for="(mov,idx) in movie" :key="idx">
              <div v-if="gen.id == mov.genre_id" >

             
                <div
                  class=" w-96 h-60 rounded-xl bg-cover relative overflow-hidde bg-center"
                  :style="{
            backgroundImage: `url(${mov.poster_path}`,
            }"
                >
                  <div
                    class="absolute bottom-0 left-0 w-full bg-[#d4d4d4] py-2 px-4 bg-opacity-20 backdrop-blur-lg"
                  >
                    <div class="flex items-center justify-evenly">

                    
<img @click="redPage(mov.id)"
                        class="hover:scale-110 transition duration-300 ease-in-out"
                        src="../assets/play.png"
                        alt=""
                      />
                  
                      
                      <div
                        class="flex flex-col items-start justify-center text-left"
                      >
                        <h1 class="text-white font-bold text-md">
                          {{mov.Name}}
                        </h1>
                        <p class="text-[#E3E3E3] font-medium text-sm">
                          {{mov.Author}}
                        </p>
                      </div>

                      <div class="w-[0.1rem] h-10 bg-white"></div>

                      <h1 class="text-white font-bold">{{gen.genre_name}}</h1>
                    </div>
                  </div>
                </div>
                 </div>
              </li>
            </ul>
      
          
         
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
    movie: gql`
      query MyQuery {
  movie(order_by: {Release_Date: desc}) {
    poster_path
    id
    Release_Date
    Rating
    Name
    Description
    Author
    video_path
    genre_id
  }
}

    `,

    genre: gql`
    query MyQuery {
  genre {
    id
    genre_name
  }
}
`,



    },

  

  methods: {
    redPage(idM) {
      this.$router.push({name: 'movies-streaming-id' , params: {id: idM}})
    }
  }
};
</script>

<style>

</style>
