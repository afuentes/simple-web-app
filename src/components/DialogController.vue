<template>
  <div>
        <div v-for="msg in msgs" :key="msg.id" >
            <div  :class="msg.source" >
                <div class="rounded py-2 px-3 bg-grey-lighter" >
                  <div v-show="msg.isloading" ></div>
                  <p class="text-sm mt-1">{{ msg.data }} </p>
                  <div v-if="msg.type === 'option'" >
                      <div class="inline-flex">
                          <OptionController 
                           v-for="option in msg.options"
                           v-bind:key="option.id"
                           v-bind:option="option">
                          </OptionController>
                       </div>
                     </div> <!-- end if option -->
                     <div v-else-if="msg.type === 'card'" >
                          <CardController 
                           v-bind:option="msg.options">
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
             this.addPrompt();
             this.getDialog()
             this.timer = setInterval(() => {
                    this.handleDialog();
                    },this.dialogs[this.index].delay);
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
          
    },
    getDialog: function() {
      this.dialogs = [ 
        { 
          type : 'txt',
          delay : 2000,
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
          type : 'card',
          delay : 3000,
          data:'this is message',
          options : {
            src : 'https://tailwindcss.com/img/card-top.jpg',
            alt : 'test'
          }
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
          options: [
                {
                   id : 0,
                   label:'demo'
                 },
                {
                   id : 1,
                   label:'sales'
                 },
                 {
                   id : 2,
                   label:'other'
                 },         
          ]
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
