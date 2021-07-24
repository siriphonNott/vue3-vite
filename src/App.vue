<template>
  <Header />
  <main class="p-10">
    <Profile />
    <ContactMe />
  </main>
  <Footer />
</template>

<script>
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
import ContactMe from './components/ContactMe.vue'
import Profile from './components/Profile.vue'
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
export default {
  setup() {
    onMounted(() => {
      console.log('onMounted');
    })
    onUnmounted(() => {
      console.log('onUnmounted');
    })
    onUpdated(() => {
      console.log('onUpdated');
    })
  },
  components: {
    Header,
    Footer,
    Profile,
    ContactMe
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