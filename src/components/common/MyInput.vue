<template>
  <input 
    :type="type" 
    :placeholder="placeholder"
    :value="modelValue"
    :modelValue="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    autocomplete="off"
    class="rounded-md p-3 text-gray-600 w-full sm:mt-0 mt-2"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      required: true,
      default: '',
      type: String,
    },
    title: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: 'text',
      required: false
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>