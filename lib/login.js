var express = require("express");
var app = express();
var router = express.Router();
var viewsPath = __dirname + '/views/';
var firebase = require("firebase");
	console.log("jgljgjll");

// Initialize Firebase
var config = {
	apiKey: "AIzaSyC3-cs9GS1LtZgp0mG0uyvDCyTbKco3ZNI",
	authDomain: "ideabox-dffe8.firebaseapp.com",
	databaseURL: "https://ideabox-dffe8.firebaseio.com",
	storageBucket: "ideabox-dffe8.appspot.com",
	messagingSenderId: "1041486972571"
};

firebase.initializeApp(config);

module.exports = {
	function login(email, password){
		console.log(email);
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorMessage == 'auth/weak-password'){
				alert('The password is too weak.');
			}
			else{
				alert(errorMessage);
			}
			console.log(error);
		});
	}
}
