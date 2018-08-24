var admin = require("firebase-admin");

var serviceAccount = require("./script/the-unique-tutorials-db-firebase-adminsdk-nhbut-4df6cd1c72.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://the-unique-tutorials-db.firebaseio.com"
});

// document.getElementById("dbtnAddemo").addEventListener("click", myFunction);

function myFunction() {
  admin
    .auth()
    .getUser(uid)
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully fetched user data:", userRecord.toJSON());
    })
    .catch(function(error) {
      console.log("Error fetching user data:", error);
    });
}
