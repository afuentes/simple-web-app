<template>  
 <div class="min-h-screen" >  
    <div class="flex flex-col w-full fixed pin-l pin-y"> 
       <!-- Header  -->
       <header class="w-full border-b border-grey p-1 text-center" v-show="false" >
        Web Bot App
       </header >
        <!-- Chat messages -->  
          <DialogController/>
        <!-- Input Message  -->
         <InputController v-show="true" />
  </div>
</div>
</template>

<script>
import { mapState , mapMutations, mapActions } from 'vuex'
import DialogController from './components/DialogController.vue'
import InputController from './components/InputController.vue'

export default {
  name: 'WebBot',
  components: {
    DialogController,
    InputController
  },
  data: function () {
    return {
    }
  },
  computed: mapState(['statemachine']),
  mounted: function () {
    this.$nextTick(function () {
    // create TimerBotControl to Control Bot Interaction
     this.timer = setInterval(() => {
                 this.timerBot();
                 }, 1000);
     })
  },
  methods: {
    ...mapMutations(['SET_STATEMACHINE','ADD_PROMPT']),
    ...mapActions(['setStateMachine','addPrompt']),
  timerBot: function() {
              // validate state machine
              if(this.statemachine == 'start'){
                 this.$emit('start','');  
                  this.setStateMachine('loanding');
              }else if (this.statemachine == 'loading') {
                 this.setStateMachine('loading');
              }else if (this.statemachine == 'waiting') {
                 this.setStateMachine('end');
              }else if (this.statemachine == 'end') {
                 this.setStateMachine('end');
              }

    }   
  } // end methods
}
</script>

<style>

body {
  background-image: url(assets/bg.png);
}

@tailwind preflight;
@tailwind components;
@tailwind utilities;
@tailwind screens;

</style>
