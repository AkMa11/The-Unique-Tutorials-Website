var createUser = {};
(function() {
  var firebase = app_firebase;
  var uid = null;
  var name = null;

  function addUser() {
    var email = document.getElementById("studentEmail").value;
    var password = document.getElementById("studentPassword").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  }

  createUser.addUser = addUser;
})();
