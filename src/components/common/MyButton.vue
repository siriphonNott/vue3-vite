<template>
  <button :disabled="disabled" :class="[{'flex-row-reverse': left }, className]" class="bg-gray-600 hover:bg-gray-700 py-3 px-5 rounded-md hover:rounded-lg sm:w-auto w-full sm:mt-0 mt-2 text-white uppercase flex items-center justify-center" @click="$emit('onSubmit', $event)">
    {{name}}
    <span v-if="icon" class="material-icons text-white" :class="left ? 'mr-2' : 'ml-2'">{{icon}}</span>
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
    iconPosition: {
      type: String,
      default: 'right'
    },
    className: {
      type: String,
      required: false
    }
  },
  computed: {
    left() {
      return this.iconPosition === 'left'
    }
  }
}
</script>