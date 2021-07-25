<template>
  <div class="lg:w-8/12 w-full shadow-lg p-10 bg-gray-100 hover:bg-gray-200 text-center mx-auto mt-3" >
    <h1 class="text-gray-600 text-lg mb-1 text-left uppercase font-semibold">Contact Us</h1>
    <div class="sm:flex">
      <div class="sm:w-2/5 w-full sm:mr-2">
        <MyInput v-model="contactForm.name" placeholder="Name" />
      </div>
      <div class="sm:w-2/5 w-full sm:mr-2">
        <MyInput type="email" v-model="contactForm.email" placeholder="Email" />
      </div>
      <div class="sm:w-1/5 w-full">
        <MyButton @onSubmit="onSubmitContact" name="submit" icon="arrow_right_alt" />
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from '@/components/common/MyInput.vue'
import MyButton from '@/components/common/MyButton.vue'
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import useContact from '@/hooks/useContact'
export default {
  setup() {

    const {contactForm, onSubmitContact} = useContact.useContact()
    // Lifecycle Hooks
    onMounted(() => console.log('onMounted'))
    onUpdated(() => console.log('onUpdated'))
    onUnmounted(() =>  console.log('onUnmounted'))

    return {contactForm, onSubmitContact }
  },
  components: {
    MyButton,
    MyInput,
  },
}
</script>

