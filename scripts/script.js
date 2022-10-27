import { carouselHandler } from "./carouselHandler.js";
import { tileBuilder, checkoutTransfer } from "./populate_grid.js";
import { templateHeader } from "./web-components/app_header.js";
import { templateSidebar } from "./web-components/app_sidebar.js";
import { mobileTileHandler } from "./mobile-tile-animation.js";
// import { templateMovieTile } from "./web-components/app_movie-tile.js";

const navbar = document.querySelectorAll(".pages a");
const qualitySelectorButtons = document.querySelectorAll(
  ".quality-selector-button"
);
templateSidebar();
templateHeader();
mobileTileHandler();

// templateMovieTile();

carouselHandler();

tileBuilder();
checkoutTransfer();

navbar.forEach((item) => {
  item.addEventListener("click", (event) => {
    navbar.forEach((item) => {
      item.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  });
});

qualitySelectorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    qualitySelectorButtons.forEach((button) => {
      button.classList.toggle("none");
    });
  });
});

const root = document.documentElement;

const defaultAnimation = () => {
  root.style.setProperty("--default-tile-transition", 200 + "ms");
};

let screenWidth = window.innerWidth;

let disableAnimation;

window.onresize = () => {
  root.style.setProperty("--default-tile-transition", 0 + "ms");

  clearTimeout(disableAnimation);
  disableAnimation = setTimeout(defaultAnimation, 100);

  screenWidth = window.innerWidth;
  console.log(screenWidth);
};

// move to mobile only script?
