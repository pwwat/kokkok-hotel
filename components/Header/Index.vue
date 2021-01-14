<template>
  <section>
    <Navbar></Navbar>
    <div class="custom-jumbotron d-flex">
      <div class="container d-flex">
        <div class="row align-self-center">
          <div class="col-12">
            <h1>KOK-KOK HOTEL</h1>
            <p> This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
              featured content or information.</p>
            <hr class="my-4">
            <p>
              It uses utility classes for typography and spacing to space content out within the larger
              container.
            </p>
            <button class="btn btn-primary">Do Something</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Header/Navbar'

export default {
  name: 'Header',
  components: {
    Navbar
  },
  data () {
    return {
      isLoaded: false
    }
  },
  mounted () {
    this.isLoaded = true
  }
}
</script>

<style scoped>

button.login-button:hover {
  background: none;
}

div.custom-jumbotron {
  color: white !important;
}

</style>
