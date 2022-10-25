import { carouselHandler } from "./carouselHandler.js";
import { tileBuilder, checkoutTransfer } from "./populate_grid.js";
import { templateHeader } from "./web-components/app_header.js";
import { templateSidebar } from "./web-components/app_sidebar.js";
// import { templateMovieTile } from "./web-components/app_movie-tile.js";

const navbar = document.querySelectorAll(".pages a");
const qualitySelectorButtons = document.querySelectorAll(
  ".quality-selector-button"
);
templateSidebar();
templateHeader();
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

let disableAnimation;

window.onresize = () => {
  root.style.setProperty("--default-tile-transition", 0 + "ms");

  clearTimeout(disableAnimation);
  disableAnimation = setTimeout(defaultAnimation, 100);
};

// move to mobile only script?

const tile = document.querySelector(".mobile-banner");
const title = document.querySelector(".hero-title");
const button = document.querySelector(".buy-now");
const description = document.querySelector(".mobile-hero-description");
const backgroundImage = document.querySelector(".background-image");
const frame = document.querySelector(".frame");
// const mobileBackgroundBlur = document.querySelector(".mobile-background-blur");

button.addEventListener("click", () => {
  tile.classList.toggle("mobile-banner-active");
  title.classList.toggle("hero-title-active");
  description.classList.toggle("hero-description-active");
  button.classList.toggle("buy-now-active");
  frame.classList.toggle("frame-active");
  backgroundImage.classList.toggle("background-image-active");
  // mobileBackgroundBlur.classList.toggle("mobileBackgroundBlur-active");
});

/* set boolean based on screen size mobile: true, false

if mobile = true
if desktop = false

add event listener to hero and tiles
on click => add data atribute to class(es?) to transform to fullscreen
on X click => remove data atribute to minimize
on buy now click => play animation

 */
