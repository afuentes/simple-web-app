<template>
<div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
  
  <!-- Header  -->
  <header class="flex items-center justify-between flex-wrap bg-grey-light p-4">
    <!-- Title -->
  <div class="flex items-center flex-no-shrink text-white mr-6">
    <span class="font-semibold mr-2 text-left flex-auto">WebBot App</span>
  </div>
     <!-- Search *TODO -->
  </header>
  <!-- Chat messages -->  
     <Dialog/>>
  <!-- input Message  -->
  <footer class="flex rounded-lg border-2 border-grey overflow-hidden">
                <input type="text" class="w-full px-4" placeholder="Message #here" />
                <button v-on:click="hola" >
                <span class="text-3xl text-grey border-l-2 border-grey p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </span>
                 </button>
  </footer>

  </div>

</template>

<script>
import Dialog from './components/Dialog.vue'

export default {
  name: 'BotController',
  components: {
    Dialog
  },
  props: {
  },
  mounted: function () {
    this.$nextTick(function () {
    // create TimerBotControl to Control Bot Interaction
     this.timer = setInterval(() => {
                 this.timerBot();
                 }, 1000);
     })
  },
  methods: {
  timerBot: function() {}
  } // end methods
}
</script>

