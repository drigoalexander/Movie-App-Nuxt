import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a1240a3c = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _47a649fc = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1b2edd08 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _0d063ad6 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _eab62920 = () => interopDefault(import('../pages/subs.vue' /* webpackChunkName: "pages/subs" */))
const _793a20fe = () => interopDefault(import('../pages/movies/streaming/_id.vue' /* webpackChunkName: "pages/movies/streaming/_id" */))
const _745d6caa = () => interopDefault(import('../pages/movies/_movieid.vue' /* webpackChunkName: "pages/movies/_movieid" */))
const _7dfea6e5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _a1240a3c,
    name: "admin"
  }, {
    path: "/login",
    component: _47a649fc,
    name: "login"
  }, {
    path: "/profile",
    component: _1b2edd08,
    name: "profile"
  }, {
    path: "/signup",
    component: _0d063ad6,
    name: "signup"
  }, {
    path: "/subs",
    component: _eab62920,
    name: "subs"
  }, {
    path: "/movies/streaming/:id?",
    component: _793a20fe,
    name: "movies-streaming-id"
  }, {
    path: "/movies/:movieid?",
    component: _745d6caa,
    name: "movies-movieid"
  }, {
    path: "/",
    component: _7dfea6e5,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
