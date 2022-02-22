var express = require('express');
var router = express.Router();
var Usuario = require('../models/Usuario')

router.get('/', async function(req, res, next) {

  //Cria registro no banco
  // const retornoDaCriacao = await Usuario.create({
  //   nome: 'Guilherme',
  //   email: 'guilherme@dh.com',
  //   senha: '123',
  // })

  //Consulta todo mundo
  // const retornoDaconsulta = await Usuario.findAll({
  //   where: {
  //     nome: 'Álvaro'
  //   }
  // })
  
  //Consulta apenas um
  //const retornoApenasUm = await Usuario.findByPk(5)

  //Delete
  // const retornoDelete = await Usuario.destroy({
  //   where: {
  //     id: 4
  //   }
  // })

  //Update
  // const retornoUpdate = await Usuario.update({
  //   nome: 'Registro Alterado',
  //   senha: '123456'
  // },
  // {
  //   where: { 
  //     nome: 'Guilherme'
  //   }
  // })


  res.json();
});

module.exports = router;
