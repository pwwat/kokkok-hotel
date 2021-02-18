<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 col-md-1 g-0">
          <side-nav-bar></side-nav-bar>
        </div>
        <div class="col-10 col-md-11 g-0">
          <Header />
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
<script>
import Header from '@/components/Header/Index'
import SideNavBar from '@/components/SideNavbar/Index'
import { mapState } from 'vuex'

export default {
  components: {
    Header,
    SideNavBar
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
