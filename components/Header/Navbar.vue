<template>
  <section>
    <b-navbar toggleable="lg" type="light" class="bg-transparent">
      <b-container>
        <b-navbar-brand href="#">
          <router-link :to="'/'">KOKKOK</router-link>
        </b-navbar-brand>

        <div v-if="isLoaded">
          <h4>yoyoyo</h4>
        </div>
        <div v-else>
          <h4>hehehe</h4>
        </div>

        <!--        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

        <!--        <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-item href="#">ห้องต่างๆ</b-nav-item>
                    <b-nav-item href="#">โปรโมชั่นพิเศษ</b-nav-item>
                    <b-nav-item href="#">เกี่ยวกับเรา</b-nav-item>
                  </b-navbar-nav>

                  &lt;!&ndash;     Right aligned nav items &ndash;&gt;
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
                 </b-collapse>-->
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
