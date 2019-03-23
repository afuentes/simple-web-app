import Vue from 'vue'
import WebBot from './WebBot.vue'
import store from './store'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(WebBot),
}).$mount('#app')
