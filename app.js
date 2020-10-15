var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require ("mysql");
var moment = require('moment');

var app = express();

/*connection to database
*login info are all in plain text for ez debugging
*and for other members 
*will be changed to encrpetd file later 
*/
var db = mysql.createConnection({
host: 'us-cdbr-east-02.cleardb.com',
user: 'bc04aa6c090060',
password: '2097f7d0',
database: 'heroku_563076973ffff09'
});

db.connect ((error) =>{
  if(error){
    console.log(error)
  } else {
    console.log("connected...")
  }
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port 3000...');
});

let pool = mysql.createPool(db);

pool.on('connection', function (_conn) {
    if (_conn) {
        logger.info('Connected the database via threadId %d!!', _conn.threadId);
        _conn.query('SET SESSION auto_increment_increment=1');
    }
});
