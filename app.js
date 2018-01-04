const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const session = require('express-session');
const passport = require('passport');
const app = express();

app.use(helmet());
app.use(favicon(path.join(__dirname, 'public', '/img/logo-favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// express-session と passport でセッションを利用
app.use(session({ secret: '468f60563eec98a0', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Moduels
const User = require('./models/user');
const Mikan = require('./models/mikan');

User.sync().then(() => {
  Mikan.belongsTo(User, { foreignKey: 'createdBy' });
  Mikan.sync();
});

// View
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Control
const index = require('./routes/index');
const login = require('./routes/login');
const logout = require('./routes/logout');
const auth = require('./routes/auth');
const api = require('./routes/api');
const list = require('./routes/list');
app.use('/', index);
app.use('/login', login);
app.use('/logout', logout);
app.use('/auth', auth);
app.use('/api', api);
app.use('/list', list);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
