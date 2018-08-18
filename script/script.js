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

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  navDisplay = document.querySelector(".nav_display");
  navDisplay.classList.toggle("nav_display_grid");
});

const directions = document.querySelector(".maps");
directions.addEventListener("click", function() {
  window.open(
    "http://maps.google.com/maps?saddr=My+Location&daddr=19.0513933,73.0728258",
    "_blank"
  );
});
