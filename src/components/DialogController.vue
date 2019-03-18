<template>
  
  <div class="px-10 py-5 flex-1 overflow-y-auto h-128">
        <div v-for="msg in msgs" :key="msg.id" >
            <div  :class="msg.type" >
                <div class="rounded py-2 px-3 bg-grey-lighter" >
                  <p class="text-sm mt-1">{{ msg.txt }} </p>
                <p class="text-right text-xs text-grey-dark mt-1">
                  {{ msg.createdAt }}
                </p>
                 </div>
            </div>
        </div>  <!-- end v-for -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DialogController',
  data () {
    return {
      dialogs : [],
      index  :  0,
      thinktime : 0,
      isthinktime : true

    }
  },
  computed: mapState(['msgs']),
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
