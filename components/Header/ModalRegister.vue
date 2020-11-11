<template>
  <b-modal ref="myModal" hide-footer title="Login to Your KokKok Hotel Account">
    <b-form @submit.prevent="submitRegister">
      <div class="d-flex justify-content-between">
        <div class="form-group">
          <label for="first-name" class="sr-only">First Name:</label>
          <div class="input-group mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="person"></b-icon>
            </b-input-group-prepend>
            <input id="first-name" v-model="form.firstname" type="text"
                   required class="form-control" placeholder="First Name"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="last-name" class="sr-only">Last Name:</label>
          <input id="last-name" v-model="form.lastname" type="text"
                 required class="form-control" placeholder="Last Name"
          >
        </div>
      </div>

      <b-form-group>
        <label class="sr-only" for="email">Tel:</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input-group-prepend is-text>
            <b-icon icon="phone"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="phone" v-model="form.tel" type="tel"
                        placeholder="Tel" required
          ></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group>
        <label class="sr-only" for="email">Email:</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input-group-prepend is-text>
            <b-icon icon="envelope"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="email" v-model="form.email" type="email"
                        placeholder="Email" required
          ></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group>
        <label class="sr-only" for="password">Password</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input-group-prepend is-text>
            <b-icon icon="key"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="password" v-model="form.password" type="password"
                        placeholder="Password" required
          ></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group class="text-right">
        <b-button variant="primary" type="submit">Register</b-button>
      </b-form-group>
    </b-form>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalRegister',
  data () {
    return {
      form: {
        firstname: '',
        lastname: '',
        tel: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    openModal () {
      this.$refs.myModal.show()
    },
    submitRegister () {
      this.$refs.myModal.hide()
      this.$store.dispatch('user/register', this.form).then(res => {
        console.log('resss', res)
        this.$swal({
          icon: 'success',
          text: 'สำเร็จ'
        })
      }).catch(err => {
        this.$swal({
          icon: 'success',
          text: 'ผิดพลาด ' + err
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
