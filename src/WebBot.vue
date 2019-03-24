<template>
 <div class="container mx-auto px-4">       
  <div id="WebBot" class="fixed pin bg-grey-lightest opacity-75 z-5" >
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
