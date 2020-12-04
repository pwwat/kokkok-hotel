<template>
  <b-modal ref="myModal" hide-footer title="Login to Your KokKok Hotel Account">
    <b-form @submit.prevent="submitLogin">
      <b-form-group>
        <label class="sr-only" for="email">Email</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input-group-prepend is-text>
            <b-icon icon="envelope"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="email" v-model="form.email" placeholder="Email" required></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group>
        <label class="sr-only" for="password">Password</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input-group-prepend is-text>
            <b-icon icon="key"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="password"
                        v-model="form.password"
                        type="password" placeholder="Password" required
          ></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group class="text-right">
        <b-button variant="primary" type="submit">Login</b-button>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalLogin',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    openModal () {
      this.$refs.myModal.show()
    },
    async submitLogin () {
      this.$refs.myModal.hide()
      this.$store.commit('global/SET_OVER_LAY', true)
      try {
        let result = await this.$store.dispatch('user/login', this.form)
        if (!result.error) {
          this.$swal({
            icon: 'success',
            text: 'สำเร็จ'
          })
        } else {
          throw new Error(result.message)
        }
      } catch (err) {
        this.$swal({
          icon: 'error',
          text: 'ผิดพลาด ' + err
        })
      }
      this.$store.commit('global/SET_OVER_LAY', false)
    }
  }
}
</script>

<style scoped>

</style>
