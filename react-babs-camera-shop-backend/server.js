var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');
var expressLayouts = require('express-ejs-layouts');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  res.redirect('/cameras');
});

// Camera routes
app.use('/cameras', require('./routes/camerasRoutes.js'));

app.listen(port, function() {
	console.log("listening on port: ", port);
})
