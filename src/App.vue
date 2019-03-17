<template>
 <div class="fixed pin flex items-center">
        
  <div id="app" class="fixed pin bg-grey-lightest opacity-75 z-10" >
    <BotController msg="Welcome to Your Simple App"/>
  </div>
 </div>
</template>

<script>
import BotController from './components/BotController.vue'

export default {
  name: 'app',
  components: {
    BotController
  }
}
</script>

<style>

@tailwind preflight;
@tailwind components;
@tailwind utilities;

</style>
