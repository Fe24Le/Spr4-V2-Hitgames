var express = require('express');
var router = express.Router();

/* GET carrito page. */
router.get('/carrito', function(req, res, next) {
  res.render('carrito', { title: 'Carrito' });
});

module.exports = router;