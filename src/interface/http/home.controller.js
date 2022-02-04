class HomeController {
  index(_, res) {
    return res.render('index')
  }
}

module.exports = HomeController
