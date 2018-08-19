var app_firebase = {};
(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDP9oog04_GveMsj3b2HtT3M-_kZdluqw",
    authDomain: "the-unique-tutorials-db.firebaseapp.com",
    databaseURL: "https://the-unique-tutorials-db.firebaseio.com",
    projectId: "the-unique-tutorials-db",
    storageBucket: "the-unique-tutorials-db.appspot.com",
    messagingSenderId: "236922894899"
  };
  firebase.initializeApp(config);

  app_firebase = firebase;
})();
