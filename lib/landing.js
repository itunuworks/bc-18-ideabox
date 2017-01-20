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

LogInAuthApp.prototype.setUp = function(logout, save, title, description, close){
	console.log(logout);
	this.logOutButton = logout;
	this.saveIdeaButton = save;
	this.titleTextBox = title;
	this.descriptionTextBox = description;
	this.closeButton = close;

	this.logOutButton.addEventListener ('click', this.signOut.bind(this));
	this.saveIdeaButton.addEventListener ('click', this.saveIdea.bind(this));
}

LogInAuthApp.prototype.saveIdea = function(){
	var title = this.titleTextBox.value;
	var description = this.descriptionTextBox.value;
	
	console.log(title + ' ' + description);
	this.database.ref().push({
		itunu: description
	}).then(callBack(this));
}

window.onload = function() {
  myAuthApp = initAuthApp();
  myAuthApp.setUp(document.getElementById('logout'), 
  	document.getElementById('save'), 
  	document.getElementById('title'), 
  	document.getElementById('description'), 
  	document.getElementById('close'));
};

function initAuthApp(){
	return new LogInAuthApp();
}

function callBack(subLogInAuthApp){
	window.alert("Idea Saved.");
	subLogInAuthApp.titleTextBox.value = '';
	subLogInAuthApp.descriptionTextBox.value = '';
	subLogInAuthApp.closeButton.click();
}