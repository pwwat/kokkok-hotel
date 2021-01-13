<template>
  <div ref="myModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="submitRegister">
          <div class="modal-header">
            <h5 class="modal-title">Register</h5>
          </div>
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input id="first-name" v-model="form.firstname" type="text"
                     required class="form-control" placeholder="First Name"
              >
              <label for="first-name">First Name</label>
            </div>

            <div class="form-floating mb-3">
              <input id="last-name" v-model="form.lastname" type="text"
                     required class="form-control" placeholder="Last Name"
              >
              <label for="last-name">Last Name</label>
            </div>

            <div class="form-floating mb-3">
              <input id="phone" v-model="form.tel" type="text"
                     required class="form-control" placeholder="Tel "
              >
              <label for="phone">Tel</label>
            </div>

            <div class="form-floating mb-3">
              <input id="email" v-model="form.email" type="email"
                     required class="form-control" placeholder="Email"
              >
              <label for="email">Email</label>
            </div>

            <div class="form-floating mb-3">
              <input id="password" v-model="form.password" type="password"
                     required class="form-control" placeholder="Password"
              >
              <label for="password">Password</label>
            </div>

            <div class="form-group" style="text-align: right;">
              <button class="btn btn-primary">REGISTER</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
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
      },
      myModal: null
    }
  },
  methods: {
    openModal () {
      // eslint-disable-next-line no-undef
      this.myModal = new bootstrap.Modal(this.$refs.myModal)
      this.myModal.show()
    },
    clearForm () {
      this.form = {
        firstname: '',
        lastname: '',
        tel: '',
        email: '',
        password: ''
      }
    },
    async submitRegister () {
      this.myModal.hide()
      try {
        let data = await this.$store.dispatch('user/register', this.form)
        console.log('result ', data)
        this.$swal({
          icon: 'success',
          text: 'สำเร็จ'
        })
      } catch (err) {
        this.$swal({
          icon: 'success',
          text: 'ผิดพลาด ' + err
        })
      }
      this.clearForm()
    }
  }
}
</script>

<style scoped>

</style>
