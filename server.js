var express = require("express");
var app = express();
var router = express.Router();
var viewsPath = __dirname + '/views/';
var firebase = require("firebase");

// Initialize Firebase
var config = {
	apiKey: "AIzaSyC3-cs9GS1LtZgp0mG0uyvDCyTbKco3ZNI",
	authDomain: "ideabox-dffe8.firebaseapp.com",
	databaseURL: "https://ideabox-dffe8.firebaseio.com",
	storageBucket: "ideabox-dffe8.appspot.com",
	messagingSenderId: "1041486972571"
};

firebase.initializeApp(config);


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

app.use('*', function(req, res){
	res.sendFile(viewsPath + '404.html');
})

app.listen(3000, function(){
	console.log("Listening for connections to port 3000");
})