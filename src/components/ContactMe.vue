<template>
  <div class="lg:w-8/12 w-full shadow-lg p-10 bg-gray-100 hover:bg-gray-200 text-center mx-auto mt-3" >
    <h1 class="text-gray-700 text-lg mb-2 text-left uppercase">Contact Us</h1>
    <div class="sm:flex">
      <div class="sm:w-2/5 w-full sm:mr-2">
        <MyInput v-model="form.name" placeholder="Name" />
      </div>
      <div class="sm:w-2/5 w-full sm:mr-2">
        <MyInput v-model="form.email" placeholder="Email" />
      </div>
      <div class="sm:w-1/5 w-full">
        <MyButton :disabled="!form.name || !form.email" @click="onClick" name="submit" icon="arrow_right_alt" />
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from './common/MyInput.vue'
import MyButton from './common/MyButton.vue'
export default {
  components: {
    MyButton,
    MyInput,
  },
  methods: {
    onClick() {
      alert('ok')
    },
  },
  data() {
   return {
      name: '',
      form: {
        name: '',
        email: '',
      }
    }
  }
}
</script>

