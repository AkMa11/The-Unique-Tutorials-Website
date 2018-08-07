const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  navDisplay = document.querySelector(".nav_display");
  navDisplay.classList.toggle("nav_display_grid");
});
