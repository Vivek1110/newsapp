import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history'
})

new Vue({
  vuetify,
  router,
  el: '#app',
  render: h => h(App)
})