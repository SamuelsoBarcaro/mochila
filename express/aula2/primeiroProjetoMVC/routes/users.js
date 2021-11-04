var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/nova-rota', function(req, res, next) {

  const valor1 = 10;
  const valor2 = 20;
  const resultado = valor1 * valor2

  res.send('tchu tchuuu' + resultado);
});

module.exports = router;
