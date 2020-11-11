<template>
  <b-modal ref="myModal" hide-footer title="Login to Your KokKok Hotel Account">
    <b-form @submit.prevent="submitLogin">
      <b-form-group>
        <label class="sr-only" for="email">Email</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input-group-prepend is-text>
            <b-icon icon="envelope"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="email" placeholder="Email" v-model="form.email" required></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group>
        <label class="sr-only" for="password">Password</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input-group-prepend is-text>
            <b-icon icon="key"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="password" type="password" v-model="form.password" placeholder="Password" required></b-form-input>
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
    submitLogin () {
      this.$store.dispatch('user/login', this.form).then(res => {
        if (!res.error) {
          this.$swal({
            icon: 'success',
            text: 'สำเร็จ'
          })
        } else {
          console.log('submitLogin', res)
          throw new Error(res.message)
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          text: 'ผิดพลาด ' + err
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
