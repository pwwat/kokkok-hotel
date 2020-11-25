<template>
  <section>
    <Navbar></Navbar>
    <div class="row">
      <div class="col-12">
        <b-jumbotron :fluid="true" class="custom-jumbotron">
          <template #header>KOK-KOK HOTEL</template>

          <template #lead>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
            featured content or information.
          </template>

          <hr class="my-4">

          <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
          </p>

          <b-button variant="primary" href="#">Do Something</b-button>
        </b-jumbotron>
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
