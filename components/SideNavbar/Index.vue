<template>
  <section>
    <nav class="position-sticky p-4 pt-3 custom-sidebar">
      <div class="row">
        <div class="col-12 clearfix mt-3">
          <button class="hamburger hamburger--spring" type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>

      <div class="row">
        <ul>
          <li>menu test1</li>
          <li>menu test2</li>
          <li>menu test3</li>
          <li>menu test4</li>
          <li>menu test5</li>
          <li>menu test6</li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'SideNavBar'
}
</script>

<style lang="scss" scoped>
@import "../../static/humbergers.scss";

</style>
