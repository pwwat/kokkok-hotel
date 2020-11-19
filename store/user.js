export const state = () => ({
  user: null
})

export const actions = {
  index ({ commit }, params) {
    return this.$axios.get('/users').then(res => {
      if (!res.data.error) {
      }
    })
  },
  register ({ commit }, params) {
    return this.$axios.post('/register', params)
      .then(res => {
        if (!res.data.error) {
          commit('STORE_USER', res.data.user)
          return res.data.user
        }
      }).catch(err => {
        return err
      })
  },
  async login ({ commit }, params) {
    try {
      let { data } = await this.$axios.post('/login', params)
      commit('STORE_USER', data.user)
      return Promise.resolve(data.user)
    } catch (err) {
      let { response: { data } } = err
      return Promise.reject(data.message)
    }
  },
  async logout ({ commit }, params) {
    console.log('logouttttt')
    try {
      let { data } = await this.$axios.post('/logout')
      commit('STORE_USER', null)
      return Promise.resolve('Success')
    } catch (err) {
      let { response: { data } } = err
      return Promise.reject(data.message)
    }
  }
}

export const mutations = {
  STORE_USER (state, user) {
    state.user = user
  },
  CLEART_USER (state, { todo }) {
    state.users = null
  }
}

export const getters = {}
