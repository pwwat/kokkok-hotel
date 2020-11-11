import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import simpleBrowserFingerprint from 'simple-browser-fingerprint'

const ls = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: simpleBrowserFingerprint(),
  isCompression: false
})

export default ({ store, isHMR }) => {
  if (process.browser) {
    // In case of HMR, mutation occurs before nuxtReady, so previously saved state
    // gets replaced with original state received from server. So, we've to skip HMR.
    // Also nuxtReady event fires for HMR as well, which results multiple registration of
    // vuex-persistedstate plugin
    if (isHMR) { return }
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })(store) // vuex plugins can be connected to store, even after creation
  }
}
