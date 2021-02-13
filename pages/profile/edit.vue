<template>
  <div>
    <section class="container-fluid g-0 custom-jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="row g-0">
                <div class="col-12 col-sm-4 text-center align-self-center text-center">
                  <div class="row justify-content-center">
                    <div class="col-4">
                      <div class="profile-image" @click="$refs.avatarImage.click()">
                        <span class="text-center h4"> <i class="fas fa-pencil-alt"></i></span>
                        <div class="image-cropper dropdown mx-auto" style="height: 8rem; width: 8rem;">
                          <img :src="user.profile_image_url"  class="rounded-circle avatar">
                        </div>
                        <input ref="avatarImage" type="file" style="display: none;" accept="image/*"
                               @change="onUploadImage"
                        >
                      </div>
                    </div>
                  </div>

                </div>

                <div class="col-12 col-sm-8">
                  <form @submit.prevent="updateForm">
                    <div class="card-body">
                      <h5>
                        Information
                        <span class="float-right"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top" title="แก้ไขข้อมูลส่วนตัว"
                              @click="mode = mode === 'edit' ? 'view' : 'edit'"
                        >
                          <i class="far fa-edit"></i>
                        </span>
                      </h5>
                      <hr>
                      <div class="row">
                        <div class="col-12 col-sm-6">
                          <p class="font-weight-bold">
                            <i class="fas fa-user"></i>
                            Firstname
                          </p>
                          <template v-if="mode === 'view'">
                            <span class="text-muted">{{ userForm.firstname || '' }}</span>
                          </template>
                          <template v-else>
                            <input v-model="userForm.firstname" required type="text" class="form-control">
                          </template>
                        </div>
                        <div class="col-12 col-sm-6">
                          <p class="font-weight-bold">
                            Lastname
                          </p>
                          <template v-if="mode === 'view'">
                            <span class="text-muted">{{ userForm.lastname || '' }}</span>
                          </template>
                          <template v-else>
                            <input v-model="userForm.lastname" required type="text" class="form-control">
                          </template>
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-12 col-sm-6">
                          <p class="font-weight-bold">
                            <i class="far fa-envelope"></i>
                            Email
                          </p>
                          <template v-if="mode === 'view'">
                            <span class="text-muted">{{ userForm.email || '' }}</span>
                          </template>
                          <template v-else>
                            <input v-model="userForm.email" required type="email" class="form-control">
                          </template>
                        </div>
                        <div class="col-12 col-sm-6">
                          <p class="font-weight-bold">
                            <i class="fas fa-phone-alt"></i>
                            Phone
                          </p>
                          <template v-if="mode === 'view'">
                            <span class="text-muted">{{ userForm.tel || '' }}</span>
                          </template>
                          <template v-else>
                            <input v-model="userForm.tel" required type="tel" class="form-control">
                          </template>
                        </div>
                      </div>

                      <div v-if="mode === 'edit'" class="row mt-3">
                        <div class="col-12 text-right">
                          <button :class="['btn', isSubmitting ? 'btn-light' : 'btn-primary' ]"
                                  :disabled="isSubmitting" type="submit"
                          >
                            <div v-if="isSubmitting" class="spinner-border text-secondary" role="status">
                              <span class="visually-hidden"></span>
                            </div>
                            {{ isSubmitting ? 'Loading...' : 'SUBMIT' }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {{ user }}
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'onlyNavbar',
  name: 'Detail',
  middleware: 'auth',
  fetchOnServer: true,
  fetch () {
    this.fetchUser()
  },
  data () {
    return {
      mode: 'view',
      userForm: {
        firstname: '',
        lastname: '',
        email: '',
        tel: '',
        profile_image_url: ''
      },
      overlay: false,
      isSubmitting: null
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    async fetchUser () {
      this.overlay = true
      try {
        const { user } = await this.$axios.$get('/user/' + this.user.id)
        this.userForm = user
      } catch (err) {
        this.$swal({
          icon: 'error',
          text: 'ผิดพลาด ' + err.message
        })
        console.error('error: ', err)
      }
      this.overlay = false
    },
    async updateForm () {
      this.isSubmitting = true
      let { data } = await this.$axios.put('/user/' + this.user.id, this.userForm)
      console.log('dataa', data)
      if (!data.error) {
        await this.fetchUser()
        this.mode = 'view'
      } else {
        this.$swal({
          icon: 'error',
          text: 'ผิดพลาด ' + data.message
        })
      }
      this.isSubmitting = false
    },
    async onUploadImage (event) {
      const imageFile = event.target.files[0]
      let formData = new FormData()
      formData.append('id', this.user.id)
      formData.append('image', imageFile)

      try {
        let { data } = await this.$axios.post('/user/' + this.user.id + '/profile-image', formData, {
          'content-type': 'multipart/form-data'
        })
        this.$store.dispatch('user/me', this.user.id)
        this.userForm.profile_image_url = data.url
      } catch (err) {
        this.$swal({
          icon: 'error',
          text: 'ผิดพลาด ' + err.message
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
div.card-background {
  background: rgb(24, 217, 204);
  background: linear-gradient(90deg, rgba(24, 217, 204, 1) 0%, rgba(0, 212, 255, 1) 100%);
}

div.card-body h5 > span:hover {
  color: orange;
  cursor: pointer;
}

div.profile-image {
  position: relative;

  span.text-center {
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 40%;
    bottom: 0;
    z-index: 1;
    display: none;
  }

  &:hover {
    cursor: pointer;

    img.avatar {
      opacity: 0.3;
      background: rgba(76, 175, 80, 0.3);
    }

    span.text-center {
      display: block;
    }
  }
}

</style>
