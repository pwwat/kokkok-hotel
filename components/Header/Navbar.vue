<template>
  <section>
    <client-only placeholder="Loading...">
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container">
          <router-link class="navbar-brand" :to="'/'">KOKKOK</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
            <template v-if="user">
              <div class="d-flex">
                <div class="dropdown">
                  <a id="dropdownMenuLink" class="dropdown-toggle" href="#"
                     role="button" data-bs-toggle="dropdown"
                     aria-expanded="false"
                  >
                    <div class="image-cropper dropdown">
                      <img :src="user.profile_image_url" alt="" width="56" class="rounded-circle">
                    </div>
                  </a>
                  <div class="dropdown-menu dropdown-menu-md-end" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item p-3" href="#">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-inline-flex">
                          <div class="image-cropper dropdown mx-auto" style="height: 3rem; width: 3rem;">
                            <img :src="user.profile_image_url" class="rounded-circle avatar">
                          </div>
                        </div>
                        <div class="d-inline-flex flex-wrap flex-column user-detail" style="font-weight: 500;">

                          <div>{{ user.firstname }}</div>
                          <div>{{ user.lastname }}</div>
                          <div class="text-muted">{{ user.email }}</div>

                        </div>
                      </div>

                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="far fa-calendar-alt"></i> My Reservations</a>
                    <a class="dropdown-item" href="#"><i class="far fa-bell"></i> Notifications</a>
                    <router-link class="dropdown-item" to="/profile/edit"><i class="far fa-address-card"></i> Edit
                      Profile
                    </router-link>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" @click.prevent="logout">
                      <i class="fas fa-sign-out-alt"></i> Log out
                    </a>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="d-flex">
                <button class="btn btn-yellow" style="margin-right: 15px;" @click.prevent="openModalLogin">
                  Log in / Sign Up
                </button>
              </div>
            </template>
          </div>
        </div>
      </nav>
    </client-only>
    <modal-login ref="modalLogin"></modal-login>
    <modal-register ref="modalRegister"></modal-register>
  </section>
</template>

<script>
import ModalLogin from '@/components/Header/ModalLogin'
import ModalRegister from '@/components/Header/ModalRegister'
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    ModalRegister,
    ModalLogin
  },
  data () {
    return {
      isLoaded: false
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  mounted () {
    this.isLoaded = true
  },
  methods: {
    openModalLogin () {
      this.$refs.modalLogin.openModal()
    },
    openModalRegister () {
      this.$refs.modalRegister.openModal()
    },
    async logout () {
      try {
        this.$router.replace('/')
        await this.$store.dispatch('user/logout')
        this.$swal({
          icon: 'success',
          text: 'สำเร็จ'
        })
      } catch (err) {
        this.$swal({
          icon: 'error',
          text: 'ผิดพลาด ' + err
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">

@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins/_breakpoints.scss';

@include media-breakpoint-up(md) {
  .user-detail {
    padding-left: 10px;
  }
}

nav.navbar {
  z-index: 5;
}

.dropdown:hover > .dropdown-menu {
  display: block;
}

.dropdown > .dropdown-toggle {

  &:active {
    /*Without this, clicking will make it sticky*/
    pointer-events: none;
  }

  &::after {
    display: none;
  }
}

button.login-button:hover {
  background: none;
}
</style>
