<template>
  <footer id="footer">
    <footer-brand></footer-brand>
    <footer-content></footer-content>
  </footer>
</template>

<script>
import FooterBrand from '~/components/Content/Homepage/FooterBrand'
import FooterContent from '~/components/Content/Homepage/FooterContent'

export default {
  name: 'Footer',
  components: {
    FooterBrand,
    FooterContent
  }
}
</script>

<style scoped lang="scss">
footer#footer {
  position: relative;
}
</style>
