<template>
  <div style="text-align: center;">
    <Logo/>
    <h2>KokKok Hotel</h2>
    <p>Users: {{ users }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      let { data } = await this.$axios.get('/users')
      if (!data.error) {
        this.users = data.users
      } else {
        alert('ผิดพลาด ' + data.message)
      }
    }
  }
}
</script>

<style>

</style>
