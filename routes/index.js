var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("Hello!!")
});

/* GET home page. */
router.get('/hello', function (req, res, next) {
  res.json({ message: 'Hello from Express!' });
});

module.exports = router;
