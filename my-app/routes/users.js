var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// [@feature url params]
router.get('/:id', function(req, res) {
  res.send('User id is: ' + req.params.id);
});

// [@feature url - . ] 可以直接返回对象
router.get('/:id/books/:bookId/:from-:to.:version', function(req, res) {
  res.send(req.params);
});

// 使用next 方法
router.get('/next/hello', [
  function(req, res, next) {
    console.log(1);
    next();
  },
  function(req, res, next) {
    console.log(2);
    next();
  },
  function(req, res, next) {
    console.log(3);
    res.send('Use next function');
  }
]);

// try res method
router.get('/try/res', function(req, res, next) {
  //res.download(path.join(__dirname, 'index.js'));
  //res.end('res.end');
  //res.json({name: 'dreamapple'});
  //res.jsonp('jsonp');
  //res.redirect('/');
  //res.render(); [@]
  //res.send('res.send');
  //res.sendFile(path.join(__dirname, 'index.js')); // Send a file as an octet stream.
  res.sendStatus(502);
});

module.exports = router;
