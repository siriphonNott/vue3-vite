<template>
  <div @click="$emit('onBack')" class="flex justify-start items-center text-gray-600 hover:text-gray-800 mb-4 cursor-pointer">
    <span class="material-icons mr-2 text-2xl" >arrow_back</span>
    <span class="text-xl font-semibold" >Back</span>
  </div>
</template>
