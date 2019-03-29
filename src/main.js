import Vue from 'vue'
import WebBot from './WebBot.vue'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

// axiosDefault configuration
axios.defaults.timeout = 1000;   // timeout
axios.defaults.baseURL = process.env.API_ENDPOINT;

new Vue({
  store,
  render: h => h(WebBot),
}).$mount('#app')
