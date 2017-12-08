// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueTouch from 'vue-touch'
var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll)

import store from './vuex/store'
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  VueTouch,
  router,
  infiniteScroll,
  template: '<App/>',
  components: { App }
});
