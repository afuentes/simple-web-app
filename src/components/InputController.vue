<template>
  <footer class="bg-grey-lighter px-2 py-2 flex items-center">
    <div class="flex-1 mx-2">
      <input :disabled="isDisabled"  v-model="message" class="w-full border rounded px-2 py-2" type="text" placeholder="Type Message"  v-on:keyup.enter="sendMessage" />
    </div>
    <div>
      <button :disabled="isDisabled" v-on:click="sendMessage"  >
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35pt" height="35pt" viewBox="0 0 35 35" version="1.1">
<defs>
<image id="image10" width="35" height="35" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAAEBElEQVRYhdXYX2hbVRwH8O85997GpsnqWtrEYOdadZsdsuEfqkhdQKe2nWwoMtG9iHtZN3Q+DsFJQfTFh6lMOxzqFH2QMdH+2x+LZd0QnMhQihU3xwxNtizaZEmb3n/Hh+Qk557dtIk2AX9wuG1vmvPJ956Te+4hqKyIcCTS3wCACUcm/F7Rm5f7OipAxCZi5GZL0JKllgkheQgFQEOhe2nXM4fvUbUVaymlQULVZmabCdu2Y6aRmj52YMuPQIRDSLmgpZLhSVAASm//mXUrVrbvUamnF4TcUvK/GIta1sLw9cSF94YGu6cBWHmQmFTZGEca4We/CIU6wvup6tmB8tLkZVrmwpErl84OjH/+dDQP4agbUnLDiBBl6+5zG31N7V8SQtoqQDiKgc3MJf/cfuzAxh/gTMkBcsPwsaE+9cpUj9cf/AyA999ChJqbz8SeP/p25xgAE8WUHB3LOApA6ds5vt7rD3y8TBAA8NY3BI882X/mbgAKiuOxUIobpOuRN1aGOvtOEkIDywTh5fHUNz2qMvXT2OVJXT4pJlPArL5vx15C6G3LDMl1QpT2NQ/tehku6XCMOHMCmse/pxoQXprW8FJ420cBFMcnkTEEgNLa1vUcAF81MSDE37omvB25dArf4uLXOwVAtbqGvqpC8qXVefvgTIY4LtNd3Xv9RNG6aoEhVHtw/f39PkiXqXDDa7tj8yo4Z1g1Sw2te/xWsX8HxuNtDdYIAgCobwyFZAwvQlW1oZYYoqg+lJjaMDKJeC0xC+n4FbF/jmEA2GziUrSWmOtXf4tBuGFSCEvFX759fQbMrkk6jNlXf554Kyr270gmlYpYpjF/vBYYy5gbTaUiFlySKaxX06nIUC0wc8nIMJzrGiZibAD20MEnTliWfq6aENsyfvr6/Z5TkFZ+4mXKn0has9d+Hagm5u/49ACQ5Cs+jnHOJuSWhNboYHjSyM4ergZEzyY/GD308ATvC9KY4RiutACYwwcf22cZ8+PLCbHMhYmRT7buR27ZeUMy8kqv+An0v5iVSZ5o7ejupIp2+3+FGEbm+Pmx116c+X0sLWHcARBWe8g9kmg+X7CuZ9fkq576pt2o7DGFl5nNxN8dG9z0Zjod0wEYEqbwhLDkHVrX02zq7DuTN7es/cbb2BZQlLo7XT6Eu8LIno5e/O6FkUObjup6Ws8jXCFY5E3FhHhKCgC1e9uHHS2rH9hyk7d5M1G0DkJoS/71jDE7blvGhex84uS1P74fPv3Vzov5jkWEK2QxjAjiTZEaBUCamzdoqzp7Gy9PjSQTifMGipPBkpoNacBWguHnZZTYSu1C2CXaotsklWyJcJR4XGxLxHb5eclOyi15o0iGuIHEzaP/V/0Dm2aSBgRrBKIAAAAASUVORK5CYII="/>
</defs>
<g id="surface1">
<use xlink:href="#image10"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 14 19.699219 L 21.101562 16.652344 C 21.25 16.589844 21.347656 16.441406 21.347656 16.277344 C 21.347656 16.117188 21.25 15.96875 21.101562 15.90625 L 14 12.859375 C 13.875 12.804688 13.730469 12.816406 13.617188 12.894531 C 13.503906 12.96875 13.433594 13.09375 13.433594 13.230469 L 13.429688 15.105469 C 13.429688 15.3125 13.582031 15.484375 13.785156 15.511719 L 19.535156 16.277344 L 13.785156 17.042969 C 13.582031 17.074219 13.429688 17.246094 13.429688 17.449219 L 13.433594 19.328125 C 13.433594 19.464844 13.503906 19.589844 13.617188 19.664062 C 13.730469 19.738281 13.875 19.753906 14 19.699219 Z M 14 19.699219 "/>
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