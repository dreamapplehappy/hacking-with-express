var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var demo = require('./routes/demo');

// middleware 导出的是一个对象
var myLogger = require('./middleware/logger');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// [@feature] 创建一个虚拟的静态路由 / 使用了绝对路径
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(myLogger.logger);

// 创建一个简单的中间件
app.all('/', function(req, res, next) {
  console.log('come here ...');
  next();
});

app.use('/', routes);
app.use('/users', users);
app.use('/demo', demo);

// 使用 app.route
app.route('/route')
    .get(function(req, res) {
      res.send('GET ROUTE');
    })
    .post(function(req, res) {
      res.send('POST ROUTE');
    })
    .put(function(req, res) {
      res.send('PUT ROUTE');
    });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
