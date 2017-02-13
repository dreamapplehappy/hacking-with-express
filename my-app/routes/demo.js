var express = require('express');
var router = express.Router();

// use middleware
router.use(function(req, res, next) {
    console.log('DEMO ..');
    next();
});

router.get('/', function(req, res) {
    //res.send('DEMO /');
    res.render('demo', {
        title: 'demo',
        msg: 'Demo Msg'
    })
});

router.get('/about', function(req, res) {
    res.send('DEMO / ABOUT');
});

router.get('/user/:id', function(req, res, next) {
   if(parseInt(req.params.id) === 0) {
       next('route');
   }
   else {
       next();
   }
}, function(req, res) {
    res.send('Common User');
});
router.get('/user/:id', function(req, res) {
    res.send('Special Demo User')
});

module.exports = router;