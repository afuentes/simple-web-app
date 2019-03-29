<template>
  <div> 
     <button class="bg-grey-darkest rounded-full hover:bg-grey-dark text-white text-xs py-1 px-4" v-on:click.stop.prevent="cmdSend" >
        {{option.label}}
     </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  props: {
    option : Object
  },
  mounted: function () {
  this.$nextTick(function () {
    this.$parent.$on('getDialog', this.getDialog); // register to start dialog 
  })
  },
  methods: {
   ...mapMutations(['ADD_OPTION']),
    ...mapActions(['addOption']), 
    cmdSend: function() {
          this.addOption(this.option.label);
          this.$emit('getDialog',this.option.label);
    }
  }
}
</script>

<style>
</style>