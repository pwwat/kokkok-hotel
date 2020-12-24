<template>
  <div>
    <!--    <Header/>-->
    <Nuxt />
    asdasdasd
<!--    <b-overlay :show="showOverLay" no-wrap>
      <template #overlay>
        <div class="d-flex align-items-center">
          <b-spinner small type="grow" variant="secondary"></b-spinner>
          <b-spinner type="grow" variant="dark"></b-spinner>
          <b-spinner small type="grow" variant="secondary"></b-spinner>
          &lt;!&ndash; We add an SR only text for screen readers &ndash;&gt;
          <span class="sr-only">Please wait...</span>
        </div>
      </template>
    </b-overlay>-->
  </div>
</template>

<style>

</style>
<script>
import Header from '@/components/Header/Index'
import { mapState } from 'vuex'

export default {
  components: {
    // Header
  },
  computed: {
    ...mapState({
      showOverLay: state => state.global.showOverLay
    })
  }
}
</script>

<style>
@import "../assets/scss/main.scss";
</style>
