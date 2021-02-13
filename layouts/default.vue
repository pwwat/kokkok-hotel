<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<style>

</style>
<script>
import Header from '@/components/Header/Index'
import { mapState } from 'vuex'

export default {
  components: {
    Header
  },
  computed: {
    ...mapState({
      showOverLay: state => state.global.showOverLay
    })
  }
}
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>
