<template>
  <div class="wrap-content">
    <Intro></Intro>
    <Experience></Experience>
    <Trip></Trip>
    <WeAreExperience></WeAreExperience>
    <OurClientSay></OurClientSay>
    <div class="background-bottom">
      <div class="box-image">
        <div class="gradient-overlay"></div>
        <img src="/images/bottom_background.jpg" alt="">
      </div>
    </div>
    <Footer></Footer>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Intro from '@/components/Content/Homepage/Intro'
import Experience from '@/components/Content/Homepage/Experience'
import Trip from '@/components/Content/Homepage/Trip'
import WeAreExperience from '@/components/Content/Homepage/WeAreExperience'
import OurClientSay from '@/components/Content/Homepage/OurClientSay'
import Footer from '@/components/Content/Homepage/Footer'

export default {
  components: {
    Intro,
    Experience,
    Trip,
    WeAreExperience,
    OurClientSay,
    Footer
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
  padding-bottom: 4rem;
}

div.background-bottom {
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 0;
  //top: 1rem;
  left: 0;
  bottom: 11rem;

  div.box-image {
    position: relative;
    width: 100%;
    top: 4rem;

    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 50%;
    }

    div.gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#faf9f6+0,7db9e8+100&1+0,0+100 */
      background: -moz-linear-gradient(top, rgba(250, 249, 246, 1) 0%, rgba(125, 185, 232, 0) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, rgba(250, 249, 246, 1) 0%, rgba(125, 185, 232, 0) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, rgba(250, 249, 246, 1) 0%, rgba(125, 185, 232, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#faf9f6', endColorstr='#007db9e8', GradientType=0); /* IE6-9 */

      z-index: 1;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
}
</style>
