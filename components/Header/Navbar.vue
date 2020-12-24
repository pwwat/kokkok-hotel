<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li v-if="isLoaded" class="nav-item">
            <a class="nav-link" href="#">Link 22</a>
          </li>
          <li v-else class="nav-item">
            <a class="nav-link" href="#">Link 33</a>
          </li>
        </ul>
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

<style scoped>

button.login-button:hover {
  background: none;
}

</style>
