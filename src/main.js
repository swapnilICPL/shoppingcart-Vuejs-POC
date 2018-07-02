import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import { store } from "./store/store"
import { routes } from "./routes"
import 'babel-polyfill';

//router init and usage
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routes
});
Vue.filter('dollars', function (value) {
  return `${value / 100}`;
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
