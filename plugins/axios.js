export default function ({
  $axios,
  redirect,
  app
}) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    // เกิดข้อผิดพลาด Unauthorized
    if (code === 401 || code === 403) {
      // ถ้ามี User อยู่ให้ Logout ออก
      if (app.store.state.user.user) {
        app.store.dispatch('user/logout').then(res => {
          console.log('logout success')
          redirect('/')
        })
      }
    }
  })
}
