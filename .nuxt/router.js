import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _77826d79 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _0fbabc93 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _072aba53 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _33f6c2de = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _1d7c49f9 = () => interopDefault(import('..\\pages\\subs.vue' /* webpackChunkName: "pages/subs" */))
const _6ae6e4e9 = () => interopDefault(import('..\\pages\\movies\\streaming.vue' /* webpackChunkName: "pages/movies/streaming" */))
const _7e310256 = () => interopDefault(import('..\\pages\\movies\\_movieid.vue' /* webpackChunkName: "pages/movies/_movieid" */))
const _4613197c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _77826d79,
    name: "admin"
  }, {
    path: "/login",
    component: _0fbabc93,
    name: "login"
  }, {
    path: "/profile",
    component: _072aba53,
    name: "profile"
  }, {
    path: "/signup",
    component: _33f6c2de,
    name: "signup"
  }, {
    path: "/subs",
    component: _1d7c49f9,
    name: "subs"
  }, {
    path: "/movies/streaming",
    component: _6ae6e4e9,
    name: "movies-streaming"
  }, {
    path: "/movies/:movieid?",
    component: _7e310256,
    name: "movies-movieid"
  }, {
    path: "/",
    component: _4613197c,
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
