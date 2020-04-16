import Vue from "vue";
import App from "./App.vue";
import v_router from "vue-router";
import { routers } from "./routers";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(v_router);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
  routes: routers
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
