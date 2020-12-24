<template>
  <div style="text-align: center;">
    {{ user }}

    <div v-if="isLoaded">
      <h4>yoyoyo</h4>
    </div>
    <div v-else>
      <h4>hehehe</h4>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      users: [],
      isLoaded: false
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  mounted () {
    this.isLoaded = true
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
