<template>
  <button :disabled="disabled" :class="className" class="bg-gray-600 hover:bg-gray-700 py-3 px-5 rounded-md hover:rounded-lg sm:w-auto w-full sm:mt-0 mt-2 text-white uppercase flex items-center justify-center" @click="$emit('onSubmit', $event)">
    {{name}}<span v-if="icon" class="material-icons text-white ml-2">{{icon}}</span>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    className: {
      type: String,
      required: false
    }
  }
}
</script>