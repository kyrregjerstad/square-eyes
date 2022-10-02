import { carouselHandler } from "./carouselHandler.js";

const navbar = document.querySelectorAll(".pages a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeButton = document.querySelector(".close-button");
const backgroundBlur = document.querySelector(".background-blur");
const sideBar = document.querySelector(".sidebar");

carouselHandler();

navbar.forEach((item) => {
  item.addEventListener("click", (event) => {
    navbar.forEach((item) => {
      item.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  });
});

hamburgerMenu.addEventListener("click", () => {
  sideBar.classList.toggle("hidden");
  backgroundBlur.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  sideBar.classList.toggle("hidden");
  backgroundBlur.classList.toggle("hidden");
});

backgroundBlur.addEventListener("click", () => {
  sideBar.classList.toggle("hidden");
  backgroundBlur.classList.toggle("hidden");
});
