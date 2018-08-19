var mainApp = {};

(function() {
  var firebase = app_firebase;
  var uid = null;
  var name = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
      name = user.displayName;
      document.getElementById("welcome").innerHTML = "Hello " + name + "!";
    } else {
      //redirect to login page
      uid = null;
      name = null;
      window.location.replace("login.html");
    }
  });

  function logOut() {
    firebase.auth().signOut();
  }

  mainApp.logOut = logOut;
})();
