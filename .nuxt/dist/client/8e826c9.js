(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{324:function(t,e,n){"use strict";function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"a",(function(){return l}))},342:function(t,e,n){"use strict";n.r(e);var l,r,o=n(324),c=n(118),_={apollo:{movie_by_pk:{query:Object(c.a)(l||(l=Object(o.a)(["\n        query MyQuery($id: Int!) {\n          movie_by_pk(id: $id) {\n            Author\n            Description\n            Name\n            Rating\n            Release_Date\n            genre_id\n            poster_path\n            video_path\nmovie_genre_fk {\n      genre_name\n    }\n          }\n        }\n      "]))),variables:function(){return{id:this.$route.params.id}}},genre:Object(c.a)(r||(r=Object(o.a)(["\n    query MyQuery {\n  genre {\n    id\n    genre_name\n  }\n}\n"])))},data:function(){return{id:this.$route.params.id,isStreaming:!1}},methods:{redPage:function(){this.$router.push("/")}}},f=n(60),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-[#081F34] w-screen h-screen overflow-hidden font-open max-w-[1920px] mx-auto relative  bg-cover bg-no-repeat",style:{backgroundImage:"url("+t.movie_by_pk.poster_path}},[n("button",{staticClass:"absolute top-10 left-10  opacity-60",class:{"z-50":t.isStreaming,"z-0":!t.isStreaming},on:{click:function(e){t.isStreaming=!1}}},[n("div",{staticClass:"relative w-auto rounded-full bg-white font-bold text-lg  px-4 py-2 "},[t._v("\n          X\n      ")])]),t._v(" "),n("iframe",{staticClass:"w-full h-full absolute",class:{"z-40":t.isStreaming,"-z-10":!t.isStreaming},attrs:{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:t.movie_by_pk.video_path}}),t._v(" "),n("div",{staticClass:"flex flex-col  gap-8 h-full"},[n("div",{staticClass:"flex flex-row items-center justify-between py-10 px-20"},[n("h1",{staticClass:"text-white font-bold text-3xl z-20 relative",on:{click:t.redPage}},[t._v(" NUXTFLIX")]),t._v(" "),t._m(0)]),t._v(" "),n("h1",{staticClass:"text-white"}),t._v(" "),n("div",{staticClass:"w-full h-full absolute z-10 bg-gradient-to-r from-black to-transparent top-0 left-0"},[n("div",{staticClass:"absolute z-20 w-full h-full top-0 left-0"},[n("div",{staticClass:"relative flex flex-col justify-start items-start px-20 py-20 gap-10 text-white h-full"},[n("h1",{staticClass:"text-white text-xl font-semibold pt-12 -mb-6"},[t._v(t._s(t.movie_by_pk.movie_genre_fk[0].genre_name)+" | "+t._s(t.movie_by_pk.Rating)+"/10")]),t._v(" "),n("h1",{staticClass:"text-white text-4xl font-bold w-1/2"},[t._v(t._s(t.movie_by_pk.Name))]),t._v(" "),n("p",{staticClass:"text-white text-lg font-medium -mt-6"},[t._v(t._s(t.movie_by_pk.Author))]),t._v(" "),n("p",{staticClass:"text-white text-xl font-bold w-1/2"},[t._v(t._s(t.movie_by_pk.Description))]),t._v(" "),n("button",{staticClass:"cursor-pointer hover:scale-110 duration-300 ease-in-out rounded-full font-bold w-auto px-10 py-2 bg-gradient-to-r from-[#00AFD2] via-[#55C0AB] to-[#7BC79A]",on:{click:function(e){t.isStreaming=!0}}},[t._v("\nPlay\n                         ")])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex gap-6 items-center z-20"},[n("input",{staticClass:"rounded-lg px-4 py-1",attrs:{type:"text",placeholder:"Search Movie..."}}),t._v(" "),n("h1",{staticClass:"text-2xl font-bold text-white"},[t._v("DRIGO")])])}],!1,null,null,null);e.default=component.exports}}]);