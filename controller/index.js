var express = require('express');
var app = express.Router();

/* GET home page. */

router.get('/home', function(req, res, next) {
  res.render(('index'), { title: 'Homepage', section: '2nd year Networking and IT security student' });
});
/* GET about me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects Page' });
});
/* GET contact me page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});
module.exports = router;