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
