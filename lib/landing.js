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
		this.loadIdeas();
	}
	else{
		console.log('No user signed in');
		window.location.href = "/";
	}
}

LogInAuthApp.prototype.setUp = function(logout, save, title, description, close, ideaBox){
	console.log(logout);
	this.logOutButton = logout;
	this.saveIdeaButton = save;
	this.titleTextBox = title;
	this.descriptionTextBox = description;
	this.closeButton = close;
	this.ideaBoxElement = ideaBox;

	this.logOutButton.addEventListener ('click', this.signOut.bind(this));
	this.saveIdeaButton.addEventListener ('click', this.saveIdea.bind(this));
}

LogInAuthApp.prototype.saveIdea = function(){
	
	console.log(title + ' ' + description);
	this.database.ref('ideas').push({
		title: this.titleTextBox.value, 
		description: this.descriptionTextBox.value
	}).then(callBack(this));
}

LogInAuthApp.prototype.loadIdeas = function(){
	var ref = this.database.ref('ideas');
		
		var thisCallBack = function(data) {
			console.log(JSON.stringify(data.val()));
			this.displayIdeas(data.val());			
		}.bind(this);

		ref.on('value', thisCallBack);
}

LogInAuthApp.prototype.displayIdeas = function(data){
	console.log(data);
	console.log(data.length);
	this.ideaBoxElement.innerHTML = '';
	for(var key in data){
		if (data.hasOwnProperty(key)) {
			var newIdeaNode = document.createElement('div');
			var innerdiv = document.createElement('div');
			var h4 = document.createElement('h4');
			var p = document.createElement('p');

			newIdeaNode.setAttribute('id', key);
			newIdeaNode.setAttribute('class', "card");
			newIdeaNode.setAttribute('style', "width: 20rem");
			innerdiv.setAttribute('class', "card-block");
			h4.setAttribute('class', "card-title");
			p.setAttribute('class', "card-text");
			h4.innerHTML = data[key].title;
			p.innerHTML = data[key].description;
			innerdiv.appendChild(h4);
			innerdiv.appendChild(p);
			newIdeaNode.appendChild(innerdiv);
	    console.log("Title: " + data[key].title + " Description: " + data[key].description);
	    this.ideaBoxElement.appendChild(newIdeaNode);
	  }
	}
}


window.onload = function() {
  myAuthApp = initAuthApp();
  myAuthApp.setUp(document.getElementById('logout'), 
  	document.getElementById('save'), 
  	document.getElementById('title'), 
  	document.getElementById('description'), 
  	document.getElementById('close'), 
  	document.getElementById('ideabox'));
};

function initAuthApp(){
	return new LogInAuthApp();
}

function getData(myDatabase){
	var ref = myDatabase.ref('ideas');
	return ref.on('value', function(snapshot){
		console.log(snapshot.val());
		return snapshot.val();
	})
}

function callBack(subLogInAuthApp){
	window.alert("Idea Saved.");
	subLogInAuthApp.titleTextBox.value = '';
	subLogInAuthApp.descriptionTextBox.value = '';
	subLogInAuthApp.closeButton.click();
}