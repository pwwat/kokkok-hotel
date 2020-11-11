const CryptoJS = require('crypto-js')

const encryptWithAES = text => {
  const passphrase = process.env.PASS_PHARSE
  return CryptoJS.AES.encrypt(text, passphrase).toString()
}

const decryptWithAES = ciphertext => {
  const passphrase = process.env.PASS_PHARSE
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase)
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  return originalText
}

const crypt = {
  encryptWithAES,
  decryptWithAES
}

export default crypt
