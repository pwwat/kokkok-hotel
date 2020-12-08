<template>
  <div>
    <Navbar></Navbar>
    <Nuxt/>
  </div>
</template>

<script>
import Navbar from '@/components/Header/Navbar'

export default {
  name: 'OnlyNavbar',
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>
