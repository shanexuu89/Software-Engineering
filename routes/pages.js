var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
 //login  
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
//signup
router.get('/signup', function(req, res, next) {
    res.render('Signup', { title: 'Express' });
  });
//submit
router.get('/submit', function(req, res, next) {
    res.render('submit', { title: 'Express' });
  });

router.get('/search', function(req, res, next) {
    res.render('search', { title: 'Express' });
  });

module.exports = router;
