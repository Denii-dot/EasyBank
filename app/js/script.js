const hamburger = document.querySelector(".header__toggle");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");

hamburger.addEventListener("click", function () {
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    body.classList.add("noscroll");
    fadeElements.forEach(function (element) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  } else {
    body.classList.remove("noscroll");
    fadeElements.forEach(function (element) {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    });
  }
});
