$("#errorMessage").hide();

const textEmail = document.getElementById("textEmail");
const textPassword = document.getElementById("textPassword");
const btnLogin = document.getElementById("btnLogin");

//Add login event
btnLogin.addEventListener("click", e => {
  //Get email and pass
  const email = textEmail.value;
  const pass = textPassword.value;
  const auth = firebase.auth();

  //Sign in
  auth.signInWithEmailAndPassword(email, pass).catch(error => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode + "\n" + errorMessage);
    $("#errorMessage").show(500);

    setTimeout(function() {
      $("#errorMessage").hide(500);
      // document.getElementById("errorMessage").classList.add("hide");
    }, 3000);
  });
});

//Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    var uid = firebaseUser.uid;
    if (uid === "mMlVbVp8NGT7qquoWAXMZHqvsiD3") {
      window.location.replace("adminpage.html");
    } else {
      window.location.replace("userpage.html");
    }
  } else {
    // console.log("User is logged out");
  }
});
