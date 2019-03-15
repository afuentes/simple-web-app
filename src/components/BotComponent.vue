<template>
<div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
  
  <!-- Header  -->
  <nav class="flex items-center justify-between flex-wrap bg-grey p-6">
    <!-- Title -->
  <div class="flex items-center flex-no-shrink text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Web Bot App</span>
  </div>
     <!-- Search -->
     <div class="ml-auto hidden md:block">
                <div class="relative">
                    <input type="search" placeholder="Search" class="appearance-none border border-grey rounded-lg pl-8 pr-4 py-2">
                    <div class="absolute pin-y pin-l pl-3 flex items-center justify-center">
                        <svg class="fill-current text-grey h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                        </svg>
                    </div>
                </div>
            </div>
  </nav>
  <!-- Chat messages -->  
   <div class="px-6 py-4 flex-1 overflow-y-scroll"  style="background-color: #DAD3CC" >

      <div class="flex mb-2">
       <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
         <p class="text-sm text-teal">Usuario </p>
         <p class="text-sm mt-1">
          Q tal 
         </p>
        <p class="text-right text-xs text-grey-dark mt-1">
         12:45 pm
        </p>
        </div>
      </div>

      <div class="flex justify-end mb-2">
        <div class="rounded py-2 px-3" style="background-color: #E2F7CB">
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
                <span class="text-3xl text-grey border-r-2 border-grey p-2">
                    <svg class="fill-current h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></svg>
                  </span>
                <input type="text" class="w-full px-4" placeholder="Message #here" />

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
