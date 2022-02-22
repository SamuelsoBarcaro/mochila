function retornaView(req, res, next) {
    var resultado = 100/50
    res.render('index', { title: 'Express' });
  }

  module.exports = {
    retornaView
  }