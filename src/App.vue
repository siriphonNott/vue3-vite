<template>
  <Header />
  <main class="p-10 mb-10">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  }
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss">
.header {
  font-size: 50px;
}
</style>