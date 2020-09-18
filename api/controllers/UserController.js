import User from '../models/User'

module.exports = {
  index: async (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      users: []
    }

    try {
      response.users = await User.findAll()
    } catch (err) {
      response.error = true
      response.message = err.message
      return res.status(400).json(response)
    }

    return res.status(res.statusCode).json(response)
  }
}
