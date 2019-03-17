<template>
 <div class="fixed pin flex items-center">       
  <div id="WebBot" class="fixed pin bg-grey-lightest opacity-75 z-10" >
     
     <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
  <!-- Header  -->
  <header class="flex items-center justify-between flex-wrap bg-grey-light p-4">
    <!-- Title -->
  <div class="flex items-center flex-no-shrink text-white mr-6">
    <span class="font-semibold mr-2 text-left flex-auto">WebBot App</span>
  </div>
  </header>
  <!-- Chat messages -->  
     <DialogController/>
  <!-- input Message  -->
     <InputController/>
  </div>



  </div>
 </div>
</template>

<script>
import DialogController from './components/DialogController.vue'
import InputController from './components/InputController.vue'

export default {
  name: 'WebBot',
  components: {
    DialogController,
    InputController
  }
}
</script>

<style>

@tailwind preflight;
@tailwind components;
@tailwind utilities;

</style>
