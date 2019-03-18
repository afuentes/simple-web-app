import Vue from 'vue'
import WebBot from './WebBot.vue'
import store from './store'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(WebBot),
}).$mount('#app')
