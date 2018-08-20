var express = require('express');
var app = express();

// view engine setup
// app.set('view engine', 'pug');
// app.set('views', __dirname + '/views');

// include routes
// var routes = require('./routes/index');
// app.use('/', routes);

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

app.listen(3001, function(), {
  console.log('Express app listening on port 3000');
});
