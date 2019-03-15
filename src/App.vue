<template>
  <div id="app" class="justify-start sm:justify-center md:justify-end lg:justify-between xl:justify-around ">
    <BotComponent msg="Welcome to Your Simple App"/>
  </div>
</template>

<script>
import BotComponent from './components/BotComponent.vue'

export default {
  name: 'app',
  components: {
    BotComponent
  }
}
</script>

<style>

@tailwind preflight;
@tailwind components;
@tailwind utilities;

</style>
