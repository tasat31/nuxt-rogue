export const state = () => ({
  title: '',
  content: '',
})

export const getters = {
  title(state) {
    return state.title
  },
  content(state) {
    return state.content
  }
}

export const mutations = {
  setActivity(state, payload) {
    state.title = payload.title
    state.content = payload.content
  }
}

export  const actions = {
  showDialog({ commit }, payload) {
    commit('setActivity', payload)
  }
}
