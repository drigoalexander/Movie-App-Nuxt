exports.ids = [4];
exports.modules = {

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/play.94c7b1c.png";

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgB7ZXRCQIxDIbT4ruvjuEIHcFO4Ciu4gStjz46giPoCC7QmjwIvhxNISHHkQ+OUCj8310uLYDjOMYEEKbWmlprKcZ4yzk/R/sjCEPhIYRL7/2BMsfRfnEBenMsH3z2HAnxFhAUSuEkQTL4RdJSO1QEZiTUBLgSqgIcCXWBkcTut6mUcsVyBgUw/H9J03HHeqCF+BjOYt6Cbf+EpmNoehCZHsUz4YTGdXzihqsI4HX8wvLmhDuOswq+LhiQgA1Rt4oAAAAASUVORK5CYII="

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1881e8a5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-[#081F34] w-screen h-full font-open max-w-[1920px] mx-auto relative overflow-hidden"},[_vm._ssrNode("<div class=\"flex flex-col px-20 gap-20 h-full\"><div class=\"flex flex-row items-center justify-between py-10\"><h1 class=\"text-white font-bold text-3xl\">NUXTFLIX</h1> <div class=\"flex gap-20 items-center\"><input type=\"text\" placeholder=\"Search Movie...\" class=\"rounded-lg px-4 py-1\"> <h1 class=\"text-2xl font-bold text-white\">DRIGO</h1></div></div> <div class=\"flex items-start gap-10 h-full pb-20\"><div class=\"w-1/4\"><div class=\"flex flex-col gap-6\"><div class=\"flex flex-col items-start gap-6\"><p class=\"text-lg text-[#F5F5F5] font-medium\">New Movies</p> "+(_vm._ssrList((_vm.movie),function(sor,idx){return ("<ul class=\"w-full flex flex-col gap-6\">"+((idx <= 1)?("<li><div class=\" w-full h-60 rounded-xl bg-cover bg-center bg-no-repeat relative overflow-hidden\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (sor.poster_path)),}, null))+"><div class=\"absolute bottom-0 left-0 w-full bg-[#d4d4d4] py-2 px-4 bg-opacity-20 backdrop-blur-lg\"><div class=\"flex items-center justify-evenly\"><img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt class=\"hover:scale-110 transition duration-300 ease-in-out\"> <div class=\"flex flex-col items-start justify-center text-left\"><h1 class=\"text-white font-bold text-sm\">"+_vm._ssrEscape("\n                            "+_vm._s(sor.Name)+"\n                          ")+"</h1> <p class=\"text-[#E3E3E3] font-medium text-xs\">\n                            Marvel Cinematic Universe\n                          </p></div></div></div></div></li>"):"<!---->")+"</ul>")}))+"</div> <div class=\"w-full h-auto bg-[#0B253D] rounded-lg px-6 py-8\"><div class=\"flex flex-col items-start gap-4\"><h1 class=\"text-white font-semibold text-lg\">\n                  Search by genres...\n                </h1> <ul class=\"flex flex-1 flex-wrap gap-4 font-semibold \">"+(_vm._ssrList((_vm.genre),function(genres,idx){return ("<li class=\"text-sm lg:text-md hover:scale-110 duration-300 ease-in-out text-white px-4 py-2 rounded-full w-auto odd:bg-[#00AFD2] even:bg-[#7BC79A]\"><a"+(_vm._ssrAttr("href",("#" + (genres.genre_name))))+">"+_vm._ssrEscape(_vm._s(genres.genre_name))+"</a></li>")}))+"</ul></div></div></div></div> <div class=\"w-3/4 flex flex-col gap-10\">"+(_vm._ssrList((_vm.genre),function(gen,idx){return ("<div class=\"flex flex-col w-full gap-8\"><div"+(_vm._ssrAttr("id",gen.genre_name))+" class=\"flex items-center justify-between\"><h1 class=\"text-[#F5F5F5] text-2xl\">"+_vm._ssrEscape(_vm._s(gen.genre_name))+"</h1> <button class=\"text-[#AEAEAE] flex items-center justify-center gap-4\">\n                See More\n                <span><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt></span></button></div> <ul class=\"flex items-center justify-start overflow-x-auto  snap-x\">"+(_vm._ssrList((_vm.movie),function(mov,idx){return ("<li class=\"snap-start pr-8\">"+((gen.id == mov.genre_id)?("<div><div class=\" w-96 h-60 rounded-xl bg-cover relative overflow-hidde bg-center\""+(_vm._ssrStyle(null,{
            backgroundImage: ("url(" + (mov.poster_path)),
            }, null))+"><div class=\"absolute bottom-0 left-0 w-full bg-[#d4d4d4] py-2 px-4 bg-opacity-20 backdrop-blur-lg\"><div class=\"flex items-center justify-evenly\"><img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt class=\"hover:scale-110 transition duration-300 ease-in-out\"> <div class=\"flex flex-col items-start justify-center text-left\"><h1 class=\"text-white font-bold text-md\">"+_vm._ssrEscape("\n                          "+_vm._s(mov.Name)+"\n                        ")+"</h1> <p class=\"text-[#E3E3E3] font-medium text-sm\">"+_vm._ssrEscape("\n                          "+_vm._s(mov.Author)+"\n                        ")+"</p></div> <div class=\"w-[0.1rem] h-10 bg-white\"></div> <h1 class=\"text-white font-bold\">"+_vm._ssrEscape(_vm._s(gen.genre_name))+"</h1></div></div></div></div>"):"<!---->")+"</li>")}))+"</ul></div>")}))+"</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1881e8a5&

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(47);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  apollo: {
    movie: external_graphql_tag_default.a`
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
    genre: external_graphql_tag_default.a`
    query MyQuery {
  genre {
    id
    genre_name
  }
}
`
  },
  methods: {
    redPage(idM) {
      this.$router.push({
        name: 'movies-streaming-id',
        params: {
          id: idM
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7e856170"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map