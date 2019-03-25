<template>  
 <div class="flex flex-col min-h-screen" >   
       <!-- Header  -->
       <header class="w-full border-b border-grey p-2 text-center">
        Web Bot App
       </header>
        <!-- Chat messages -->  
        <div  class="flex-1 p-2 overflow-y-auto" v-chat-scroll> 
         <DialogController/>
        </div>
        <!-- Input Message  -->
         <InputController/>
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

@tailwind preflight;
@tailwind components;
@tailwind utilities;

</style>
