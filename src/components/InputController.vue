<template>
  <footer class="bg-grey-lighter px-2 py-2 flex items-center">
    <div class="flex-1 mx-2">
      <input :disabled="isDisabled"  v-model="message" class="w-full border rounded px-2 py-2" type="text" placeholder="Type Message"  v-on:keyup.enter="sendMessage" />
    </div>
    <div>
      <button :disabled="isDisabled" v-on:click="sendMessage"  >
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="86" height="86" viewBox="0 0 86 86">
  <defs>
    <filter id="Elipse_11" x="0" y="0" width="86" height="86" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="FAB" transform="translate(-862 -1027.385)">
    <g transform="matrix(1, 0, 0, 1, 862, 1027.38)" filter="url(#Elipse_11)">
      <circle id="Elipse_11-2" data-name="Elipse 11" cx="34" cy="34" r="34" transform="translate(9 6)" fill="#5c7eee"/>
    </g>
    <g id="round-send-24px" transform="translate(893 1055.385)">
      <path id="Trazado_949" data-name="Trazado 949" d="M0,0H24V24H0Z" fill="none"/>
      <path id="Trazado_950" data-name="Trazado 950" d="M3.4,20.4l17.45-7.48a1,1,0,0,0,0-1.84L3.4,3.6a.993.993,0,0,0-1.39.91L2,9.12a.994.994,0,0,0,.87.99L17,12,2.87,13.88a1.012,1.012,0,0,0-.87,1l.01,4.61A.993.993,0,0,0,3.4,20.4Z" fill="#fff"/>
    </g>
  </g>
</svg>
      </button>
    </div>
  </footer>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      message : ''
    }
  },  
  computed: mapState(['statemachine']),
  methods: {
    ...mapMutations(['ADD_OPTION']),
    ...mapActions(['addOption']), 
     sendMessage: function() {
         this.addOption(this.message);
         this.$root.$emit('getDialog', this.message);
         this.message = null;
     },
      isDisabled: function(){
             if(this.statemachine == 'waiting'){
                return false;
             } else { 
                return true; 
             }
     }
  }
}
</script>

<style>
</style>