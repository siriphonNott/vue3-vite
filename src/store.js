import { createStore } from "vuex";
import state from '@/store/state'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

const store = createStore({
  state,
  mutations,
  actions,
  getters,
})

export default store