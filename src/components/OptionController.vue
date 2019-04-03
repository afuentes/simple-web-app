<template>
  <div> 
     <div v-for="option in options" :key="option.id" class="inline-flex" >
     <button class="bg-grey-darkest rounded-full hover:bg-grey-dark text-white text-xs py-1 px-4" 
     v-on:click.stop.prevent="cmdSend(option.label)" >
        {{option.label}}
     </button>
     </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  props: {
    options :  {
                 type: Array,
                 default: () => []
               }
  },
  data: function () {
    return {
      isclicked: false
    }
  },
  methods: {
   ...mapMutations(['ADD_OPTION']),
    ...mapActions(['addOption']), 
    cmdSend: function(label) {
          if(!this.isclicked){
          this.addOption(label);
          this.$root.$emit('getDialog',label);
          this.isclicked = true;
          }
    }
  }
}
</script>

<style>
</style>