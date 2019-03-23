<template>
  <div> 
     <button class="bg-grey-darkest rounded-full hover:bg-grey-dark text-white text-xs py-1 px-4" v-on:click.stop.prevent="emitEvent" >
        {{label}}
     </button>
  </div>
</template>

<script>

export default {
  props: {
    label : String
  },
  methods: {
    emitEvent: function() {
             // send event to parent 
  }
  }
}
</script>

<style>
</style>