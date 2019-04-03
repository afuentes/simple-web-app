<template>
  <div  ref='dialog' class="flex-1 p-1 overflow-y-auto">  
        <div v-for="msg in msgs" :key="msg.id" >
            <div  :class="msg.source" >
                <div class="rounded py-2 px-3 bg-grey-lighter" >
                  <div v-show="msg.isloading" ></div>
                  <p class="text-sm mt-1">{{ msg.data }} </p>
                  <div v-if="msg.type === 'option'" >
                          <OptionController 
                           v-bind:options="msg.options">
                          </OptionController>
                     </div> <!-- end if option -->
                     <div v-else-if="msg.type === 'card'" >
                          <CardController 
                              v-bind:options="msg.options">
                          </CardController>
                    </div>  <!-- end if card --> 
                <p class="text-right text-xs text-grey-dark mt-1">
                  {{ msg.createdAt }}
                </p>
                 </div>
            </div>
        </div>  <!-- end v-for -->
  </div>
</template>

<script>
import { mapState , mapMutations, mapActions } from 'vuex'
import OptionController from '@/components/OptionController.vue'
import CardController from '@/components/CardController.vue'
import APIService from '@/APIService.js';

export default {
  name: 'DialogController',
  components: {
    OptionController,
    CardController
  },
  data () {
    return {
      dialogs : [],
      index   :  0,
      timer   : null
    }
  },
  mounted: function () {
  this.$nextTick(function () {

    this.$parent.$on('start', this.start); 
    this.$parent.$on('end', this.end); 
    this.$root.$on('getDialog', this.getDialog); 
  })
  },
  updated: function () {           
    var div = this.$refs.dialog
    div.scrollTop = div.scrollHeight - div.clientHeight;
  },
  computed: mapState(['msgs']),
  
 methods: {
    ...mapMutations(['SET_STATEMACHINE','ADD_PROMPT','UPDATE_MSG']),
    ...mapActions(['setStateMachine','addPrompt','updateMsg']),
    start: function() {
             this.addPrompt();
             this.getDialog('d_start');
    },
    end:  function() {
    },
    handleDialog: function(){
          clearInterval(this.timer);

          if( this.index < this.dialogs.length ) {
              this.updateMsg(this.dialogs[this.index])
              // Define Timer 
              this.timer = setInterval(() => {
                    this.handleDialog();
                    },this.dialogs[this.index].delay);
              this.index++; 
          }
          if(this.index < this.dialogs.length){
               this.addPrompt();
          }

        // ** TODO : handler disable/enable inputcontroller 
    },
    getDialog: function(dialog) {

          APIService.get(dialog).then((response) => {
              this.dialogs = response.data.payload;
              this.timer = setInterval(() => {
                    this.handleDialog();
                    },this.dialogs[this.index].delay);
              }).catch((error) => {
                    this.dialogs = '[ { type: txt , delay : 1000 , data :'+error+' } ]';
              });

    } // end getDialog
 } // end methods
}
</script>

<style>

.bot {
  @apply flex mb-2;
}

.human {
  @apply flex justify-end mb-2;
} 


</style>
