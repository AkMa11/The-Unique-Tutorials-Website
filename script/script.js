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
