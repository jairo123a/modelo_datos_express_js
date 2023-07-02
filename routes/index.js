var express = require('express');
var router = express.Router();
const juegosControlador = require("../controllers/juegosControlador")


/* GET home page. */
router.get('/',juegosControlador.index);

module.exports = router;
