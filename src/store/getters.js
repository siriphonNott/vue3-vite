const getters = {
  repositoryList: state => state.repositories.sort((a, b) => b.stargazers_count - a.stargazers_count)
}

export default getters