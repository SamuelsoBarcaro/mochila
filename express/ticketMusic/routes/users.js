var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('essa é minha rota para usuários');
});

module.exports = router;
