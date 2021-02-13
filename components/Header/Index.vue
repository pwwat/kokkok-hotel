<template>
  <section>
    <div class="header-section">
      <Navbar></Navbar>
      <ul class="kf-slider">
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div class="container header-content">
        <div class="row row-content ">
          <div class="col-12 align-self-center text-center">
            <h1>KOK-KOK HOTEL</h1>
          </div>
        </div>

        <div class="row row-booking justify-content-center">
          <div class="col-12 col-md-auto box-date">
            <div class="checkin mx-auto clearfix" @click="openDateCheckInPicker">
              <img src="/images/header/calendar.svg" alt="">
              <!--              <i class="far fa-calendar-alt"></i>-->
              <input ref="dateCheckIn" v-model="checkInDate" type="text" class="form-control">
              <div class="text-date">
                <span class="date-number">12</span>
                <span class="date-month">January</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-auto box-date mt-3 mt-md-0">
            <div class="checkout mx-auto clearfix" @click="openDateCheckOutPicker">
              <img src="/images/header/calendar.svg" alt="">
              <input ref="dateCheckOut" v-model="checkOutDate" type="text" class="form-control">
              <div class="text-date">
                <span class="date-number">12</span>
                <span class="date-month">January</span>
              </div>
            </div>
          </div>
          <div class="col-auto g-0 g-sm-2 col-md-auto mt-3 mt-md-0 search-button d-grid d-md-flex align-items-sm-stretch">
            <button class="btn btn-yellow">
              <i class="fas fa-search fa-3x"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import flatpickr from 'flatpickr'
import Navbar from '@/components/Header/Navbar'

require('flatpickr/dist/flatpickr.css')

export default {
  name: 'Header',
  components: {
    Navbar
  },
  data () {
    return {
      isLoaded: false,
      checkInDate: '',
      checkOutDate: '',
      checkInPicker: null,
      checkOutPicker: null
    }
  },
  mounted () {
    this.isLoaded = true
    if (this.$refs.dateCheckIn) {
      this.checkInPicker = flatpickr(this.$refs.dateCheckIn, {})
    }
    if (this.$refs.dateCheckOut) {
      this.checkOutPicker = flatpickr(this.$refs.dateCheckOut, {})
    }
  },
  methods: {
    openDateCheckInPicker () {
      this.checkInPicker.open()
    },
    openDateCheckOutPicker () {
      this.checkOutPicker.open()
    }
  }
}
</script>

<style scoped lang="scss">

button.login-button:hover {
  background: none;
}

div.custom-jumbotron {
  color: white !important;
}

</style>
