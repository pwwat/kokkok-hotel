<template>
  <section>
    <client-only placeholder="Loading...">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                <div class="dropdown" style="padding: 0px 1rem;">
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
                          <div class="image-cropper dropdown">
                            <img :src="user.profile_image_url" alt="" style="width: 90px;height: 90px;">
                          </div>
                        </div>
                        <div class="d-inline-flex flex-wrap flex-column" style="padding-left: 10px;font-weight: 500;">

                          <div>{{ user.firstname }}</div>
                          <div>{{ user.lastname }}</div>
                          <div class="text-muted">{{ user.email }}</div>

                        </div>
                      </div>

                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="far fa-calendar-alt"></i> My Reservations</a>
                    <a class="dropdown-item" href="#"><i class="far fa-bell"></i> Notifications</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt"></i> Log out</a>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="d-flex">
                <button class="btn btn-primary" style="margin-right: 15px;" @click.prevent="openModalLogin">
                  Log in
                </button>
              </div>
              <div class="d-flex">
                <button class="btn btn-outline-success" @click.prevent="openModalRegister">Sign Up</button>
              </div>
            </template>
          </div>
        </div>
      </nav>
      <!--    <b-navbar toggleable="lg" type="light" class="bg-transparent">
        <b-container>
          <b-navbar-brand href="#">
            <router-link :to="'/'">KOKKOK</router-link>
          </b-navbar-brand>
          &lt;!&ndash;        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>&ndash;&gt;

          &lt;!&ndash;
                     <b-navbar-nav class="ml-auto">
                       <b-overlay :show="!isLoaded" rounded="sm">
                         <template v-if="user !== null">
                           <b-nav-item-dropdown right>
                             &lt;!&ndash; Using 'button-content' slot &ndash;&gt;
                             <template #button-content>
                               {{ user ? user.firstname : '' }}
                               <b-avatar :src="user ? user.profile_image_url : ''" size="56"></b-avatar>
                             </template>
                             <b-dropdown-item href="#">
                               <router-link :to="{name: 'profile-detail'}">Profile</router-link>
                             </b-dropdown-item>
                             <b-dropdown-item href="#" @click.prevent="logout">Log Out</b-dropdown-item>
                           </b-nav-item-dropdown>
                         </template>
                         <template v-else>
                           <b-form>
                             <b-button variant="outline-primary" class="mr-3 login-button" @click.prevent="openModalLogin">
                               Login
                             </b-button>
                             <b-button variant="primary" @click.prevent="openModalRegister">Sign Up</b-button>
                           </b-form>
                         </template>
                       </b-overlay>
                     </b-navbar-nav>
                   </b-collapse>&ndash;&gt;
        </b-container>
      </b-navbar>-->
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

.image-cropper {
  width: 56px;
  height: 56px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  img {
    display: inline;
    margin: 0 auto;
    height: auto;
    width: 100%;
  }
}
</style>
