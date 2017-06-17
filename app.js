var express = require('express');
var load = require('express-load');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser('ntalk'));
app.use(session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());


// more middleware (executes after routes)
//app.use(function(req, res, next) {});
// error handling middleware
//app.use(function(err, req, res, next) {});


app.use(express.static(__dirname + '/public'));

load('models').then('controllers').then('routes').into(app);



app.listen(3000, function () {
	console.log('Ntalk no ar.');
});