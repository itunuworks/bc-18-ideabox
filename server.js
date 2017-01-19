//require("./lib/main.js");
var express = require("express");
var app = express();
var router = express.Router();
var viewsPath = __dirname + '/views/';
var authApp;
// // app.set('views', viewsPath)
// app.use(express.static(viewsPath))
// app.set('view engine', 'ejs')
// console.log(viewsPath);

router.use(function(req, res, next){
	console.log('/' + req.method);
	next();
})

router.get('/', function(req, res){
	res.sendFile( viewsPath + 'loginpage.html');
})

router.get('/logout', function(req, res){
	res.sendFile(viewsPath + 'loginpage.html');
})

router.get('/landingpage', function(req, res){
	res.sendFile(viewsPath + 'landingpage.html');
})

app.use('/', router);

app.use(express.static('lib'));
app.use(express.static('views'));
app.use(express.static('css'));
app.use(express.static('js'));

app.use('*', function(req, res){
	res.sendFile(viewsPath + '404.html');
})

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
	console.log("Listening for connections to port 3000");
})

