'use strict'

console.log("uerureureuyeiu");
console.log("jkashkjshkj");

function AuthApp(){
	this.signInButton = document.getElementById('signin');
	this.signUpButton = document.getElementById('signup');
	this.email = document.getElementById('username');
	this.password = document.getElementById('pass');

	this.initFireBase();

	this.signInButton.addEventListener ('click', this.signIn.bind(this));
	this.signUpButton.addEventListener ('click', this.signUp.bind(this));
}

AuthApp.prototype.initFireBase = function(){
	this.auth = firebase.auth();
	this.database = firebase.database();
	this.storage = firebase.storage();

	this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

AuthApp.prototype.signUp = function (){
	var user = this.auth.createUserWithEmailAndPassword(this.email.value, this.password.value);
	
	console.log(user);
	user.catch(function(error){
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

AuthApp.prototype.signIn = function (){
	var user = this.auth.signInWithEmailAndPassword(this.email.value, this.password.value);
	
	console.log(user);
	user.catch(function(error){
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorMessage);
		console.log(error);
	});
}

AuthApp.prototype.signOut = function(){
	this.auth.signOut;
}

AuthApp.prototype.onAuthStateChanged = function(user){
	console.log(user);

	if (user){
		console.log(user.displayName + ' is signed in.')

	}
	else
		console.log('No user signed in');
}

window.onload = function() {
  window.AuthApp = new AuthApp();
};