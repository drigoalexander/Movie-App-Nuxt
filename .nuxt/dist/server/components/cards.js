exports.ids = [1];
exports.modules = {

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/cards.vue?vue&type=template&id=560066fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"max-w-xs rounded-lg overflow-hidden shadow-lg m-16 bg-white w-96 h-[40rem] transition hover:scale-110 duration-300 ease-in-out\"><div class=\"h-72 bg-cover hover:bg-gray relative\""+(_vm._ssrStyle(null,{
        backgroundImage: ("url(" + (_vm.Movie.poster_path)),
      }, null))+"><div class=\"absolute top-0 left-0 bg-black text-white px-4 py-2 rounded-br-lg\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.Movie.Rating)+"\n      ")+"</div></div> <div class=\"mx-6 my-4 border-b border-gray-light\"><div class=\"flex justify-between items-start gap-10\">"+((!_vm.isEditing)?("<div class=\"font-medium text-base text-gray-darker mb-4\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.Movie.Name)+"\n        ")+"</div>"):(_vm.isEditing)?("<div>test</div>"):"<!---->")+" "+((_vm.isEditing)?("<button class=\"w-auto bg-gray-600 py-1 px-2 rounded-md text-sm text-white font-light\">\n          Edit\n        </button>"):"<!---->")+"</div> <p class=\"font-normal text-gray-dark text-sm mb-2\">"+_vm._ssrEscape("\n        Genre : "+_vm._s(_vm.Movie.movie_genre_fk[0].genre_name)+"\n      ")+"</p> <p class=\"font-normal text-gray-dark text-sm mb-4\">"+_vm._ssrEscape("\n        Date : "+_vm._s(_vm.Movie.Release_Date)+"\n      ")+"</p> <p class=\"font-normal text-gray-dark text-sm mb-4\">"+_vm._ssrEscape("\n        Author : "+_vm._s(_vm.Movie.Author)+"\n      ")+"</p></div> <div class=\"mx-6 my-4 flex\"><div class=\"flex-grow h-52 overflow-auto\"><p>"+_vm._ssrEscape("\n          "+_vm._s(_vm.Movie.Description)+"\n        ")+"</p></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/cards.vue?vue&type=template&id=560066fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/cards.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
/* harmony default export */ var cardsvue_type_script_lang_js_ = ({
  props: {
    Movie: Object,
    isEditing: Boolean // User: Object,

  },

  data() {
    return {
      isEditing: false
    };
  },

  methods: {
    editMovie() {
      this.isEditing = true;
      console.log(this.isEditing);
    }

  },
  computed: {
    roundedValue() {
      round(Movie.popularity);
    }

  },

  data() {
    return {
      image: ` https://image.tmdb.org/t/p/${this.Movie.poster_path})`
    };
  }

});
// CONCATENATED MODULE: ./components/cards.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_cardsvue_type_script_lang_js_ = (cardsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/cards.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_cardsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "783a3402"
  
)

/* harmony default export */ var cards = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cards.js.map