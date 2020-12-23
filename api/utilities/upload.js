const path = require('path')
const multer = require('multer')

const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!'
    const error = new Error('Only image files are allowed!')
    error.code = 'INCORRECT_FILETYPE'
    return cb(error, false)
  }
  cb(null, true)
}

// SET STORAGE
let storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, 'api/public/uploads/images')
  },
  filename (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage, fileFilter: imageFilter })

export default upload
