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
            <div class="checkin mx-auto clearfix">
              <img src="/images/header/calendar.svg" alt="">
              <!--              <i class="far fa-calendar-alt"></i>-->
              <input ref="dateCheckIn" v-model="checkInDate.date" type="text" class="form-control">
              <div class="text-date">
                <span class="date-number">{{ checkInDate.dateNumber }}</span>
                <div class="date-month-year">
                  <template v-if="checkInDate.month && checkInDate.year">
                    {{ checkInDate.month }} <span>{{ checkInDate.year }}</span>
                  </template>
                  <template v-else>
                    <span class="placeholder-date"> Check-In Date </span>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-auto box-date mt-3 mt-md-0">
            <div class="checkout mx-auto clearfix">
              <img src="/images/header/calendar.svg" alt="">
              <input id="dateCheckOut" ref="dateCheckOut" v-model="checkOutDate.date" type="text" class="form-control">
              <div class="text-date">
                <span class="date-number">{{ checkOutDate.dateNumber }}</span>
                <div class="date-month-year">
                  <template v-if="checkOutDate.month && checkOutDate.year">
                    {{ checkOutDate.month }} <span>{{ checkOutDate.year }}</span>
                  </template>
                  <template v-else>
                    <span class="placeholder-date"> Check-Out Date </span>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto g-0 g-sm-2 col-md-auto mt-3 mt-md-0
            search-button d-grid d-md-flex align-items-sm-stretch">
            <button class="btn btn-yellow">
              <img src="/images/header/search.svg" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import flatpickr from 'flatpickr'
import dayjs from 'dayjs'
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
      checkInDate: {
        date: '',
        dateNumber: '',
        month: '',
        year: ''
      },
      checkOutDate: {
        date: '',
        dateNumber: '',
        month: '',
        year: ''
      },
      checkInPicker: null,
      checkOutPicker: null
    }
  },
  mounted () {
    this.isLoaded = true
    if (this.$refs.dateCheckIn && this.$refs.dateCheckOut) {
      this.checkInPicker = flatpickr(this.$refs.dateCheckIn, {
        onChange: (selectedDates, dateStr, instance) => {
          let selectDate = dayjs(selectedDates[0])
          this.checkInDate.dateNumber = selectDate.format('DD')
          this.checkInDate.month = selectDate.format('MMMM')
          this.checkInDate.year = selectDate.format('YYYY')
          this.checkOutPicker.set('minDate', dateStr)
        },
        minDate: 'today'
      })

      this.checkOutPicker = flatpickr(this.$refs.dateCheckOut, {
        onChange: (selectedDates, dateStr, instance) => {
          let selectDate = dayjs(selectedDates[0])
          this.checkOutDate.dateNumber = selectDate.format('DD')
          this.checkOutDate.month = selectDate.format('MMMM')
          this.checkOutDate.year = selectDate.format('YYYY')
          this.checkInPicker.set('maxDate', dateStr)
        }
      })
    }
  },
  methods: {
    openDateCheckInPicker () {
      this.checkInPicker.open()
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
