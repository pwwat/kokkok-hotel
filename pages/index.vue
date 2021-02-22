<template>
  <div class="wrap-content">
    <Intro></Intro>
    <OurRoom></OurRoom>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Intro from '@/components/Content/Homepage/Intro'
import OurRoom from '@/components/Content/Homepage/OurRoom'

export default {
  components: {
    Intro,
    OurRoom
  },
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
        let data = await this.$axios.$get('/users')
        if (!data.error) {
          console.log('user', data)
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

<style lang="scss" scoped>
@import "../assets/scss/custom";

div.wrap-content {
  position: relative;
  background: $main-background;
}
</style>
