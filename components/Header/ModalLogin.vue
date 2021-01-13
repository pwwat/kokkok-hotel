<template>
  <client-only placeholder="Loading...">
    <div ref="myModal" class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <form @submit.prevent="submitLogin">
            <div class="modal-header">
              <h5 class="modal-title">Login</h5>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="form.email" type="email" placeholder="Email" class="form-control"
                       aria-describedby="emailHelp"
                >
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input v-model="form.password" placeholder="Password" type="password" class="form-control">
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>

export default {
  name: 'ModalLogin',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      myModal: null
    }
  },
  methods: {
    openModal () {
      console.log('this.$refs.myModal', this.$refs.myModal)
      // eslint-disable-next-line no-undef
      this.myModal = new bootstrap.Modal(this.$refs.myModal)
      this.myModal.show()
    },
    async submitLogin () {
      this.myModal.hide()
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
