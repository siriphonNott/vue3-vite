<template>
  <div class="lg:w-6/12 w-full shadow-lg p-10 bg-gray-200 hover:bg-gray-200 text-center mx-auto mt-3" >
    <BackIcon @onBack="$router.push('/')"/>
    <h1 class="text-gray-600 text-lg mb-1 text-left uppercase font-semibold">Github Repositories</h1>
    <div class="repository-items mt-5">
      <div v-for="repo in repositories" :key="repo.id" class="shadow-md mb-3 p-5 cursor-pointer bg-gray-50">
        <a :href="repo.html_url" target="_blank">
          <h3 class="text-gray-600 sm:text-lg text-sm font-bold mb-2">{{repo.name}}</h3> 
          <div class="flex justify-center">
            <RepoBadge name="Watch" :count="repo.watchers_count" icon="share" class="mr-1"/>
            <RepoBadge name="Star" :count="repo.stargazers_count" icon="star" class="mr-1"/>
            <RepoBadge name="Fork" :count="repo.forks_count" icon="visibility" />
          </div>
        </a>
      </div>
      <div v-if="repositories.length < 1" class="flex justify-center items-center my-10">
        <span class="material-icons mr-1 text-2xl" >hourglass_top</span> Loading...
      </div>
    </div>
  </div>
</template>

<script>
import BackIcon from '@/components/common/BackIcon.vue'
import RepoBadge from '@/components/common/RepoBadge.vue'
import { useStore } from "vuex";
import { computed } from 'vue';
export default {
  setup() {
    const store = useStore();

    // Fetch Repositories
    store.dispatch('fetchRepositories') 

    const repositories = computed(function () {
      return store.getters.repositoryList
    });

    return { repositories }
  },
  components: {
    BackIcon,
    RepoBadge
  },
}
</script>

<style>

</style>