var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */

router.get('/', function(req, res, next) {
  const array = [];
  try {
    const data = fs.readFileSync('./test.txt', 'utf8')
    array.push(data);
  } catch (err) {
    console.error(err)
  }
  res.render('index', { title: 'Express', copyPasta: array[0] });
});

module.exports = router;
