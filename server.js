var express = require("express");
var app = express();
var router = express.Router();
var viewsPath = __dirname + '/views/';


router.use(function(req, res, next){
	console.log('/' + req.method);
	next();
})

router.get('/', function(req, res){
	res.sendFile(viewsPath + 'loginpage.html');
})

router.get('/landingpage', function(req, res){
	res.sendFile(viewsPath + 'landingpage.html');
})

app.use('/', router);

app.use(express.static('lib'));

app.use('*', function(req, res){
	res.sendFile(viewsPath + '404.html');
})

app.listen(3000, function(){
	console.log("Listening for connections to port 3000");
})