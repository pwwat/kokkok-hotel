module.exports = {
  index: (req, res) => {
    let response = {
      error: false,
      message: 'Welcome'
    }

    return res.status(200).json(response)
  }
}
