exports.ids = [7];
exports.modules = {

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/movies/streaming/_id.vue?vue&type=template&id=4c613311&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-[#081F34] w-screen h-screen overflow-hidden font-open max-w-[1920px] mx-auto relative  bg-cover bg-no-repeat",style:({
            backgroundImage: ("url(" + (_vm.movie_by_pk.poster_path)),
            })},[_vm._ssrNode("<button"+(_vm._ssrClass("absolute top-10 left-10  opacity-60",{'z-50': _vm.isStreaming , 'z-0': !_vm.isStreaming}))+"><div class=\"relative w-auto rounded-full bg-white font-bold text-lg  px-4 py-2 \">\n          X\n      </div></button> <iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\""+(_vm._ssrAttr("src",_vm.movie_by_pk.video_path))+(_vm._ssrClass("w-full h-full absolute",{'z-40': _vm.isStreaming , '-z-10': !_vm.isStreaming}))+"></iframe> <div class=\"flex flex-col  gap-8 h-full\"><div class=\"flex flex-row items-center justify-between py-10 px-20\"><h1 class=\"text-white font-bold text-3xl z-20 relative\"> NUXTFLIX</h1> <div class=\"flex gap-6 items-center z-20\"><input type=\"text\" placeholder=\"Search Movie...\" class=\"rounded-lg px-4 py-1\"> <h1 class=\"text-2xl font-bold text-white\">DRIGO</h1></div></div> <h1 class=\"text-white\"></h1> <div class=\"w-full h-full absolute z-10 bg-gradient-to-r from-black to-transparent top-0 left-0\"><div class=\"absolute z-20 w-full h-full top-0 left-0\"><div class=\"relative flex flex-col justify-start items-start px-20 py-20 gap-10 text-white h-full\"><h1 class=\"text-white text-xl font-semibold pt-12 -mb-6\">"+_vm._ssrEscape(_vm._s(_vm.movie_by_pk.movie_genre_fk[0].genre_name)+" | "+_vm._s(_vm.movie_by_pk.Rating)+"/10")+"</h1> <h1 class=\"text-white text-4xl font-bold w-1/2\">"+_vm._ssrEscape(_vm._s(_vm.movie_by_pk.Name))+"</h1> <p class=\"text-white text-lg font-medium -mt-6\">"+_vm._ssrEscape(_vm._s(_vm.movie_by_pk.Author))+"</p> <p class=\"text-white text-xl font-bold w-1/2\">"+_vm._ssrEscape(_vm._s(_vm.movie_by_pk.Description))+"</p> <button class=\"cursor-pointer hover:scale-110 duration-300 ease-in-out rounded-full font-bold w-auto px-10 py-2 bg-gradient-to-r from-[#00AFD2] via-[#55C0AB] to-[#7BC79A]\">\nPlay\n                         </button></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/movies/streaming/_id.vue?vue&type=template&id=4c613311&

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(47);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/movies/streaming/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  apollo: {
    movie_by_pk: {
      query: external_graphql_tag_default.a`
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
          id: this.$route.params.id
        };
      }

    },
    genre: external_graphql_tag_default.a`
    query MyQuery {
  genre {
    id
    genre_name
  }
}
`
  },

  data() {
    return {
      id: this.$route.params.id,
      isStreaming: false
    };
  },

  //   async created() {
  // this.id = this.$route.params.id
  //   },
  methods: {
    redPage() {
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/movies/streaming/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var streaming_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/movies/streaming/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  streaming_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "67f8e8e1"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map