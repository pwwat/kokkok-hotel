export default function ({ $axios, redirect, app }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401 || code === 403) {
      console.log('Error Code: ' + code)

      app.store.dispatch('user/logout')
      redirect('/')
    }
  })
}
