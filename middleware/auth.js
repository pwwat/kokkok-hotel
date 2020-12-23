export default function ({
  store,
  redirect
}) {
  /*
  cookie/session variables exist in client browser
   */
  if (!store.state.user.user) {
    console.log('Can\'t access this route')
    return redirect('/')
  }
}
