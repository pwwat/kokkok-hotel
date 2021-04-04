<template>
  <section id="footer">
    <footer-brand></footer-brand>
  </section>
</template>

<script>
import FooterBrand from '~/components/Content/Homepage/FooterBrand'

export default {
  name: 'Footer',
  components: {
    FooterBrand
  }
}
</script>

<style scoped lang="scss">
section#footer {
  position: relative;
}
</style>
