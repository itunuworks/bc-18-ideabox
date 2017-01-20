# IdeaBox

## Introduction
*  **`IdeaBox`** is a web app for creating and sharing ideas amoung users.
*  It has the following features;
  *  SignUp with an email address and password.  
  *  Login via the email and password.
  *  Allows users to create new ideas having a title and description.
  *  Ideas can be voted up or down by other users.
  *  Comments can be made on ideas by other users.
*  Click [here](https://bc-18-ideabox.herokuapp.com/) to access the app on Heroku

## Dependencies
*   This app is a full stack web app having dependencies across both the front and backend.
### Back End Dependencies
*   This app relies mostly on the javascript framework.
    * **[NodeJS](https://nodejs.org/)** - This is the base platform for most of the project work.
    * **[Express](https://expressjs.com/)** - This is used to implement the routing features of this app.
    * **[Firebase](https://firebase.google.com/)** - This is used to handle the real-time database features of the app and the user login and authentication.

## Front End Dependencies
*  **[Bootstrap](https://github.com/twbs/bootstrap)** - Most of the UI is built using Bootstraps framework and tools.
*  **[Marked API](https://github.com/chjj/marked)** - I used this to implement the preview feature of the Markdown text entered in description on creating a new note.
*  **[Bootstrap-Markdown](https://github.com/toopay/bootstrap-markdown)** - This is a javascript and css library helping to implement the markdown features of the description text box on creating a new note.

## Installation and setup
*  Navigate to a directory of choice on `terminal`.
*  Clone [this](https://github.com/itunuworks/bc-18-ideabox.git) repository on that directory.
  *  Using SSH;

    >`git clone git@github.com:itunuworks/bc-18-ideabox.git`

  *  Using HTTP;

    >`https://github.com/itunuworks/bc-18-ideabox.git`

*  Navigate to the repo's folder on your computer
  *  `cd bc-18-ideabox/`
*   Be sure to install all the dependencies using th command
*   `npm install`
>To use the **git** and **npm** command, You also need to have **node** and **git** installed on your system.
* Run the app
  *  `node server.js`
  *  Running the command above will produce output that's similar to the sample below.
`Listening for connections to port 3000`

## Tests
No tests have been implemented at this point in time.

