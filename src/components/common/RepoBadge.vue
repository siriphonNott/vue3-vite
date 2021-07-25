<template>
  <div class="flex">
    <span class="text-gray-200 text-xs bg-gray-700 rounded-l px-4 py-1 flex items-center"><span v-if="icon" class="material-icons text-gray-200 mr-1 text-sm">{{icon}}</span>{{ name }}</span>
    <span class="text-gray-200 text-xs bg-gray-500 rounded-r px-2 py-1 flex items-center">{{ count }}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'count', 'icon']
}
</script>

<style>

</style>