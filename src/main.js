import Vue from 'vue'
import App from './App.vue'
import v_router from 'vue-router'
import {routers} from './routers'
import VueRouter from 'vue-router';

Vue.use(v_router);
const router = new VueRouter({
     routes:routers,
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

