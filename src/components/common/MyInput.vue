<template>
  <input 
    type="text" 
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="rounded-md py-3 px-3 text-gray-600 w-full sm:mt-0 mt-2"
  />
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String,
    },
    title: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
*:focus{
  outline: none;
}
</style>