import { carouselHandler } from "./carouselHandler.js";

carouselHandler();

const navbar = document.querySelectorAll(".pages a");

navbar.forEach((item) => {
  item.addEventListener("click", (event) => {
    navbar.forEach((item) => {
      item.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  });
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeButton = document.querySelector(".close-button");
const backgroundBlur = document.querySelector(".background-blur");
const sideBar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", () => {
  console.log("clicked");
  sideBar.classList.toggle("hidden");
  backgroundBlur.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  console.log("click");
  sideBar.classList.toggle("hidden");
  backgroundBlur.classList.toggle("hidden");
  // backgroundBlur.style.display = "none";
});

backgroundBlur.addEventListener("click", () => {
  sideBar.classList.toggle("hidden");
  backgroundBlur.classList.toggle("hidden");
});
