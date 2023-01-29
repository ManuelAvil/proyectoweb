"use strict";

var express = require('express');

var router = express.Router();
/* GET users listing. */

router.get('/login', function (req, res, next) {
  res.send('login');
});
router.get('/aviso', function (req, res, next) {
  res.send('aviso_privacidad');
});
router.get('/citar', function (req, res, next) {
  res.send('citar_APA');
});
router.get('/dudas', function (req, res, next) {
  res.send('dudas_comentarios');
});
router.get('/novedades', function (req, res, next) {
  res.send('novedades');
});
router.get('/preguntas', function (req, res, next) {
  res.send('preguntas_frecuentes');
});
router.get('/redes', function (req, res, next) {
  res.send('redes_cientificas');
});
module.exports = router;
//# sourceMappingURL=users.dev.js.map
