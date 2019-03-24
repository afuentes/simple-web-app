<template>
  <div>
    <footer class="flex rounded-lg border-2 border-grey overflow-hidden">
                <input v-model="message" type="text" class="w-full px-4" placeholder="Message #here" />
                <button v-on:click="sendMessage" >
                <span class="text-3xl text-grey border-l-2 border-grey p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </span>
                 </button>
  </footer>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      message : ''
    }
  },  
  methods: {
    ...mapMutations(['ADD_OPTION']),
    ...mapActions(['addOption']), 
     sendMessage: function() {
         this.addOption(this.message);
         this.message = null;
     }
  }
}
</script>

<style>
</style>