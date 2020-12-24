<template>
  <div>
    <section>
      <div class="row">
        <div class="col-12">
          <b-jumbotron :fluid="true" class="custom-jumbotron">
            <b-overlay
              :show="overlay"
              spinner-variant="primary"
              spinner-type="grow"
              spinner-small
              rounded="sm"
            >
              <div class="row container d-flex justify-content-center">
                <div class="col-12">
                  <div class="card">
                    <div class="row no-gutters">
                      <div class="col-12 col-sm-4 text-center align-self-center text-center">
                        <div class="profile-image" @click="$refs.avatarImage.click()">
                          <span class="text-center h4"> <b-icon icon="pencil" aria-hidden="true"></b-icon></span>
                          <b-avatar :src="userForm ? userForm.profile_image_url : ''" size="6rem"></b-avatar>
                          <input ref="avatarImage" type="file" style="display: none;" accept="image/*"
                                 @change="onUploadImage"
                          >
                        </div>
                      </div>

                      <div class="col-12 col-sm-8">
                        <form @submit.prevent="updateForm">
                          <div class="card-body">
                            <h5>
                              Information
                              <fa id="tooltip-edit" class="float-right" :icon="['fas', 'edit']"
                                  @click="mode = mode === 'edit' ? 'view' : 'edit'"
                              />

                              <b-tooltip ref="tooltip" target="tooltip-edit">
                                แก้ไขข้อมูลส่วนตัว
                              </b-tooltip>
                            </h5>
                            <hr>
                            <div class="row">
                              <div class="col-12 col-sm-6">
                                <p class="font-weight-bold">
                                  <fa :icon="['fas', 'user']"/>
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
                                  <fa :icon="['fas', 'envelope']"/>
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
                                  <fa :icon="['fas', 'phone-alt']"/>
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
                                <button class="btn btn-primary" :disabled="isSubmitting" type="submit">
                                  <b-spinner v-if="isSubmitting" small type="grow"></b-spinner>
                                  {{ isSubmitting ? 'Loading' : 'SUBMIT' }}
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
            </b-overlay>
          </b-jumbotron>
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

div.card-body h5 > svg:hover {
  color: orange;
  cursor: pointer;
}

div.profile-image {

  span.text-center {
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 45%;
    bottom: 0;
    z-index: 1;
    display: none;
  }

  &:hover {
    cursor: pointer;

    span.b-avatar {
      opacity: 0.3;
      background: rgba(76, 175, 80, 0.3);
    }

    span.text-center {
      display: block;
    }
  }
}

</style>
