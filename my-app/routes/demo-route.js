var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    console.log('DEMO ..');
    next();
});

router.get('/', function(req, res) {
    res.send('DEMO /');
});

router.get('/about', function(req, res) {
    res.send('DEMO / ABOUT');
});

module.exports = router;