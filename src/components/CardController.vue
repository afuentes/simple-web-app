<template>
  <div> 
     <div>
       <img class="w-1/2 h-48" :src="option.src" >
     </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  props: {
    option : Object
  },
  methods: {
   ...mapMutations(['ADD_OPTION']),
    ...mapActions(['addOption']), 
    cmdSend: function() {
          this.addOption(this.option.label);
    }
  }
}
</script>

<style>
</style>