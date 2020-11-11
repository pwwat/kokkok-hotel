<template>
  <section>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button variant="outline-primary" class="mr-3 login-button" @click.prevent="openModalLogin">
              Login
            </b-button>
            <b-button variant="primary" @click.prevent="openModalRegister">Sign Up</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <modal-login ref="modalLogin"></modal-login>
    <modal-register ref="modalRegister"></modal-register>
  </section>
</template>

<script>
import ModalLogin from '@/components/Header/ModalLogin'
import ModalRegister from '@/components/Header/ModalRegister'
import { mapState } from 'vuex'

export default {
  name: 'Header',
  components: {
    ModalRegister,
    ModalLogin
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    openModalLogin () {
      this.$refs.modalLogin.openModal()
    },
    openModalRegister () {
      this.$refs.modalRegister.openModal()
    }
  }
}
</script>

<style scoped>

button.login-button:hover {
  background: none;
}

</style>
