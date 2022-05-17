exports.ids = [6];
exports.modules = {

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/movies/_movieid.vue?vue&type=template&id=25ea164d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"single-movie bg-[#001B2E] w-screen h-screen mx-auto flex flex-col flex-1 justify-center items-center text-white px-64"},[_c('NuxtLink',{staticClass:"self-start bg-gradient-to-r from-[#7BC79A] to-[#00AFD2] px-6 py-2 rounded-md",attrs:{"to":{ name: 'index' }}},[_vm._v("\n    Back\n  ")]),_vm._ssrNode(" <div class=\"flex flex-row gap-10 pt-4\"><div class=\"movie-img\"><img"+(_vm._ssrAttr("src",("https://image.tmdb.org/t/p/w500/" + (_vm.movie.poster_path))))+" alt class=\"w-full\"></div> <div class=\"flex flex-col gap-4 text-lg w-[55rem]\"><h1>"+_vm._ssrEscape("Title: "+_vm._s(_vm.movie.title))+"</h1> <p class=\"movie-fact tagline\"><span>Tagline:</span>"+_vm._ssrEscape(" \""+_vm._s(_vm.movie.tagline)+"\"\n      ")+"</p> <p class=\"movie-fact\"><span>Released:</span>"+_vm._ssrEscape("\n        "+_vm._s(_vm.movie.release_date)+"\n      ")+"</p> <p class=\"movie-fact\"><span>Duration:</span>"+_vm._ssrEscape(" "+_vm._s(_vm.movie.runtime)+" minutes\n      ")+"</p> <p class=\"movie-fact\"><span>Revenue:</span>"+_vm._ssrEscape("\n        "+_vm._s(_vm.movie.revenue)+"\n      ")+"</p> <p class=\"movie-fact\"><span>Overview:</span>"+_vm._ssrEscape(" "+_vm._s(_vm.movie.overview))+"</p></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/movies/_movieid.vue?vue&type=template&id=25ea164d&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/movies/_movieid.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _movieidvue_type_script_lang_js_ = ({
  name: "singleMovie",

  head() {
    return {
      title: this.movie.title
    };
  },

  data() {
    return {
      movie: [],
      movie1: [],
      id: ""
    };
  },

  computed: {
    Movie() {
      this.movie.push(this.$store.state.Movie);
      this.movie1 = this.movie[1];
      return this.$store.state.Movie;
    }

  },

  created() {
    this.id = this.$route.params.id;
  },

  methods: {
    getDetails() {
      external_axios_default.a.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=1ca291cbb57f47026f3e03931e67c462&language=en-US`).then(res => {
        this.movie = Object.assign({}, res.data);
      });
    },

    getMovie() {
      this.$store.dispatch("fetchData");
      this.$store.dispatch("fetchGenre"); // console.log("success");
    }

  },

  mounted() {
    this.getDetails();
    this.getMovie();
  }

});
// CONCATENATED MODULE: ./pages/movies/_movieid.vue?vue&type=script&lang=js&
 /* harmony default export */ var movies_movieidvue_type_script_lang_js_ = (_movieidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/movies/_movieid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  movies_movieidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6c51920a"
  
)

/* harmony default export */ var _movieid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_movieid.js.map