<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <form class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="Name"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for=""
          >
            Author
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="Author"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id=""
            type="text"
          />
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for=""
          >
            Poster Path
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="poster_path"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id=""
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for=""
          >
            Description
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="Description"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id=""
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for=""
          >
            Rating
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="Rating"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id=""
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for=""
          >
            Release Date
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="Release_Date"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id=""
            type="date"
          />
        </div>
        
      </div>

       <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for=""
          >
            Video Path
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="video_path"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id=""
            type="text"
          />
        </div>
        
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for=""
          >
            Genre
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="genre_id"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id=""
            type="text"
          />
        </div>
        
      </div>


      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            @click="insertMov"
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>

    <!-- <div class="flex flex-col items-start justify-start">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for=""
          >
            Delete Movie
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="Name"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id=""
            type="text"
            placeholder="Movie Name"
          />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            @click="deleteMov"
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div> -->

    <!-- <div class="flex flex-col items-start justify-start">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for=""
          >
            Update Movie
          </label>
        </div>
        <div class="flex flex-col justify-center items-center gap-4">
          <div class="md:w-2/3">
            <input
              v-model="Name"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id=""
              type="text"
              placeholder="Movie Name"
            />
          </div>
          <div class="md:w-2/3">
            <input
              v-model="id"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id=""
              type="text"
              placeholder="ID Movie"
            />
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button
          @click="updateMovbyPK"
          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  apollo: {
    movie: gql`
      query getMovie {
        movie {
          poster_path
          id
          Release_Date
          Rating
          Name
          Description
          Author
        }
      }
    `,
  },

  data() {
    return {
      movie: [],
      Name: "",
      poster_path: "",
      video_path: "",
      Release_Date: "",
      Rating: "",
      Description: "",
      Author: "",
      id: "",
      genre_id: ""
    };
  },

  methods: {
    insertMov() {
      this.$apollo.mutate({
        mutation: gql`
          mutation insertMov(
            $Name: String!
            $Author: String!
            $Release_Date: date!
            $Description: String!
            $poster_path: String!
            $video_path: String!
            $Rating: Int!
            $genre_id: Int!
          ) {
            insert_movie(
              objects: {
                Author: $Author
                Description: $Description
                Name: $Name
                Rating: $Rating
                poster_path: $poster_path
                Release_Date: $Release_Date
                video_path:  $video_path
                genre_id: $genre_id
              }
            ) {
              returning {
                Author
                Description
                Name
                Rating
                Release_Date
                poster_path
                video_path
                genre_id
              }
            }
          }
        `,
        variables: {
          Author: this.Author,
          Description: this.Description,
          Name: this.Name,
          Rating: this.Rating,
          Release_Date: this.Release_Date,
          poster_path: this.poster_path,
          genre_id: this.genre_id,
          video_path: this.video_path
        },
      });

      window.location.reload();
    },

    deleteMov() {
      this.$apollo.mutate({
        mutation: gql`
          mutation MyMutation($Name: String!) {
            delete_movie(where: { Name: { _eq: $Name } }) {
              affected_rows
            }
          }
        `,
        variables: {
          Name: this.Name,
        },
      });

      window.location.reload();
    },

    updateMovbyPK() {
      this.$apollo.mutate({
        mutation: gql`
          mutation MyMutation($Name: String!, $id: Int!) {
            update_movie_by_pk(pk_columns: { id: $id }, _set: { Name: $Name }) {
              Rating
              Release_Date
              Name
              poster_path
              id
              Description
              Author
            }
          }
        `,
        variables: {
          Name: this.Name,
          id: this.id,
        },
      });

      window.location.reload();
    },
    // insertMovie(event) {
    //   this.$apollo
    //     .mutate({
    //       mutation: gql`
    //         mutation (
    //           $Name: String
    //           $poster_path: String
    //           $Release_Date: Date
    //           $Rating: Integer
    //           $Description: String
    //           $Author: String
    //         ) {
    //           insert_movie(
    //             Name: $Name
    //             poster_path: $poster_path
    //             Release_Date: $Release_Date
    //             Rating: $Rating
    //             Description: $Description
    //             Author: $Author
    //           ) {
    //             Author
    //             Description
    //             Name
    //             Rating
    //             Release_Date
    //             poster_path
    //           }
    //         }
    //       `,
    //       variables: {
    //         Author: this.Author,
    //         Description: this.Description,
    //         Name: this.Name,
    //         Rating: this.Rating,
    //         Release_Date: this.Release_Date,
    //         poster_path: this.poster_path,
    //       },
    //     })
    //     .then((data) => {
    //       event.target.reset();
    //     });
    // },
  },
};
</script>

<style></style>
