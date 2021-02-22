<template>
  <section>
    <nav class="position-sticky p-4 pt-3 custom-sidebar">
      <div class="row">
        <div class="col-12 clearfix mt-3 g-0 g-sm-2 d-block mx-auto box-button-hamburger">
          <button :class="['hamburger hamburger--spring', isActive ? 'is-active' : 'p-0', 'p-sm-2' ]"
                  type="button" @click.prevent="isActive = !isActive">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>

      <div class="row">
        <ul class="list-group-sidebar p-0 m-0 mx-auto text-center">
          <li id="menu-text" class="mx-auto">
            <span data-content="MENU" aria-hidden="true">MENU</span>
          </li>
          <li>
            <a href=""><i class="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href=""><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href=""><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'SideNavBar',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    onClick () {
      console.log(123123)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
