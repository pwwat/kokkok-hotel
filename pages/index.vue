<template>
  <div style="text-align: center;">
    <Logo />
    <h2>KokKok Hotel</h2>
    {{ user }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      users: []
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  created () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      try {
        let { data } = await this.$axios.get('/users')
        if (!data.error) {
          this.users = data.users
        } else {
          alert('ผิดพลาด ' + data.message)
        }
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style>

</style>
