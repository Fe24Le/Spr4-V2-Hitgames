var express = require('express');
var router = express.Router();
const data = require('../datos.json');

/* GET detalle page. */
router.get('/listado', function(req, res, next) {
  res.render('listado', { title: 'Listado',data:data});
});

module.exports = router;
