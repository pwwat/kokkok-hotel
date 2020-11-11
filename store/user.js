export const state = () => ({
  user: null
})

export const actions = {
  index ({ commit }, params) {
    return this.$axios.get('/users').then(res => {
      if (!res.data.error) {
        console.log(123)
      }
    })
  },
  register ({ commit }, params) {
    return this.$axios.post('/register', params)
      .then(res => {
        if (!res.data.error) {
          console.log('yoyoyo', res.data.user)
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
      localStorage.setItem('token', data.accessToken)
      return Promise.resolve(data.user)
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
