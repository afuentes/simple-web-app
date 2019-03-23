<template>
  <div> 
     <button class="bg-grey-darkest rounded-full hover:bg-grey-dark text-white text-xs py-1 px-4" v-on:click.stop.prevent="cmdSend" >
        {{label}}
     </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  props: {
    label : String
  },
  methods: {
   ...mapMutations(['ADD_OPTION']),
    ...mapActions(['addOption']), 
    cmdSend: function() {
          this.addOption(this.label);
    }
  }
}
</script>

<style>
</style>