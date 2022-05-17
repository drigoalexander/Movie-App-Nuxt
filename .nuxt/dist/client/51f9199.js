(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{324:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},337:function(e,t,n){"use strict";n.r(t);var r,o,l,d,c=n(324),m=n(118),v={apollo:{movie:Object(m.a)(r||(r=Object(c.a)(["\n      query getMovie {\n        movie {\n          poster_path\n          id\n          Release_Date\n          Rating\n          Name\n          Description\n          Author\n        }\n      }\n    "])))},data:function(){return{movie:[],Name:"",poster_path:"",video_path:"",Release_Date:"",Rating:"",Description:"",Author:"",id:"",genre_id:""}},methods:{insertMov:function(){this.$apollo.mutate({mutation:Object(m.a)(o||(o=Object(c.a)(["\n          mutation insertMov(\n            $Name: String!\n            $Author: String!\n            $Release_Date: date!\n            $Description: String!\n            $poster_path: String!\n            $video_path: String!\n            $Rating: Int!\n            $genre_id: Int!\n          ) {\n            insert_movie(\n              objects: {\n                Author: $Author\n                Description: $Description\n                Name: $Name\n                Rating: $Rating\n                poster_path: $poster_path\n                Release_Date: $Release_Date\n                video_path:  $video_path\n                genre_id: $genre_id\n              }\n            ) {\n              returning {\n                Author\n                Description\n                Name\n                Rating\n                Release_Date\n                poster_path\n                video_path\n                genre_id\n              }\n            }\n          }\n        "]))),variables:{Author:this.Author,Description:this.Description,Name:this.Name,Rating:this.Rating,Release_Date:this.Release_Date,poster_path:this.poster_path,genre_id:this.genre_id,video_path:this.video_path}}),window.location.reload()},deleteMov:function(){this.$apollo.mutate({mutation:Object(m.a)(l||(l=Object(c.a)(["\n          mutation MyMutation($Name: String!) {\n            delete_movie(where: { Name: { _eq: $Name } }) {\n              affected_rows\n            }\n          }\n        "]))),variables:{Name:this.Name}}),window.location.reload()},updateMovbyPK:function(){this.$apollo.mutate({mutation:Object(m.a)(d||(d=Object(c.a)(["\n          mutation MyMutation($Name: String!, $id: Int!) {\n            update_movie_by_pk(pk_columns: { id: $id }, _set: { Name: $Name }) {\n              Rating\n              Release_Date\n              Name\n              poster_path\n              id\n              Description\n              Author\n            }\n          }\n        "]))),variables:{Name:this.Name,id:this.id}}),window.location.reload()}}},_=n(60),component=Object(_.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center items-center w-screen h-screen"},[n("form",{staticClass:"w-full max-w-sm"},[n("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(0),e._v(" "),n("div",{staticClass:"md:w-2/3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.Name,expression:"Name"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"inline-full-name",type:"text"},domProps:{value:e.Name},on:{input:function(t){t.target.composing||(e.Name=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(1),e._v(" "),n("div",{staticClass:"md:w-2/3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.Author,expression:"Author"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"text"},domProps:{value:e.Author},on:{input:function(t){t.target.composing||(e.Author=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(2),e._v(" "),n("div",{staticClass:"md:w-2/3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.poster_path,expression:"poster_path"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"text"},domProps:{value:e.poster_path},on:{input:function(t){t.target.composing||(e.poster_path=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(3),e._v(" "),n("div",{staticClass:"md:w-2/3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.Description,expression:"Description"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"text"},domProps:{value:e.Description},on:{input:function(t){t.target.composing||(e.Description=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(4),e._v(" "),n("div",{staticClass:"md:w-2/3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.Rating,expression:"Rating"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"text"},domProps:{value:e.Rating},on:{input:function(t){t.target.composing||(e.Rating=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(5),e._v(" "),n("div",{staticClass:"md:w-2/3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.Release_Date,expression:"Release_Date"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"date"},domProps:{value:e.Release_Date},on:{input:function(t){t.target.composing||(e.Release_Date=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(6),e._v(" "),n("div",{staticClass:"md:w-2/3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.video_path,expression:"video_path"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"text"},domProps:{value:e.video_path},on:{input:function(t){t.target.composing||(e.video_path=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(7),e._v(" "),n("div",{staticClass:"md:w-2/3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.genre_id,expression:"genre_id"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"text"},domProps:{value:e.genre_id},on:{input:function(t){t.target.composing||(e.genre_id=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"md:flex md:items-center"},[n("div",{staticClass:"md:w-1/3"}),e._v(" "),n("div",{staticClass:"md:w-2/3"},[n("button",{staticClass:"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",attrs:{type:"submit"},on:{click:e.insertMov}},[e._v("\n          Submit\n        ")])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:w-1/3"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-full-name"}},[e._v("\n          Name\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:w-1/3"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("\n          Author\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:w-1/3"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("\n          Poster Path\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:w-1/3"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("\n          Description\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:w-1/3"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("\n          Rating\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:w-1/3"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("\n          Release Date\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:w-1/3"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("\n          Video Path\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:w-1/3"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("\n          Genre\n        ")])])}],!1,null,null,null);t.default=component.exports}}]);