<template>
  <div class="lg:w-8/12 w-full shadow-lg p-10 bg-gray-100 hover:bg-gray-200 text-center mx-auto" >
    <img src="https://nottdev.com/img/profile.jpg" alt="profile-img" srcset="" class="h-20 border-gray-200 shadow-lg rounded-full mx-auto mb-4">
    <h1 class="text-2xl font-semibold">NottDev <vue-feather type="codesandbox" stroke-width="1" size="18" /></h1>
    <h3>I'm frontend developer.</h3>
    <p class="text-gray-500 mt-5 text-sm">I am experienced in leveraging CodeIgniter and Node.js framework to develop web applications and middlewares, including integration of other APIs for application enhancement. I am ambitious and enjoy working under pressure because of the challenges that drive me forward. In addition, I am always highly receptive and eager to share ideas and skills with my colleagues because I believe that working homogeneously for a common goal is better than being the best alone. Furthermore, I am very determined to succeed, so learning new things is what I always thrive on.</p>
    <Social />
  </div>
</template>

<script>
import Social from '@/components/Social.vue'
export default {
  components: {
    Social
  }
}
</script>