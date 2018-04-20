var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var db = require('./db')

var login = require('./routes/user/login');//登录
var register = require('./routes/user/register');//注册
var users = require('./routes/user/users');//用户信息
var brand = require('./routes/brand');//品牌
var material = require('./routes/knowledge/material');//原料
var material2 = require('./routes/knowledge/material2');//原料
var classify = require('./routes/knowledge/classify');//分类
var product = require('./routes/product');//产品
var article = require('./routes/article');//精彩文章
var notice = require('./routes/notice');//公告

var app = express();

// view engine setup
app.engine('html', require("express-art-template"));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.text()); //把请求发送的数据解析成文本
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 解决跨域
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  next()
})

// 使用路由
app.use('/users', users);//用户
app.use('/login', login);//登录
app.use('/register', register);//注册
app.use('/brand', brand)//品牌
app.use('/product', product)//产品
app.use('/material', material)//原料
app.use('/material2', material2)//原料
app.use('/classify', classify)//分类
app.use('/article', article)//精彩文章
app.use('/today', notice)//公告

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
