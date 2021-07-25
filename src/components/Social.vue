<template>
  <div class="flex justify-center mt-5">
    <a href="https://web.facebook.com/siriphonnot/" target="_blank"><img src="@/assets/icons/facebook.svg" alt="twitter" width="22" class="mr-2"/></a>
    <a href="https://www.instagram.com/siriphonnot/" target="_blank"><img src="@/assets/icons/instagram.svg" alt="twitter" width="22" class="mr-2"/></a>
    <a href="https://twitter.com/siriphonnot" target="_blank"><img src="@/assets/icons/twitter.svg" alt="twitter" width="22" class="mr-2"/></a>
    <a href="https://www.linkedin.com/in/siriphon-panyathipo-119710178" target="_blank"><img src="@/assets/icons/linkedin.svg" alt="linkedin" width="22" class="mr-2"/></a>
    <a href="https://www.youtube.com/channel/UC8OXz1xrUe4bMaqE454ww7w" target="_blank"><img src="@/assets/icons/youtube.svg" alt="youtube" width="22" class="mr-2"/></a>
    <a href="https://siriphonnot.medium.com/" target="_blank"><img :src="mediumLogo" alt="medium" width="22" class="mr-2"/></a>
    <a href="https://github.com/siriphonNott" target="_blank"><img :src="githubLogo" alt="medium" width="22" class="mr-2"/></a>
    <a href="https://nottdev.com" target="_blank"><img :src="globeLogo" alt="medium" width="22" class="mr-2"/></a>
  </div>
</template>

<script>
// Import images
import mediumLogo from '@/assets/icons/medium.svg'
import githubLogo from '@/assets/icons/github.svg'
import globeLogo from '@/assets/icons/globe.svg'
export default {
  data() {
    return {
      mediumLogo,
      githubLogo,
      globeLogo
    }
  }
}
</script>