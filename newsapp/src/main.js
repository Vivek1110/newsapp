import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './route'
import { store  } from './store/store'
import vReadMoreBox from "v-read-more-box";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component("v-read-more-box", vReadMoreBox);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  vuetify,
  store,
  router,
  el: '#app',
  render: h => h(App)
})
