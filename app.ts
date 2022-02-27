var createError = require('http-errors');
import express from 'express';
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

declare module 'express-session' {
  interface SessionData {
      user: any,
      like_arr: any
  }
}

var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');
var likeRouter = require('./routes/like');
var userRouter = require('./routes/user');
var matchRouter = require('./routes/match');
var messageRouter = require('./routes/message');

var app = express();

app.use(express.static('images'));
var session_opt = {
  secret: 'typescript_ramen',
  cookie: {maxAge: 60 * 60 * 1000}
};
app.use(session(session_opt));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/like', likeRouter);
app.use('/user', userRouter);
app.use('/match', matchRouter);
app.use('/message', messageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err:any, req:any, res:any, next:any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
