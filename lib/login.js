'use strict'

var myAuthApp;

console.log("Loaded login.js");

window.onload = function() {
  myAuthApp = initAuthApp(document.getElementById('signin'), 
					document.getElementById('signup'), 
					document.getElementById('email'), 
					document.getElementById('password'));
};

//function createNewUser(email, password){
	//myAuthApp.signUp();
//} 

//function signIn(email, password){
//	myAuthApp.signIn();
//}


function initAuthApp(signin, signup, email, password){
	return new AuthApp(signin, signup, email, password);
}

