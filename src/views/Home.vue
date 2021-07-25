<template>
  <div class="base-container w-full sm:shadow-lg p-8 bg-gray-200 hover:bg-gray-200 text-center mx-auto" >    
    <Infomation /> 
    <Social />
    <div class="sm:flex justify-center mt-10">
      <router-link to="/repository"><MyButton name="view GitHub" icon="arrow_right_alt" class="sm:mr-2" /></router-link>
      <router-link to="/contact"><MyButton name="contact us" icon="arrow_right_alt" className="bg-green-400 hover:bg-green-500"  /></router-link>
    </div>
  </div>
</template>

<script>
import Infomation from '@/components/profile/Infomation.vue'
import Social from '@/components/profile/Social.vue'
import MyButton from '@/components/common/MyButton.vue'
export default {
  components: {
    Infomation,
    Social,
    MyButton,
  }
}
</script>