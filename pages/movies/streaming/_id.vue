<template>
  <div
    class="bg-[#081F34] w-screen h-screen overflow-hidden font-open max-w-[1920px] mx-auto relative  bg-cover bg-no-repeat"
    :style="{
            backgroundImage: `url(${movie_by_pk.poster_path}`,
            }"
  >
  <button @click="isStreaming = false" :class="{'z-50': isStreaming , 'z-0': !isStreaming}" class="absolute top-10 left-10  opacity-60">
      <div class="relative w-auto rounded-full bg-white font-bold text-lg  px-4 py-2 ">
          X
      </div>
  </button>
  <iframe :class="{'z-40': isStreaming , '-z-10': !isStreaming}" class="w-full h-full absolute" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
:src="movie_by_pk.video_path">
</iframe>

    <div class="flex flex-col  gap-8 h-full">
      <div class="flex flex-row items-center justify-between py-10 px-20">
        
   <h1 @click="redPage" class="text-white font-bold text-3xl z-20 relative"> NUXTFLIX</h1>
                      
     

        <div class="flex gap-6 items-center z-20">
          <input
            type="text"
            class="rounded-lg px-4 py-1"
            placeholder="Search Movie..."
          />
          <h1 class="text-2xl font-bold text-white">DRIGO</h1>
        </div>
      </div>
      <h1 class="text-white"></h1>
     
             <div class="w-full h-full absolute z-10 bg-gradient-to-r from-black to-transparent top-0 left-0">
                 <div class="absolute z-20 w-full h-full top-0 left-0" >
                     <div class="relative flex flex-col justify-start items-start px-20 py-20 gap-10 text-white h-full" >
                         <h1 class="text-white text-xl font-semibold pt-12 -mb-6">{{movie_by_pk.movie_genre_fk[0].genre_name}} | {{movie_by_pk.Rating}}/10</h1>
                         <h1 class="text-white text-4xl font-bold w-1/2">{{movie_by_pk.Name}}</h1>
                         <p class="text-white text-lg font-medium -mt-6">{{movie_by_pk.Author}}</p>
                         <p class="text-white text-xl font-bold w-1/2">{{movie_by_pk.Description}}</p>
                         <button @click="isStreaming = true" class="cursor-pointer hover:scale-110 duration-300 ease-in-out rounded-full font-bold w-auto px-10 py-2 bg-gradient-to-r from-[#00AFD2] via-[#55C0AB] to-[#7BC79A]">
Play
                         </button>
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
            poster_path
            video_path
movie_genre_fk {
      genre_name
    }
          }
        }
      `,
      variables() {
          return {
              
              id: this.$route.params.id,
          }
      },
    },

    genre: gql`
    query MyQuery {
  genre {
    id
    genre_name
  }
}
`,


  },
  
  data(){
    return {
      id: this.$route.params.id,
      isStreaming: false
    }
  },

//   async created() {
// this.id = this.$route.params.id
//   },
  methods: {
    redPage(){
      this.$router.push('/')
    }
  }
};
</script>

