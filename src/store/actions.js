import GithubService from '@/services/github'

const actions = {
  async fetchRepositories({ commit }) {
    try {
      const response = await GithubService.fetchRepositories()
      commit('SET_REPOSITORY', response.data)
    } catch (error) {
      console.error(error)
      // Do something
    }
  }
}

export default actions