'use strict'

console.log("Loaded main.js");

function AuthApp(signIn, signUp, email, password){
	
	this.initFireBase();

	this.signInButton = signIn;
	this.signUpButton = signUp;
	this.email = email;
	this.password = password;
	this.firstTime = true;	

	if (this.signInButton != null && this.signUpButton != null){
		this.signInButton.addEventListener ('click', this.signIn.bind(this));
		this.signUpButton.addEventListener ('click', this.signUp.bind(this));
	}
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
	
	user.catch(function(error){
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorMessage);
		console.log(error);
	});
}

AuthApp.prototype.signOut = function(){
	console.log("sign out called");
	this.auth.signOut();
}

AuthApp.prototype.onAuthStateChanged = function(user){
	console.log(user);
	console.log("onAuthStateChanged is executed");

	if (user){
		console.log(user.email + ' is signed in.');
		window.alert('Signed in ' + user.email);
		window.location.href = "landingpage";
	}
	else{
		console.log('No user signed in');
	}
}

