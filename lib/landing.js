'use strict'

console.log("Loaded landing.js");

var LogInAuthApp = AuthApp;
var myAuthApp;
 
	LogInAuthApp.prototype = Object.create(AuthApp.prototype);
	LogInAuthApp.prototype.onAuthStateChanged = function(user){
		console.log(user);
		console.log("onAuthStateChanged is executed");

		if (user){
			console.log(user.email + ' is signed in.');
			window.alert('Signed in ' + user.email);
		}
		else{
			console.log('No user signed in');
			window.location.href = "/";
		}
	}

	LogInAuthApp.prototype.setUp = function(logout){
		console.log(logout);
		this.logOutButton = logout;
		this.logOutButton.addEventListener ('click', this.signOut.bind(this));
	}

window.onload = function() {
  myAuthApp = initAuthApp();
  myAuthApp.setUp(document.getElementById('logout'));
};

function initAuthApp(){
	return new LogInAuthApp();
}
