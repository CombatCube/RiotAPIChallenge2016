var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CombatCube\ and Zonrup\'s Riot Games API Challenge Entry' });
});

module.exports = router;
