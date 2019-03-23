<template>
  
  <div class="px-10 py-5 flex-1 overflow-y-auto h-128">
        <div v-for="msg in msgs" :key="msg.id" >
            <div  :class="msg.type" >
                <div class="rounded py-2 px-3 bg-grey-lighter" >
                  <p class="text-sm mt-1">{{ msg.txt }} </p>
                <div v-if="msg.type === 'option'">
                    <CardController/>
                </div>
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
import CardController from './components/CardController.vue'

export default {
  name: 'DialogController',
  data () {
    return {
      dialogs : [],
      index   :  0,
      timer   : null
    }
  },
  mounted: function () {
  this.$nextTick(function () {
    this.$parent.$on('start', this.start); // register to start dialog 
    this.$parent.$on('end', this.start); // register to start dialog 
  })
  },
  computed: mapState(['msgs']),
 methods: {
    ...mapMutations(['SET_STATEMACHINE','ADD_PROMPT','UPDATE_MSG']),
    ...mapActions(['setStateMachine','addPrompt','updateMsg']),
    start: function() {
             // call to request dialog
             this.getDialog()
             this.dialogHandler()
             // *TODO . handler the dialog with Timer
    },
    end:  function(){
    },
    dialogHandler: function(){
          clearInterval(this.timer);
          if( this.index < this.dialogs.length ) {
              this.addPrompt();
              this.updateMsg(this.dialogs[this.index].data)
              // Define Timer 
              this.timer = setInterval(() => {
                    this.dialogHandler();
                    },this.dialogs[this.index].delay);
              this.index++;      
          }
          
    },
    getDialog: function() {
      this.dialogs = [ 
        { 
          type : 'txt',
          delay : 1000,
          data:'this is message' 
        },
        {
          type : 'txt',
          delay : 3000,
          data:'this is message'
        },
        {
          type : 'txt',
          delay : 1000,
          data:'this is message'
        },
        {
          type : 'txt',
          delay : 1000,
          data:'this is message'
        },
        {
          type : 'txt',
          delay : 1000,
          data:'this is message'
        },
        {
          type : 'txt',
          delay : 1000,
          data:'this is message'
        },
        {
          type : 'txt',
          delay : 1000,
          data:'this is message'
        },
        {
          type : 'option',
          delay : 1000,
          data:'Quieres revisar nuestros servicios o nuestra demo',
          option: ['demo','servicios','conversemos']
        }
      ]
    } // end handlerDialog
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
