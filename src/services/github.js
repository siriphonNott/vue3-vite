import axios from "../axios"

const fetchRepositories = () => {
  return axios.get('/users/siriphonNott/repos')
}

export default { fetchRepositories }