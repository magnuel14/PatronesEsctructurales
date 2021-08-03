var express = require('express');
var visucontrol = require('../controllers/visualizar');
var visu = new visucontrol();
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Patrones estructurales',
    fragmentos: 'Principal/inicio'
  });
});
router.get('/adapter',visu.verAdapter);
router.get('/bridge',visu.verBridge);
router.get('/flyweight',visu.verFlyweight);


module.exports = router;
