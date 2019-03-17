import Vue from 'vue'
import WebBot from './WebBot.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(WebBot),
}).$mount('#app')
