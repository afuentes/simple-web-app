<template>
<div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
  
  <!-- Header  -->
  <nav class="flex items-center justify-between flex-wrap bg-grey-light p-4">
    <!-- Title -->
  <div class="flex items-center flex-no-shrink text-white mr-6">
    <span class="font-semibold mr-2 text-left flex-auto">Web Bot App</span>
  </div>
     <!-- Search *TODO -->
  </nav>
  <!-- Chat messages -->  
   <div class="px-6 py-4 flex-1 overflow-y-scroll" >

      <div class="flex mb-2">
       <div class="rounded py-2 px-3 bg-grey-light" >
         <p class="text-sm mt-1">
          Q tal afsafasfsafsafsdasfasfasdsafsdfsfsadfsadfasd 
          fdasfasdfasdfasdfasfsaddsaf dfasdfasfasdfasfasdfasdfdasfsadfas
          sadfasdfasdasdf
         </p>
        <p class="text-right text-xs text-grey-dark mt-1">
         12:45 pm
        </p>
        </div>
      </div>

      <div class="flex justify-end mb-2">
        <div class="rounded py-2 px-3 bg-grey-lighter" >
          <p class="text-sm mt-1">
            Festival 
          </p>
          <p class="text-right text-xs text-grey-dark mt-1">
          12:45 pm
          </p>
          </div>
      </div>


   </div> 
  <!-- input Message  -->
  <div class="flex rounded-lg border-2 border-grey overflow-hidden">
                <input type="text" class="w-full px-4" placeholder="Message #here" />
                <button v-on:click="hola" >
                <span class="text-3xl text-grey border-l-2 border-grey p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </span>
                 </button>
  </div>

  </div>

</template>

<script>
export default {
  name: 'BotComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
