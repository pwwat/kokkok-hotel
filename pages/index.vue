<template>
  <div style="text-align: center;">
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
        let data = await this.$axios.get('/users')
        if (!data.error) {
          this.users = data.users
        } else {
          console.error('ผิดพลาด ' + data.message)
        }
      } catch (err) {
        console.log('Unauthorized GetUsers ' + err.message)
      }
    }
  }
}
</script>

<style>

</style>
